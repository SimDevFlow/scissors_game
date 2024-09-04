import styled from "styled-components"
import GameButton from "./GameButton"
import triangle from "../assets/bg-triangle.svg"


const StyledSection = styled.section`
    height: 20rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem;
    padding: 1rem;
`
const StyledDiv1 = styled.div`
    display: flex;
    justify-content: space-around;
`
const StyledDiv2 = styled.div`
    display: flex;
    justify-content: center;
`
const Spacer = styled.div`
    width: 8rem;
`
const TriangleContainer = styled.div`
    position: absolute;
    /* background-color: red; */
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 70%;
    }
`
export default function GameSection({setUserChoice}) {
    
    const hadleUserClick = (buttonType)=>{
        console.log(buttonType)
        setUserChoice(buttonType)
    }
    return (
        <StyledSection>
            <StyledDiv1>
                <GameButton iconInside={"paper"} handleClick={()=>hadleUserClick("paper")}/>
                <Spacer/>
                <GameButton  handleClick={()=>hadleUserClick("scissor")}/>
            </StyledDiv1>
            <StyledDiv2>
                <GameButton iconInside={"rock"}  handleClick={()=>hadleUserClick("rock")}/>
            </StyledDiv2>
            <TriangleContainer>
                <img src={triangle} alt="" />
            </TriangleContainer>
        </StyledSection>
    )
}