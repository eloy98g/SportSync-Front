import { url } from "../../../../../../config";
import patch from "../../../methods/patch";

export default async function update(gid: string, body:any) {
  const finalUrl = url + "/user/" + gid;
  const response = await patch(finalUrl, body);
  return response;
}
