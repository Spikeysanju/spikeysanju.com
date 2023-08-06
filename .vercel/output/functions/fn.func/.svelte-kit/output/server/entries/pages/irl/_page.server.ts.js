import { p as prisma } from "../../../chunks/prisma.js";
const load = async () => {
  return {
    peopleIWannaMeetIRL: await prisma.peopleIWannaMeetIRL.findMany()
  };
};
export {
  load
};
