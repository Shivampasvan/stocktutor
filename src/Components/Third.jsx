import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import livemaster from "../data/livemaster.gif";

const Third = () => {
  return (
    <>
      <Box
        display={{
          base: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <Box
          justifyContent={"space-around"}
          bgColor={"#050845"}
          color={"white"}
        >
          <Box>
            <Image src={livemaster} margin={"auto"}></Image>
          </Box>
          <Box paddingY={8} width={"80%"} margin={"auto"}>
            <VStack gap={4} textAlign={"center"}>
              <Heading fontSize={22} fontWeight={600}>Live Master Class Program</Heading>
              <Text fontSize={16}>
                Join our Live Master Class Program to grasp the essential
                foundations of personal finance and effective money management.
                Plus, our program extends valuable career support to help you
                achieve financial success and professional growth.
              </Text>
              <Box>
                <Button fontSize={'13px'} size="sm" color={"#050845"}>Explore</Button>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>

      <Box
        display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        }}
      >
        <Flex
          justifyContent={"space-around"}
          bgColor={"#050845"}
          color={"white"}
        >
          <Box>
            <Image src={livemaster} margin={"auto"}></Image>
          </Box>
          <Box width={"500px"} paddingY={12}>
            <Stack gap={12} textAlign={"start"}>
              <Heading>Live Master Class Program</Heading>
              <Text>
                Join our Live Master Class Program to grasp the essential
                foundations of personal finance and effective money management.
                Plus, our program extends valuable career support to help you
                achieve financial success and professional growth.
              </Text>
              <Box>
                <Button color={"#050845"} fontSize={"12px"}>
                  Explore
                </Button>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Third;
