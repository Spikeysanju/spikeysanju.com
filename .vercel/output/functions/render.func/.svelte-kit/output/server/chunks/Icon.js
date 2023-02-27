import { c as create_ssr_component, f as add_attribute, a as escape } from "./index3.js";
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
    },
    rightArrow: {
      box: 24,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
    },
    sponsor: {
      box: 24,
      svg: `<svg width="151" height="20" viewBox="0 0 151 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.756 0.343999V6.868H10.472V20H16.996V6.868H26.712V0.343999H0.756ZM47.6118 0.371999V7.176H35.9078V0.371999H29.3838V20H35.9078V13.168H47.6118V20H54.1078V0.371999H47.6118ZM57.5794 20H64.1034V0.371999H57.5794V20ZM78.7185 0.399999C70.0665 0.399999 66.6785 0.987999 66.6785 6.812C66.6785 11.88 70.7385 12.272 78.7185 12.916C83.8705 13.336 84.4585 13.224 84.4585 13.84C84.4585 14.736 83.9265 14.708 79.1945 14.708C74.1825 14.708 73.7065 14.428 73.7065 13.252C72.8665 13.252 66.9585 13.252 66.9585 13.252C66.9585 18.992 68.5545 20 78.9145 20C90.1705 20 92.0745 18.964 92.0745 13.924C92.0745 8.856 89.7225 8.716 78.8305 7.82C73.9025 7.428 73.5385 7.4 73.4825 6.868C73.4825 6.14 73.9025 5.916 78.8865 5.916C84.0385 5.916 84.4305 6.504 84.4305 7.512C85.5505 7.512 91.3745 7.512 91.3745 7.512C91.3745 1.828 88.9945 0.399999 78.7185 0.399999ZM106.817 20C112.109 20 116.449 19.216 118.045 16.136C119.193 13.952 119.417 11.152 119.417 5.076V0.343999H112.529C112.529 0.343999 112.529 6.756 112.529 9.136C112.529 11.544 112.137 14.624 106.817 14.624C101.497 14.624 100.937 11.544 100.937 9.136C100.937 6.756 100.937 0.343999 100.937 0.343999H94.0485V5.076C94.0485 11.152 94.2725 13.952 95.4205 16.136C97.0165 19.216 101.525 20 106.817 20ZM150.019 0.343999H141.227L136.047 5.944L130.951 0.343999H122.159L131.007 10.172L122.075 20H130.867L136.019 14.428L141.143 20H149.935L141.087 10.172L150.019 0.343999Z" fill="black"/></svg>`
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
export {
  Icon as I
};
