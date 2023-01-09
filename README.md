# userstyles
None work by default, as you'll have to declare the variables **in an another userstyle** for the same domain as the userstyle you are installing, so you don't lose them if the styles ever update:
```
:root {
  --bg:            #141414;
  --bg2:           #1c1c1c;
  --bg3:           #242424;
  --border:        #3b3b3b;

  --fg:            #ccc;
  --fg2:           #909090;
  --fg-link:       #1488ff;

  --color1:        #ac8a8c;
  --color9:        #c49ea0;
  --color2:        #8aac8b;
  --color10:       #9ec49f;
  --color3:        #aca98a;
  --color11:       #c4c19e;
  --color4:        #8f8ac;
  --color12:       #a39ec4;
  --color5:        #ac8aac;
  --color13:       #c49ec4;
  --color6:        #8aabac;
  --color14:       #9ec3c4;

  --header-h:      calc(var(--font-size) * var(--line-height) + var(--pad) * 2 + var(--border-width));

  --hl:            #0078d7;
  --hl-fg:         #fff;

  --accent:        var(--fg);
  --accent-border: var(--fg);
  --accent-fg:     var(--bg);

  --shadow-ins:    0 0 0 var(--border-width);
  --shadow-big:    0 4px 16px var(--shadow-clr);
  --shadow-clr:    #00000040;

  --font-normal:   system-ui;
  --font-code:     monospace;
  --font-size:     12pt;

  --pad:           8px;
  --body-pad:      24px;
  --line-height:   1.5;
  --trans-dur:     200ms;
  --border-width:  1px;
  --border-radius: 0px;
  --popup-filter:  blur(9px);
}

::selection {
  background-color: var(--hl) !important;
  color: var(--hl-fg) !important;
}

* {
  font: var(--font-size) var(--font-family) !important;
  font-weight: normal !important;
}
code, pre, code *, pre * {
	font-family: var(--font-code) !important;
}
```

## Requirements
[4chan](./4chan.user.styl): [4chan X](https://www.4chan-x.net)

[Discord](./discord.user.styl): class normalisation (appMount-2yBXZl -> appMount) userscript & [Revert Discord](../../../revert-discord)

## Preview
They all share the same style, so just this one:
![Preview](https://user-images.githubusercontent.com/58827198/211355929-94b5113f-bc8e-47b1-a1da-64dcd034c9ea.png)
