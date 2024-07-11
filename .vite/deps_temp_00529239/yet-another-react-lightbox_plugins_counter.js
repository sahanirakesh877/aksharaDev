import {
  MODULE_CONTROLLER,
  PLUGIN_COUNTER,
  clsx,
  createModule,
  cssClass,
  useLightboxState
} from "./chunk-RDTHJTQJ.js";
import "./chunk-KJUJBIHA.js";
import {
  __toESM,
  require_react
} from "./chunk-W4VDMLRG.js";

// node_modules/yet-another-react-lightbox/dist/plugins/counter/index.js
var React = __toESM(require_react());
var defaultCounterProps = {
  separator: "/",
  container: {}
};
var resolveCounterProps = (counter) => ({
  ...defaultCounterProps,
  ...counter
});
function CounterComponent({ counter }) {
  const { slides, currentIndex } = useLightboxState();
  const { separator, container: { className, ...rest }, className: legacyClassName, ...legacyRest } = resolveCounterProps(counter);
  if (slides.length === 0)
    return null;
  return React.createElement(
    "div",
    { className: clsx(cssClass("counter"), className || legacyClassName), ...legacyRest, ...rest },
    currentIndex + 1,
    " ",
    separator,
    " ",
    slides.length
  );
}
function Counter({ augment, addChild }) {
  augment(({ counter, ...restProps }) => ({
    counter: resolveCounterProps(counter),
    ...restProps
  }));
  addChild(MODULE_CONTROLLER, createModule(PLUGIN_COUNTER, CounterComponent));
}
export {
  Counter as default
};
//# sourceMappingURL=yet-another-react-lightbox_plugins_counter.js.map
