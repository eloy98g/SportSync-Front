import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getAll() {
  const finalUrl = url + "/sport";
  const response = await get(finalUrl);
  return response;
}
