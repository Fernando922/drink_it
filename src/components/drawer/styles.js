import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${theme.font};
`;