// Types
import Activity from "../../../../store/types/activity/Activity";
import Location from "../../../../store/types/location/Location";
import SortBy from "../types/SortBy";

// Utils
import distanceBetween from "../../../../utils/distances/distanceBetween";

function sortActivities(
  activities: Activity[],
  sortBy: SortBy,
  userLocation: Location
) {
  return activities.slice().sort((a, b) => {
    const valueA = getValue(a, sortBy, userLocation);
    const valueB = getValue(b, sortBy, userLocation);

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });
}

function getValue(
  activity: Activity,
  criterio: SortBy,
  userLocation: Location
) {
  switch (criterio) {
    case "recent":
      return activity.creationDate;
    case "numPlayers":
      return activity.teams.reduce(
        (totalPlayers, team) => totalPlayers + team.players.length,
        0
      );
    case "closest":
      return distanceBetween(userLocation, activity.location);
  }
}

export default sortActivities;
