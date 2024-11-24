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
import { WeddingWishes } from "@/components/pages/home/WeddingWishes";
import { VStack } from "@chakra-ui/react";

const HomeContent = ({ name, shortName }: { name?: string; shortName?: string; }) => {
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
    >
      <HeaderZD />
      <GuestName name={shortName}/>
      <LandingPage />
      <Surah />
      <TimePlace />
      <OurEpicJourney />
      <HappinessCollection />
      <WeddingWishes displayName={name} />
      <Blessing />
      <Footer />
    </VStack>
  );
};

export { HomeContent };
