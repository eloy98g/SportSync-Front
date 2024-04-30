import Activity from "../../../types/activity/Activity";

const mapActivity = (data: any): Activity => {
  const newActivity: Activity = {
    gid: data.gid,
    location: data.location,
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
  };

  console.log('newActivity',newActivity)
  return newActivity;
};

export default mapActivity;
