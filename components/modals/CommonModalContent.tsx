import { ModalContent, StackProps, VStack } from "@chakra-ui/react";
import { EnvelopeOrnament } from "../Ornaments";

type CommonModalContentProps = {
  children?: React.ReactNode;
  backButton?: React.ReactElement;
  isOpen?: boolean;
} & StackProps;

const CommonModalContent = ({
  children,
  backButton,
  isOpen,
  ...props
}: CommonModalContentProps) => {
  return (
    <ModalContent
      h="100vh"
      justifyContent={"center"}
      alignItems={"center"}
      bg="#aad400ff"
    >
      <VStack
        maxW={"lg"}
        w={"full"}
        h="100%"
        position={"relative"}
        bg="#aad400ff"
        gap={0}
      >
        <EnvelopeOrnament isOpen={isOpen}/>
        {backButton}
        <VStack position={"relative"} zIndex={1} h="60%" w="65%" {...props}>
          {children}
        </VStack>
      </VStack>
    </ModalContent>
  );
};

export { CommonModalContent };
