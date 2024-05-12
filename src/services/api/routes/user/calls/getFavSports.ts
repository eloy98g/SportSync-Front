import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getFavSports(gid: string) {
  const finalUrl = url + "/user/" + gid + "/favSports";
  const response = await get(finalUrl);
  return response;
}
