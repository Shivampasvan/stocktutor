import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Homepage from '../data/Homepage.gif'

const First = () => {
  return (
    <>
        <Box>
        <Image src={Homepage} margin={'auto'}></Image>
        </Box>
    </>
  )
}

export default First