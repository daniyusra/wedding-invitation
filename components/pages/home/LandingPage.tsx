import { Box, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';

const LandingPage = ({ ...stackProps }: StackProps) => {
  return (
    <Box
      bg="white"
      w="90%"
      h="550px"
      borderRadius="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundImage="/background_10p.png"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Text textAlign="center" fontSize="55px" color="#183641">
        <span style={{ 
            fontFamily: "NewSpiritRegular", 
            marginBottom: '15px', 
            fontSize: "28px",
            display: 'inline-block' 
        }}>Pernikahan </span>
        <br />
        <span style={{ 
            fontFamily: "NewSpiritBoldItalic"
        }}>Zafira</span>
        <br />
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
            fontStyle: 'italic' 
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
        <br />
        <span style={{ 
            fontFamily: "NewSpiritBoldItalic"
        }}>Danial</span>
      </Text>
    </Box>
  );
};

export { LandingPage };
