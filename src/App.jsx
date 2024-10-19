import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import Buttons from './components/Buttons'
import Container from './components/Container'
import Input from './components/Input'

function App() {
  const [calVal, setCalVal] = useState("")
  function onButtonClick(button){
          console.log(button) 
    if(button === "C"){
      setCalVal("")
    }
    else if(button === "Del"){
      let DelValue = calVal.slice(0,-1)
      setCalVal(DelValue)
    }
    else if(button === "="){
         setCalVal(eval)
    }
    else{
        let newVal = calVal+ button 
        setCalVal(newVal)
    }
          
  }

  let buttons = ["C" , "Del" , "/" , "%" ,"0" ,"1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"0"  ,"." ,"=" ,"+" , "-" , "*" ]
  


  return (
    <>
    <Container>
      <Head></Head>
      <Input calVal = {calVal}></Input> 
      <Buttons buttons={buttons} onButtonClick = {onButtonClick}></Buttons>
    </Container>
    </>
  )
}

export default App
