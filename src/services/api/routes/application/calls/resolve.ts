import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function resolve(activityGid:string, body: any) {
  const finalUrl = url + "/application/"+activityGid+"/resolve";
  const response = await post(finalUrl, body);
  return response;
}
