import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function create(application: any) {
  const finalUrl = url + "/application";
  const response = await post(finalUrl, application);
  return response;
}
