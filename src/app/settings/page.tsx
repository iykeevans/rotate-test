"use client";

import Icon from "@/components/icon";
import Table from "@/components/table";
import UserTable from "@/components/user-table";
import {
  Box,
  Flex,
  Container,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";

type User = {
  name: string;
  email: string;
  role: string;
  lastActive: string;
};

export default function Settings() {
  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor("name", { header: "Name" }),
    columnHelper.accessor("role", { header: "Role" }),
    columnHelper.accessor("lastActive", { header: "LAST ACTIVE" }),
  ];

  const data = [
    {
      name: "Ann Cutler",
      email: "Ann@company.com",
      role: "Member",
      lastActive: "2 days ago",
      status: "active",
    },
    {
      name: "Tonny Yesh",
      email: "tonnyyesh@company.com",
      role: "Member",
      lastActive: "2 days ago",
      status: "actve",
    },
    {
      name: "Ann Cutler",
      email: "Ann@company.com",
      role: "Member",
      lastActive: "2 days ago",
      status: "disabled",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(1);
  const tabs = [
    { label: "Account", id: 1 },
    { label: "User management", id: 2 },
  ];

  return (
    <main>
      <Box minH="100vh" bg="#FBFBFC">
        <Container maxW="1480px" pt="6">
          <Text as="h1" fontSize="28px" fontWeight="600" mb="8">
            Settings
          </Text>

          <Flex
            borderBottom="solid"
            borderBottomColor="#AEADBE"
            borderBottomWidth="0.3px"
            columnGap="14"
            mb="8"
          >
            {tabs.map((tab) => (
              <Box
                key={tab.id}
                as="button"
                onClick={() => setSelectedTab(tab.id)}
                color={selectedTab === tab.id ? "#5E6DFA" : "#5D5F6D"}
                fontWeight={selectedTab === tab.id ? "700" : "400"}
                borderBottom="solid"
                borderBottomColor={
                  selectedTab === tab.id ? "#5E6DFA" : "transparent"
                }
                borderBottomWidth="2px"
              >
                {tab.label}
              </Box>
            ))}
          </Flex>

          {selectedTab === 1 && (
            <Box
              bg="white"
              rounded="24px"
              border="1px solid rgba(202, 206, 225, 0.2)"
              px="8"
              pt="4"
              pb="14"
            >
              <Text
                as="h2"
                fontSize="20px"
                fontWeight="500"
                borderBottom="solid"
                borderBottomColor="#AEADBE"
                borderBottomWidth="0.3px"
                pb="3"
                mb="7"
              >
                Account
              </Text>

              <FormControl width="50%" mb="5">
                <FormLabel
                  color="#5D5F6D"
                  fontSize="13px"
                  mb="1.5"
                  fontWeight={400}
                >
                  Company name
                </FormLabel>
                <Input
                  type="text"
                  bg="#FCFCFE"
                  border="1px solid rgba(94, 109, 250, 0.1)"
                  height={42}
                />
              </FormControl>

              <FormControl width="50%" mb="5">
                <FormLabel
                  color="#5D5F6D"
                  fontSize="13px"
                  mb="1.5"
                  fontWeight={400}
                >
                  Contact name
                </FormLabel>
                <Input
                  type="text"
                  bg="#FCFCFE"
                  border="1px solid rgba(94, 109, 250, 0.1)"
                  height={42}
                />
              </FormControl>

              <FormControl width="50%" mb="5">
                <FormLabel
                  color="#5D5F6D"
                  fontSize="13px"
                  mb="1.5"
                  fontWeight={400}
                >
                  Email
                </FormLabel>
                <Input
                  type="text"
                  bg="#FCFCFE"
                  border="1px solid rgba(94, 109, 250, 0.1)"
                  height={42}
                />
              </FormControl>

              <FormControl width="50%" mb="5">
                <FormLabel
                  color="#5D5F6D"
                  fontSize="13px"
                  mb="1.5"
                  fontWeight={400}
                >
                  Industry
                </FormLabel>
                <Input
                  type="text"
                  bg="#FCFCFE"
                  border="1px solid rgba(94, 109, 250, 0.1)"
                  height={42}
                />
              </FormControl>

              <Text fontSize={13} color="#5D5F6D" mb="1.5">
                Company Logo
              </Text>

              <Box
                border="1px solid rgba(94, 109, 250, 0.3)"
                rounded="8px"
                width="50%"
                px="5"
                py="4"
                mb="7"
              >
                <Flex alignItems="center" columnGap="2.5">
                  <Box position="relative">
                    <Icon
                      name="upload-clip"
                      style={{
                        fill: "none",
                        width: 20,
                        position: "absolute",
                        right: 0,
                      }}
                    />
                    <Icon name="upload" style={{ fill: "none", width: 64 }} />
                  </Box>

                  <Text fontSize={10} color="#5E6DFA">
                    Upload company logo
                  </Text>
                </Flex>
              </Box>

              <Button
                border="1px solid #5E6DFA"
                bg="white"
                rounded="30px"
                fontSize={10}
                height={27}
                color="#5E6DFA"
              >
                Save changes
              </Button>
            </Box>
          )}

          {selectedTab === 2 && (
            <Box
              bg="white"
              rounded="24px"
              border="1px solid rgba(202, 206, 225, 0.2)"
              px="8"
              py="4"
            >
              <Text
                as="h2"
                fontSize="20px"
                fontWeight="500"
                borderBottom="solid"
                borderBottomColor="#AEADBE"
                borderBottomWidth="0.3px"
                pb="3"
                mb="6"
              >
                All users
              </Text>

              {/* <Table<any, User[]> data={data} columns={columns} /> */}

              <UserTable />
            </Box>
          )}
        </Container>
      </Box>
    </main>
  );
}
