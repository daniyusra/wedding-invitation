import {
  WeddingReception,
  OurEpicJourney,
  Blessing,
  HappinessCollection,
  Footer,
  HeaderZD,
  GuestName,
  LandingPage,
} from "@/components/pages/home";
import { WeddingWishes } from "@/components/pages/home/WeddingWishes";
import { VStack } from "@chakra-ui/react";

const HomeContent = ({ name }: { name?: string }) => {
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
      <GuestName />
      <LandingPage />
      <WeddingReception />
      <OurEpicJourney />
      <HappinessCollection />
      <WeddingWishes displayName={name} />
      <Blessing />
      <Footer />
    </VStack>
  );
};

export { HomeContent };