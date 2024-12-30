import { FormEvent, useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import {
  Box,
  Button,
  Text,
  Input,
  Select,
  StackProps,
  Textarea,
  VStack,
  useToast,
  Collapse,
  IconButton,
  Icon,
  Divider, 
} from "@chakra-ui/react";
import { BoxTransition } from "@/components/BoxTransition";
import { FaArrowLeft } from "react-icons/fa6";
import { Title } from "@/components/Title";

type WeddingRsvpProps = {
  displayName?: string;
  displayShortName?: string;
  hasPartner?: boolean;
  isGroup?: boolean;
} & StackProps;

const WeddingRsvp = ({ displayName, displayShortName, hasPartner, isGroup, ...stackProps }: WeddingRsvpProps) => {
  const POST_URL = process.env.NEXT_PUBLIC_WEDDING_WISHES_POST as string;
  const GET_URL = process.env.NEXT_PUBLIC_WEDDING_WISHES_GET as string;
  
  const [pageState, setPageState] = useState<string>("0");

  const toast = useToast();

  const [name, setName] = useState<string>(isGroup ? "" : displayName || "");
  const [shortName, setShortName] = useState<string>(displayShortName || "");

  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState<any[]>([]);
  const [attend, setAttend] = useState<string>("");
  const [total, setTotal] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(10); // Initial number of items to display
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (displayName) setName(displayName);
  }, [displayName]);

  useEffect(() => {
    if (displayShortName) setShortName(displayShortName);
  }, [displayShortName]);

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

    setPageState("submitted");

    const body = new FormData(formRef.current!);

    fetch(
      POST_URL,
      { method: "POST", body }
    )
      .then(() => {
        setLoading(false);
        formRef.current?.reset();

        toast({
          description: "Thank you for RSVP-ing!",
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
        as="form"
        justifyContent={"center"}
        alignItems={"center"}
        ref={formRef}
        onSubmit={onFormSubmit}
      >
        <Box w="100%">
        <Collapse in={pageState === "0"}>
          <VStack
            padding={5}
            borderRadius={20}
            gap={2}
            pt="55px" pb="55px"
            backgroundImage="/background_rsvp.png" 
            backgroundSize="cover"
          >
            <Text textAlign="center"  color="white" style={{ fontFamily: "NewSpiritSemiBold" }}>
              {`Strolling Menteng, trees are green`}
            </Text>
            <Text textAlign="center"  color="white" style={{ fontFamily: "NewSpiritSemiBold" }}>
              {`Coffee sipped with old-town charm`}
            </Text>  
            <Text textAlign="center" color="white" style={{ fontFamily: "NewSpiritSemiBold" }}>
              {`To ` + shortName + `, so keen`}
            </Text>
            <Text textAlign="center"  color="white" style={{ fontFamily: "NewSpiritSemiBold" }}>
              {`Your presence brings us warm`}
            </Text> 

            <Button type="button" mt="3" backgroundColor="white" borderRadius="20px" w="90%" color="#DD5D36" onClick={(e) => {
                if (hasPartner){
                  setAttend("1");
                  setPageState("1");
                } else {
                  setAttend("1");
                  setTotal("1");
                  setPageState(isGroup ? "2" : "finish");
                }
              }}>
              <span color="#DD5D36">
                {(hasPartner || isGroup) ? "We will certainly come!" : "I will certainly come!"}
              </span>
            </Button>

            <Button type="button" mt="3" backgroundColor="white" borderRadius="20px" w="90%" color="#DD5D36" onClick={(e) => {
                setAttend("0");
                setTotal("");
                setPageState(isGroup ? "2" : "finish");
              }}>
              <span color="#DD5D36">
                {(hasPartner || isGroup) ? "We cannot make it." : "I cannot make it."}
              </span>
            </Button>  
          </VStack>
        </Collapse>
        <Collapse in={pageState === "1"}>
          <VStack 
            width="100%" 
            backgroundColor={"#DD5D36"}
            gap={2}
            padding={5}
            borderRadius={20}
          >
            <IconButton
            aria-label="Back"
            icon={<Icon as={FaArrowLeft} boxSize={6} color={"white"} />}
            bg={"#183641"}
            isRound
            alignSelf="start"
            onClick={(e) => {
              setAttend("");
              setTotal("");
              setPageState("0");
            }}
            />

            <Text textAlign="center" color="white" fontSize={'xl'} style={{ fontFamily: "NewSpiritSemiBold" }}>
              {`Crowd size?`}
            </Text>

            <Button type="button" mt="3" backgroundColor="white" borderRadius="20px" w="90%" color="#DD5D36" onClick={(e) => {
                setTotal("1");
                setPageState(isGroup ? "2" : "finish");
              }}>
              <span color="#DD5D36">Just me!</span>
            </Button>

            <Button type="button" mt="3" backgroundColor="white" borderRadius="20px" w="90%" color="#DD5D36" onClick={(e) => {
                setTotal("2");
                setPageState(isGroup ? "2" : "finish");
              }}>
              <span color="#DD5D36">I will bring a plus one!</span>
            </Button>  
          </VStack>
        </Collapse>
        <Collapse in={pageState === "2"}>
          <VStack 
              width="100%" 
              backgroundColor={"#DD5D36"}
              gap={2}
              padding={5}
              borderRadius={20}
            >
            <Text textAlign="center" color="white" fontSize={'xl'} style={{ fontFamily: "NewSpiritSemiBold" }}>
              Can we get a name?
            </Text>

            <Input placeholder="Your name" onChange={(e) => {
              setName(e.target.value);
            }} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            mt="3"
            variant={"flushed"}
            color="white"
            focusBorderColor="white"
            borderColor="white"
            _placeholder={{color:"gray.300"}}
            fontFamily={"NewSpiritRegular"}
            w={[80, 96]}
            />

            <Button type="button" backgroundColor="white" color="#DD5D36" mt="3" isDisabled={!name.trim()} onClick={(e) => {
                setPageState("finish");
              }}>
              {"Next"}
            </Button>  
          </VStack>
        </Collapse>
        <Collapse in={pageState === "finish"}>
          <VStack 
            width="100%" 
            backgroundImage="/background_wishes.png" 
            backgroundSize="cover" 
            backgroundPosition="right bottom" 
            backgroundRepeat="no-repeat" 
            backgroundColor={"#DD5D36"}
            gap={2}
            padding={5}
            borderRadius={20}
          >
            <IconButton
            aria-label="Back"
            icon={<Icon as={FaArrowLeft} boxSize={6} color={"white"} />}
            bg={"#183641"}
            isRound
            alignSelf="start"
            onClick={(e) => {
              setAttend("");
              setTotal("");
              setPageState("0");
            }}
            />
            <Text textAlign="center" color="white" fontSize={'xl'} style={{ fontFamily: "NewSpiritSemiBold" }}  mt="5">
              Send an optional message for the lovebirds!
            </Text>

            <Textarea
            name="wishes"
            placeholder={"Type your wishes for us, " + name + ", if any!"}
            w={[80, 96]}
            autoComplete={"off"}
            variant={"flushed"}
            color="white"
            focusBorderColor="white"
            borderColor="white"
            _placeholder={{color:"gray.300"}}
            fontFamily={"NewSpiritRegular"}
             mb="5"
            />

            <Button type="submit" isLoading={loading} alignSelf={"center"} backgroundColor="white" color="#DD5D36">
              {loading ? "Sending..." : "Confirm your RSVP"}
            </Button>  
          </VStack>
        </Collapse>
        <Collapse in={pageState === "submitted"}>
          <VStack width="100%"
            backgroundColor={"#DD5D36"}
            gap={2}
            padding={5}
            borderRadius={20}>
            <Text textAlign="center" color="white" style={{ fontFamily: "NewSpiritSemiBold" }}>
              Thank you for your confirmation!
            </Text>
          </VStack>
        </Collapse>
        </Box>
        
        {/*
          Code below is the form functionality, do not touch
        */} 
        
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
      </VStack>

      <VStack
        h="40rem"
        gap={4}
        marginTop="2em"
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

export { WeddingRsvp };
