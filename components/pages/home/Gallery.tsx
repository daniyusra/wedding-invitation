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
            <HStack justify="center" width="120em">
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=1mQijsuGxsBQluIUojpILRp3_3JwMSYau" alt="Betawi-themed laughing" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=10noh5NpSz5Nu5QZr1P7eSavurybt5Veg" alt="Betawi-themed sitting in front of house" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=1TfiK3I0iY2b4gK5lHM_O8gC0WfFCjz31" alt="Classic-themed ring" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=1FCAKJ7_RBqaIzZZQFxHZ4QIhOeQCdJy8" alt="Betawi-themed infront of lake" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=1dWCLeeFKV0pbweZ2ivB8Sp1VzH7Zc2Z8" alt="Betawi-themed on the bridge" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=1O6sHVTWmdbnCguTQYj-VfmHulwnv4xw3" alt="Classic-themed wide shot" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=1qZqORCSa6JMCY7dLDGbs-I29FWdbGLgS" alt="Classic-themed dani" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=1FIh2MN-CLRSQr4PxWHEJvG_YlY4jsWL6" alt="Betawi-themed in rumah panggung" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=11XjLDnek6-ZLWfs9uQKdRgi9wUgAbzST" alt="Betawi-themed laughing under the flowers" maxHeight="15em" maxWidth="15em"/>
            </HStack>
            <HStack justify="center" width="120em">
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=1rRA7O0C--Y35U8zvNyEN81_WotEl9WTc" alt="Classic-themed smile close up" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=1juMYWJy82p9_F0TasdqWccl5SIXF4K-i" alt="Classic-themed zafira" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=1_S3SBenWk-s7ASOONRJwWSPe2q21W0_i" alt="Betawi-themed talking" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=1PHt8hxuAgqzVSJT08gfMra_mO6gTPpeF" alt="Classic-themed looking at zafira" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=1AVCnCe1FqAKsw_Y9qAaeW6QbNNK9cOGM" alt="Classic-themed looking at each other" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=1LgMW_ZAJ6cdfV7WFBCG2wqVvvMQK-UBS" alt="Betawi-themed on the lake" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=1FVB_W3gxFfEOMEa7vSS3pqnx_XMA92SZ" alt="Classic-themed dancing" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w640&id=1w6hGZbtbnkmweUtJsElc4vh_PkuY6eCh" alt="Classic-themed dark close up" maxHeight="15em" maxWidth="15em"/>
              <ClickableImage src="https://drive.google.com/thumbnail?sz=w1280&id=1Wk4c68Jw02pRYtoNoit50zwGWrmWdvR0" alt="Betawi-themed in front of window" maxHeight="15em" maxWidth="15em"/>
            </HStack>
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export { Gallery };
