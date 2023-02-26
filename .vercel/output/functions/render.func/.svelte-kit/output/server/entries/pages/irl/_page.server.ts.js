import { p as prisma } from "../../../chunks/prisma.js";
const load = async () => {
  const peopleIWannaMeetIRL = await prisma.peopleIWannaMeetIRL.findMany();
  return {
    peopleIWannaMeetIRL
  };
};
export {
  load
};
