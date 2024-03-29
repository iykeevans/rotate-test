import React from "react";

import styles from "./spinner.module.css";
import { Flex, Box } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Flex flexDirection="column" alignItems="center" pt="10">
      <div className={styles.loader}></div>
      <Box mt="1" fontWeight="medium">
        Loading...
      </Box>
    </Flex>
  );
};

export default Spinner;
