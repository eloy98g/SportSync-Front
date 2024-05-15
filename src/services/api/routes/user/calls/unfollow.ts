import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function unfollow(userGid: string, otherUserGid: string) {
  const finalUrl = url + "/user/" + userGid + "/unfollow";
  const body = {
    gid: otherUserGid,
  };
  const response = await post(finalUrl, body);
  return response;
}
