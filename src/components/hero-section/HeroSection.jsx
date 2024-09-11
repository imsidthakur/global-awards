import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{position : { xs : 'static',md : 'relative' , top : 0 ,zIndex : 999}}}>
    <Grid container style={{height : "100vh" ,width : "100%"}}>
      <Grid item xl={6}>
        <Box
          style={{
            height: "100vh",
            width: "100%",
            backgroundImage:
              "url(https://globalrecognitionawards.org/wp-content/uploads/2024/04/Global-Recognition-Awards-hero-2-1024x574.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            color: "white",
          }}
        ></Box>
      </Grid>
      <Grid item xl={6}>
      <Box
          style={{
            // flex: 1,
            backgroundColor: '#002147',
            height: '100%',
            color : 'white',
            padding : '80px 60px',

          }}
        >
          <Typography variant="h2" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            GLOBAL RECOGNITION AWARDS™
          </Typography>
          <Typography variant="h4" style={{ marginBottom: '20px',fontWeight : 'bold' }}>
            Get Your Business On The Global Stage
          </Typography>
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
};

export default HeroSection;
