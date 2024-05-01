import { url } from "../../../../../../config";
import post from "../../../methods/post";

interface Props {
  email: string;
  password: string;
}
export default async function signIn({ email, password }: Props) {
  const finalUrl = url + "/auth/signin";
  const response = await post(finalUrl, { email, password });
  return response;
}
