import { p as prisma } from "../../../../chunks/prisma.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { CommentProvider } from "@prisma/client";
const load = async ({ params }) => {
  const tools = await prisma.tools.findUnique({
    where: {
      slug: params.slug
    },
    include: {
      user: true,
      comment: true
    }
  });
  if (!tools) {
    throw redirect(303, "/tools");
  }
  return {
    tools
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
    const toolId = formData.get("toolId");
    const comment = formData.get("comment");
    if (!comment) {
      return fail(400, {
        message: "Please fill out all fields"
      });
    }
    await prisma.comment.create({
      data: {
        content: comment,
        commentProvider: CommentProvider.TOOLSIUSE,
        tools: {
          connect: {
            id: toolId
          }
        },
        user: {
          connect: {
            email: session?.user?.email
          }
        }
      }
    }).then(() => {
      return {
        status: 201,
        message: "Comment created"
      };
    }).catch((err) => {
      console.log(err);
      return fail(400, {
        message: err
      });
    });
  }
};
export {
  actions,
  load
};
