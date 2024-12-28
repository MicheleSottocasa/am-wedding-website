import {Box} from "@mui/material";
import Image from "next/image";
import MartiImage from "@/assets/Marti.jpg";
import AndreImage from "@/assets/Andre.jpg";

export default function HowWeMeet() {
    return(
        <Box className={"flex flex-col items-center justify-center w-full p-6 md:mt-[10vh]"}>
            <h1 className="font-eyesome text-center">Come ci siamo conosciuti</h1>

            <Box className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-56 md:px-10 mt-6 w-full">
                <Box className="text-center w-full max-w-xl">
                    <h3 className="font-eyesome">Marti dice che...</h3>
                    <div className="flex justify-center my-4">
                        <Image
                            src={MartiImage}
                            alt="Martina"
                            className="rounded-full w-48 h-48 object-cover"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className="text-xl">Un giorno, nel lontano 2015, causalmente Andrea compare tra le persone che
                        potresti conoscere su Facebook.
                        Decido quindi di inoltrargli la richiesta di amicizia e da lì qualche giorno dopo inizia a
                        scrivermi e iniziamo a conoscerci…
                    </p>
                </Box>
                <Box className="text-center w-full max-w-xl">
                    <h3 className="font-eyesome">Andre dice che...</h3>
                    <div className="flex justify-center my-4">
                        <Image
                            src={AndreImage}
                            alt="Martina"
                            className="rounded-full w-48 h-48 object-cover"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className="text-xl">Una sera la vedo in un locale perché sono andato a salutare un amico che
                        era nella compagnia con cui era uscita lei,
                        la vedo, mi colpisce, e il giorno dopo vedo la sua richiesta di amicizia su Facebook, quindi con
                        la scusa che lei mi aveva chiesto l’amicizia io ho
                        iniziato una conversazione…
                    </p>
                </Box>
            </Box>
            <p className="text-xl text-center mt-10">Da quel momento in poi non abbiamo più smesso di sentirci e
                vederci!</p>
        </Box>
    )
}