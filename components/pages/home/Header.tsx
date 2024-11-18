import { VStackTransition } from "@/components/VStackTransition";
import { ProfileImage } from "@/components/pages/home";
import { Image, StackProps, Text } from "@chakra-ui/react";

const Header = ({ ...stackProps }: StackProps) => {
  return (
    <VStackTransition gap={[6, 10]} zIndex={1} {...stackProps}>
      <Image
        src="/monogram.svg"
        alt="Kristianto & Stephanie Monogram"
        width={[128, 192]}
        height={[128, 192]}
        marginX="auto"
      />
      <Text
        textAlign={"center"}
        w="sm"
        fontSize={"sm"}
        px={2}
        whiteSpace={"pre-line"}
      >
        {`“And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.”
          - Ar-Rum 30:21 -`}
      </Text>
      <ProfileImage
        src="kristianto.jpg?alt=media&token=f34c6966-b600-4164-86e5-9755c23a3117"
        name="Zafira Binta Feliandra"
        desc="The daughter of Mr. Ferroza & Mrs. Fithri"
        linkedIn="christiantochen"
        instagram="zafirabinta"
      />
      <ProfileImage
        src="stephanie.jpg?alt=media&token=04ffcedd-1f00-42c5-98b1-9262b18b34e3"
        name="Muhammad Danial Yusra"
        desc="The son of Mr. Yusuf & Mrs. Rosida"
        linkedIn="stephanieai"
        instagram="daniyusra"
      />
    </VStackTransition>
  );
};

export { Header };
