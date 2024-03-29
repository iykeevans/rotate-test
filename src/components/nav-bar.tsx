"use client";

import Image from "next/image";
import { Flex, Box, Text, Container, Button } from "@chakra-ui/react";
import { useAuth } from "@/contexts/AuthContext";

const NavBar = () => {
  const { user, isLoadingUser } = useAuth();

  return (
    <Box as="header">
      <Container maxW="1600px">
        <Flex
          as="nav"
          height="76px"
          bg="white"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image src="/images/logo.png" alt="logo" width={150} height={28} />

          <Flex alignItems="center" columnGap="3">
            <Box>
              <Text fontWeight="medium" as="div">
                {user?.name}
              </Text>
              <Text fontSize="14px" as="div" mt="-1">
                {user?.email}
              </Text>
            </Box>

            {!isLoadingUser && (
              <Image
                src={user?.picture as string}
                alt="avatar"
                height={40}
                width={40}
                style={{ borderRadius: "100%" }}
              />
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
