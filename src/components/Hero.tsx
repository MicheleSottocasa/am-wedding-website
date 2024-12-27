import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import moment from "moment/moment";
import Image from "next/image";
import BackgroundImage from "@/assets/background.png"
import BackgroundMobileImage from "@/assets/background-mobile.png"
import ScrollDown from "@/components/ui/ScrollDown";


export default function Hero () {
    const [countdown, setCountdown] = useState<string>('');

    useEffect(() => {
    const weddingDate = moment("2025-07-11 01:01:00");
    const updateCountdown = () => {
      const now = moment();
      const duration = moment.duration(weddingDate.diff(now));
      setCountdown(`${duration.months()}m ${duration.days()}d ${duration.hours()}h ${duration.minutes()}m`);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 10000);
    return () => clearInterval(interval);
  }, []);

    return (
        <Box className="flex items-center w-full h-screen md:h-[90vh]">
            <Box className="hidden md:flex items-center justify-center h-screen md:h-[90vh] w-full">
                <Image
                    src={BackgroundImage}
                    className="-z-10"
                    alt=""
                    objectFit="cover"
                    objectPosition="center"
                />
            </Box>
            <Box className="flex md:hidden items-center justify-center h-screen md:h-[90vh] w-full">
                <Image
                    src={BackgroundMobileImage}
                    className="-z-10"
                    alt=""
                    objectFit="cover"
                    objectPosition="center"
                />
            </Box>
            <Box
                className="absolute top-0 left-0 w-full h-screen md:h-[90vh] flex flex-col md:gap-10 xl:gap-36 items-center justify-center font-eyesome z-10 text-white p-6 text-center"
                sx={{
                  // Gradient only applies for `md` screens and larger
                  background: "linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 0) 100%)",
                  textShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)", // Text shadow for better visibility
                }}
            >
              <h1>Andrea & Martina</h1>
              <h3 className="text">Siamo felici di annunciare il nostro matrimonio</h3>
              <h2>{countdown}</h2>
            </Box>

        <ScrollDown />
        </Box>
    );
}