import { Box, Button, Image, Modal, Text, TextProps } from "@chakra-ui/react";
import { CommonModalContent } from "./CommonModalContent";
import { Coustard } from "next/font/google";
import { slideToTopFullAnimation } from "../Animations";
import { useEffect, useState } from "react";

type InvitationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
};

const coustardBlack = Coustard({ weight: "900", subsets: ["latin"] });
const coustard= Coustard({ weight: "400", subsets: ["latin"] });


const Title = ({
  children,
  ...textProps
}: { children: React.ReactNode } & TextProps) => {
  return (
    <Text
      as="h1"
      fontFamily={coustardBlack.style.fontFamily}
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
      <CommonModalContent
        justifyContent={"center"}
        alignItems={"left"}
        onClick={handleClose}
        gap={0}
        isOpen={isOpen}
      >
        <Box animation={!isOpen ? slideToTopFullAnimation : "none" } style={{animationDelay: "450ms"}}>
          <Text marginTop={{base: "4em", sm: "0"}} fontSize={"lg"} fontFamily={coustard.style.fontFamily}>We are inviting you to</Text>
          <Text fontSize={"lg"} fontFamily={coustard.style.fontFamily} fontWeight="bold">The Wedding Of</Text>
          <Title fontWeight="bold" fontSize={"5xl"}>Zafira &</Title>
          <Title fontWeight="bold" fontSize={"5xl"}>Danial</Title>
          <Text  fontSize={"lg"} fontFamily={coustard.style.fontFamily}>to <b >{name}</b></Text>
        </Box>
      </CommonModalContent>
    </Modal>
  );
};

export { InvitationModal };
