import { Box, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';

const TimePlace = ({ ...stackProps }: StackProps) => {
  return (
    <Box
      bg="#bcbe33"
      w="90%"
      h="550px"
      borderRadius="20px"
      //display="flex"
      //justifyContent="center"
      //alignItems="center"
    >
      <Text textAlign="center" color="white" marginTop={'55px'}>
        <span
            style={{
            display: 'inline-block',
            width: '100px',       // Adjust line length
            borderBottom: '1.5px solid #183641', // Left line
            marginBottom: '5px',
            marginRight: '20px' 
            }}
        />
        <span style={{ 
            fontFamily: "NewSpiritRegular", 
            color: '#183641',
            fontSize: "20px",
            display: 'inline-block' 
        }}>Tempat</span>
        <span
            style={{
            display: 'inline-block',
            width: '100px',       // Adjust line length
            borderBottom: '1.5px solid #183641', // Left line
            marginBottom: '5px',
            marginLeft: '20px' 
            }}
        />
        <br />
        <a
        href="https://maps.app.goo.gl/Wnt2jTofyFUwg5JJ8" 
        style={{ 
            fontFamily: "NewSpiritSemiBold",
            fontSize: '42px',
            textDecoration: 'underline'
        }}>Balai Komando</a>
        <br />
        <span style={{ 
            fontFamily: "NewSpiritLight",
            fontSize: '25px',
            display: 'inline-block',
            marginBottom: '50px'
        }}>Cijantung, Jakarta Timur</span>
        <br />
        <span
            style={{
            display: 'inline-block',
            width: '100px',       // Adjust line length
            borderBottom: '1.5px solid #183641', // Left line
            marginBottom: '5px',
            marginRight: '20px' 
            }}
        />
        <span style={{ 
            fontFamily: "NewSpiritRegular", 
            color: '#183641',
            fontSize: "20px",
            display: 'inline-block' 
        }}>Tanggal</span>
        <span
            style={{
            display: 'inline-block',
            width: '100px',       // Adjust line length
            borderBottom: '1.5px solid #183641', // Left line
            marginBottom: '5px',
            marginLeft: '20px' 
            }}
        />
        <br />
        <span style={{ 
            fontFamily: "NewSpiritBold",
            fontSize: '37px'
        }}>15 Februari 2025</span>
        <br />
        <span style={{ 
            fontFamily: "NewSpiritMedium",
            fontSize: '20px'
        }}>Akad </span>
        <span style={{ 
            fontFamily: "NewSpiritMedium",
            fontSize: '25px'
        }}>08.00 - 10.00</span>
        <br />
        <span style={{ 
            fontFamily: "NewSpiritMedium",
            fontSize: '20px'
        }}>Resepsi </span>
        <span style={{ 
            fontFamily: "NewSpiritMedium",
            fontSize: '25px'
        }}>11.00 - 13.00</span>
      </Text>
    </Box>
  );
};

export { TimePlace };
