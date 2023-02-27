import { p as prisma } from "../../../../chunks/prisma.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  const tools = await prisma.tools.findUnique({
    where: {
      id: params.id
    },
    include: {
      user: true
    }
  });
  const comments = await prisma.comment.findMany({
    where: {
      toolsId: params.id
    },
    include: {
      user: true
    }
  });
  return {
    tools,
    comments
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
        toolsId: toolId,
        userId: "clcv8d4j20000no51pcp04bop"
      }
    }).then(() => {
      return redirect(303, `/tools/${toolId}`);
    }).catch((err) => {
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
