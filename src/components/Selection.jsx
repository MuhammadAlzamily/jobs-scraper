import { Center, Heading, Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React from "react";

export default function Selection() {
  return (
    <div>
      <Center w="md" color="black" my={5}>
        <Stack spacing={5}>
          <Heading as="h2" size="lg">
            Select a language
          </Heading>
          <Select variant="filled" size="lg" placeholder="Pick one">
            <option>Python</option>
            <option> Javascript </option>
            <option>C++</option>
          </Select>
        </Stack>
      </Center>
    </div>
  );
}
