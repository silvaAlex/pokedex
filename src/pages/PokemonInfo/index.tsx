import React from 'react';
import { Container } from '../../components/container.styles';
import { Row } from '../../components/rowinfo.styles';

import { Details, DetailsCard, Image } from './styles';
import { Label } from '../../components/label.styles';
import { getColorTypePokemon } from '../../utils/getColorByType';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IPokemon } from '../../types/types';

const round = (value: number) => {
  return (value * 0.1).toFixed(1);
};

export default function PokemonDetails() {
  const route = useRoute<RouteProp<Record<string, IPokemon>, string>>();

  const { id, image_url, height, weight, types, name } = route.params;

  let color = getColorTypePokemon(types[0].name);

  return (
    <Container bgColor={color}>
      <Details>
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
            <Label text={'#2b292c'}>Height: {round(height)} M</Label>
            <Label text={'#2b292c'}>Weight: {round(weight)} Kg</Label>
          </Row>
        </DetailsCard>
      </Details>
    </Container>
  );
}
