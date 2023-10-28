import {
  createStyled,
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_esm2 as init_esm,
  init_identifier,
  shouldForwardProp
} from "./chunk-E3LREPM5.js";
import {
  __esm
} from "./chunk-2FATVHAI.js";

// node_modules/@mui/material/styles/styled.js
var rootShouldForwardProp, styled, styled_default;
var init_styled = __esm({
  "node_modules/@mui/material/styles/styled.js"() {
    "use client";
    init_esm();
    init_defaultTheme();
    init_identifier();
    rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
    styled = createStyled({
      themeId: identifier_default,
      defaultTheme: defaultTheme_default,
      rootShouldForwardProp
    });
    styled_default = styled;
  }
});

export {
  rootShouldForwardProp,
  styled_default,
  init_styled
};
//# sourceMappingURL=chunk-6CEGZ6UX.js.map
