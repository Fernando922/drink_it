import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const ContainerInput = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-radius: 16px;
  align-self: center;
  margin-top: 24px;
  padding: 0 8px 0 8px;
  border: 1px solid ${theme.colors.gray};
  margin-bottom: 8px;
`;

export const Input = styled.TextInput.attrs({
  placeholder: 'Type here',
})`
  width: 80%;
`;

export const SearcIcon = styled(Icon).attrs({
  name: 'magnify',
  size: 24,
  color: theme.colors.gray,
})``;

export const ContainerRadios = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  padding-left: 24px;
  margin-bottom: 16px;
`;

export const RadioGroup = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`;

export const Radio = styled.View`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border: 2px solid ${theme.colors.gray};
  margin-right: 8px;
  align-items: center;
  justify-content: center;
`;

export const RadioContent = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
  display: ${(props) => (props.selected ? 'flex' : 'none')};
`;

export const OptionText = styled.Text`
  font-family: ${theme.font};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.primary,
})``;
