import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function createResult(gid: string, body: any) {
  const finalUrl = url + "/activity/" + gid + "/result";
  const response = await post(finalUrl, body);
  return response;
}
