import styled from "styled-components"


const StyledButton = styled.button`
    border: 1px solid white;
    border-radius:5px;
    background-color: transparent;
    color: white;
    padding: .5rem 1.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 3rem;
    margin-right: 1rem;
    cursor: pointer;
`


export default function RuleButton({handleClick}){

    return(
        <StyledButton onClick={handleClick}>RULES</StyledButton>
    )
}