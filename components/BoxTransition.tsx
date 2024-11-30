import { Box, BoxProps, VStack } from "@chakra-ui/react";
import { Children } from "react";
import { Transition } from "./Transition";

type BoxTransitionProps = {} & BoxProps;

const BoxTransition = ({
  children,
  ...boxProps
}: BoxTransitionProps) => {
  return (
    <Box {...boxProps}>
      {Children.map(children, (child) => (
        <Transition>{child}</Transition>
      ))}
    </Box>
  );
};

export { BoxTransition };
