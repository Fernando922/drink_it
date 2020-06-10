import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Load = styled(ActivityIndicator).attrs({
  color: theme.colors.primary,
  size: 'large',
})``;
