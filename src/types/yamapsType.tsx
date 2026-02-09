export type YMapOptions = {
  center: [number, number];
  zoom: number;
  controls: string[];
  [k: string]: unknown;
};

export type PlacemarkProps = {
  balloonContent?: string;
  [k: string]: unknown;
};

export type PlacemarkOptions = {
  preset?: string;
  [k: string]: unknown;
};

export interface YMaps {
  ready: (cb: () => void) => void;
  Map: new (container: HTMLElement, opts: YMapOptions) => YMapInstance;
  Placemark: new (coords: [number, number], props?: PlacemarkProps, opts?: PlacemarkOptions) => PlacemarkInstance;
}

export interface PlacemarkInstance {
  // оставляем минимально необходимые поля — подробности не нужны
  getBounds?: () => [number, number][];
}

export interface GeoObjectsCollection {
  add: (obj: PlacemarkInstance) => void;
}

export interface RoutePanelState {
  set: (obj: { [k: string]: unknown }) => void;
}

export interface RoutePanel {
  state: RoutePanelState;
}

export interface RoutePanelControl {
  routePanel: RoutePanel;
}

export interface ControlsCollection {
  get: (name: string) => RoutePanelControl;
}

export interface YMapInstance {
  geoObjects: GeoObjectsCollection;
  controls: ControlsCollection;
  destroy?: () => void;
}