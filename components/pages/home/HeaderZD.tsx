import { VStackTransition } from "@/components/VStackTransition";
import { ProfileImage } from "@/components/pages/home";
import { Image, StackProps, Text, Box } from "@chakra-ui/react";
import { Coustard } from "next/font/google";

const coustard= Coustard({ weight: "400", subsets: ["latin"] });
const coustardBlack = Coustard({ weight: "900", subsets: ["latin"] });

const HeaderZD = ({ ...stackProps }: StackProps) => {
  return (
    <Box bg="white" w="100%" p="2">
        <div style={{ 
            textAlign: 'center', 
            fontFamily: coustard.style.fontFamily,
            fontSize: '25px',
            fontStyle: 'italic'
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
            <span style={{ color: '#183641', fontFamily: coustardBlack.style.fontFamily }}>Z</span>
            <span style={{ 
                color: '#dd5d36', 
                fontWeight: 400, 
                fontSize: '20px',
            }}> & </span>
            <span style={{ color: '#183641', fontFamily: coustardBlack.style.fontFamily }}>D</span>
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
