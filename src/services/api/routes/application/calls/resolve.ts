import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function resolve(gid: string, body: any) {
  const finalUrl = url + "/application/" + gid + "/resolve";
  console.log("finalUrl", finalUrl)
  console.log('body', body)
  const response = await post(finalUrl, body);
  return response;
}
