import { Stack, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';

type NamedStackProps = {
  name?: string;
} & StackProps;

const GuestName = ({ name, ...stackProps }: NamedStackProps) => {
  return (
    <Stack
      bg="#385a41"
      w="90%"
      h="200px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="20px"
    >
      <Text textAlign="center" fontSize="25px" color="white">
        <span style={{ fontFamily: "NewSpiritLight" }}>Dear </span>
        <span style={{ fontFamily: "NewSpiritBoldItalic" }}>{name}</span>
        <span style={{ fontFamily: "NewSpiritLight" }}>,</span>
      </Text>
        <Text style={{ 
            fontSize: "23px", 
            fontFamily: "NewSpiritLightItalic",
            color: "white"
        }}>we want you to come to </Text>
    </Stack>
  );
};

export { GuestName };
