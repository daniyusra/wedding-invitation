import { FormEvent, useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import { VStackTransition } from "@/components/VStackTransition";
import {
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
  }, []);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const body = new FormData(formRef.current!);

    fetch(
      POST_URL,
      { method: "POST", body }
    )
      .then(() => {
        setLoading(false);
        formRef.current?.reset();
        toast({
          description: "Thank You for your wishes!",
          status: "success",
          isClosable: true,
          duration: 2500,
        });

        const result: any = {};
        body.forEach((value, key) => {
          result[key] = value;
        });

        if (data) {
          setData([result, ...data]);
        } else {
          setData([result]);
        }

        setTotal("");
        setAttend("");
      })
      .catch((e) =>
        toast({ description: e.message, status: "error", isClosable: true })
      );
  };

  return (
    <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
      <Title>{`Wedding Wishes`}</Title>
      <Text textAlign={"center"} w="sm" px={2}>
        Your wishes are our blessing to start a new awesome journey ahead!
      </Text>
      <VStack
        as="form"
        justifyContent={"center"}
        alignItems={"center"}
        ref={formRef}
        onSubmit={onFormSubmit}
        gap={2}
      >
        <Input
          name="name"
          placeholder="Name"
          w={[80, 96]}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete={"on"}
        />
        <Textarea
          name="wishes"
          placeholder="Type your wishes"
          w={[80, 96]}
          required
          autoComplete={"off"}
        />
        <Select
          name="attending"
          w={[80, 96]}
          required
          value={attend}
          onChange={(e) => {
            setAttend(e.target.value);

            if (e.target.value === "0") {
              setTotal("");
            }
          }}
        >
          <option disabled value="">
            Will you attend the wedding ?
          </option>
          <option value="1">Yes, i will gladly attend</option>
          <option value="0">{`No, I can't attend the wedding`}</option>
        </Select>
        {attend === "1" && (
          <Select
            name="total"
            required
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          >
            <option disabled value="">
              How many guests ?
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </Select>
        )}
        <Button type="submit" isLoading={loading} mt="8">
          {loading ? "Sending..." : "Send"}
        </Button>
      </VStack>
      <VStack w={[80, 96]} h={[80, 96]} overflowY={"scroll"} gap={4}>
        {data?.map((d: any, i) => (
          <VStack key={i} gap={1} w="full">
            <Text w="full" fontWeight={700} fontSize={"sm"}>
              {d.name}
            </Text>
            <Text
              w="full"
              textAlign={"justify"}
              fontSize={"sm"}
              fontWeight={"light"}
            >
              {d.wishes}
            </Text>
          </VStack>
        ))}
      </VStack>
    </VStackTransition>
  );
};

export { WeddingWishes };
