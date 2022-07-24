import styled from 'styled-components';
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid teal;
  margin: 10px;
  padding: 25px;
  border-radius: 15px;
`;
export const ErrorMessage = styled.p`
  margin-top: 15px;
  color: red;
  width: 20rem;
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  border: 2px solid teal;
  ${(props) =>
    props.disabled &&
    `
        border-color: red;
        cursor: not-allowed;
  `}
`;
