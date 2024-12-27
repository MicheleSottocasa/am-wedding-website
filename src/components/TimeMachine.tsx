import timeMachineImage from "@/assets/time-machine.JPG";
import {Box} from "@mui/material";
import Image from "next/image";

export default function TimeMachine(){
    return(
        <Box>
            <Box className="flex flex-col md:flex-row items-center justify-center m-5 gap-24">
                <Image src={timeMachineImage} alt="time machine image"/>
                <Box className="flex flex-col items-center justify-center gap- md:gap-10 md:text-4xl font-extralight font-eyesome text-center">
                    <Box className="flex flex-col items-center justify-center gap-1 md:gap-8">
                        <h3>Dal primo si</h3>
                        <h3>11 Luglio 2015</h3>
                    </Box>
                    <h3>Alla tanto desiderata domanda</h3>
                    <h3>24 Luglio 2024</h3>
                </Box>
            </Box>
            <h1 className="font-eyesome text-center">Al sì del per sempre</h1>
            <h1 className="font-eyesome text-center">11 Luglio 2025</h1>
        </Box>
    )
}