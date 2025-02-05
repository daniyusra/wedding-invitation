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
        bg="#2d2d2d"
        h="200px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="20px"
        backgroundImage="/background_guestname.png" 
        backgroundSize="cover" 
        backgroundPosition="center"
        p={'5'}
      >
        <Text textAlign="center" fontSize="2xl" color="#2d2d2d">
          <span style={{ fontFamily: "NewSpiritLight" }}>Dear </span>
          <span style={{ fontFamily: "NewSpiritBoldItalic" }}>{name}</span>
          <span style={{ fontFamily: "NewSpiritLight" }}>,</span>
        </Text >
          <Text fontSize={'xl'} style={{  
              fontFamily: "NewSpiritLight",
              color: "#2d2d2d"
          }}>we want you to come to </Text>
      </Stack>
    </BoxTransition>
  );
};

export { GuestName };
