import axios from "axios";

const user_id = process.env.REACT_APP_USER_ID;
const api_key = process.env.REACT_APP_API_KEY;
const sender_id = process.env.REACT_APP_SENDER_ID;

export const sendSms = async (message, number) => {
  // Ensure the number is a string and prepend "94" if it doesn't start with "94"
  number = String(number);
  if (!number.startsWith("94")) {
    number = `94${number}`;
  }

  // Validate the phone number format
  const phoneNumberPattern = /^947\d{8}$/;
  if (!phoneNumberPattern.test(number)) {
    return {
      status: "error",
      errors: [
        "The 'to' format is invalid. The 'to' must be in the format '947XXXXXXXX'.",
      ],
    };
  }

  const url = `https://app.notify.lk/api/v1/send?user_id=${user_id}&api_key=${api_key}&sender_id=${sender_id}&to=${number}&message=${encodeURIComponent(
    message
  )}`;
  try {
    const response = await axios.post(url);
    return response.data;
  } catch (error) {
    return { status: "error", errors: [error.message] };
  }
};
