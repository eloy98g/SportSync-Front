import ApiResponse from "./types/ApiResponse";

const get = async (url: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Connection: "keep-alive",
      },
      method: "GET",
    });
    const resData = await response.json();
    const { status, data, message } = resData;

    if (status === "success") {
      return { status: "success", data, error: "" };
    } else {
      return { status: "error", error: message, data: null };
    }
  } catch (error) {
    console.log("[error] fetching '", url, "': ", error);
    return { status: "error", error: error.message, data: null };
  }
};

export default get;
