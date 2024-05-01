import { url } from "../../../../../../config";
import post from "../../../methods/post";

interface Props {
  email: string;
  password: string;
}

export default async function signUp({ email, password }: Props) {
  // const url = process.env.API_URL;
  // console.log("signup url:", url)
  const finalUrl = url + "/auth/signup";
  const response = await post(finalUrl, { email, password });
  return response;
}
