import React, { useRef, useEffect } from "react";
import { VStack, Button, Box, Flex, Text } from "@chakra-ui/react";

const AudioPlay = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt autoplay on component mount
    const attemptAutoplay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          console.log("Audio autoplay succeeded.");
        } catch (error) {
          console.warn("Autoplay prevented: User interaction required.", error);
        }
      }
    };
    attemptAutoplay();
  }, []);

  const handlePlay = () => audioRef.current?.play();
  const handlePause = () => audioRef.current?.pause();

  return (
    <Box
      position="fixed"
      bottom="4"
      right="4"
      p={4}
      bg="gray.800"
      borderRadius="md"
      boxShadow="lg"
      color="white"
      zIndex="1000"
    >
      {/* Music Controls */}
      <Flex direction="column" align="center" gap={2}>
        <Text fontSize="sm" fontWeight="bold">
          🎵 Background Music
        </Text>
        <Flex gap={2}>
          <Button size="sm" colorScheme="teal" onClick={handlePlay}>
            Play
          </Button>
          <Button size="sm" colorScheme="red" onClick={handlePause}>
            Pause
          </Button>
        </Flex>
      </Flex>

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="https://dl.dropboxusercontent.com/scl/fi/71k4fmwinhe6b3yk9akz0/cintaku-instrumental.mp3?rlkey=wtj2ddzm01i2v9e1ums7d9p9x&st=i571u6su&dl=0" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </Box>
  );
};

export { AudioPlay };
