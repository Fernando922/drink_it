import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';
import theme from '../../theme';
import { STATUS_BAR_IOS } from '../../utils/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
  padding-top: ${Platform.OS === 'ios' ? STATUS_BAR_IOS : 0};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${theme.fontBold};
  color: ${theme.colors.background};
`;

export const ContainerTextHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextVersion = styled.Text`
  font-size: 14px;
  font-family: ${theme.fontBold};
  color: ${theme.colors.background};
`;

export const Header = styled.View`
  flex: 2;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.gray};
  padding: 8px;
  justify-content: space-between;
`;

export const ContainerImage = styled.ImageBackground`
  height: 72px;
  width: 72px;
  border-radius: 36px;
  background-color: ${theme.colors.primary};
  overflow: hidden;
  border: 2px solid ${theme.colors.background};
`;

export const Body = styled.View`
  flex: 7;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.gray};
  padding: 8px;
`;

export const TitleGroup = styled.Text`
  color: ${theme.colors.gray};
  font-size: 16px;
  font-family: ${theme.fontBold};
  margin-bottom: 16px;
`;

export const ButtonRoute = styled.TouchableOpacity`
  margin-bottom: ${(props) => (props.last ? '24px' : '8px')};
  margin-left: 8px;
`;

export const TextButtonRoute = styled.Text`
  color: ${theme.colors.background};
  font-family: ${theme.fontBold};
  font-size: 16px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ButtonExit = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 8px;
`;

export const ButtonExitIcon = styled(Icon).attrs({
  name: 'logout-variant',
  color: theme.colors.background,
  size: 24,
})`
  margin-right: 4px;
`;

export const ButtonExitText = styled.Text`
  color: ${theme.colors.background};
  font-family: ${theme.fontBold};
  font-size: 16px;
`;
