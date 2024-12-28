import {Box} from "@mui/material";
import Link from "next/link";

const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSeeeZSYLS63-RK4ZfhNlYawnM6GAscE3YOQhc4-1qnFFVX1AA/viewform?usp=header";
export default function ConfirmInvite() {
    return (
        <Box className="flex flex-col">
            <h1 className="text-center font-light">Se vuoi partecipare</h1>
            <h4 className="text-center text-3xl">conferma la tua presenza cliccando l'anello!</h4>
            <Box className="flex justify-center items-center gap-4 mt-16">
                <Link className="btn btn-primary" href={formLink} target="_blank"><p className="text-8xl hover:text-9xl">💍</p></Link>
            </Box>
        </Box>
    )
}