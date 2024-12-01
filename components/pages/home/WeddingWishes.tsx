import { FormEvent, useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import {
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Title } from "@/components/Title";
import { BoxTransition } from "@/components/BoxTransition";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type WeddingWishesProps = {
  displayName?: string;
} & StackProps;

const WeddingWishes = ({ displayName, ...stackProps }: WeddingWishesProps) => {
  const GET_URL = process.env.NEXT_PUBLIC_WEDDING_WISHES_GET as string;

  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    Papa.parse(GET_URL, {
      download: true,
      header: true,
      complete: ({ data }: { data: any[] }) => setData(data.reverse()),
    });
  }, [GET_URL]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    scrollToTop();
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    scrollToTop();
  };

  const dataContainerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (dataContainerRef.current) {
      dataContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <BoxTransition gap={[3, 5]} zIndex={1} {...stackProps} w="90%">
      <VStack h="30rem" gap={4} marginTop="3" 
      backgroundColor={"#385A41"} padding={5} borderRadius={10}>
        <Title color="white">{`Your blessings & greetings`}</Title>
        <Box w="100%" overflowY={"scroll"} ref={dataContainerRef}>
        {paginatedData.map(
          (d: any, i) =>
            d.wishes?.trim() && (
              <VStack
                key={i}
                gap={1}
                w="full"
                padding="5"
              >
                <Text
                  w="full"
                  textAlign={"justify"}
                  fontSize={"sm"}
                  fontWeight={"light"}
                  color="#c2ccc4"
                  fontFamily={"NewSpiritRegular"}
                  mb={1}
                >
                  {d.wishes}
                </Text>
                <Text
                  w="full"
                  fontWeight={700}
                  fontSize={"sm"}
                  align={"right"}
                  color={"#BBBE33"}
                  fontFamily={"NewSpiritLight"}
                >
                  {d.name}
                </Text>
                <Divider
                  w="full"
                  borderColor={"#BBBE33"}
                  borderWidth={1}
                  marginX={"auto"}
                />
              </VStack>
            )
        )}
        </Box>
        <HStack w="full" justifyContent="center" marginTop={4} spacing={4}>
          <IconButton
            aria-label="Back"
            icon={<Icon as={FaArrowLeft} boxSize={6} color={"white"} />}
            bg={"#BBBE33"}
            isRound
            onClick={handlePrev}
            isDisabled={currentPage === 1}
          />

          <IconButton
            aria-label="Back"
            icon={<Icon as={FaArrowRight} boxSize={6} color={"white"} />}
            bg={"#BBBE33"}
            isRound
            onClick={handleNext}
            isDisabled={currentPage === totalPages}
          />

        </HStack>
      </VStack>
    </BoxTransition>
  );
};


export { WeddingWishes };
