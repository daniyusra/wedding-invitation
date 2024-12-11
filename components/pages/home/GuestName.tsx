import { BoxTransition } from "@/components/BoxTransition";
import { Stack, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';

type NamedStackProps = {
  name?: string;
} & StackProps;

const GuestName = ({ name, ...stackProps }: NamedStackProps) => {
  return (
    <BoxTransition w={"90%"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        bg="#385a41"
        h="200px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="20px"
        backgroundImage="/background_guestname.png" 
        backgroundSize="cover" 
        backgroundPosition="center"
      >
        <Text textAlign="center" fontSize="25px" color="#385a41">
          <span style={{ fontFamily: "NewSpiritLight" }}>Dear </span>
          <span style={{ fontFamily: "NewSpiritBoldItalic" }}>{name}</span>
          <span style={{ fontFamily: "NewSpiritLight" }}>,</span>
        </Text >
          <Text style={{ 
              fontSize: "23px", 
              fontFamily: "NewSpiritLight",
              color: "#385a41"
          }}>we want you to come to </Text>
      </Stack>
    </BoxTransition>
  );
};

export { GuestName };
