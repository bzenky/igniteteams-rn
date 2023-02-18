import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;
    padding: 16px;
    min-height: 56px;
    max-height: 56px;
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-radius: 6px;    
  `}

`