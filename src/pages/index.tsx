import Hero from "@/components/Hero";
import HowWeMeet from "@/components/HowWeMeet";
import {Box} from "@mui/material";
import TimeMachine from "@/components/TimeMachine";

export default function Home() {
  return (
      <Box>
          <Hero />
          <HowWeMeet />
          <TimeMachine />
      </Box>
  );
}