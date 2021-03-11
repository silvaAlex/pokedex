import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface ProgressBarProps extends ViewProps {
  bgColor?: string;
  width?: string;
}

export const Bar = styled.View`
  height: 20;
  width: '100%';
  background-color: #e0e0de;
  border-radius: 50;
  margin: 50;
`;

export const ProgressBar = styled.View<ProgressBarProps>`
  height: 100%;
  width: ${props => (props.width ? props.width : '100%')};
  background-color: ${props => (props.bgColor ? props.bgColor : '##d43942')};
  border-radius: inherit;
  text-align: right;
`;
