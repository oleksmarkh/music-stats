import {Feature, GeometryObject} from 'geojson';

export interface Artist {
  name: string;
  playcount: number;
  area: string;
}

interface AreaProperties {
  name_sort: string;
  playcount: number;
}

export type Area = Feature<GeometryObject, AreaProperties>;