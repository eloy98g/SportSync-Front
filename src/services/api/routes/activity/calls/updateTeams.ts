import { url } from "../../../../../../config";
import patch from "../../../methods/patch";

export default async function updateTeams(activity: any, activityGid: string) {
  const finalUrl = url + "/activity/" + activityGid + "/teams";
  const response = await patch(finalUrl, activity);
  return response;
}
