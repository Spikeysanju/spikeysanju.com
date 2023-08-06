import { p as prisma } from "../../../../chunks/prisma.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { CommentProvider } from "@prisma/client";
import { E as EMAIL_AUTH_TOKEN } from "../../../../chunks/private.js";
const load = async ({ params }) => {
  const ama = await prisma.ama.findUnique({
    where: {
      id: params.id
    },
    include: {
      user: true,
      comment: true
    }
  });
  if (!ama) {
    throw redirect(303, "/ama");
  }
  return {
    ama
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
    const amaTitle = formData.get("amaTitle");
    const comment = formData.get("comment");
    if (!comment) {
      return fail(400, {
        message: "Please fill out all fields"
      });
    }
    await prisma.comment.create({
      data: {
        content: comment,
        commentProvider: CommentProvider.ASKMEANYTHING,
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
    }).then(async () => {
      console.log("comment created");
      await event.fetch("/api/mail/new-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": EMAIL_AUTH_TOKEN
        },
        body: JSON.stringify({
          amaId,
          title: amaTitle,
          comment,
          type: "ama",
          username: session?.user?.name
        })
      }).then((res) => {
        console.log(res);
      });
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
