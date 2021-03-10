import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 100;
  height: 100;
  align-self: flex-end;
  object-fit: contain;
`;

export const Pokeball = styled.Image`
  width: 150px;
  height: 150px;
  align-self: flex-end;
  opacity: 10%;
  top: 10px;
  right: -15px;
  object-fit: contain;
  position: absolute;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
`;
