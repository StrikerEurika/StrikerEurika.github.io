import { ContactFormData } from "@/components/contact";

export function sendEmail(data: ContactFormData) {
  const apiEmail = "/api/email";

  fetch(apiEmail, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((response) => {
      console.log("Server response:", response);

      if (typeof response === "string") {
        alert(response);
      } else if (response?.message) {
        alert(response.message);
      } else if (response?.error) {
        alert(`Error: ${response.error}`);
      } else {
        alert("Unexpected response from the server.");
      }
    })
    .catch((error) => {
      console.error("Error occurred:", error);
      alert(error.message || "An error occurred while sending the email.");
    });
}
