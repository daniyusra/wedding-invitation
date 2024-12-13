import { Box, Modal, Text, TextProps } from "@chakra-ui/react";
import { CommonModalContent } from "./CommonModalContent";
import { slideToTopFullAnimation } from "../Animations";
import { useEffect, useState } from "react";

type InvitationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
};

const Title = ({
  children,
  ...textProps
}: { children: React.ReactNode } & TextProps) => {
  return (
    <Text
      as="h1"
      fontFamily={"NewSpiritBold"}
      fontSize={["4xl", "5xl"]}
      whiteSpace={"pre-line"}
      textShadow={"4px 4px 0 black"}
      color={"#ff6600ff"}
      {...textProps}
    >
      {children}
    </Text>
  );
};

const InvitationModal = ({ isOpen, onClose, name }: InvitationModalProps) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const [valid] =  useState(!!name);

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true); 
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setTimeout(() => setModalOpen(false), 1100);
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleClose} size={"full"}>
      { valid && <CommonModalContent
        justifyContent={"center"}
        alignItems={"left"}
        onClick={handleClose}
        gap={0}
        isOpen={isOpen}
      >
        <Box animation={!isOpen ? slideToTopFullAnimation : "none" } style={{animationDelay: "450ms"}}>
          <Text marginTop={{base: "4em", sm: "0"}} fontSize={"lg"} fontFamily={"NewSpiritRegular"}>We are inviting you to</Text>
          <Text fontSize={"lg"} fontFamily={"NewSpiritBold"}>The Wedding Of</Text>
          <Title fontWeight="bold" fontSize={"5xl"}>Zafira &</Title>
          <Title fontWeight="bold" fontSize={"5xl"}>Danial</Title>
          <Text  fontSize={"lg"} fontFamily={"NewSpiritRegular"}>to <span style={{fontFamily: "NewSpiritBold" }}>{name}</span></Text>
        </Box>
      </CommonModalContent> }
      
      { !valid && 
      <CommonModalContent
        justifyContent={"center"}
        alignItems={"left"}
        gap={0}
        isOpen={isOpen}
      >
        <Box animation={!isOpen ? slideToTopFullAnimation : "none" } style={{animationDelay: "450ms"}}>
        <Text fontSize={"lg"} fontFamily={"NewSpiritBold"}>This invitation may not be valid</Text>
          <Text marginTop={{base: "4em", sm: "0"}} fontSize={"lg"} fontFamily={"NewSpiritRegular"}>Please reach out to Zafira or Danial.</Text>
        </Box>
      </CommonModalContent>  }
    </Modal>
  );
};

export { InvitationModal };