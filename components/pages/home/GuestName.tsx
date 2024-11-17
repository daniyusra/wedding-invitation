import { Box, Text, StackProps } from "@chakra-ui/react";
import { Coustard } from "next/font/google";

const coustard= Coustard({ weight: "400", subsets: ["latin"] });
const coustardBlack = Coustard({ weight: "900", subsets: ["latin"] });

const GuestName = ({ ...stackProps }: StackProps) => {
  return (
    <Box
      bg="#385a41"
      w="90%"
      p="59"
      borderRadius="20px"
    >
      <Text textAlign="center" fontSize="25px" color="white">
        <span style={{ fontFamily: coustard.style.fontFamily }}>Wahai </span>
        <span style={{ fontFamily: coustardBlack.style.fontFamily }}>Sandha,</span>
        <br />
        <span style={{ 
            fontSize: "20px", 
            fontFamily: coustard.style.fontFamily,
            fontStyle: "italic", 
        }}>kami ingin kamu datang ke</span>
      </Text>
    </Box>
  );
};

export { GuestName };
