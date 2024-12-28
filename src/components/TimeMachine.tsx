import timeMachineImage from "@/assets/time-machine.jpg";
import {Box} from "@mui/material";
import Image from "next/image";

export default function TimeMachine(){
    return(
        <Box className="h-screen flex flex-col justify-center">
            <Box className="flex flex-col md:flex-row items-center justify-center m-5 gap-24">
                <Image src={timeMachineImage} alt="time machine image" className="hidden md:block"/>
                <Box className="flex flex-col items-center justify-center gap-6 md:gap-10 text-2xl md:text-4xl font-extralight  text-center">
                    <Box className="flex flex-col items-center justify-center gap-4 md:gap-8">
                        <p>Dal primo sì</p>
                        <p className="font-eyesome text-4xl font-semibold">11 Luglio 2015</p>
                    </Box>
                    <p>Alla tanto desiderata domanda</p>
                    <p className="font-eyesome text-4xl font-semibold">24 Luglio 2024</p>
                </Box>
            </Box>
            <h1 className="text-center font-light">Al sì del per sempre</h1>
            <h1 className="font-eyesome text-center">11 Luglio 2025</h1>
        </Box>
    )
}