import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Whoweare = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} my={150}>
        <Box textAlign={"center"} px={{ lg: 40, md: 40, sm: 70, base: 70 }}>
          <Heading
            fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
            color={"#FD6001"}
          >
            Who We Are
          </Heading>
          <Text
            mt={5}
            fontSize={{ lg: 50, md: 40, sm: 20, base: 20 }}
            fontWeight={600}
          >
            The fastest-growing church in Redemption City.
            {"\n"}
            {"\n"}
            On a Mission to Unleash Potentials.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Whoweare;
