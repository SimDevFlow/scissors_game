import styled from "styled-components"
import GameButton from "./GameButton"
import { useEffect, useState } from "react"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: top;
    height: 20rem;
    margin: 2rem;
    padding: 1rem;
`
const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const FlexCol = styled.div`
    display: flex;
    height: 12rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Circle = styled.div`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    background-color: hsl(229, 25%, 31%);
`
let CustumText = styled.p`
    text-align:center;
    font-weight: bold;
    color: white;
    font-size: ${props => props.fontSize || "1rem"};
`
const ReplayButton = styled.button`
    background-color: white;
    width: fit-content;
    color: ${props => props.textColor || "#17223e"};
    font-size: .7rem;
    border: none;
    padding: .5rem 3rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    margin-top:.5rem;
    cursor: pointer;
`
const ReplayContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    margin: 0 2.5rem;
`
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function GameSection2({ userChoice, setUserChoice }) {
    const [pcChoice, setPcChoice] = useState("")
    const [gameEnd, setGameEnd] = useState(false)
    const [winner, setWinner] = useState(undefined)

    let finalText = ""

    useEffect(() => {
        let choice = getRandomInt(1, 3)
        setTimeout(() => {

            if (choice === 1) {
                setPcChoice("rock")
                if (userChoice === "scissor") {
                    setWinner(0)
                } else if (userChoice === "paper") {
                    setWinner(1)
                } else {
                    setWinner(undefined)
                }
            } else if (choice === 2) {
                setPcChoice("paper")
                if (userChoice === "rock") {
                    setWinner(0)
                } else if (userChoice === "scissor") {
                    setWinner(1)
                } else {
                    setWinner(undefined)
                }
            } else {
                setPcChoice("scissor")
                if (userChoice === "paper") {
                    setWinner(0)
                } else if (userChoice === "rock") {
                    setWinner(1)
                } else {
                    setWinner(undefined)
                }
            }
            setGameEnd(true)
        }, 1000)
    }, [])

    const resetGame = () => {
        setUserChoice("")
        setPcChoice("")
        setGameEnd(false)
    }
    if (winner === 1) { finalText = "YOU WIN" } else if (winner === 0) { finalText = "YOU LOSE" } else { finalText = "EQUALITY" }
    return (
        <StyledSection>
            <FlexDiv>
                <FlexCol>
                    <CustumText>YOU PICKED</CustumText>
                    <GameButton iconInside={userChoice} gameWinner={winner == 1 ? true : false} />
                </FlexCol>
                {
                    gameEnd == true ? <ReplayContainer>
                        <div>
                            <CustumText fontSize="2rem">{finalText}</CustumText>
                            <ReplayButton onClick={resetGame}>PLAY AGAIN</ReplayButton>
                        </div>
                    </ReplayContainer> : undefined
                }
                <FlexCol>
                    <CustumText>THE HOUSE PICKED</CustumText>
                    {pcChoice == "" ? <Circle /> : <GameButton iconInside={pcChoice} gameWinner={winner == 0 ? true : false} />}
                </FlexCol>
            </FlexDiv>
        </StyledSection>
    )
}