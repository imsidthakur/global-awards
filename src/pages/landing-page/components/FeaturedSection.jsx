import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const FeaturedSection = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
        WE CELEBRATE OUTSTANDING ACHIEVEMENT
      </Typography>
      
      <Typography variant="body1" component="p" color="textSecondary" gutterBottom>
        Join the ranks of top performers and gain international recognition for your business or brand.
        Celebrate Your Business Achievements on a Global Stage with GRA
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
        <Grid item>
          <img src="https://b3024523.smushcdn.com/3024523/wp-content/uploads/2023/01/1Forbes__Noelle_Randall_.png?lossy=1&strip=1&webp=1" alt="Forbes Logo" style={{ width: '100px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src="https://b3024523.smushcdn.com/3024523/wp-content/uploads/2023/01/1Forbes__Noelle_Randall_.png?lossy=1&strip=1&webp=1" alt="Business Insider Logo" style={{ width: '100px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src="https://b3024523.smushcdn.com/3024523/wp-content/uploads/2023/01/1Forbes__Noelle_Randall_.png?lossy=1&strip=1&webp=1" alt="Entrepreneur Logo" style={{ width: '100px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src="https://b3024523.smushcdn.com/3024523/wp-content/uploads/2023/01/1Forbes__Noelle_Randall_.png?lossy=1&strip=1&webp=1" alt="Grazia Logo" style={{ width: '100px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src="https://b3024523.smushcdn.com/3024523/wp-content/uploads/2023/01/1Forbes__Noelle_Randall_.png?lossy=1&strip=1&webp=1" alt="International Business Times Logo" style={{ width: '100px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src="https://b3024523.smushcdn.com/3024523/wp-content/uploads/2023/01/1Forbes__Noelle_Randall_.png?lossy=1&strip=1&webp=1" alt="Digital Journal Logo" style={{ width: '100px', height: 'auto' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedSection;
