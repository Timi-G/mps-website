import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Pastors = () => {
  return (
    <Box my={150}>
      <Flex justifyContent={"center"}>
        <Box textAlign={"center"} px={{ lg: 40, md: 40, sm: 70, base: 70 }}>
          <Heading
            fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
            color={"#FD6001"}
          >
            Our Pastors
          </Heading>
        </Box>
      </Flex>

      <Box className="flex items-center justify-center">
        <Box className="grid grid-cols-3 gap-4 p-4">
          <Box className="mb-5">
            <img src="/pastor1.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Oluwadare Omodele
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Senior Pastor
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor2.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Ajibola Omodele
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Senior Pastor
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor19.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Oluwatoba Ajayi
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Associate Pastor
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor3.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Queen Obazenu
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              HOD Evangelism
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor4.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Seyi Olukotun
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              HOD Sunday School
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor5.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Oluwatosin Adeyemi
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              HOD Welfare
            </Text>
          </Box>
          {/* <Box className="mb-5">
            <img src="/pastor6.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Sola
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            ></Text>
          </Box> */}
          <Box className="mb-5">
            <img src="/pastor7.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Akintaro
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              HOD Ushering Dept
            </Text>
          </Box>
          {/* <Box className="mb-5">
            <img src="/pastor8.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Sis Ire Bello
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              HOD Media
            </Text>
          </Box> */}
          <Box className="mb-5">
            <img src="/pastor9.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Esther Ajayi
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Asst.HOD Sunday School Dept
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor10.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Tayo Wayas
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Asst. HOD Protocol
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor11.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Timilehin Gbabijo
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Sister's Cord/ HOD Children Dept
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor12.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Folusho Taiwo
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Brother's Cord
            </Text>
          </Box>
          {/* <Box className="mb-5">
            <img src="/pastor13.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Olayinka
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Asst. Sister's Cord
            </Text>
          </Box> */}
          {/* <Box className="mb-5">
            <img src="/pastor14.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Felix Ojo
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            ></Text>
          </Box> */}
          <Box className="mb-5">
            <img src="/pastor15.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Bisola Osas
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              HOD Hospitality
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor16.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Olayinka
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              Asst. Sister's Cord
            </Text>
          </Box>
          <Box className="mb-5">
            <img src="/pastor17.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Loveth
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            ></Text>
          </Box>
          {/* <Box className="mb-5">
            <img src="/pastor18.png" />
            <Text
              fontSize={{ lg: 24, md: 24, sm: 18, base: 18 }}
              className="font-medium"
            >
              Sis Rachel Owolabi
            </Text>
            <Text
              fontSize={{ lg: 18, md: 18, sm: 12, base: 12 }}
              className="font-medium"
            >
              {" "}
              Asst. Sister's Cord
            </Text>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Pastors;
