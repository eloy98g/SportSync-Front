import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getChats(userGid:string) {
  const finalUrl = url + "/chat?userGid="+userGid;
  const response = await get(finalUrl);
  return response;
}
