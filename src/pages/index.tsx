import Hero from "@/components/Hero";
import HowWeMeet from "@/components/HowWeMeet";
import {Box} from "@mui/material";
import TimeMachine from "@/components/TimeMachine";
import TimeLine from "@/components/TimeLine";
import ConfirmInvite from "@/components/ConfirmInvite";

export default function Home() {
  return (
      <Box className="mb-56">
          <Hero />
          <HowWeMeet />
          <TimeMachine />
          <TimeLine />
          <ConfirmInvite />
      </Box>
  );
}