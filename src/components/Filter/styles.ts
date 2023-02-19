import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
  ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700}
  `}

  justify-content: center;
  align-items: center;
  width: 70px;
  height: 38px;
  margin-right: 12px;
  border-radius: 4px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.WHITE};
  `}

  text-transform: uppercase;
`