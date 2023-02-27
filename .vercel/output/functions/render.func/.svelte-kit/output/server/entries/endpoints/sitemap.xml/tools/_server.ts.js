import { p as prisma } from "../../../../chunks/prisma.js";
import { d as generateSitemapForAma } from "../../../../chunks/utils.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../../chunks/public.js";
const GET = async () => {
  const tools = await prisma.tools.findMany();
  return new Response(generateSitemapForAma(PUBLIC_WEBSITE_URL, "tools", tools), {
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
