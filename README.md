# userstyles
For now, it doesn't work by default, as you'll have to declare the variables **in an another userstyle** (so you don't lose them if the styles ever update):
```
:root {
  --bg: #141414;
  --bg2: #1c1c1c;
  --bg3: #242424;
  --border: #606060;
  --fg: #ccc;
  --fg2: #909090;
  --fg-link: lightblue;
  --color1: lightred;
  --color9: red;
  --color3: lightyellow;
  --color11: yellow;
  --header-h: calc(var(--font-size) * var(--line-height) + var(--pad) * 2 + var(--border-width));
  --pad: 8px;
  --body-pad: 24px;
  --line-height: 1.5;
  --trans-dur: 300ms;
  --border-width: 1px;
  --border-radius: 0px;
  --popup-filter: blur(9px);
  --font-normal: system-ui;
  --font-code: monospace;
  --font-size: 12pt;
  --accent: var(--fg);
  --accent-border: var(--fg);
  --accent-fg: var(--bg);
  --shadow-ins: 0 0 0 var(--border-width);
  --shadow-big: 0 4px 16px var(--shadow-clr);
  --hl: #0078d7;
  --hl-fg: #fff;
  --shadow-clr: #00000040;
}

* {
  font: var(--font-size) var(--font-family) !important;
  font-weight: normal !important;
}
```
