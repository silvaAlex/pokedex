import { TextProps } from 'react-native';
import styled from 'styled-components/native';

export interface LabelProps extends TextProps {
  bgColor?: string;
  size?: number;
  weight?: string;
  text?: string;
}

export const Label = styled.Text<LabelProps>`
  color: ${props => (props.text ? props.text : '#fff')};
  font-size: ${props => (props.size ? props.size : 14)};
  text-transform: capitalize;
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
`;
