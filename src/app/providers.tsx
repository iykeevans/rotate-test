"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/contexts/AuthContext";

interface IProps {
  children: ReactNode;
}

const Providers = (props: IProps) => {
  return (
    <ChakraProvider>
      <AuthProvider>{props.children}</AuthProvider>
    </ChakraProvider>
  );
};

export default Providers;
