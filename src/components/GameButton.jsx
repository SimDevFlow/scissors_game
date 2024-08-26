import img from "../assets/icon-scissors.svg"
import styled from "styled-components"

const StyledButton = styled.button`
  position: relative;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background-color: #eeeeee;
  border: none;
  &::before{
    content: '';
    background: linear-gradient(to bottom , #babfd2 40%,#c66b1a 50%);
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -1.7rem;
    z-index: -1;
  }
`
const Circle = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: 1.7rem solid #eba217;
  border-radius: 50%;
  position: absolute;
  top: -2.4rem;
  left: -1.7rem;
`

export default function GameButton() {
    return (
        <StyledButton >
            <Circle></Circle>
            <img src={img} alt="" width={"50%"}/>
        </StyledButton>
    )
}