import { Image, StackProps, Text, Box } from "@chakra-ui/react";
import 'components/index.css';

const HeaderZD = ({ ...stackProps }: StackProps) => {
  return (
    <Box bg="white" w="100%" p="2">
        <div style={{ 
            textAlign: 'center', 
            fontSize: '25px',
        }}>
            <span
                style={{
                display: 'inline-block',
                width: '35%',       // Adjust line length
                borderBottom: '3px solid #bbbe32', // Left line
                marginBottom: '6.5px',
                marginRight: '30px' 
                }}
            />
            <span style={{ color: '#183641', fontFamily: "NewSpiritBoldItalic" }}>Z</span>
            <span style={{ 
                color: '#dd5d36', 
                fontWeight: 400, 
                fontSize: '20px',
                fontFamily: "NewSpiritMediumItalic"
            }}> & </span>
            <span style={{ color: '#183641', fontFamily: "NewSpiritBoldItalic" }}>D</span>
            <span
                style={{
                display: 'inline-block',
                width: '35%',       // Adjust line length
                borderBottom: '3px solid #bbbe32', // Left line
                marginBottom: '6.5px',
                marginLeft: '30px' 
                }}
            />
        </div>
    </Box>
  );
};

export { HeaderZD };
