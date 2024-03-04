type PlayArea = {
  lat: number | null;
  lng: number | null;
  radius: number | null;
};

export const EMPTY_PLAYAREA: PlayArea = {
  lat: null,
  lng: null,
  radius: null,
};

export default PlayArea;
