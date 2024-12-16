import { Box, Image, VStack } from "@chakra-ui/react";
import { slideToTopFullAnimation, slideToBottomFullAnimation } from "./Animations";

type OrnamentProps = {
  isOpen?: boolean;
};

const EnvelopeOrnament = ({ isOpen }: OrnamentProps) => {
  return (
    <VStack
      position="absolute"
      height="100vh"
      width="100%"
      gap={0}
      justify="space-between" // Menempatkan elemen di atas dan bawah
    >
      {/* Top Ornament */}
      <Box
        animation={!isOpen ? slideToTopFullAnimation : "none"}
        style={{ animationDelay: "450ms" }}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        zIndex={0}
      >
        <Image
          src="/background_titlepage_top.png"
          alt="Top Ornaments"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Box>

      {/* Bottom Ornament */}
      <Box
        animation={!isOpen ? slideToBottomFullAnimation : "none"}
        style={{ animationDelay: "450ms" }}
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        zIndex={0}
      >
        <Image
          src="/background_titlepage_bottom.png"
          alt="Bottom Ornaments"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Box>
    </VStack>
  );
};

export { EnvelopeOrnament };
