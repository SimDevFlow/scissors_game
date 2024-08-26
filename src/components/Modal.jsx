import styled from "styled-components"
import imgRules from "../assets/image-rules.svg"
import iconClose from "../assets/icon-close.svg"
import { forwardRef } from "react"

const StyledDialog = styled.dialog`
  border: none;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #eee;
  width: 16rem;
  height: 18rem;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`
const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`

const Modal = forwardRef( function Modal({closeModal},ref) {
    return (
        <StyledDialog ref={ref}>
            <FlexContainer>
                <h2>RULES</h2>
                <CloseButton onClick={closeModal}><img src={iconClose} /></CloseButton>
            </FlexContainer>
            <img src={imgRules} alt="" width={"100%"}/>
            <form action="dialog">
            </form>
        </StyledDialog>
    )
})

export default Modal