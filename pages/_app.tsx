import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "./components/ThemeToggle/theme-provider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { trpc } from "@/utils/trpc";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <Toaster />
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default trpc.withTRPC(App);
