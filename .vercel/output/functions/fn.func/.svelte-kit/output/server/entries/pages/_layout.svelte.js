import { n as noop, c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, f as assign, i as identity, o as onDestroy, g as set_store_value, a as escape } from "../../chunks/ssr.js";
import { n as navigating, p as page } from "../../chunks/stores.js";
import { t as themeStore, s as showLoginModal, n as navigationState } from "../../chunks/store.js";
import { I as Icon } from "../../chunks/Icon.js";
import { w as writable } from "../../chunks/index2.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeStore, $$unsubscribe_themeStore;
  $$unsubscribe_themeStore = subscribe(themeStore, (value) => $themeStore = value);
  $$unsubscribe_themeStore();
  return `<nav class="flex w-full items-center justify-between py-3"><div class="flex w-full flex-row items-center justify-between" data-svelte-h="svelte-gi3usd"><a href="/" class="text-lg font-medium tracking-tight">Spikey Sanju;</a></div>  <div>${$themeStore === "light" ? `${validate_component(Icon, "Icon").$$render($$result, { name: "day", size: "medium" }, {}, {})}` : `${validate_component(Icon, "Icon").$$render($$result, { name: "night", size: "medium" }, {}, {})}`}</div></nav>`;
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_showLoginModal;
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => value);
  let dialog;
  $$unsubscribe_showLoginModal();
  return `<dialog class="shadow-3xl z-10 w-full max-w-xl items-center justify-center rounded-lg border border-gray-200 backdrop:bg-white/20 backdrop:backdrop-blur-sm open:scale-100 open:transition-transform open:duration-300 open:ease-out"${add_attribute("this", dialog, 0)}><div class="flex w-full flex-col gap-3"><div class="flex flex-col gap-3" data-svelte-h="svelte-1rjqo99"><div class="text-2xl font-medium">Welcome to Spikey&#39;s Portfolio</div> <p>You need to sign in to engage with the portfolio, including asking questions and commenting
				on Ask Me Anything and tools.</p></div> <button class="flex w-full items-center justify-center rounded-md bg-black px-2 py-2 font-medium text-white hover:bg-gray-900" data-svelte-h="svelte-13e5iyi">Sign in with GitHub</button></div></dialog>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const PageLoader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".progress-bar.svelte-w86e6h{position:fixed;top:0;left:0;right:0;height:0.5rem}.progress-sliver.svelte-w86e6h{width:var(--width);background:linear-gradient(to right, #00c3ff, #1476ff);height:100%}",
  map: null
};
const PageLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  const progress = tweened(0, { duration: 3500, easing: cubicOut });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  const unsubscribe = navigationState.subscribe((state) => {
    if (state === "loaded") {
      progress.set(1, { duration: 1e3 });
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  $$result.css.add(css);
  $$unsubscribe_progress();
  return `<div class="progress-bar svelte-w86e6h"><div class="progress-sliver svelte-w86e6h"${add_attribute("style", `--width: ${$progress * 100}%`, 0)}></div> </div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer data-svelte-h="svelte-l3vrfe"><div class="mx-auto max-w-7xl py-8 md:flex md:items-center md:justify-between"><div class="flex justify-center space-x-6 md:order-2"><a href="https://www.github.com/spikeysanju" class="text-gray-400 hover:text-gray-500"><span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a> <a href="https://www.twitter.com/spikeysanju" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a> <a href="https://www.youtube.com/@InsaneDeveloper" class="text-gray-400 hover:text-gray-500"><span class="sr-only">YouTube</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd"></path></svg></a> <a href="https://www.instagram.com/imspikeysanju" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Instagram</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a></div> <div class="mt-8 md:order-1 md:mt-0"><p class="text-center text-xs leading-5 text-gray-500">© 2023 by Spikey Sanju. All rights reserved.</p></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigationState, $$unsubscribe_navigationState;
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  let $showLoginModal, $$unsubscribe_showLoginModal;
  $$unsubscribe_navigationState = subscribe(navigationState, (value) => $navigationState = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => $showLoginModal = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    if ($navigating)
      set_store_value(navigationState, $navigationState = "loading", $navigationState);
    else
      set_store_value(navigationState, $navigationState = "loaded", $navigationState);
  }
  $$unsubscribe_navigationState();
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  $$unsubscribe_showLoginModal();
  return `${$$result.head += `<!-- HEAD_svelte-iwd2jj_START --><script async defer data-website-id="ff21a4b4-b57f-40f5-904a-e6cc43a9be17" src="https://analytics.spikeysanju.com/umami.js" data-svelte-h="svelte-4u29lj"><\/script><script async src="https://platform.twitter.com/widgets.js" charset="utf-8" data-svelte-h="svelte-s7rlcr"><\/script><meta name="theme-color" content="#000000"><meta name="msapplication-navbutton-color" content="#000000"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#ffffff"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="Spikey Sanju, Spikey, Sanju, Portfolio, UI UX Design, Android, THISUX HQ"><!-- HEAD_svelte-iwd2jj_END -->`, ""} ${$navigationState === "loading" ? `<div>${validate_component(PageLoader, "PageLoader").$$render($$result, {}, {}, {})}</div>` : ``} <main class="mx-auto bg-white px-3 font-satoshi text-black dark:bg-deeppurple dark:text-white" data-sveltekit-preload-data="hover"><div class="mx-auto max-w-2xl bg-white px-3 py-3 text-black dark:bg-deeppurple dark:text-white">${$page.data.session ? `${$page.data.session.user?.image ? `<div class="flex flex-row items-center justify-between"><div class="flex flex-row items-center space-x-3"><img${add_attribute("src", $page.data.session.user.image, 0)} class="h-9 w-9 rounded-full object-cover"${add_attribute("alt", $page.data.session.user.name, 0)}> <span><small data-svelte-h="svelte-qavuiv">Signed in as</small><br> <strong>${escape($page.data.session.user?.name ?? "User")}</strong></span></div> <button class="button" data-svelte-h="svelte-1dnrr8g">Sign out</button></div>` : ``}` : `<button data-svelte-h="svelte-1r7sx6q">Sign in with GitHub</button>`} ${data.city !== "unknown" || data.country !== "unknown" ? `<p id="lastvisit" class="text-gray-500 dark:text-gray-400">Last visit is from: ${escape(data.city)}, ${escape(data.country)}</p>` : ``} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${$showLoginModal ? `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></main>`;
});
export {
  Layout as default
};
