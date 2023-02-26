import { p as prisma } from "../../../../chunks/prisma.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
const load = async ({ params, locals }) => {
  const session = await locals.getSession();
  const [user, ama, comments] = await Promise.all([
    prisma.user.findUnique({
      where: {
        email: session?.user?.email
      }
    }),
    prisma.ama.findUnique({
      where: {
        id: params.id
      },
      include: {
        user: true
      }
    }),
    prisma.comment.findMany({
      where: {
        amaId: params.id
      },
      include: {
        user: true
      }
    })
  ]);
  return {
    user,
    ama,
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
    const amaId = formData.get("amaId");
    const comment = formData.get("comment");
    if (!comment) {
      return fail(400, {
        message: "Please fill out all fields"
      });
    }
    await prisma.comment.create({
      data: {
        content: comment,
        ama: {
          connect: {
            id: amaId
          }
        },
        user: {
          connect: {
            email: session?.user?.email
          }
        }
      }
    }).then(() => {
      console.log("comment created");
      return redirect(303, `/ama/${amaId}`);
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
