import {
  HeaderZD,
  GuestName,
  LandingPage,
  TimePlace,
  Surah,
  StreamingLink
} from "@/components/pages/home";
import { Gallery } from "@/components/pages/home/Gallery";
import { WeddingRsvp } from "@/components/pages/home/WeddingRsvp";
import { Box, VStack } from "@chakra-ui/react";

const HomeContent = ({ name, shortName, hasPartner, isGroup } : { name?: string; shortName?: string; hasPartner?: boolean; isGroup?: boolean }) => {
  return (
    <VStack
      maxW={"lg"}
      w={"full"}
      h={"full"}
      bg={"#183641"}
      shadow={"lg"}
      position={"relative"}
      /*pt={[20, 28]}*/
      pb={8}
      gap={8}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <HeaderZD maxW={"lg"}/>
      <Box h={'36px'} />
      <Surah />
      <GuestName name={shortName}/>
      <LandingPage />
      <TimePlace />
      <Gallery />
      <StreamingLink />
      <WeddingRsvp displayName={name} displayShortName={shortName} hasPartner={hasPartner} isGroup={isGroup}/>
    </VStack>
  );
};

export { HomeContent };
