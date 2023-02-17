import { c as create_ssr_component, d as add_attribute, b as escape, v as validate_component, f as createEventDispatcher, g as getContext, h as subscribe, i as null_to_empty, e as each, o as onDestroy, j as get_store_value, s as setContext } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
import Fuse from "fuse.js";
const app = "";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  const icons = {
    day: {
      box: 24,
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.998 22H10.998V19H12.998V22ZM18.362 19.778L16.241 17.657L17.655 16.243L19.777 18.365L18.364 19.778H18.362ZM5.63405 19.778L4.21905 18.364L6.33905 16.242L7.75405 17.656L5.63405 19.777V19.778ZM11.998 17.007C9.23302 17.0059 6.99231 14.7637 6.99305 11.9987C6.99378 9.23364 9.23568 6.99263 12.0007 6.993C14.7657 6.99337 17.007 9.23497 17.007 12C17.0043 14.7649 14.763 17.0053 11.998 17.007ZM11.998 8.993C10.3376 8.9941 8.99231 10.3409 8.99305 12.0013C8.99378 13.6618 10.3403 15.0074 12.0007 15.007C13.6612 15.0066 15.007 13.6605 15.007 12C15.0054 10.3392 13.6589 8.99355 11.998 8.993ZM21.998 13H18.998V11H21.998V13ZM4.99805 13H1.99805V11H4.99805V13ZM17.654 7.758L16.241 6.343L18.362 4.221L19.777 5.636L17.655 7.757L17.654 7.758ZM6.34105 7.758L4.22105 5.637L5.63605 4.223L7.75605 6.345L6.34205 7.757L6.34105 7.758ZM12.998 5H10.998V2H12.998V5Z" fill="#2E3A59"></path></svg>`
    },
    night: {
      box: 24,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`
    }
  };
  const icon = icons[name];
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<svg${add_attribute("class", $$props.class, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 " + escape(icon.box, true) + " " + escape(icon.box, true)}" fill="${"none"}" stroke="${"currentColor"}"><!-- HTML_TAG_START -->${icon.svg}<!-- HTML_TAG_END --></svg>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex w-full py-3"}"><div class="${"flex w-full flex-row items-center justify-between"}"><a href="${"/"}" class="${"text-lg font-bold tracking-tight"}">Spikey Sanju;</a>

		${validate_component(Icon, "Icon").$$render($$result, { name: "night", width: "20", height: "20" }, {}, {})}</div></nav>`;
});
async function signIn(providerId, options, authorizationParams) {
  const { callbackUrl = window.location.href, redirect = true } = options ?? {};
  const isCredentials = providerId === "credentials";
  const isEmail = providerId === "email";
  const isSupportingReturn = isCredentials || isEmail;
  const signInUrl = `/auth/${isCredentials ? "callback" : "signin"}/${providerId}`;
  const _signInUrl = `${signInUrl}?${new URLSearchParams(authorizationParams)}`;
  const csrfTokenResponse = await fetch("/auth/csrf");
  const { csrfToken } = await csrfTokenResponse.json();
  const res = await fetch(_signInUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Auth-Return-Redirect": "1"
    },
    // @ts-expect-error -- ignore
    body: new URLSearchParams({
      ...options,
      csrfToken,
      callbackUrl
    })
  });
  const data = await res.clone().json();
  const error = new URL(data.url).searchParams.get("error");
  if (redirect || !isSupportingReturn || !error) {
    window.location.href = data.url ?? callbackUrl;
    if (data.url.includes("#"))
      window.location.reload();
    return;
  }
  return res;
}
async function signOut(options) {
  const { callbackUrl = window.location.href } = options ?? {};
  const csrfTokenResponse = await fetch("/auth/csrf");
  const { csrfToken } = await csrfTokenResponse.json();
  const res = await fetch(`/auth/signout`, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Auth-Return-Redirect": "1"
    },
    body: new URLSearchParams({
      csrfToken,
      callbackUrl
    })
  });
  const data = await res.json();
  const url = data.url ?? callbackUrl;
  window.location.href = url;
  if (url.includes("#"))
    window.location.reload();
}
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target = "body" } = $$props;
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const paletteStore = writable({
  isVisible: false,
  textInput: "",
  commands: [],
  storeMethods: {},
  actionMap: {},
  activeCommandId: 0,
  selectedCommandId: 0,
  calledActions: [],
  results: []
});
const noop = () => true;
const defineActions = (actions = []) => {
  return actions.map(({ actionId = Math.random(), canActionRun = noop, title = "", subTitle = "", onRun = noop, description, keywords = [], shortcut = "" }) => {
    return {
      actionId,
      canActionRun,
      title,
      subTitle,
      onRun,
      description,
      keywords,
      shortcut
    };
  });
};
const createFuse = (actions) => new Fuse(actions, {
  keys: [
    {
      name: "title",
      weight: 1
    },
    {
      name: "subtitle",
      weight: 0.7
    },
    {
      name: "description",
      weight: 0.6
    },
    {
      name: "keywords",
      weight: 0.5
    }
  ]
});
const getNonEmptyArray = (...args) => {
  return args.find((array = []) => array.length > 0) || [];
};
const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
const toCssString = (props = {}) => props ? (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Object.keys(props).reduce((str, key) => `${str}; ${camelCaseToDash(key)}: ${props[key]}`, "")
) : "";
const defaultAppState = {
  isVisible: false,
  textInput: "",
  activeCommandId: null,
  selectedCommandId: null,
  results: []
};
const THEME_CONTEXT = "themeContext";
const KeyboardButton_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".keyboardButton.svelte-1chuwcc{background:#cbd5e0;padding:0.25rem 0.5rem;box-shadow:0 0 0 0px #fff, 0, 0 1px 2px rgb(0 0 0/0.05) 0 0 #0000;border:2px solid #cbd5e0;color:#718096;font-size:14px;border-radius:4px}",
  map: null
};
const KeyboardButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeContext, $$unsubscribe_themeContext;
  createEventDispatcher();
  const themeContext = getContext(THEME_CONTEXT);
  $$unsubscribe_themeContext = subscribe(themeContext, (value) => $themeContext = value);
  const { unstyled, keyboardButtonClass, keyboardButtonStyle } = $themeContext;
  $$result.css.add(css$3);
  $$unsubscribe_themeContext();
  return `<button${add_attribute("style", keyboardButtonStyle, 0)} class="${[
    escape(null_to_empty(keyboardButtonClass), true) + " svelte-1chuwcc",
    !unstyled ? "keyboardButton" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</button>`;
});
const Result_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".resultContainer.svelte-m0qryc{padding:1rem;border-bottom:1px solid #f7fafc;display:flex;justify-content:space-between;align-items:center}.selected.svelte-m0qryc{background:#edf2f7}.title.svelte-m0qryc{font-weight:400}.subtitle.svelte-m0qryc{font-size:13px;margin:8px 0;color:#2d3748}.description.svelte-m0qryc{font-size:10px;color:#2d3748}.shortcuts.svelte-m0qryc{display:flex;gap:0.375rem}",
  map: null
};
const Result = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_paletteStore;
  let $themeContext, $$unsubscribe_themeContext;
  $$unsubscribe_paletteStore = subscribe(paletteStore, (value) => value);
  let { action } = $$props;
  let elRef;
  let isActive;
  let formattedShortcut = [];
  const themeContext = getContext(THEME_CONTEXT);
  $$unsubscribe_themeContext = subscribe(themeContext, (value) => $themeContext = value);
  const { resultContainerClass, unstyled, optionSelectedClass, titleClass, subtitleClass, descriptionClass, resultContainerStyle, titleStyle, subtitleStyle, descriptionStyle, optionSelectedStyle } = $themeContext;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  $$result.css.add(css$2);
  $$unsubscribe_paletteStore();
  $$unsubscribe_themeContext();
  return `<li class="${[
    escape(
      null_to_empty(`${resultContainerClass} ${""}`),
      true
    ) + " svelte-m0qryc",
    !unstyled ? "resultContainer" : ""
  ].join(" ").trim()}"${add_attribute("style", `${resultContainerStyle} ${""}`, 0)}${add_attribute("aria-selected", isActive, 0)} role="${"option"}"${add_attribute("this", elRef, 0)}><div><h4${add_attribute("style", titleStyle, 0)} class="${[
    escape(null_to_empty(titleClass), true) + " svelte-m0qryc",
    !unstyled ? "title" : ""
  ].join(" ").trim()}">${escape(action.title)}</h4>
		<p${add_attribute("style", subtitleStyle, 0)} class="${[
    escape(null_to_empty(subtitleClass), true) + " svelte-m0qryc",
    !unstyled ? "subtitle" : ""
  ].join(" ").trim()}">${escape(action.subTitle)}</p>
		<p${add_attribute("style", descriptionStyle, 0)} class="${[
    escape(null_to_empty(descriptionClass), true) + " svelte-m0qryc",
    !unstyled ? "description" : ""
  ].join(" ").trim()}">${escape(action.description || "")}</p></div>
	<div class="${"shortcuts svelte-m0qryc"}">${each(formattedShortcut, (shortcut) => {
    return `${validate_component(KeyboardButton, "KeyboardButton").$$render($$result, {}, {}, {
      default: () => {
        return `<span>${escape(shortcut)}</span>
			`;
      }
    })}`;
  })}</div>
</li>`;
});
const ResultPanel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".results.svelte-1pfdcoe{width:100%;list-style-type:none;background:white;overflow:scroll}.no-results.svelte-1pfdcoe{display:flex;align-items:center;justify-content:center;height:100%}",
  map: null
};
const ResultPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeContext, $$unsubscribe_themeContext;
  let actions = [];
  const unsubscribe = paletteStore.subscribe((value) => {
    actions = value.results.length > 0 ? getNonEmptyArray(value.results) : getNonEmptyArray(value.commands);
  });
  const themeContext = getContext(THEME_CONTEXT);
  $$unsubscribe_themeContext = subscribe(themeContext, (value) => $themeContext = value);
  const { resultsContainerClass, unstyled, resultsContainerStyle } = $themeContext;
  onDestroy(unsubscribe);
  $$result.css.add(css$1);
  $$unsubscribe_themeContext();
  return `${actions.length > 0 ? `<ul class="${[
    escape(null_to_empty(resultsContainerClass), true) + " svelte-1pfdcoe",
    !unstyled ? "results" : ""
  ].join(" ").trim()}"${add_attribute("style", resultsContainerStyle, 0)} role="${"listbox"}">${each(actions, (action) => {
    return `${validate_component(Result, "Result").$$render($$result, { action }, {}, {})}`;
  })}</ul>` : `<div class="${"no-results svelte-1pfdcoe"}"><span>No results found</span></div>`}`;
});
const createStoreMethods = () => {
  const storeProps = get_store_value(paletteStore);
  const resetPaletteStore = () => {
    paletteStore.update((n) => ({ ...n, ...defaultAppState }));
  };
  const openPalette = () => {
    paletteStore.update((n) => ({ ...n, isVisible: true }));
  };
  const closePalette = () => {
    resetPaletteStore();
  };
  const togglePalette = () => {
    paletteStore.update((n) => ({
      ...n,
      isVisible: !n.isVisible,
      activeCommandId: ""
    }));
  };
  const getAllCalledActions = () => {
    return storeProps.calledActions || [];
  };
  const storeCalledAction = (id) => {
    const { calledActions } = storeProps;
    calledActions.push(id);
    paletteStore.update((n) => ({ ...n, calledActions }));
  };
  const revertLastAction = (id) => {
    const { calledActions } = storeProps;
    calledActions.pop();
    paletteStore.update((n) => ({ ...n, calledActions }));
  };
  const resetActionLog = () => {
    paletteStore.update((n) => ({ ...n, calledActions: [] }));
  };
  return {
    togglePalette,
    getAllCalledActions,
    storeCalledAction,
    revertLastAction,
    resetActionLog,
    openPalette,
    closePalette,
    resetPaletteStore
  };
};
const createActionMap = (commands = []) => {
  return commands.reduce((acc, curr) => {
    const { actionId = "" } = curr;
    acc[actionId] = curr;
    return acc;
  }, {});
};
const CommandPalette_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-mqok30{position:fixed;top:0;left:0;height:100vh;width:100vw;background:transparent;display:flex;justify-content:center;padding:calc(13vh - -0.36px) 16px 16px}.paletteWrapper *{box-sizing:border-box}.paletteWrapper,.paletteWrapperInner.svelte-mqok30{position:relative;width:60%;max-width:640px;max-height:400px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:0 auto;display:flex;flex-direction:column;box-shadow:rgba(149, 157, 165, 0.2) 0px 8px 24px}.paletteWrapperInner.svelte-mqok30{width:100%}form.svelte-mqok30{width:100%}.paletteInput.svelte-mqok30{width:100%;padding:1rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none}.paletteInput.svelte-mqok30::-moz-placeholder{font-size:20px}.paletteInput.svelte-mqok30:-ms-input-placeholder{font-size:20px}.paletteInput.svelte-mqok30::placeholder{font-size:20px}.paletteInput[type='search'].svelte-mqok30::-webkit-search-decoration,.paletteInput[type='search'].svelte-mqok30::-webkit-search-cancel-button,.paletteInput[type='search'].svelte-mqok30::-webkit-search-results-button,.paletteInput[type='search'].svelte-mqok30::-webkit-search-results-decoration{-webkit-appearance:none}.paletteInput.svelte-mqok30:focus{outline:none}label.svelte-mqok30{display:none}.shortcut.svelte-mqok30{position:absolute;right:0;top:0;transform:translate(-50%, 40%)}@media(max-width: 640px){.paletteWrapper,.paletteWrapperInner.svelte-mqok30{width:100%;height:100vh;max-height:100vh}.wrapper.svelte-mqok30{padding:0}}",
  map: null
};
const searchInputId = "paletteInput";
const CommandPalette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $paletteStore, $$unsubscribe_paletteStore;
  $$unsubscribe_paletteStore = subscribe(paletteStore, (value) => $paletteStore = value);
  let { commands = [] } = $$props;
  let { placeholder = "Search for an action" } = $$props;
  let { inputClass = null } = $$props;
  let { overlayClass = null } = $$props;
  let { paletteWrapperInnerClass = null } = $$props;
  let { resultsContainerClass = null } = $$props;
  let { resultContainerClass = null } = $$props;
  let { optionSelectedClass = null } = $$props;
  let { titleClass = null } = $$props;
  let { subtitleClass = null } = $$props;
  let { descriptionClass = null } = $$props;
  let { keyboardButtonClass = null } = $$props;
  let { unstyled = false } = $$props;
  let { inputStyle = {} } = $$props;
  let { overlayStyle = {} } = $$props;
  let { paletteWrapperInnerStyle = {} } = $$props;
  let { resultsContainerStyle = {} } = $$props;
  let { resultContainerStyle = {} } = $$props;
  let { optionSelectedStyle = {} } = $$props;
  let { titleStyle = {} } = $$props;
  let { subtitleStyle = {} } = $$props;
  let { descriptionStyle = {} } = $$props;
  let { keyboardButtonStyle = {} } = $$props;
  let wrapperElement;
  let searchInputRef;
  let commandPaletteRef;
  let unsubscribeKbdListener;
  let isPaletteVisible = false;
  let activeCommand;
  let lastActiveElement;
  let actions = [];
  const themeStore = writable({});
  setContext(THEME_CONTEXT, themeStore);
  const storeMethods = createStoreMethods();
  const actionMap = createActionMap(commands);
  let formattedEscKey = "";
  const updateStore = () => {
    paletteStore.update((n) => ({
      ...n,
      commands,
      storeMethods,
      actionMap,
      activeCommandId: null,
      results: commands
    }));
  };
  updateStore();
  const unsubscribePaletteStore = paletteStore.subscribe((value) => {
    isPaletteVisible = value.isVisible;
    actions = value.commands;
    activeCommand = value.activeCommandId ?? null;
    getNonEmptyArray(value.results, value.commands, []);
  });
  const focusLastElement = () => {
    lastActiveElement?.focus();
  };
  const handleOutsideClick = (event) => {
  };
  createFuse(actions);
  onDestroy(() => {
    unsubscribeKbdListener?.();
    unsubscribePaletteStore();
    focusLastElement();
    wrapperElement?.removeEventListener?.("click", handleOutsideClick);
  });
  if ($$props.commands === void 0 && $$bindings.commands && commands !== void 0)
    $$bindings.commands(commands);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.overlayClass === void 0 && $$bindings.overlayClass && overlayClass !== void 0)
    $$bindings.overlayClass(overlayClass);
  if ($$props.paletteWrapperInnerClass === void 0 && $$bindings.paletteWrapperInnerClass && paletteWrapperInnerClass !== void 0)
    $$bindings.paletteWrapperInnerClass(paletteWrapperInnerClass);
  if ($$props.resultsContainerClass === void 0 && $$bindings.resultsContainerClass && resultsContainerClass !== void 0)
    $$bindings.resultsContainerClass(resultsContainerClass);
  if ($$props.resultContainerClass === void 0 && $$bindings.resultContainerClass && resultContainerClass !== void 0)
    $$bindings.resultContainerClass(resultContainerClass);
  if ($$props.optionSelectedClass === void 0 && $$bindings.optionSelectedClass && optionSelectedClass !== void 0)
    $$bindings.optionSelectedClass(optionSelectedClass);
  if ($$props.titleClass === void 0 && $$bindings.titleClass && titleClass !== void 0)
    $$bindings.titleClass(titleClass);
  if ($$props.subtitleClass === void 0 && $$bindings.subtitleClass && subtitleClass !== void 0)
    $$bindings.subtitleClass(subtitleClass);
  if ($$props.descriptionClass === void 0 && $$bindings.descriptionClass && descriptionClass !== void 0)
    $$bindings.descriptionClass(descriptionClass);
  if ($$props.keyboardButtonClass === void 0 && $$bindings.keyboardButtonClass && keyboardButtonClass !== void 0)
    $$bindings.keyboardButtonClass(keyboardButtonClass);
  if ($$props.unstyled === void 0 && $$bindings.unstyled && unstyled !== void 0)
    $$bindings.unstyled(unstyled);
  if ($$props.inputStyle === void 0 && $$bindings.inputStyle && inputStyle !== void 0)
    $$bindings.inputStyle(inputStyle);
  if ($$props.overlayStyle === void 0 && $$bindings.overlayStyle && overlayStyle !== void 0)
    $$bindings.overlayStyle(overlayStyle);
  if ($$props.paletteWrapperInnerStyle === void 0 && $$bindings.paletteWrapperInnerStyle && paletteWrapperInnerStyle !== void 0)
    $$bindings.paletteWrapperInnerStyle(paletteWrapperInnerStyle);
  if ($$props.resultsContainerStyle === void 0 && $$bindings.resultsContainerStyle && resultsContainerStyle !== void 0)
    $$bindings.resultsContainerStyle(resultsContainerStyle);
  if ($$props.resultContainerStyle === void 0 && $$bindings.resultContainerStyle && resultContainerStyle !== void 0)
    $$bindings.resultContainerStyle(resultContainerStyle);
  if ($$props.optionSelectedStyle === void 0 && $$bindings.optionSelectedStyle && optionSelectedStyle !== void 0)
    $$bindings.optionSelectedStyle(optionSelectedStyle);
  if ($$props.titleStyle === void 0 && $$bindings.titleStyle && titleStyle !== void 0)
    $$bindings.titleStyle(titleStyle);
  if ($$props.subtitleStyle === void 0 && $$bindings.subtitleStyle && subtitleStyle !== void 0)
    $$bindings.subtitleStyle(subtitleStyle);
  if ($$props.descriptionStyle === void 0 && $$bindings.descriptionStyle && descriptionStyle !== void 0)
    $$bindings.descriptionStyle(descriptionStyle);
  if ($$props.keyboardButtonStyle === void 0 && $$bindings.keyboardButtonStyle && keyboardButtonStyle !== void 0)
    $$bindings.keyboardButtonStyle(keyboardButtonStyle);
  $$result.css.add(css);
  $$unsubscribe_paletteStore();
  return `${validate_component(Portal, "Portal").$$render($$result, { target: "body" }, {}, {
    default: () => {
      return `${isPaletteVisible ? `<div id="${"wrapper"}" class="${[
        escape(null_to_empty(overlayClass), true) + " svelte-mqok30",
        !unstyled ? "wrapper" : ""
      ].join(" ").trim()}"${add_attribute("style", toCssString(overlayStyle), 0)}${add_attribute("this", wrapperElement, 0)}><div class="${"paletteWrapper"}" role="${"combobox"}"${add_attribute("aria-expanded", true, 0)} aria-haspopup="${"listbox"}"${add_attribute("aria-controls", "uniqId", 0)}><div class="${[
        escape(null_to_empty(paletteWrapperInnerClass), true) + " svelte-mqok30",
        !unstyled ? "paletteWrapperInner" : ""
      ].join(" ").trim()}"${add_attribute("style", toCssString(paletteWrapperInnerStyle), 0)}${add_attribute("this", commandPaletteRef, 0)}><form autocomplete="${"off"}" role="${"search"}" novalidate class="${"svelte-mqok30"}"><label${add_attribute("for", searchInputId, 0)} class="${"svelte-mqok30"}">Search for an action</label>
						<input type="${"search"}" class="${[
        escape(null_to_empty(inputClass), true) + " svelte-mqok30",
        !unstyled ? "paletteInput" : ""
      ].join(" ").trim()}"${add_attribute("style", toCssString(inputStyle), 0)}${add_attribute("placeholder", placeholder, 0)} aria-autocomplete="${"list"}"${add_attribute("spellcheck", false, 0)}${add_attribute("aria-activedescendant", `palette-${activeCommand}`, 0)}${add_attribute("id", searchInputId, 0)} autocomplete="${"off"}" autocapitalize="${"false"}"${add_attribute("this", searchInputRef, 0)}${add_attribute("value", $paletteStore.textInput, 0)}>
						<div class="${"shortcut svelte-mqok30"}">${validate_component(KeyboardButton, "KeyboardButton").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(formattedEscKey)}`;
        }
      })}</div></form>
					${validate_component(ResultPanel, "ResultPanel").$$render($$result, {}, {}, {})}</div></div></div>` : ``}`;
    }
  })}`;
});
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const actions = defineActions([
    {
      actionId: "home",
      title: "Home",
      subTitle: "Home page",
      onRun: ({ action, storeProps, storeMethods }) => {
        goto("/");
      },
      keywords: ["home", "homepage", "main"]
    },
    {
      actionId: "irl",
      title: "IRL",
      subTitle: "People i want to meet IRL",
      onRun: ({ action, storeProps, storeMethods }) => {
        goto("/irl");
      },
      keywords: ["irl", "irlpage", "people"]
    },
    {
      actionId: "photos",
      title: "Photos",
      subTitle: "Some photos I have taken over the years.",
      onRun: ({ action, storeProps, storeMethods }) => {
        goto("/photos");
      },
      keywords: ["photo", "photopage", "pic", "pics"]
    },
    {
      actionId: "about",
      title: "About",
      subTitle: "About me",
      onRun: ({ action, storeProps, storeMethods }) => {
        goto("/about");
      },
      keywords: ["about", "aboutpage", "me"]
    },
    {
      actionId: "signout",
      title: "Sign out",
      subTitle: "Sign out of the app",
      onRun: ({ action, storeProps, storeMethods }) => {
        signOut();
      },
      keywords: ["signout", "signoutpage", "signout"]
    },
    {
      actionId: "signin",
      title: "Sign in",
      subTitle: "Sign in to the app",
      onRun: ({ action, storeProps, storeMethods }) => {
        signIn();
      },
      keywords: ["signin", "signinpage", "signin"]
    },
    {
      actionId: "github",
      title: "Github",
      subTitle: "Github page",
      onRun: ({ action, storeProps, storeMethods }) => {
        window.open("https://www.github.com/spikeysanju", "_blank");
      },
      keywords: ["github", "github page"]
    },
    {
      actionId: "twitter",
      title: "Twitter",
      subTitle: "Twitter page",
      onRun: ({ action, storeProps, storeMethods }) => {
        window.open("https://www.twitter.com/spikeysanju", "_blank");
      },
      keywords: ["twitter", "twitter page"]
    },
    {
      actionId: "linkedin",
      title: "Linkedin",
      subTitle: "Linkedin page",
      onRun: ({ action, storeProps, storeMethods }) => {
        window.open("https://www.linkedin.com/in/spikeysanju", "_blank");
      },
      keywords: ["linkedin", "linkedin page"]
    },
    {
      actionId: "instagram",
      title: "Instagram",
      subTitle: "Instagram page",
      onRun: ({ action, storeProps, storeMethods }) => {
        window.open("https://www.instagram.com/spikeysanju", "_blank");
      },
      keywords: ["instagram", "insta", "insta page"]
    },
    {
      actionId: "books",
      title: "Books",
      subTitle: "Books i read",
      onRun: ({ action, storeProps, storeMethods }) => {
        goto("/books");
      },
      keywords: ["books", "book", "bookpage"]
    },
    {
      actionId: "blogs",
      title: "Blogs",
      subTitle: "Blogs i write",
      onRun: ({ action, storeProps, storeMethods }) => {
        goto("/blog");
      },
      keywords: ["blogs", "blog", "blogpage"]
    }
  ]);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="${"mx-auto max-w-2xl px-3"}" data-sveltekit-preload-data="${"hover"}">${validate_component(CommandPalette, "CommandPalette").$$render(
    $$result,
    {
      unstyled: false,
      commands: actions,
      keyboardButtonClass: "bg-black text-white",
      inputClass: "bg-gray-50 flex w-full border-transparent focus:border-transparent focus:ring-0",
      overlayClass: "bg-black bg-opacity-90",
      paletteWrapperInnerClass: "w-full flex flex-col",
      resultsContainerClass: "h-max bg-white",
      resultContainerClass: "bg-white",
      optionSelectedClass: "text-gray-50 bg-gray-50",
      subtitleClass: "text-gray-500",
      titleClass: "text-gray-900",
      descriptionClass: "text-sm"
    },
    {},
    {}
  )}

		${data.session ? `<div class="${"flex w-full flex-row items-center justify-between"}"><p>${escape(data.session.user?.name)}</p>
				<button>Sign out</button></div>` : `<button>Sign in</button>`}
		${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
