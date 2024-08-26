import GameButton from "./components/GameButton"
import { useRef } from "react"
import "./App.css"
import Modal from "./components/Modal"
import Header from "./components/Hearder"
import RuleButton from "./components/RuleButton"

function App() {
  const dialog = useRef();
    
  function openModal() {
      dialog.current.showModal();
  }
  
  function closeModal(){
    dialog.current.close();
  }

  return (
    <>
      <Modal ref={dialog} closeModal={closeModal}/>
      <Header />
      <RuleButton handleClick={openModal}/>
    </>
  )
}

export default App
