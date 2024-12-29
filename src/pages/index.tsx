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
          <Box className="flex flex-col text-center mb-44">
              <h3>La felicità è la sola cosa che si raddoppia quando la si condivide. <br />
                  Grazie per la vostra presenza.</h3>
          </Box>
      </Box>
  );
}