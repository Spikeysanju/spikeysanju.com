import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { p as prisma } from "../../../../chunks/prisma.js";
import { Role } from "@prisma/client";
const load = async ({ locals }) => {
  const session = await locals.getSession();
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email
    }
  });
  if (user?.role !== Role.ADMIN) {
    throw redirect(303, "/");
  }
};
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
      if (response?.role !== Role.ADMIN) {
        throw redirect(303, "/signin");
      }
      return response;
    }).catch((error) => {
      return fail(400, {
        message: "Something went wrong" + error
      });
    });
    const formData = await request.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const image = formData.get("image");
    const fileType = formData.get("type");
    if (!title || !description || !image || !fileType) {
      return fail(400, {
        message: "Please fill out all fields"
      });
    }
    await prisma.media.create({
      data: {
        title,
        description,
        url: image,
        type: fileType,
        user: {
          connect: {
            email: session?.user?.email
          }
        }
      }
    }).then((response) => {
      return {
        status: 303,
        message: "Success - Redirecting to /photos",
        body: response,
        headers: {
          location: "/photos"
        },
        redirect: true
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
