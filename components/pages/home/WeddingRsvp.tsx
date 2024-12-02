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
} from "@chakra-ui/react";
import { BoxTransition } from "@/components/BoxTransition";
import { FaArrowLeft } from "react-icons/fa6";

type WeddingRsvpProps = {
  displayName?: string;
  displayShortName?: string;
  hasPartner?: boolean;
} & StackProps;

const WeddingRsvp = ({ displayName, displayShortName, hasPartner, ...stackProps }: WeddingRsvpProps) => {
  const POST_URL = process.env.NEXT_PUBLIC_WEDDING_WISHES_POST as string;
  const GET_URL = process.env.NEXT_PUBLIC_WEDDING_WISHES_GET as string;
  
  const [pageState, setPageState] = useState<string>("0");

  const toast = useToast();

  const [name, setName] = useState<string>(displayName || "");
  const [shortName, setShortName] = useState<string>(displayShortName || "");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState<any[]>();
  const [attend, setAttend] = useState<string>("");
  const [total, setTotal] = useState<string>("");

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

  return (
    <BoxTransition gap={[3, 5]} zIndex={1} {...stackProps} w="90%">
      <VStack
        as="form"
        justifyContent={"center"}
        alignItems={"center"}
        ref={formRef}
        onSubmit={onFormSubmit}
        backgroundColor={"#DD5D36"}
        // gap={2}
        // padding={5}
        borderRadius={"20px"}
        pt="40px" pb="40px"
        backgroundImage="/announcer_cat.png" 
        backgroundSize="100% auto"
      >
        <Box w="100%">
        <Collapse in={pageState === "0"}>
          <VStack>
            <Text textAlign="center"  color="white" style={{ fontFamily: "NewSpiritMedium" }}>
              {`Long walks in Bali`}
            </Text>
            <Text textAlign="center"  color="white" style={{ fontFamily: "NewSpiritMedium" }}>
              {`Celebrating romance in Uluwatu and some`}
            </Text>  
            <Text marginTop="15px" textAlign="center" color="white" style={{ fontFamily: "NewSpiritMedium" }}>
              {`To ` + shortName + ` who we love dearly`}
            </Text>
            <Text marginBottom="20px" textAlign="center"  color="white" style={{ fontFamily: "NewSpiritMedium" }}>
              {`Please let us know if you can come`}
            </Text> 

            <Button type="button" mt="3" backgroundColor="white" borderRadius="20px" w="90%" color="#DD5D36" onClick={(e) => {
                if (hasPartner){
                  setAttend("1");
                  setPageState("1");
                } else {
                  setAttend("1");
                  setTotal("1");
                  setPageState("2");
                }
                
              }}>
              <span color="#DD5D36">We will certainly come!</span>
            </Button>

            <Button type="button" mt="3" backgroundColor="white" borderRadius="20px" w="90%" color="#DD5D36" onClick={(e) => {
                setAttend("0");
                setTotal("");
                setPageState("2");
              }}>
              <span color="#DD5D36">We cannot make it.</span>
            </Button>  
          </VStack>
        </Collapse>
        <Collapse in={pageState === "1"}>
          <VStack width="100%">
            <Box
              display="flex"
              alignItems="center" // Vertikal sejajar di tengah
              justifyContent="center" // Teks di tengah
              p="10px"
              borderRadius="10px"
            >
              {/* Ikon di kiri */}
              <IconButton
                aria-label="Back"
                icon={<Icon as={FaArrowLeft} boxSize={5} color={"white"} />}
                bg={"transparent"}
                isRound
                position="absolute" // Posisikan ikon secara absolut
                right={"85%"} // Pastikan jaraknya mentok ke kiri, atur nilai jika perlu
                onClick={(e) => {
                  setAttend("");
                  setTotal("");
                  setPageState("0");
                }}
              />

              {/* Teks di tengah */}
              <span
                style={{
                  color: "white",
                  fontFamily: "NewSpiritMedium",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {`Crowd size?`}
              </span>
            </Box>
            <Button type="button" mt="3" backgroundColor="white" borderRadius="20px" w="90%" color="#DD5D36" onClick={(e) => {
                setTotal("1");
                setPageState("2");
              }}>
              <span color="#DD5D36">Just me!</span>
            </Button>

            <Button type="button" mt="3" backgroundColor="white" borderRadius="20px" w="90%" color="#DD5D36" onClick={(e) => {
                setTotal("2");
                setPageState("2");
              }}>
              <span color="#DD5D36">I will bring a plus one!</span>
            </Button>  
          </VStack>
        </Collapse>
        <Collapse in={pageState === "2"}>
          <VStack width="100%">
            <Box
              display="flex"
              alignItems="center" // Vertikal sejajar di tengah
              justifyContent="center" // Teks di tengah
              p="10px"
              borderRadius="10px"
            >
              {/* Ikon di kiri */}
              <IconButton
                aria-label="Back"
                icon={<Icon as={FaArrowLeft} boxSize={5} color={"white"} />}
                bg={"transparent"}
                isRound
                position="absolute" // Posisikan ikon secara absolut
                right={"85%"} // Pastikan jaraknya mentok ke kiri, atur nilai jika perlu
                onClick={(e) => {
                  setAttend("");
                  setTotal("");
                  setPageState("0");
                }}
              />

              {/* Teks di tengah */}
              <span
                style={{
                  color: "white",
                  fontFamily: "NewSpiritMedium",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {`Send a message for the lovebirds!`}
              </span>
            </Box>

            <Textarea
            name="wishes"
            placeholder={"Type your wishes for us, " + name + "! (optional)"}
            w={[80, 96]}
            autoComplete={"off"}
            variant={"flushed"}
            color="white"
            focusBorderColor="white"
            borderColor="white"
            _placeholder={{color:"gray.300"}}
            fontFamily={"NewSpiritRegular"}
            />

            <Button type="submit" isLoading={loading} mt="3" ml={"65%"} backgroundColor="white" color={"#DD5D36"}>
              {loading ? "Sending..." : "Send"}
            </Button>  
          </VStack>
        </Collapse>
        <Collapse in={pageState === "submitted"}>
          <VStack width="100%">
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
    </BoxTransition>
  );
};

export { WeddingRsvp };
