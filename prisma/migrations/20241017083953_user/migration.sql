-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('USER', 'RECRUITER', 'ADMIN') NOT NULL DEFAULT 'USER';
