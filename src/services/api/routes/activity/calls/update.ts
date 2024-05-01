import { url } from "../../../../../../config";
import patch from "../../../methods/patch";

export default async function update(activity: any, activityGid: string) {
  const finalUrl = url + "/activity/"+activityGid;
  const response = await patch(finalUrl, activity);
  return response;
}
