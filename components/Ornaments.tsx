import { Box, Image, VStack } from "@chakra-ui/react";
import { slideToTopFullAnimation, slideToBottomFullAnimation, slideToRightFullAnimation, fadeOutAnimation } from "./Animations";

type OrnamentProps = {
  isOpen?: boolean;
};

const EnvelopeOrnament = ({isOpen} : OrnamentProps) => {
  return (
    <VStack position={"absolute"} height={"100vh"} gap={0} justify={"center"}>
      <Box animation={!isOpen ? slideToTopFullAnimation : "none" } style={{animationDelay: "450ms"}}>
        <Image
          src="/top_envelope.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "63vh"}}
          alt="Top Ornaments"
          top={0}
          zIndex={0}
        />
      </Box>

      <Box animation={!isOpen ? fadeOutAnimation : "none" }>
        <div
          style={{
            position: "absolute",
            top: "65%", // Center it vertically between the two images
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%", // full width to act as a belt
            zIndex: 1,
          }}
        >
          {/* Stripe */}
          <div
            style={{
              width: "100%", // Adjust as needed
              height: "30px", // Thickness of the stripe
              backgroundColor: "#ff6600ff",
              position: "relative",
            }}
          />
          {/* Circle in the middle */}
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#ff6600ff",
              position: "absolute",
              left: "70%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </Box>
      
      <Box animation={!isOpen ? slideToBottomFullAnimation : "none" } style={{animationDelay: "450ms"}}>
        <Image
          src="/bottom_envelope.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "31vh" }}
          alt="Bottom Ornaments"
          bottom={0}
          zIndex={0}
          />
      </Box>
    </VStack>
  );
};

export { EnvelopeOrnament };
