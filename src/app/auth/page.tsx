"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { Box, Button, Flex } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { useSearchParams } from "next/navigation";

const Auth = () => {
  const { login } = useAuth();

  const redirectUri = () => `${window.location.origin}/callback`;

  return (
    <main>
      <Box minH="100vh" bg="#FBFBFC" pt="20">
        <Flex
          direction="column"
          bg="white"
          maxW="450px"
          mx="auto"
          alignItems="center"
          py="16"
          border="1px solid #eee"
          rounded="8px"
        >
          <Box mb="8">
            <Image src="/images/logo.png" alt="logo" width={150} height={28} />
          </Box>

          <Button
            width="90%"
            border="1px solid #ccc"
            onClick={() => login(redirectUri())}
          >
            Authenticate
          </Button>
        </Flex>
      </Box>
    </main>
  );
};

export default Auth;
