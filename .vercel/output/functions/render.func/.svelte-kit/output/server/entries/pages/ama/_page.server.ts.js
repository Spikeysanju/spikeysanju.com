import { p as prisma } from "../../../chunks/prisma.js";
const load = async () => {
  const ama = await prisma.ama.findMany();
  return {
    ama
  };
};
export {
  load
};
