import { StyledForm } from "./style"

 export const Form = ({children, onSubmit}) => {

    return (
        <StyledForm onSubmit={onSubmit}>
            {children}
        </StyledForm>
    )
}

