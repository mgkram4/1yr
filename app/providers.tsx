"use client";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react"; // Import ReactNode from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  // Use ReactNode type
  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>; // Remove curly braces around 'children'
}
