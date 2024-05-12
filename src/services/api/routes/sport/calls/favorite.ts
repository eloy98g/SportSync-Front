import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function favorite(sportGid: string, userGid: string) {
  const finalUrl = url + "/sport/" + sportGid + "/favorite";
  const body = {
    gid: userGid,
  };
  const response = await post(finalUrl, body);
  return response;
}
