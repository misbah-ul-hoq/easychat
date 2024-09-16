"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const LayOutClient = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default LayOutClient;
