import { BoxTransition } from "@/components/BoxTransition";
import { Box, Stack, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';

const LandingPage = ({ ...stackProps }: StackProps) => {
  return (
    <BoxTransition   w="90%">
      <Stack bg="white"
        h="600px"
        borderRadius="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundImage="/background_landingpage.png" 
        backgroundSize="cover" 
        backgroundPosition="center"
      >
        <Text textAlign="center" color="#183641"
          style={{ 
            fontFamily: "NewSpiritRegular", 
            marginBottom: '15px',
            marginTop: '28px', 
            fontSize: "25px",
            display: 'inline-block', 
        }}>The wedding of </Text>
        <Text textAlign="center" fontSize="60px" color="#183641"
          style={{ 
            fontFamily: "NewSpiritBoldItalic"
        }}>Zafira</Text>
        <Box>
          <span
              style={{
              display: 'inline-block',
              width: '130px',       // Adjust line length
              borderBottom: '3px solid #f2bf4b', // Left line
              marginBottom: '15px',
              marginRight: '20px' 
              }}
          />
          <span style={{ 
              fontFamily: "NewSpiritBoldItalic",
              fontSize: "45px",
              color: '#dd5d36',
              fontStyle: 'italic',
              display: 'inline-block',
          }}>&</span>
          <span
              style={{
              display: 'inline-block',
              width: '130px',       // Adjust line length
              borderBottom: '3px solid #f2bf4b', // Left line
              marginBottom: '15px',
              marginLeft: '20px' 
              }}
          />
        </Box>
        <Text textAlign="center" fontSize="60px" color="#183641"
          style={{ 
            fontFamily: "NewSpiritBoldItalic"
        }}>Danial
        </Text>
      </Stack>
    </BoxTransition>
  );
};

export { LandingPage };
