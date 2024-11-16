import { Box, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';

const GuestName = ({ ...stackProps }: StackProps) => {
  return (
    <Box
      bg="#385a41"
      w="90%"
      h="200px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="20px"
    >
      <Text textAlign="center" fontSize="30px" color="white">
        <span style={{ fontFamily: "NewSpiritLight" }}>Wahai </span>
        <span style={{ fontFamily: "NewSpiritBoldItalic" }}>Sandha,</span>
        <br />
        <span style={{ 
            fontSize: "25px", 
            fontFamily: "NewSpiritLightItalic",
        }}>kami ingin kamu datang ke</span>
      </Text>
    </Box>
  );
};

export { GuestName };