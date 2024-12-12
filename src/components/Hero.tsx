import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import moment from "moment/moment";
import Image from "next/image";
import BackgroundImage from "@/assets/background.png"
import BackgroundMobileImage from "@/assets/background-mobile.png"


export default function Hero () {
    const [countdown, setCountdown] = useState<string>('');

    useEffect(() => {
    const weddingDate = moment("2025-07-11");
    const updateCountdown = () => {
      const now = moment();
      const duration = moment.duration(weddingDate.diff(now));
      setCountdown(`${duration.months()}m ${duration.days()}d ${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

    return (
        <Box className="flex items-center w-full h-screen">
            <Box className="hidden md:flex items-center justify-center h-screen w-full">
                <Image
                    src={BackgroundImage}
                    className="-z-10"
                    alt=""
                    objectFit="cover"
                    objectPosition="center"
                />
            </Box>
            <Box className="flex md:hidden items-center justify-center h-screen w-full">
                <Image
                    src={BackgroundMobileImage}
                    className="-z-10"
                    alt=""
                    objectFit="cover"
                    objectPosition="center"
                />
            </Box>
            <Box className="absolute top-0 left-0 w-full h-screen flex flex-col md:gap-10 xl:gap-36 items-center justify-center font-eyesome z-10 text-white bg-black/40 p-6 text-center"
            >
                <h1>Andrea & Martina</h1>
                <h3 className="text">Siamo felici di annunciare il nostro matrimonio</h3>
                <h2>{countdown}</h2>
            </Box>
        </Box>
    );
}