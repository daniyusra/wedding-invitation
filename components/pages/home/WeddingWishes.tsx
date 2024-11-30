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
          description: "Thank you for your wishes!",
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
    <BoxTransition gap={[3, 5]} zIndex={1} {...stackProps} w="90%">
      <VStack
        as="form"
        justifyContent={"center"}
        alignItems={"center"}
        ref={formRef}
        onSubmit={onFormSubmit}
        backgroundColor={"#385A41"}
        gap={2}
        padding={5}
        borderRadius={10}
      >
        <Title color={"white"}>{`Say your blessings!`}</Title> 
        <Input
          name="name"
          placeholder="Name"
          w={[80, 96]}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete={"on"}
          hidden
        />       
        <Textarea
          name="wishes"
          placeholder={"Type your wishes for us, " + name}
          required
          w={[80, 96]}
          autoComplete={"off"}
          variant={"flushed"}
          color="#BBBE33"
          focusBorderColor="#BBBE33"
          borderColor="#BBBE33"
          _placeholder={{color:"#a2a374"}}
          fontFamily={"NewSpiritRegular"}
        />
        <Box hidden>
          <Select
            name="attending"
            w={[80, 96]}
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
        </Box>
        <Button type="submit" isLoading={loading} mt="3" alignSelf={"end"} backgroundColor="#DD5D36">
          {loading ? "Sending..." : "Send"}
        </Button>
      </VStack>
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
