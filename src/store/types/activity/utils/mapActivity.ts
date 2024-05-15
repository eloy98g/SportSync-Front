import Activity from "../../../types/activity/Activity";
import mapLocation from "../../../types/location/utils/mapLocation";

const mapActivity = (data: any): Activity => {
  const newActivity: Activity = {
    gid: data.gid,
    location: mapLocation(data.location),
    creationDate: data.creationDate,
    startDate: data.startDate,
    duration: data.duration,
    admin: data.admin,
    visibility: data.visibility,
    access: data.access,
    name: data.name,
    description: data.description,
    sport: data.sport,
    type: data.type,
    teams: data.teams,
    playersPerTeam: data.playersPerTeam,
    status: data.status,
    chat: data.chat,
    price: data.price,
    result: data.result,
    code: data.code,
  };

  return newActivity;
};

export default mapActivity;
