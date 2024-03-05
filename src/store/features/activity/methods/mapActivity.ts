import Activity from "../../../types/Activity";
import { EMPTY_PLACE } from "../../../types/Place";
import { EMPTY_SPORT } from "../../../types/Sport";

const mapActivity = (data: any): Activity => {
  const newUser: Activity = {
    gid: data.gid || null,
    place: data.place || EMPTY_PLACE,
    creationDate: data.creationDate || null,
    startDate: data.startDate || null,
    endDate: data.endDate || null,
    admin: data.admin || null,
    access: data.access || "public",
    name: data.name || "",
    description: data.endDate || "",
    sport: data.sport || EMPTY_SPORT,
    type: data.type || "normal",
    teams: data.teams || 0,
    playersPerTeam: data.playersPerTeam || 0,
    currentPlayers: data.currentPlayers || 0,
    status: data.status || "undefined",
    chat: data.chat || null,
  };

  return newUser;
};

export default mapActivity;
