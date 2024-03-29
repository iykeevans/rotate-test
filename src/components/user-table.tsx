import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import Icon from "./icon";

const UserTable = () => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th
            style={{
              textAlign: "left",
              color: "#5C5E6E",
              fontWeight: 400,
              fontSize: 12,
              padding: "6px 0",
            }}
          >
            <Flex alignItems="center" columnGap="18px">
              <Icon name="users" style={{ fill: "none", width: "26px" }} />
              NAME
            </Flex>
          </th>
          <th
            style={{
              textAlign: "left",
              color: "#5C5E6E",
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            ROLE
          </th>
          <th
            style={{
              textAlign: "left",
              color: "#5C5E6E",
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            LAST ACTIVE
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          style={{
            borderTop: " 1px solid rgba(202, 206, 225, 0.4)",
          }}
        >
          <td style={{ padding: "15px 0" }}>
            <Flex alignItems="center" columnGap="4">
              <Flex
                alignItems="center"
                justifyContent="center"
                height={30}
                width={30}
                fontSize="12px"
                bg="#F6F7FB"
                rounded="full"
                color="#7C8187"
              >
                A
              </Flex>

              <Box>
                <Text color="#292B34" mb="0.5">
                  Ann Cutler
                </Text>
                <Text color="#81859C" fontSize="14px">
                  Ann@company.com
                </Text>
              </Box>
            </Flex>
          </td>
          <td style={{ color: "#292B34", fontSize: 14 }}>Member</td>
          <td style={{ color: "#5D5F6D", fontSize: 14 }}>2 days ago</td>
        </tr>

        <tr
          style={{
            borderTop: " 1px solid rgba(202, 206, 225, 0.4)",
          }}
        >
          <td style={{ padding: "15px 0" }}>
            <Flex alignItems="center" columnGap="4">
              <Flex
                alignItems="center"
                justifyContent="center"
                height={30}
                width={30}
                fontSize="12px"
                bg="#F6F7FB"
                rounded="full"
                color="#7C8187"
              >
                A
              </Flex>

              <Box>
                <Text color="#292B34" mb="0.5">
                  Ann Cutler
                </Text>
                <Text color="#81859C" fontSize="14px">
                  Ann@company.com
                </Text>
              </Box>
            </Flex>
          </td>
          <td style={{ color: "#292B34", fontSize: 14 }}>Member</td>
          <td style={{ color: "#5D5F6D", fontSize: 14 }}>2 days ago</td>
        </tr>
        <tr
          style={{
            borderTop: " 1px solid rgba(202, 206, 225, 0.4)",
          }}
        >
          <td style={{ padding: "15px 0" }}>
            <Flex alignItems="center" columnGap="4">
              <Flex
                alignItems="center"
                justifyContent="center"
                height={30}
                width={30}
                fontSize="12px"
                bg="#F6F7FB"
                rounded="full"
                color="#7C8187"
              >
                A
              </Flex>

              <Box>
                <Text color="#292B34" mb="0.5">
                  Ann Cutler
                </Text>
                <Text color="#81859C" fontSize="14px">
                  Ann@company.com
                </Text>
              </Box>
            </Flex>
          </td>
          <td style={{ color: "#292B34", fontSize: 14 }}>Member</td>
          <td style={{ color: "#5D5F6D", fontSize: 14 }}>2 days ago</td>
        </tr>
        <tr
          style={{
            borderTop: " 1px solid rgba(202, 206, 225, 0.4)",
          }}
        >
          <td style={{ padding: "15px 0" }}>
            <Flex alignItems="center" columnGap="4">
              <Flex
                alignItems="center"
                justifyContent="center"
                height={30}
                width={30}
                fontSize="12px"
                bg="#F6F7FB"
                rounded="full"
                color="#7C8187"
              >
                A
              </Flex>

              <Box>
                <Text color="#292B34" mb="0.5">
                  Ann Cutler
                </Text>
                <Text color="#81859C" fontSize="14px">
                  Ann@company.com
                </Text>
              </Box>
            </Flex>
          </td>
          <td style={{ color: "#292B34", fontSize: 14 }}>Member</td>
          <td style={{ color: "#5D5F6D", fontSize: 14 }}>2 days ago</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
