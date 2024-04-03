import Activity from "../../../types/activity/Activity";

const mapActivity = (data: any): Activity => {
  const newUser: Activity = {
    gid: data.gid,
    location: data.location,
    creationDate: data.creationDate,
    startDate: data.startDate,
    duration: data.duration,
    admin: data.admin,
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
    userTeam: data.userTeam,
    result: data.result,
  };

  return newUser;
};

export default mapActivity;
