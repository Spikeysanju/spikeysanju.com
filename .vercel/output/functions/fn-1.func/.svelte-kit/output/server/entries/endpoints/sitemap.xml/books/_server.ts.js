import { P as PUBLIC_WEBSITE_URL } from "../../../../chunks/public.js";
import { e as generateSitemap } from "../../../../chunks/utils.js";
const GET = async ({ fetch }) => {
  const res = await fetch(`${PUBLIC_WEBSITE_URL}/api/books`);
  const posts = await res.json();
  return new Response(generateSitemap(PUBLIC_WEBSITE_URL, "books", posts), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=0, s-maxage=3600"
    },
    status: 200,
    statusText: "OK"
  });
};
export {
  GET
};
