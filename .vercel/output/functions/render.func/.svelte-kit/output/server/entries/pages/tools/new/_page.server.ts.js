import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { p as prisma } from "../../../../chunks/prisma.js";
const actions = {
  create: async (event) => {
    const { request } = event;
    const session = await event.locals.getSession();
    if (!session) {
      throw redirect(303, "/login");
    }
    await prisma.user.findUnique({
      where: {
        email: session?.user?.email
      }
    }).then((response) => {
      if (response?.role !== "ADMIN") {
        throw redirect(303, "/");
      }
      return response;
    }).catch((error) => {
      return fail(400, {
        message: "Something went wrong" + error
      });
    });
    const formData = await request.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const image = formData.get("image");
    const link = formData.get("link");
    if (!name || !description || !image || !link) {
      return fail(400, {
        message: "Please fill out all fields"
      });
    }
    await prisma.tools.create({
      data: {
        name,
        description,
        image,
        link,
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
          location: `/tools/${response.id}`
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
  actions
};
