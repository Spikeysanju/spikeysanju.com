import { E as EMAIL_AUTH_TOKEN, a as EMAIL_URL, b as EMAIL_FROM, c as EMAIL_NAME, d as EMAIL_TO, e as EMAIL_TO_NAME, A as AUTHOR_NAME } from "../../../../../chunks/private.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../../../chunks/public.js";
const POST = async ({ request }) => {
  const { title, amaId, comment, type, username } = await request.json();
  if (request.headers.get("X-Auth-Token") !== EMAIL_AUTH_TOKEN) {
    return new Response("Unauthorized", {
      status: 401
    });
  }
  const emailType = type === "ama" ? "ama" : "tool";
  const newCommentTemplate = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>New Comment on ${title}</title><style>body{font-family:Arial,sans-serif;background-color:#f7f7f7}h1{color:#0f172a}p{color:#334155}ul li{margin-bottom:10px;color:#334155}.email-container{max-width:600px;margin:0 auto;background-color:#fff;border-radius:8px;box-shadow:0 4px 4px rgba(0,0,0,.1);padding:12px;text-align:start;display:flex;flex-direction:column;justify-content:center;align-items:center}.header{background-color:#fff;border-top-left-radius:8px;border-top-right-radius:8px;padding:20px;text-align:center}.header img{width:150px}.body{padding:12px}.content div:first-child{margin-bottom:10px}.button{display:inline-block;background-color:#0f172a;color:#fff;border-radius:4px;padding:10px 20px;text-decoration:none;margin-top:20px}</style></head><body><div class="email-container"><div class="header"><img src="https://cdn.spikeysanju.com/brand/logo.png" alt="${AUTHOR_NAME}"></div><div class="body"><h1>New Comment on ${emailType}</h1><p>Hello ${AUTHOR_NAME},</p><p>I am writing to inform you that a new comment has been posted on your ${type} by ${username}</p><div class="content"><div><strong>${title}</strong></div><div>${comment}</div></div><a href="${PUBLIC_WEBSITE_URL}/ama/${amaId}" class="button">View Comment</a><p>Thank you</p><p>Regards, Captain Mail</p></div></div></body></html>`;
  const payload = {
    from: {
      email: EMAIL_FROM,
      name: EMAIL_NAME
    },
    to: {
      email: EMAIL_TO,
      name: EMAIL_TO_NAME
    },
    subject: "💬 New comment on your AMA",
    bodyType: "text/html",
    body: newCommentTemplate,
    reply_to: {
      email: EMAIL_FROM,
      name: EMAIL_NAME
    }
  };
  await fetch(EMAIL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": EMAIL_AUTH_TOKEN
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json()).then((result) => {
    if (result.status === "error") {
      return new Response("Something went wrong!", {
        status: 500
      });
    }
    console.log("email sent");
  }).catch((error) => {
    console.log("error", error);
    return new Response("error", {
      status: 500
    });
  });
  return new Response("email sent", {
    status: 200
  });
};
export {
  POST
};
