import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function resolve(gid: string, body: any) {
  const finalUrl = url + "/application/" + gid + "/resolve";
  const response = await post(finalUrl, body);
  return response;
}
