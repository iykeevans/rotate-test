import { useCallback } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

import Icon from "./icon";
import Image from "next/image";

const FallbackImage = () => {
  return (
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
  );
};

interface IProps {
  imageUrl?: string;
  onBase64String: (data: string | ArrayBuffer | null) => void;
}

function getBase64(
  file: File,
  callback: (value: string | ArrayBuffer | null) => void
) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

const UploadInput = (props: IProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    getBase64(acceptedFiles[0], (value) => {
      props.onBase64String(value);
    });

    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      border="1px solid rgba(94, 109, 250, 0.3)"
      rounded="8px"
      width="50%"
      px="5"
      py="4"
      mb="7"
      {...getRootProps()}
    >
      <input style={{ display: "none" }} {...getInputProps()} />
      <Flex alignItems="center" columnGap="2.5">
        {!props.imageUrl ? (
          <FallbackImage />
        ) : (
          <Box height="64px" width="64px" position="relative" rounded="full">
            <Image
              src={props.imageUrl}
              alt="company logo"
              style={{ borderRadius: "100%" }}
              fill
            />
          </Box>
        )}

        <Text fontSize={10} color="#5E6DFA">
          Upload company logo
        </Text>
      </Flex>
    </Box>
  );
};

export default UploadInput;
