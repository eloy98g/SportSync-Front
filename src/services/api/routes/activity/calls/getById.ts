import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getById(gid: string) {
  const finalUrl = url + "/activity/" + gid;
  const response = await get(finalUrl);
  return response;
}
