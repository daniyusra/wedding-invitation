import { Box, Stack, Text, StackProps } from "@chakra-ui/react";
import 'components/index.css';
import { Lateef } from "next/font/google";

const lateef = Lateef({ weight: "400", subsets: ["arabic"] });

const Surah = ({ ...stackProps }: StackProps) => {
  return (
    <Stack
      bg="#385a41"
      w="90%"
      h="280px"
      p="30px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="20px"
    >
        <Text textAlign="center" fontSize="28px" color="white" style={{ fontFamily: lateef.style.fontFamily }}>وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ</Text>
        <Text textAlign="center" fontSize="28px" color="white" style={{ 
            fontSize: "15px", 
            fontFamily: "NewSpiritLightItalic",
            marginTop: "10px",
        }}>And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.</Text>
        <Text textAlign="center" fontSize="28px" color="white" style={{ 
            fontSize: "15px", 
            fontFamily: "NewSpiritLight",
            marginTop: "10px",
        }}>- The Quran 30:21 -</Text>
    </Stack>
  );
};

export { Surah };
