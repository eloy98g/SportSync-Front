import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getAll(activityGid: string, input: any) {
  const finalUrl =
    url + "/application/" + activityGid + (input ? "?" + input : "");
  const response = await get(finalUrl);
  return response;
}
