import { url } from "../../../../../../config";
import get from "../../../methods/get";

export default async function getReportReasons() {
  const finalUrl = url + "/report";
  const response = await get(finalUrl);
  return response;
}
