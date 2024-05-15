import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function create(input:any) {
  const finalUrl = url + "/confirmation";
  const response = await post(finalUrl, input);
  return response;
}
