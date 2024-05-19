import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function create(review: any) {
  const finalUrl = url + "/review";
  const response = await post(finalUrl, review);
  return response;
}
