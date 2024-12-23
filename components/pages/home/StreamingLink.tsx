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
            paddingTop={'20px'}
            paddingBottom={'20px'}
            // p={'30px'}
            alignItems="center"
        >
            <Text 
              style={{ 
                fontFamily: "NewSpiritMedium",
                color: 'white'
              }}
              fontSize={'xl'}
              p={'10px'}
            >
              Join us in celebrating our special day
            </Text>

            {/* Embed YouTube video */}
            <Box 
              as="iframe"
              width="90%"
              height="80%"  
              src="https://www.youtube.com/embed/toAKi65WT-g?si=UQMN_bomApcQfLpD" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
        </Stack>
    </BoxTransition>
  );
};

export { StreamingLink };
