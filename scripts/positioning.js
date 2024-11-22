const buttons = document.getElementsByClassName("button");
const shadows = document.getElementsByClassName("shadow");
const crosses = document.getElementsByClassName("cross")

const firstBtn = buttons.item(0);
const topPos = (window.innerHeight/4) + 40;
const height = 2 * parseFloat(window.getComputedStyle(firstBtn).height.slice(0, -2));

for (let i = 0; i < buttons.length; i++) {
	const btn = buttons.item(i);
	const shadow = shadows.item(i);
	const cross = crosses.item(i);

	const pos = ( topPos + (2 * height * (i + 1)) );

	// Match shadow dimensions to button dimensions
	shadow.style.width = window.getComputedStyle(btn).width;
	shadow.style.height = window.getComputedStyle(btn).height;
	shadow.style.padding = window.getComputedStyle(btn).padding;
	shadow.style.borderRadius = window.getComputedStyle(btn).borderRadius;

	btn.style.top = `${pos}px`;
	shadow.style.top = `${pos + 10}px`;
	cross.style.top = `${pos}px`
}
