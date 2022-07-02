import {
  Box,
  Grid,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
  });

  return (
    <Grid gap={2}>
      <Heading as="h2" fontSize={{ base: "lg", sm: "3xl" }} textAlign="center">
        Crypto Carolina Collab
      </Heading>

      <Box
        backgroundColor={
          colorMode === "light" ? "blackAlpha.300" : "blackAlpha.300"
        }
        padding={4}
        borderRadius={4}
      >
        <Box fontSize={textSize}>
          At Carolina Crypto Collab, our mission is to reach the masses where we
          bring education and awareness to a plethora of topics. These are not
          all in the financial markets, but they consist of empowerment,
          personal development, and community. It is important to remember that
          in all things, our own mental and physical well being is important.
        </Box>
      </Box>
    </Grid>
  );
};

export default SomeText;
