import GameButton from "./components/GameButton"
import { useRef, useState } from "react"
import "./App.css"
import Modal from "./components/Modal"
import Header from "./components/Hearder"
import RuleButton from "./components/RuleButton"
import GameSection from "./components/GameSection"
import GameSection2 from "./components/GameSection2"

function App() {
  const [userChoise, setUserChoise] = useState("")
  const [gameEnd, setGameEnd] = useState(false)
  const dialog = useRef();

  function openModal() {
    dialog.current.showModal();
  }

  function closeModal() {
    dialog.current.close();
  }

  return (
    <>
      <Modal ref={dialog} closeModal={closeModal} />
      <Header />
      {userChoise != "" ? <GameSection2 userChoice={userChoise} setUserChoice={setUserChoise} /> : <GameSection setUserChoice={setUserChoise} />}
      <RuleButton handleClick={openModal} />
    </>
  )
}

export default App
