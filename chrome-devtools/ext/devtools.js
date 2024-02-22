var xhr = new XMLHttpRequest

xhr.open('GET', './custom.css', true)
xhr.onload = () => {
	if (xhr.readyState === 4) {
		if (xhr.status === 200)
			chrome.devtools.panels.applyStyleSheet(xhr.responseText)
		else
			console.error(xhr.statusText)
	}
}
xhr.send()
