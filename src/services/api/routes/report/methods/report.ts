import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function report(input: any) {
  const finalUrl = url + "/report";
  const response = await post(finalUrl, input);
  return response;
}
