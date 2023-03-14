import { C as CLOUDFLARE_SECRET } from "../../../../chunks/private.js";
import { g as generateRandomId } from "../../../../chunks/utils.js";
import { f as fail } from "../../../../chunks/index.js";
const PUT = async (event) => {
  const { image, fileType } = await event.request.json();
  const user = await event.locals.getSession();
  if (!user) {
    return fail(400, {
      message: "You are not logged in"
    });
  }
  const id = generateRandomId();
  await event.fetch(`https://api.spikeysanju.com/upload/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": fileType,
      "X-CF-Secret": CLOUDFLARE_SECRET
    },
    body: Uint8Array.from(atob(image.replace(/^data[^,]+,/, "")), (v) => v.charCodeAt(0))
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    return res;
  }).catch((error) => {
    return fail(400, {
      message: "Something went wrong" + error
    });
  });
  return new Response(
    JSON.stringify({
      id,
      url: `https://cdn.spikeysanju.com/${id}`,
      fileType
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      },
      statusText: "OK"
    }
  );
};
export {
  PUT
};
