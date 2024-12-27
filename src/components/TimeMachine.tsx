import timeMachineImage from "@/assets/time-machine.JPG";
import {Box} from "@mui/material";
import Image from "next/image";

export default function TimeMachine(){
    return(
        <Box>
            <Image src={timeMachineImage} alt="time machine image" />
        </Box>
    )
}