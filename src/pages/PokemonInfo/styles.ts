import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface TypeProps extends ViewProps {
  bgColor?: string;
  isDoubleType: boolean;
}
export const DetailsContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const DetailsCard = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #fafafa;
  padding: 0 25px;
  padding-top: 30px;
`;

export const TypeInfo = styled.View<TypeProps>`
  align-items: center;
  justify-content: center;
  width: ${props => (props.isDoubleType === true ? '48% ' : '100%')};
  min-height: 30px;
  border-radius: 16px;
  background-color: ${props => (props.bgColor ? props.bgColor : '#aa9')};
`;

export const Image = styled.Image`
  width: 250;
  height: 250;
  object-fit: contain;
`;
