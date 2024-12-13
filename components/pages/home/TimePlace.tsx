import { BoxTransition } from "@/components/BoxTransition";
import { Box, Stack, Text, StackProps, Button } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import 'components/index.css';

const TimePlace = ({ ...stackProps }: StackProps) => {
  return (
    <BoxTransition w="90%">
        <Stack 
            borderRadius="20px"
            backgroundImage="/background_timeplace.png" 
            backgroundSize="cover" 
            backgroundPosition="center" 
            h="580px"
            display="flex"
            paddingTop={'50px'}
            alignItems="center"
        >
            <Box>
                <span
                    style={{
                    display: 'inline-block',
                    width: '100px',       // Adjust line length
                    borderBottom: '1.5px solid #385A41', // Left line
                    marginBottom: '5px',
                    marginRight: '20px' 
                    }}
                />
                <span style={{ 
                    fontFamily: "NewSpiritRegular", 
                    color: '#385A41',
                    fontSize: "20px",
                    display: 'inline-block' 
                }}>Date & Time</span>
                <span
                    style={{
                    display: 'inline-block',
                    width: '100px',       // Adjust line length
                    borderBottom: '1.5px solid #385A41', // Left line
                    marginBottom: '5px',
                    marginLeft: '20px' 
                    }}
                />
            </Box>
            <Text style={{ 
                fontFamily: "NewSpiritBold",
                fontSize: '30px',
                color: 'white'
            }}>15th February 2025</Text>
            <Text color={'white'}>
                <span style={{ fontFamily: "NewSpiritLight", fontSize: '20px' }}>Akad </span>
                <span style={{ fontFamily: "NewSpiritMedium", fontSize: '25px' }}>08.00 - 10.00</span>
                <span style={{ fontFamily: "NewSpiritMedium", fontSize: '25px', color:"#385A41"}}>*</span>
            </Text>
            <Text color={'white'} >
                <span style={{ fontFamily: "NewSpiritLight", fontSize: '20px' }}>Reception </span>
                <span style={{ fontFamily: "NewSpiritMedium", fontSize: '25px' }}>11.00 - 13.00</span>
            </Text>
            <Text color={'#385A41'} fontFamily="NewSpiritLight" size="xs">*Only for family members</Text>
            <Box marginTop={'20px'}>
                <span
                    style={{
                    display: 'inline-block',
                    width: '100px',       // Adjust line length
                    borderBottom: '1.5px solid #385A41', // Left line
                    marginBottom: '5px',
                    marginRight: '20px' 
                    }}
                />
                <span style={{ 
                    fontFamily: "NewSpiritRegular", 
                    color: '#385A41',
                    fontSize: "20px",
                    display: 'inline-block' 
                }}>Address</span>
                <span
                    style={{
                    display: 'inline-block',
                    width: '100px',       // Adjust line length
                    borderBottom: '1.5px solid #385A41', // Left line
                    marginBottom: '5px',
                    marginLeft: '20px' 
                    }}
                />
            </Box>
            <Text
                style={{ 
                    fontFamily: "NewSpiritSemiBold",
                    fontSize: '32px',
                    color: 'white'
            }}>Balai Komando</Text>
            <Text style={{ 
                fontFamily: "NewSpiritLight",
                fontSize: '25px',
                display: 'inline-block',
                color: 'white'
            }}>Cijantung, Jakarta Timur</Text>
            <Button 
                backgroundColor={'white'} 
                color={'#385A41'}
                borderRadius={'20px'}
                marginTop={'15px'}
                onClick={() => window.open("https://maps.app.goo.gl/1joNv2hgdRDWZ2NBA", "_blank")}
            >
                Google Maps 
                <RiArrowRightLine style={{ marginLeft: "10px" }} />
            </Button>
        </Stack>
    </BoxTransition>
  );
};

export { TimePlace };