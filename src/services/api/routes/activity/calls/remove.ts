import { url } from "../../../../../../config";
import removeCall from "../../../methods/removeCall";

export default async function remove(gid: string) {
  const finalUrl = url + "/activity/" + gid;
  const response = await removeCall(finalUrl);
  return response;
}
