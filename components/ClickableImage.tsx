import {
  Box,
  Image,
  ImageProps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const ClickableImage = ({ src, alt, ...props } : { src: string; alt: string } & ImageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="button"
        onClick={onOpen}
        _hover={{ transform: "scale(1.05)" }}
        transition="transform 0.2s"
      >
        <Image src={src} alt={alt} {...props}/>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton backgroundColor="white" />
          <ModalBody padding={0}>
            <Image src={src} alt={alt} borderRadius="md"/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClickableImage;