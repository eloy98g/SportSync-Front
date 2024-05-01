import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getAdministrated(userGid: string) {
  const finalUrl = url + "/activity?admin=" + userGid;
  const response = await get(finalUrl);
  return response;
}
