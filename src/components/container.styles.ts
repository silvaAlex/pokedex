import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface ContainerProps extends ViewProps {
  bgColor?: string;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${props => (props.bgColor ? props.bgColor : '#fafafa')};
`;
