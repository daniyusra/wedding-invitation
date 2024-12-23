import { BoxTransition } from "@/components/BoxTransition";
import { Box, Stack, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';

const StreamingLink = ({ ...stackProps }: StackProps) => {
  return (
    <BoxTransition w="90%">
        <Stack 
            bg="#BBBE33"
            borderRadius="20px"
            h="350px"  
            p={'5'}
            alignItems="center"
        >
            <Text 
              style={{ 
                fontFamily: "NewSpiritMedium",
                color: 'white'
              }}
              fontSize={'xl'}
            >
              Join us in celebrating our special day
            </Text>

            {/* Embed YouTube video */}
            <Box 
              as="iframe"
              width="100%"
              height="100%"  
              src="https://www.youtube.com/embed/toAKi65WT-g?si=UQMN_bomApcQfLpD" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
        </Stack>
    </BoxTransition>
  );
};

export { StreamingLink };
