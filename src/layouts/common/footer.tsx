import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Logo from "../../components/logo";

const Footer = () => {
  return (
    <Box bg={"#FFF7F1"} px={{ lg: 10, md: 10, sm: 10 }} py={20}>
      <Flex
        flexWrap={"wrap"}
        gap={{ lg: 0, md: 0, sm: 10, base: 10 }}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Logo />
        <Box width={300}>
          <Heading fontSize={"30px"}>Location</Heading>
          <Text textTransform={"capitalize"}>
            RCCG MPS REDEMPTON CITY, KM 46, Lagos - ibadan Expressway, mowe,
            ogun state, nigeria
          </Text>
        </Box>
        <Box>
          <Text fontSize={"20px"} fontWeight={500}>
            Follow Us On
          </Text>
          <Flex gap={5} mt={3}>
            <Link to="https://www.facebook.com/rccgmps" target="_blank" rel="noopener noreferrer" >
              <Image width={"40px"} src="/facebook.svg"/>
            </Link>
            <Link to="https://www.youtube.com/@rccgmps" target="_blank" rel="noopener noreferrer" >
              <Image width={"40px"} src="/youtube.svg"/>
            </Link>
            <Link to="https://www.instagram.com/rccg_mps" target="_blank" rel="noopener noreferrer" >
              <Image width={"40px"} src="/instagram.svg"/>
            </Link>
          </Flex>
        </Box>
        <Center>
          <Link href="#">
            <Image src="arrowup.svg" />
          </Link>
        </Center>
      </Flex>
    </Box>
  );
};

export default Footer;
