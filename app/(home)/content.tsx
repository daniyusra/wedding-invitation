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
  Surah
} from "@/components/pages/home";
import { Gallery } from "@/components/pages/home/Gallery";
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
      <HeaderZD />
      <Surah />
      <GuestName name={shortName}/>
      <LandingPage />
      <TimePlace />
      <Gallery />
      <WeddingRsvp displayName={name} displayShortName={shortName} hasPartner={hasPartner}/>
      <WeddingWishes displayName={name} />
    </VStack>
  );
};

export { HomeContent };
