import { Box, Modal, Text, TextProps, VStack, IconButton, Image } from "@chakra-ui/react";
import { CommonModalContent } from "./CommonModalContent";
import { slideToTopFullAnimation } from "../Animations";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

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

  const [valid, setValid] =  useState(!!name);

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true); 
    }
  }, [isOpen]);
  
  useEffect(() => {
    setValid(!!name);
  }, [name]);
  

  const handleClose = () => {
    onClose();
    setTimeout(() => setModalOpen(false), 1100);
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleClose} size={"full"}>
      { valid && <CommonModalContent
        justifyContent={"center"}
        alignItems={"center"}
        onClick={handleClose}
        gap={0}
        isOpen={isOpen}
      >
        <VStack marginTop={'50vh'}>
          <Box 
            textAlign="center" 
            paddingTop={'3vh'}
            animation={!isOpen ? slideToTopFullAnimation : "none"}
            style={{ animationDelay: "450ms" }}
            display="flex" 
            flexDirection="column" 
            alignItems="center"
          >
            <Image src="/logo_zd.png"style={{ width: "5em", height: 'auto' }} alt="Logo" marginBottom="4"/>
            <Text fontSize={"lg"} fontFamily={"NewSpiritRegular"} color={"white"} paddingBottom={'1vh'}>To the one we love,</Text>
            <Text fontSize={"2xl"} fontFamily={"NewSpiritMedium"} color={"white"}>{name}</Text>
          </Box>

          <IconButton
            icon={<FaArrowDown />}
            aria-label="Scroll Down"
            variant="ghost"
            color="#DD5D36" 
            fontSize="lg"
            borderRadius="50%"
            backgroundColor="white"
            padding="3px" 
            animation={!isOpen ? slideToTopFullAnimation : "none"}
            marginTop="2vh" 
          />
        </VStack>
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