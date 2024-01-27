import React from 'react'
import WeatherApp from './WeatherApp'
import BackgroudImg from './assets/Background.png'
import { Box } from '@mui/material'

const App = () => {
  return (
    <Box sx={{
      margin: 0, 
      padding: 0, 
      background: `url(${BackgroudImg}), 
      center/cover no-repeat fixed`, 
      height: '100vh', 
      overflow: 'hidden',
    }}>
    <WeatherApp />
    </Box>
  )
}

export default App
