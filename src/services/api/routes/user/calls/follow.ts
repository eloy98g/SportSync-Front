import { url } from "../../../../../../config";
import post from "../../../methods/post";

export default async function follow(userGid: string, otherUserGid: string) {
  const finalUrl = url + "/user/" + userGid + "/follow";
  const body = {
    gid: otherUserGid,
  };
  const response = await post(finalUrl, body);
  return response;
}
