import { url } from "../../../../../../config";
import get from "../../../methods/get";
import Response from "../../../types/Response";

export default async function getById(gid: string) {
  const finalUrl = url + "/activity/" + gid;
  const response = await get(finalUrl);
  return response;
}
