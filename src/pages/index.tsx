import Hero from "@/components/Hero";
import HowWeMeet from "@/components/HowWeMeet";
import {Box} from "@mui/material";
import TimeMachine from "@/components/TimeMachine";
import TimeLine from "@/components/TimeLine";
import ConfirmInvite from "@/components/ConfirmInvite";
import WeddingTrip from "@/components/WeddingTrip";

export default function Home() {
  return (
      <Box className="">
          <Hero />
          <HowWeMeet />
          <TimeMachine />
          <TimeLine />
          <ConfirmInvite />
          <WeddingTrip />
      </Box>
  );
}