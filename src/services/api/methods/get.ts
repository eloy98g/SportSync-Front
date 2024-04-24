import Response from "../types/Response";

export default async function get(url: string): Promise<Response> {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const resData = await response.json();
    const { status, data, message } = resData;

    if (status === "success") {
      return { status: "success", data, message: "" };
    } else {
      return { status: "error", message: message, data: null };
    }
  } catch (error: any) {
    console.log("[error] fetching '", url, "': ", error);
    return { status: "error", message: error.message, data: null };
  }
}