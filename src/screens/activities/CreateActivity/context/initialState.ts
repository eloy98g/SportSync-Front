import Draft from "../../../../store/types/draft/Draft";
import { STATUS } from "../../../../hooks/useStatus";
import { SectionName } from "../sections";

const INITIAL_DRAFT: Draft = {
  sport: 1,
  teams: 2,
  playersPerTeam: 1,
  access: "public",
  type: "normal",
  price: 0,
  place: {
    address: "",
    lat: null,
    lng: null,
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
