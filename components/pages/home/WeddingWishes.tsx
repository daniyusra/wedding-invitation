import { useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import {
  Box,
  Divider,
  VStack,
  Text,
  StackProps,
} from "@chakra-ui/react";
import { Title } from "@/components/Title";
import { BoxTransition } from "@/components/BoxTransition";

type WeddingWishesProps = {
  displayName?: string;
} & StackProps;

const WeddingWishes = ({ displayName, ...stackProps }: WeddingWishesProps) => {
  const GET_URL = process.env.NEXT_PUBLIC_WEDDING_WISHES_GET as string;

  const [data, setData] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(10); // Initial number of items to display
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Papa.parse(GET_URL, {
      download: true,
      header: true,
      complete: ({ data }: { data: any[] }) => setData(data.reverse()),
    });
  }, [GET_URL]);

  // Handle infinite scroll
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        // Load more items when nearing the bottom
        setVisibleCount((prev) => prev + 10);
      }
    }
  };

  return (
    <BoxTransition gap={[3, 5]} zIndex={1} {...stackProps} w="90%">
      <VStack
        h="40rem"
        gap={4}
        // marginTop="3"
        backgroundColor={"#385A41"}
        padding={5}
        borderRadius={20}
      >
        <Title color="white">{`Your blessings & greetings`}</Title>
        <Box
          w="100%"
          overflowY={"scroll"}
          ref={containerRef}
          onScroll={handleScroll}
        >
          {data.slice(0, visibleCount).map(
            (d: any, i) =>
              d.wishes?.trim() && (
                <VStack key={i} gap={1} w="full" padding="5">
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
      </VStack>
    </BoxTransition>
  );
};

export { WeddingWishes };