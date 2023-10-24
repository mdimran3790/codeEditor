import React from 'react'
import {AppBar,Toolbar} from '@mui/material'
import styled from '@emotion/styled'

const Container=styled(AppBar)`
   background: #060606;
   height: 9vh;
`
const Header = () => {

  return (
     <>
       <Container position='static'>
         <Toolbar>
             
         </Toolbar>
       </Container>
     </>
  )
}

export default Header
