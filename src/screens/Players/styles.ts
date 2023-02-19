import styled, { css } from "styled-components/native"

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

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
  width: 100%;
`

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`