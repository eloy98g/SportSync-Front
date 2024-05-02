import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getAll(activityGid: string) {
  const finalUrl = url + "/application/" + activityGid
  const response = await get(finalUrl);
  return response;
}
