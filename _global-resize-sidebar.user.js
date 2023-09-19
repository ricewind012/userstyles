// ==UserScript==
// @name        Global - resize sidebar
// @description Adds the ability to resize sidebars
// @version     1.0
// @author      me
//
// @namespace   https://github.com/2641a40fd44383320adde4b027a1d0b03bd550/userstyles
// @downloadURL https://github.com/2641a40fd44383320adde4b027a1d0b03bd550/userstyles/raw/master/_global-resize-sidebar.user.js
// @updateURL   https://github.com/2641a40fd44383320adde4b027a1d0b03bd550/userstyles/raw/master/_global-resize-sidebar.user.js
//
// @match       https://developer.mozilla.org/*
// @match       https://boards.4channel.org/*
// @match       https://boards.4chan.org/*
// @match       https://old.reddit.com/*
// @match       https://soundcloud.com/*
// @match       https://searchfox.org/*
// @match       https://discord.com/*
// @match       https://github.com/*
//
// @match       https://nitter.net/*
// @match       https://nitter.unixfox.eu/*
// @match       https://nitter.namazso.eu/*
//
// @match       https://stackexchange.com/*
// @match       https://stackoverflow.com/*
// @match       https://superuser.com/*
// @match       https://askubuntu.com/*
//
// @match       https://safebooru.org/*
// @match       https://yande.re/*
//
// @match       https://wikipedia.org/*
// @include     /^https?://wiki\./
//
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addValueChangeListener
// ==/UserScript==

function SetSidebarWidth(iWidth) {
	document.body.setAttribute(
		'style',
		`--sidebar-width: min(50vw, max(20vw, ${iWidth}px))`
	)
}

const k_strSmallScreen = '768px'

let elSeparator = document.createElement('div')
elSeparator.id  = '-sidebar-separator'
document.body.appendChild(elSeparator)

GM_addStyle(`
	#-sidebar-separator {
		position: fixed;
		left: calc(var(--sidebar-width) - var(--sidebar-separator-width) / 2);
		top: var(--header-h);
		right: auto;
		bottom: 0;
		z-index: 999;

		width: var(--sidebar-separator-width);
		cursor: ew-resize;

		@media (max-width: ${k_strSmallScreen}) {
			display: none;
		}
	}
`)

let iSidebarWidth = GM_getValue('sidebar-width')

if (iSidebarWidth)
	SetSidebarWidth(iSidebarWidth)

GM_addValueChangeListener(
	'sidebar-width',
	(strName, iOldValue, iNewValue, bRemote) => SetSidebarWidth(iNewValue)
)

elSeparator.addEventListener('pointerdown', () => {
	function fnMove(ev) {
		GM_setValue('sidebar-width', ev.pageX)
	}

	function fnUp() {
		removeEventListener('pointermove', fnMove)
		removeEventListener('pointerup', fnUp)
	}

	addEventListener('pointermove', fnMove, { passive: true })
	addEventListener('pointerup', fnUp, { passive: true })
})
