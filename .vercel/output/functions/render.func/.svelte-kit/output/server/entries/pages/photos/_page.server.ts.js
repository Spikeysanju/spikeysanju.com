import { p as prisma } from "../../../chunks/prisma.js";
const load = async () => {
  const photos = await prisma.media.findMany({
    orderBy: {
      title: "asc"
    }
  });
  return {
    photos
  };
};
export {
  load
};
