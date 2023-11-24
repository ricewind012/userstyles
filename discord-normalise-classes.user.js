// ==UserScript==
// @name        Discord - Normalise classes
// @description Remove the last 6 (7) characters from all classes
// @version     1.1
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

function NormaliseElement(el) {
	let vecClasses = el.classList;

	if (!vecClasses)
		return;

	for (let i = 0; i < vecClasses.length; i++) {
		if (!rRandClass.test(vecClasses[i]))
			continue;

		let strMatch = vecClasses[i].match(rRandClass)[1];
		let newClass = strMatch
			.split('-')
			.map((s, i) => i ? s[0].toUpperCase() + s.slice(1) : s)
			.join('');

		el.classList.add(newClass);
	}

	for (let elChild of el.children)
		NormaliseElement(elChild);
}

let rRandClass = new RegExp('^(?!hljs-)(.*?)__?[a-z0-9]{5}[a-z0-9]?$');
let elTarget = document.getElementById('app-mount');
let observer = new MutationObserver(vecList => {
	for (let record of vecList)
		for (let el of record.addedNodes)
			NormaliseElement(el);
});

setTimeout(() => {
	NormaliseElement(elTarget)
	observer.observe(elTarget, {
		attributes: true,
		attributeFilter: [ 'class' ],
		childList: true,
		subtree: true,
	})
}, 1000);
