import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Form = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.GRAY_700};

`