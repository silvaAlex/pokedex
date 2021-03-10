import { ViewProps } from "react-native";
import styled from "styled-components/native";

export interface CardProps extends ViewProps {
  bgColor?: string;
}

export const Card = styled.View<CardProps>`
  flex: 1;
  flex-grow: 1;
  align-items: center;
  margin: 4px;
  border-radius: 20px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#aa9")};
`;
