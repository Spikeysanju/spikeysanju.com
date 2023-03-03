import { p as prisma } from "../../../chunks/prisma.js";
const load = async () => {
  const tools = await prisma.tools.findMany({
    orderBy: {
      name: "asc"
    }
  });
  return {
    tools
  };
};
export {
  load
};
