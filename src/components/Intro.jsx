import { Button } from "@chakra-ui/button";
import { Center, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";

export default function Intro() {
  return (
    <div>
      <Center bg="gray" color="white" h="lg">
        <Stack spacing={6} px={5}>
          <Heading as="h3" size="2xl">
            Joboholic - Finding A Job Has Never Been Easier
          </Heading>
          <Text fontSize="2xl">
            The best way to look for a job as a dev, currently supporting Python
            jobs and more languages to come that will enable our users to pick
            their favorite and hopefully land the job they've always dreamed of
          </Text>
          <HStack spacing={6}>
            <Button
              leftIcon={<FaGithub />}
              colorScheme="blackAlpha"
              color="white"
              size="lg"
            >
              VIEW ON GITHUB
            </Button>
            <Button
              leftIcon={<FaDiscord />}
              backgroundColor="#7289d9"
              size="lg"
            >
              JOIN OUR DISCORD
            </Button>
          </HStack>
        </Stack>
      </Center>
    </div>
  );
}
