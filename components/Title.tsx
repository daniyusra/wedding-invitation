import { coustard } from "@/utils/theme";
import { Text, TextProps } from "@chakra-ui/react";

const Title = ({
  children,
  ...textProps
}: { children: React.ReactNode } & TextProps) => {
  return (
    <Text
      as="h1"
      fontFamily={coustard.style.fontFamily}
      fontSize={["2xl", "3xl"]}
      textAlign={"center"}
      letterSpacing={2}
      whiteSpace={"pre-line"}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export { Title};
