import { BoxTransition } from "@/components/BoxTransition";
import { Stack, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';
import { Lateef } from "next/font/google";

const lateef = Lateef({ weight: "400", subsets: ["arabic"] });

const Surah = ({ ...stackProps }: StackProps) => {
  return (
    <BoxTransition w="90%">
      <Stack
        bg="#385a41"
        p="30px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="20px"
      >
        <img
            src="/surah_arrum.png"
            style={{
            width: '90%', // Ukuran logo
            height: 'auto', 
            }}
            alt="Logo"
        />
        <Text textAlign="center" color="white" style={{ 
            fontSize: "13px", 
            fontFamily: "NewSpiritLightItalic",
            marginTop: "10px",
        }}>And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy.</Text>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
            width: '100%', // memastikan mengambil seluruh lebar stack
          }}
        >
          <span
            style={{
              flex: 1, 
              borderBottom: '1px solid #bbbe32',
              marginRight: '30px', 
            }}
          />
          <Text
            color="white"
            style={{
              fontSize: "14px",
              fontFamily: "NewSpiritMedium",
            }}
          >
            Q.S. Ar-Rum: 21
          </Text>
          <span
            style={{
              flex: 1, 
              borderBottom: '1px solid #bbbe32',
              marginLeft: '30px', 
            }}
          />
        </div>
      </Stack>
    </BoxTransition>
  );
};

export { Surah };
