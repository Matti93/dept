import { StyledInput, InputContainer } from './input.styled';

export function FormInputComponent(props) {

    const { value, setValue } = props;

    return <InputContainer className='sarsasa'> <StyledInput type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter name to search'
    />
    </InputContainer>
}