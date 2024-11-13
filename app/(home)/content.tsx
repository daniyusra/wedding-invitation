import {
  CelebrateWithUs,
  HolyMatrimony,
  WeddingReception,
  OurEpicJourney,
  Blessing,
  HappinessCollection,
  Footer,
  Header,
} from "@/components/pages/home";
import { WeddingWishes } from "@/components/pages/home/WeddingWishes";
import { VStack } from "@chakra-ui/react";

const HomeContent = ({ name }: { name?: string }) => {
  return (
    <VStack
      maxW={"lg"}
      w={"full"}
      h={"full"}
      bg={"white"}
      shadow={"lg"}
      position={"relative"}
      pt={[20, 28]}
      pb={[24, 32]}
      gap={[6, 10]}
    >
      <Header />
      <CelebrateWithUs />
      <HolyMatrimony />
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
