import { url } from "../../../../../../config";
import removeCall from "../../../methods/removeCall";

export default async function removePlayers(activity: any, activityGid: string) {
  const finalUrl = url + "/activity/" + activityGid + "/players";
  const response = await removeCall(finalUrl, activity);
  return response;
}
