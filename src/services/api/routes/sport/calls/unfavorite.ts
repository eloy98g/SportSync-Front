import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function unfavorite(sportGid: string, userGid: string) {
  const finalUrl = url + "/sport/" + sportGid + "/unfavorite";
  const body = {
    gid: userGid,
  };
  console.log('finalUrl',finalUrl)
  console.log('body',body)
  const response = await post(finalUrl, body);
  return response;
}
