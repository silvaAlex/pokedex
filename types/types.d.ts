export interface ITypes {
  slot: number;
  name: string;
}

export interface IStats {
  base_stat: number;
  effort: number;
  name: string;
}

export interface IPokemon {
  id: number;
  name: string;
  image_url: string;
  height: number;
  weight: number;
  types: ITypes[];
  stats: IStats[];
}
