import {
  Typography,
  CardMedia,
  Box,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

export default function TimeLine () {
    return(
        <Box className="max-w-2xl flex justify-center items-center mx-auto my-28">
          <Timeline position="alternate-reverse">

            <TimelineItem>
              <TimelineOppositeContent className="flex items-center max-h-40">
                <CardMedia
                    component="img"
                    image="/assets/Chiesa.svg"
                    alt="Church image"
                    sx={{ width: 'auto', height: '100%'}}
                  />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="flex items-center justify-end">
                <Box>
                  <p className="font-sheftira">
                    Chiesa di S. Eufemia <br />
                    ore 15:00 <br />
                    CERIMONIA
                  </p>
                </Box>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent className="flex items-center justify-end max-h-40">
                <CardMedia
                    component="img"
                    image="/assets/Cascina.svg"
                    alt="Reception image"
                    sx={{ width: 'auto', maxWidth: '100%', maxHeight: '100%', marginTop: '1.5rem'}}
                  />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="flex items-center">
                  <p className="font-sheftira mt-2">
                    Cascina Ghisolfa <br />
                    ore 17:00 <br />
                    LET’S PARTY!
                  </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent className="flex justify-start items-center mt-6">
                <CardMedia
                    component="img"
                    image="/assets/Torta.png"
                    alt="Torta image"
                    sx={{ width: 'auto', height: '6rem'}}
                  />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="info"/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="flex items-center justify-end">
                  <p className="font-sheftira">
                    TORTA <br />
                    ora <i>xx</i>:00
                  </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent className="flex justify-end items-center mt-6">
                <CardMedia
                    component="img"
                    image="/assets/Disco.png"
                    alt="Disco image"
                    sx={{ width: 'auto', height: '5rem'}}
                  />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="warning"/>
              </TimelineSeparator>
              <TimelineContent className="flex items-center justify-start">
                <p className="font-sheftira">
                  NANNA O DISCO? <br />
                    ore <i>xx</i>:00
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
    )
}