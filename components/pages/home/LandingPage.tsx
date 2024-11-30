import { BoxTransition } from "@/components/BoxTransition";
import { Box, Stack, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';

const LandingPage = ({ ...stackProps }: StackProps) => {
  return (
    <BoxTransition   w="90%">
      <Stack bg="white"
        h="580px"
        borderRadius="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundImage="/mg6.png" 
        backgroundSize="100%" 
        backgroundPosition="center"
      >
        <Text textAlign="center" color="#183641"
          style={{ 
            fontFamily: "NewSpiritRegular", 
            marginBottom: '15px',
            marginTop: '50px', 
            fontSize: "25px",
            display: 'inline-block', 
        }}>The wedding of </Text>
        <Text textAlign="center" fontSize="55px" color="#183641"
          style={{ 
            fontFamily: "NewSpiritBoldItalic"
        }}>Zafira</Text>
        <Box>
          <span
              style={{
              display: 'inline-block',
              width: '120px',       // Adjust line length
              borderBottom: '3px solid #f2bf4b', // Left line
              marginBottom: '15px',
              marginRight: '15px' 
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
              width: '120px',       // Adjust line length
              borderBottom: '3px solid #f2bf4b', // Left line
              marginBottom: '15px',
              marginLeft: '15px' 
              }}
          />
        </Box>
        <Text textAlign="center" fontSize="55px" color="#183641"
          style={{ 
            fontFamily: "NewSpiritBoldItalic"
        }}>Danial
        </Text>
      </Stack>
    </BoxTransition>
  );
};

export { LandingPage };
