import CustomNavbar from '@components/custom-navbar/CustomNavbar'
import HeroSection from '@components/hero-section/HeroSection'
import { Box } from '@mui/material'
import React from 'react'
import FeaturedSection from './components/FeaturedSection'

export default function LandingPage() {
  return (
   <> <Box >
      <Box sx={{position : 'relative'}}>
      <CustomNavbar/>
       <HeroSection/>
      </Box>
    </Box>
      <FeaturedSection/></>
  )
}
