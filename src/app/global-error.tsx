"use client";

import "./globals.css";
import { fontVariables } from "./fonts";
import { ErrorScreen } from "@/features/layout/screens/error-screen";

export default function GlobalError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>
        <main className="pb-10">
          <ErrorScreen {...props} />
        </main>
      </body>
    </html>
  );
}
