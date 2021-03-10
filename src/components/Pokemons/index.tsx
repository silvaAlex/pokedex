import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Image, Pokeball } from './styles';
import { Card } from '../card.styles';
import { Row } from '../rowinfo.styles';
import { Label } from '../label.styles';

import { getColorTypePokemon } from '../../utils/getColorByType';

export default function Pokemons({ data }: any) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({ item }: any) => {
        return (
          <Card bgColor={getColorTypePokemon(item.types[0].name)}>
            <Row>
              <Label size={16} weight={'bold'}>
                {item.name}
              </Label>
              <Label>#{('000' + item.id).slice(-3)}</Label>
            </Row>
            <Pokeball source={require('../../assets/img/pokeball.png')} />
            <Button onPress={() => navigation.navigate('PokemonInfo', item)}>
              <Image
                source={{
                  uri: item.image_url,
                }}
              />
            </Button>
          </Card>
        );
      }}
    />
  );
}
