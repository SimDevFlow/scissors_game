import { useState } from "react"
import scissor from "../assets/icon-scissors.svg"
import rock from "../assets/icon-rock.svg"
import paper from "../assets/icon-paper.svg"
import styled, { keyframes } from "styled-components"

const StyledButton = styled.button`
  position: relative;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #eeeeee;
  border: none;
  &::before{
    content: '';
    background: ${({firstColor}) => `linear-gradient(to bottom , #babfd2 40%,${firstColor} 50%)`};
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -1.4rem;
    z-index: -1;
  }
  
  @media (max-width: 450px) {
    height: 4.6rem;
    width: 4.6rem;
    &::before{
      margin: -1rem;
    }
  }
`
const pulse = keyframes`
    0%{
    transform: scale(.95);
    opacity: 1;
  }
  100%{
    transform: scale(3);
    opacity: 0;
  }
`
const Circle = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: ${({secondaryColor})=>`1.4rem solid ${secondaryColor}`};
  border-radius: 50%;
  position: absolute;
  top: -1.8rem;
  left: -1.4rem;
  
  @media (max-width: 450px) {
    border: 1rem solid #eba217;
    top: -1.2rem;
    left: -1.01rem;
  }
`
const PulseCircle = styled.div`
  position: absolute;
  left: -1.5rem;
  top: -1.6rem;
  width: 10rem;
  height: 10rem;
  background-color:  hsl(214, 47%, 23%);
  z-index: -10;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  animation-delay: ${props => props.nbr};
`

export default function GameButton({iconInside,gameWinner = false,handleClick}) {
  let triplePulse = <>
    <PulseCircle nbr="0s"></PulseCircle>
    <PulseCircle nbr="1s"></PulseCircle>
    <PulseCircle nbr="1.5s"></PulseCircle>
  </>
  let firstColor = '#c66b1a'
  let secondaryColor = '#eba217'
  if (iconInside == "rock") {
    iconInside = rock
    firstColor = "#921837"
    secondaryColor = "#df405e"
  }else if(iconInside == "paper"){
    iconInside = paper
    firstColor = "#2a45be"
    secondaryColor = "#4f6ef1"
  }else{
    iconInside = scissor
  }
  return (
    <StyledButton firstColor={firstColor} onClick={handleClick}>
      <Circle secondaryColor={secondaryColor}></Circle>
      {gameWinner ? triplePulse : undefined}
      <img src={iconInside} alt="" width={"50%"} />
    </StyledButton>
  )
}