import Image from "next/image";
import { Flex, Box, Text, Container, Button } from "@chakra-ui/react";

const NavBar = () => {
  const isAuthenticated = false;

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
                Theodore Winters
              </Text>
              <Text fontSize="14px" as="div" mt="-1">
                twinters@gmail.com
              </Text>
            </Box>

            <Image
              src="/images/avatar.jpg"
              alt="avatar"
              height={40}
              width={40}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
