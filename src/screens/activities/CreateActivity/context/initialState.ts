import Draft from "../../../../store/types/draft/Draft";
import { STATUS } from "../../../../hooks/useStatus";
import { SectionName } from "../sections";

const INITIAL_DRAFT: Draft = {
  sport: 1,
  teams: 2,
  playersPerTeam: 2,
  access: "public",
  type: "normal",
  price: 0,
  location: {
    address: "",
    latitude: 36.53485636626119, // TODO: user location
    longitude: -6.293364831231988,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  },
  duration: 60,
  day: Date.now(),
  hour: Date.now(),
  description: "",
};

const INITIAL_DATA = {
  draft: INITIAL_DRAFT,
  setDraft: () => {},
  setSection: () => {},
  section: "sport" as SectionName,
  status: "idle" as STATUS,
  sports: [],
};

export { INITIAL_DRAFT };
export default INITIAL_DATA;
