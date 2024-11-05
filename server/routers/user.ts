import { z } from "zod";
import { protectedProcedure, router } from "../trpc/trpc";
import { Role } from "@prisma/client";

export const userRouter = router({
  // Get a user by ID
  getUserById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
        include: {
          accounts: true,
          sessions: true,
          company: true,
          jobs: true,
          applications: true,
        },
      });
      return user;
    }),

  // Get a user by email
  getUserByEmail: protectedProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { email: input.email },
        include: {
          accounts: true,
          sessions: true,
          company: true,
          jobs: true,
          applications: true,
        },
      });
      return user;
    }),

  // Create a new user
  createUser: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
        name: z.string(),
        role: z.enum(["USER", "RECRUITER", "ADMIN"]).optional(),
        companyId: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { email, name, role, companyId } = input;
      const savedUser = await ctx.prisma.user.create({
        data: {
          email,
          name,
          role: role || "USER",
          companyId,
        },
      });
      return savedUser;
    }),
  updateUserRole: protectedProcedure
    .input(z.object({ id: z.string(), role: z.nativeEnum(Role) })) // Ensure Role is defined in your schema
    .mutation(async ({ input, ctx }) => {
      const { id, role } = input;
      const updatedUser = await ctx.prisma.user.update({
        where: { id },
        data: { role },
      });
      return updatedUser;
    }),
  updateUserRoleByEmail: protectedProcedure
    .input(z.object({ email: z.string(), role: z.nativeEnum(Role) })) // Ensure Role is defined in your schema
    .mutation(async ({ input, ctx }) => {
      const { email, role } = input;
      const updatedUser = await ctx.prisma.user.update({
        where: { email },
        data: { role },
      });
      return updatedUser;
    }),
  // Update a user by ID
  updateUserById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        email: z.string().email().optional(),
        role: z.enum(["USER", "RECRUITER", "ADMIN"]).optional(),
        companyId: z.string().optional(),
        image: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id, ...updateData } = input;
      const updatedUser = await ctx.prisma.user.update({
        where: { id },
        data: updateData,
      });
      return updatedUser;
    }),

  // Update a user by email
  updateUserByEmail: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().optional(),
        role: z.enum(["USER", "RECRUITER", "ADMIN"]).optional(),
        companyId: z.string().optional(),
        image: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { email, ...updateData } = input;
      const updatedUser = await ctx.prisma.user.update({
        where: { email },
        data: updateData,
      });
      return updatedUser;
    }),

  // Delete a user by ID
  deleteUserById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.user.delete({
        where: { id: input.id },
      });
      return { success: true, message: "User deleted successfully." };
    }),

  // Delete a user by email
  deleteUserByEmail: protectedProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.user.delete({
        where: { email: input.email },
      });
      return { success: true, message: "User deleted successfully." };
    }),

  // List all users with optional filters
  listUsers: protectedProcedure
    .input(
      z
        .object({
          role: z.enum(["USER", "RECRUITER", "ADMIN"]).optional(),
          companyId: z.string().optional(),
        })
        .optional()
    )
    .query(async ({ input, ctx }) => {
      const users = await ctx.prisma.user.findMany({
        where: {
          role: input?.role,
          companyId: input?.companyId,
        },
        include: {
          accounts: true,
          sessions: true,
          company: true,
        },
      });
      return users;
    }),

  // Get all jobs posted by a recruiter
  getRecruiterJobs: protectedProcedure
    .input(z.object({ recruiterId: z.string() }))
    .query(async ({ input, ctx }) => {
      const jobs = await ctx.prisma.job.findMany({
        where: { recruiterId: input.recruiterId },
        include: { applications: true },
      });
      return jobs;
    }),

  // Get all applications submitted by a user
  getUserApplications: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      const applications = await ctx.prisma.application.findMany({
        where: { userId: input.userId },
        include: { job: true },
      });
      return applications;
    }),

  getDashboardData: protectedProcedure
    .input(z.object({ email: z.string() }))
    .query(async ({ input, ctx }) => {
      const { email } = input;

      // Fetch jobs posted by the recruiter (if user is a recruiter)
      const jobs = await ctx.prisma.job.findMany();

      // Fetch applications by user with role 'USER' and matching email
      const applications = await ctx.prisma.application.findMany({
        where: {
          user: {
            email,
            role: Role.USER,
          },
        },
        include: {
          job: true,
        },
      });

      // Fetch companies and their jobs
      const companies = await ctx.prisma.company.findMany({
        include: {
          jobs: true,
        },
      });

      return {
        dashboard: {
          jobs,
          applications,
          companies,
        },
      };
    }),
});
