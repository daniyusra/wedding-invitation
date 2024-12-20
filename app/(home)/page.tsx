"use client";

import { InvitationModal } from "@/components/modals";
import { VStack, Button, useDisclosure, Icon } from "@chakra-ui/react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { setCookie, getCookie } from "cookies-next";
import { HomeContent } from "./content";
import { getDisplayName } from "./utils";
import * as gtag from "@/libs/gtag";
import { useReportWebVitals } from "next/web-vitals";

const HomePage = () => {
  useReportWebVitals(({ id, name, label, value }: any) => {
    // Use `window.gtag` if you initialized Google Analytics as this example:
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
    gtag.event(name, {
      event_category:
        label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    });
  });

  const query = useSearchParams();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [name, setName] = useState<string | undefined>(getCookie("name"));
  const [shortName, setShortName] = useState<string | undefined>(getCookie("shortName"));
  const [partner, setPartner] = useState<boolean | undefined>(getCookie("partner") == "true");
  const [isMuted, setIsMuted] = useState<boolean>(false); // State for mute/unmute

  const audioRef = useRef<HTMLAudioElement>(null);

  const cookieOptions = useMemo(
    () => ({
      path: "/",
      maxAge: 3600,
      sameSite: true,
      secure: true,
    }),
    []
  );

  useEffect(() => {
    const to = query.get("to");
    const gender = query.get("g")?.toLowerCase();
    const married = query.get("m") === "1";
    const hasPartner = query.get("p") === "1";
    const displayName = getDisplayName({ to, gender, married, hasPartner, nicknameOnly: false});
    const displayShortName = getDisplayName({ to, gender, married, hasPartner, nicknameOnly: true});

    if (displayName) {
      setName(displayName);
      setCookie("name", displayName, cookieOptions);
    }

    if (displayShortName) {
      setShortName(displayShortName);
      setCookie("shortName", displayShortName, cookieOptions);
    }

    if (hasPartner) {
      setPartner(hasPartner);
      setCookie("partner", "true", cookieOptions);
    }
  }, [query, cookieOptions]);

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const onClosePlayMusic = () => {
    onClose();
    if (audioRef.current) {
      try {
        audioRef.current.play();
        console.log("Audio autoplay succeeded.");
      } catch (error) {
        console.warn("Autoplay prevented: User interaction required.", error);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; // Toggle mute/unmute
      setIsMuted(!isMuted); // Update state
    }
  };

  return (
    <VStack minH="100vh" justifyContent={"center"} gap={0} overflowX={"hidden"} bg="#183641">
      <InvitationModal isOpen={isOpen} onClose={onClosePlayMusic} name={name} />
      <HomeContent name={name} shortName={shortName} hasPartner={partner} />

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source
          src="https://github.com/zafirabinta/campuspedia_intern/raw/refs/heads/master/cintaku-instrumental-fix.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio tag.
      </audio>

      {/* Mute/Unmute Button */}
      <Button 
        onClick={toggleMute}
        colorScheme="blue"
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="1000"
        borderRadius="full"
        boxSize="50px"
      >
         <Icon as={isMuted ? MdVolumeOff : MdVolumeUp} w={6} h={6} color="white" />
      </Button>
    </VStack>
  );
};

export default HomePage;
