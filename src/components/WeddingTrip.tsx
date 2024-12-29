import {Box, Modal, IconButton, CardMedia} from "@mui/material";
import { Button } from "@mui/base";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function WeddingTrip() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="flex flex-col justify-center h-screen">
      <h1 className="text-center font-light">Viaggio di nozze</h1>
      <h4 className="text-center text-3xl">
        Se vuoi contribuire alla nostra avventura da organizzare
      </h4>
      <Button
        onClick={handleOpen}
        className="flex justify-center items-center gap-4 mt-16 text-5xl underline underline-offset-[15px]"
      >
        Clicca qui!
      </Button>

      {/* Popup Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-lg w-11/12 md:w-4/5 max-w-11/12 h-5/6 md:h-3/4"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
              <Box className="w-full">
                <h3 id="popup-title" className="text-center text-3xl md:text-5xl">
                  Ecco tutti i dettagli per contribuire
                </h3>
              </Box>
              <IconButton onClick={handleClose}>
                <CloseIcon />
               </IconButton>
          </Box>
          <Box id="popup-description" className="text-xl text-center">
              <p>Ti chiediamo di inviare un bonifico al seguente iban</p>
              <p className="font-semibold">IT60M0306950900100000001234</p>
              <p>Intestato a <b>Martina Mazza</b>, con causale <b>Viaggio di nozze <i>Cognome Nome</i></b></p>
              <CardMedia
                    component="img"
                    image="/assets/luna-di-miele.jpg"
                    alt="Wedding trip image"
                    sx={{maxHeight: '50vh', width: 'auto', margin: 'auto', marginTop: '2rem'}}
                  />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}