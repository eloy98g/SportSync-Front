export default interface Place {
  address: string;
  lat: number | null;
  lng: number | null;
}

export const EMPTY_PLACE: Place = {
  address: "",
  lat: null,
  lng: null,
};
