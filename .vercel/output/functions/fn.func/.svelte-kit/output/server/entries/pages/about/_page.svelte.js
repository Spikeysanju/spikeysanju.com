import { c as create_ssr_component, b as escape, d as add_attribute } from "../../../chunks/index3.js";
import { P as PUBLIC_WEBSITE_URL } from "../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-urgoen_START -->${$$result.title = `<title>${escape(data.title)} – Spikey Sanju</title>`, ""}<meta name="${"description"}"${add_attribute("content", data.description, 0)}><link rel="${"canonical"}" href="${escape(PUBLIC_WEBSITE_URL, true) + "/about"}"><meta name="${"robots"}" content="${"index, follow"}"><!-- HEAD_svelte-urgoen_END -->`, ""}

<section><h1 class="${"text-3xl leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-snug lg:text-4xl lg:leading-tight"}">When people ask me what I do, I tell them I&#39;m a designer and an engineer. Then they give me that
		confused look, and I tell them, &quot;Think of me as a visual mechanic - I fix broken interfaces and
		give them a fresh coat of pixels.&quot; My passion for design and engineering is like a marriage - we
		may argue at times, but we always come to a happy resolution. As the founder of my own UX design
		studio, I specialize in taking a user&#39;s experience from &quot;meh&quot; to &quot;heck yeah!
	</h1></section>`;
});
export {
  Page as default
};
