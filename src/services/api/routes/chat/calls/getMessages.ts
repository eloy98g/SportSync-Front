import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getChats(chatGid:string) {
  const finalUrl = url + "/chat/"+chatGid;
  const response = await get(finalUrl);
  return response;
}
