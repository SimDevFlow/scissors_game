import styled from "styled-components"

import logo from"../assets/logo.svg"


const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: .7rem;
    border: 2px solid  hsl(217, 16%, 45%);
    width: 30rem;
    border-radius: 10px;
`

const ScoreContainer = styled.div`
    width: 6rem;
    background-color: white;
    border-radius: 10px;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const TextScore = styled.p`
    color: hsl(229, 64%, 46%);
    font-weight: 600;
    text-align: center;
    font-size: .9rem;
    `
const ScoreText = styled.p`
    color: hsl(229, 25%, 31%);
    font-weight: bold;
    text-align: center;
    font-size: 3rem;
    line-height: 2.5rem;
`

export default function Header(){
    return(
        <HeaderContainer>
            <StyledHeader>
                <img src={logo} alt="logo" />
                <ScoreContainer>
                    <TextScore>SCORE</TextScore>
                    <ScoreText>12</ScoreText>
                </ScoreContainer>
            </StyledHeader>
        </HeaderContainer>
    )
}