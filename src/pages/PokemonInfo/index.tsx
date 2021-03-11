import React from 'react';
import { Container } from '../../components/container.component';
import { Row } from '../../components/row.component';

import { DetailsCard, DetailsContainer, Image, TypeInfo } from './styles';
import { Label } from '../../components/label.component';
import { getColorTypePokemon } from '../../utils/getColorByType';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { IPokemon } from '../../types/types';

const round = (value: number) => {
  return (value * 0.1).toFixed(1);
};

export default function PokemonDetails() {
  const route = useRoute<RouteProp<Record<string, IPokemon>, string>>();

  const { id, image_url, height, weight, types, name } = route.params;
  const navigation = useNavigation();

  let color = getColorTypePokemon(types[0].name);
  navigation.setOptions({ headerStyle: { backgroundColor: color } });

  return (
    <Container bgColor={color}>
      <DetailsContainer>
        <Row>
          <Label size={16} weight="bold">
            {name}
          </Label>
          <Label>#{('000' + id).slice(-3)}</Label>
        </Row>
        <Image
          source={{
            uri: image_url,
          }}
        />
        <DetailsCard>
          <Row>
            {types.map(type => {
              return (
                <TypeInfo
                  bgColor={getColorTypePokemon(type.name)}
                  isDoubleType={types.length >= 2}
                >
                  <Label>{type.name}</Label>
                </TypeInfo>
              );
            })}
          </Row>
          <Row>
            <Label text={'#2b292c'}>Height: {round(height)} M</Label>
            <Label text={'#2b292c'}>Weight: {round(weight)} Kg</Label>
          </Row>
        </DetailsCard>
      </DetailsContainer>
    </Container>
  );
}
