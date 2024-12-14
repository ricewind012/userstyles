// ==UserScript==
// @name        Discord - Normalise classes
// @description Remove the last 6 (7) characters from all classes
// @version     1.2
// @author      me
//
// @namespace   https://github.com/ricewind012/userstyles
// @downloadURL https://github.com/ricewind012/userstyles/raw/master/discord-normalise-classes.user.js
// @updateURL   https://github.com/ricewind012/userstyles/raw/master/discord-normalise-classes.user.js
//
// @match       *://discord.com/*
//
// @run-at      document-idle
// @grant       none
// ==/UserScript==

function normalizeElement(el) {
	for (const className of el.classList) {
		if (!CLASS_REGEX.test(className)) {
			continue;
		}

		const match = className.match(CLASS_REGEX)[1];
		const newClass = match
			.split("-")
			.map((s, i) => (i ? s[0].toUpperCase() + s.slice(1) : s))
			.join("");

		el.classList.add(newClass);
	}

	for (const child of el.children) {
		normalizeElement(child);
	}
}

const CLASS_REGEX = /^(?!hljs-)(.*?)__?[a-z0-9]{5}[a-z0-9]?$/;
const target = document.getElementById("app-mount");
const observer = new MutationObserver((list) => {
	for (const record of list) {
		for (const el of record.addedNodes) {
			normalizeElement(el);
		}
	}
});

setTimeout(() => {
	normalizeElement(target);
	observer.observe(target, {
		attributes: true,
		attributeFilter: ["class"],
		childList: true,
		subtree: true,
	});
}, 1000);
