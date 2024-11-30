import { FormEvent, useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import {
  Box,
  Button,
  Input,
  Select,
  StackProps,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Title } from "@/components/Title";
import { BoxTransition } from "@/components/BoxTransition";

type WeddingWishesProps = {
  displayName?: string;
} & StackProps;

const WeddingWishes = ({ displayName, ...stackProps }: WeddingWishesProps) => {
  const POST_URL = process.env.NEXT_PUBLIC_WEDDING_WISHES_POST as string;
  const GET_URL = process.env.NEXT_PUBLIC_WEDDING_WISHES_GET as string;

  const toast = useToast();

  const [name, setName] = useState<string>(displayName || "");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState<any[]>();
  const [attend, setAttend] = useState<string>("");
  const [total, setTotal] = useState<string>("");

  useEffect(() => {
    if (displayName) setName(displayName);
  }, [displayName]);

  useEffect(() => {
    Papa.parse(
      GET_URL,
      {
        download: true,
        header: true,
        complete: ({ data }: { data: any[] }) => setData(data.reverse()),
      }
    );
  }, [GET_URL]);

  return (
    <BoxTransition gap={[3, 5]} zIndex={1} {...stackProps} w="90%">
      <VStack h={[80, 96]} overflowY={"scroll"} gap={4} marginTop="3">
        {data?.map((d: any, i) => (
          <VStack key={i} gap={1} w="full"backgroundColor={"#FFFFFF"}
          padding={5}
          borderRadius={10}>
            <Text
              w="full"
              textAlign={"justify"}
              fontSize={"sm"}
              fontWeight={"light"}
              color="#183641"
              fontFamily={"NewSpiritRegular"}
              mb={1}
            >
              {d.wishes}
            </Text>
            <Text w="full" fontWeight={700} fontSize={"sm"} align={"right"} color={"#DD5D36"} fontFamily={"NewSpiritRegular"}>
              {d.name}
            </Text>
          </VStack>
        ))}
      </VStack>
    </BoxTransition>
  );
};

export { WeddingWishes };
