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
    const link = formData.get("link");
    const tags = formData.get("tags");
    if (!name || !link || !tags) {
      return fail(400, {
        message: "Please fill out all fields"
      });
    }
    await prisma.peopleIWannaMeetIRL.create({
      data: {
        name,
        link,
        tags,
        user: {
          connect: {
            email: session?.user?.email
          }
        }
      }
    }).then((response) => {
      return {
        status: 303,
        message: "Success - Redirecting to /irl",
        body: response,
        headers: {
          location: "/irl"
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
