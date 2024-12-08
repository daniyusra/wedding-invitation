import { BoxTransition } from "@/components/BoxTransition";
import { Text, StackProps, Box, HStack, Image } from "@chakra-ui/react";
import 'components/index.css';
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";


const Gallery = ({ ...stackProps }: StackProps) => {

  const boxRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(boxRef);

  useEffect(() => {
    if (boxRef.current) {
      const box = boxRef.current;

      // Find all images in the container
      const images = box.querySelectorAll<HTMLImageElement>("img");

      // Ensure there are enough images to calculate the middle one
      if (images.length > 0) {
        const middleImage = images[Math.floor(images.length / 2)];

        // Calculate the scroll position to center the middle image
        const middleImageCenter =
          middleImage.offsetLeft + middleImage.offsetWidth / 2;

        const scrollTo = middleImageCenter;

        // Set the scroll position
        box.scrollLeft = scrollTo;
      }
    }
  }, [isInView, boxRef]);

  return (
    <BoxTransition width="90%" {...stackProps}>
      <Box 
        bg="white"
        p="30px"
        justifyContent="center"
        alignItems="center"
        borderRadius="20px"
      >
        <Text textAlign="center" color="#385a41" style={{ fontFamily: "NewSpiritSemiBold", marginTop: "5"}} fontSize={["xl", "2xl"]}>
          A love story, in portraits
        </Text>
        <Box overflowX="scroll" marginTop="5" ref={boxRef}>
          <HStack justify="center" width="45em">
            <Image src="/gallery/pic1-1.jpg" alt="Betawi-themed frolicking on the garden" maxHeight="15em" maxWidth="15em"/>
            <Image src="/gallery/pic1-2.jpg" alt="Classic-themed dancing" maxHeight="15em" maxWidth="15em"/>
            <Image src="/gallery/pic1-3.jpg" alt="Betawi-themed solemnly looking outside" maxHeight="15em" maxWidth="15em"/>
          </HStack>
          <HStack justify="center" width="45em">
            <Image src="/gallery/pic2-1.jpg" alt="Betawi-themed by the lake" maxHeight="15em" maxWidth="15em"/>
            <Image src="/gallery/pic2-2.jpg" alt="Betawi-themed gate" maxHeight="15em" maxWidth="15em"/>
            <Image src="/gallery/pic2-3.jpg" alt="Betawi-themed bicycle dates" maxHeight="15em" maxWidth="15em"/>
          </HStack>
        </Box>
        
      </Box>
    </BoxTransition>
  );
};

export { Gallery };
