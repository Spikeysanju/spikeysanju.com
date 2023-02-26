import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { p as prisma } from "../../../../chunks/prisma.js";
const load = async ({ locals }) => {
  const session = await locals.getSession();
  if (!session) {
    throw redirect(303, "/signin");
  }
  return {
    user: JSON.stringify(session)
  };
};
const actions = {
  create: async (event) => {
    const { request } = event;
    const session = await event.locals.getSession();
    if (!session) {
      throw redirect(303, "/login");
    }
    const formData = await request.formData();
    const question = formData.get("question");
    const description = formData.get("description");
    const flair = formData.get("flair");
    if (!question || !description || !flair) {
      return fail(400, {
        message: "Please fill out all fields"
      });
    }
    await prisma.ama.create({
      data: {
        question,
        description,
        flair,
        user: {
          connect: {
            email: session?.user?.email
          }
        }
      }
    }).then((response) => {
      return {
        status: 303,
        headers: {
          location: `/ama/${response.id}`
        }
      };
    }).catch((error) => {
      return fail(400, {
        message: "Something went wrong" + error
      });
    });
  }
};
export {
  actions,
  load
};
