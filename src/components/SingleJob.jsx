import { Button } from "@chakra-ui/button";
import { Center, Container, Grid, Heading, HStack } from "@chakra-ui/layout";
import React from "react";

export default function SingleJob({ jobtitle, joblink }) {
  return (
    <div>
      <Center>
        <Container backgroundColor="twitter.200" m={8} p={6}>
          <Heading as="h3" size="md">
            {jobtitle}
          </Heading>
          <br />
          <a href={joblink}>
            <Button colorScheme="twitter">APPLY NOW</Button>
          </a>
        </Container>
      </Center>
    </div>
  );
}
