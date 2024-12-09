import ClickableImage from "@/components/ClickableImage";
import { Text, StackProps, Box, HStack, ScaleFade } from "@chakra-ui/react";
import 'components/index.css';
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";


const Gallery = ({ ...stackProps }: StackProps) => {

  const boxRef = useRef<HTMLDivElement | null>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  const isBoxInView = useInView(boxRef);

  const isInView = useInView(transitionRef);
  const [firstTimeInView, setFirstTimeInView] = useState(false);

  useEffect(() => {
    if (!firstTimeInView && isInView) setFirstTimeInView(true);
  }, [firstTimeInView, isInView]);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollLeft = (boxRef.current.scrollWidth - boxRef.current.clientWidth) / 2;
    }
  }, [isBoxInView, boxRef]);

  return (
    <Box width="90%" {...stackProps}>
      <ScaleFade ref={transitionRef} initialScale={0.9} in={isInView}>
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
              <ClickableImage src="/gallery/pic1-1.jpg" alt="Betawi-themed frolicking on the garden" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="/gallery/pic1-2.jpg" alt="Classic-themed dancing" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="/gallery/pic1-3.jpg" alt="Betawi-themed solemnly looking outside" maxHeight="15em" maxWidth="15em"/>
            </HStack>
            <HStack justify="center" width="45em">
              <ClickableImage src="/gallery/pic2-1.jpg" alt="Betawi-themed by the lake" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="/gallery/pic2-2.jpg" alt="Betawi-themed gate" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="/gallery/pic2-3.jpg" alt="Betawi-themed bicycle dates" maxHeight="15em" maxWidth="15em"/>
            </HStack>
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export { Gallery };
