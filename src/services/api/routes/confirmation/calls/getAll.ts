import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getAll(input: any) {
  const { activityGid, userGid } = input;
  const finalUrl =
    url +
    "/confirmation" +
    (activityGid ? "?activityGid=" + activityGid : "") +
    (activityGid ? "&" : "?") +
    (userGid ? "userGid=" + userGid : "");

  const response = await get(finalUrl);
  return response;
}
