import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function create(activity: any) {
  const finalUrl = url + "/activity";
  const response = await post(finalUrl, activity);
  return response;
}
