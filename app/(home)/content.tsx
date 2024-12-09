import {
  WeddingReception,
  OurEpicJourney,
  Blessing,
  HappinessCollection,
  Footer,
  HeaderZD,
  GuestName,
  LandingPage,
  TimePlace,
  Surah,
  AudioPlay
} from "@/components/pages/home";
import { WeddingRsvp } from "@/components/pages/home/WeddingRsvp";
import { WeddingWishes } from "@/components/pages/home/WeddingWishes";
import { VStack } from "@chakra-ui/react";

const HomeContent = ({ name, shortName, hasPartner }: { name?: string; shortName?: string; hasPartner?: boolean }) => {
  return (
    <VStack
      maxW={"lg"}
      w={"full"}
      h={"full"}
      bg={"#183641"}
      shadow={"lg"}
      position={"relative"}
      /*pt={[20, 28]}*/
      /*pb={[24, 32]}*/
      gap={8}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <AudioPlay />
      <HeaderZD />
      <Surah />
      <GuestName name={shortName}/>
      <LandingPage />
      <TimePlace />
      <WeddingRsvp displayName={name} displayShortName={shortName} hasPartner={hasPartner}/>
      <WeddingWishes displayName={name} />
      <Blessing />
    </VStack>
  );
};

export { HomeContent };
