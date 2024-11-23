const shadows = document.getElementsByClassName("shadow");

function position(basisClass, others) {
	// Initialize variables for position computation
	const firstElement = basisClass.item(0);
	const topPos = parseFloat(window.getComputedStyle(firstElement).top.slice(0, -2));
	const height = 2 * parseFloat(window.getComputedStyle(firstElement).height.slice(0, -2));

	for (let i = 0; i < basisClass.length; i++) {
		const basis = basisClass.item(i);
		const shadow = shadows.item(i);

		// Calculate position
		const posX = parseFloat(window.getComputedStyle(firstElement).right.slice(0, -2));
		const posY = ( topPos + ( 2 * height * (i + 1)) );

		// Match shadow dimensions to button dimensions
		shadow.style.position = window.getComputedStyle(basis).position;
		shadow.style.width = window.getComputedStyle(basis).width;
		shadow.style.height = window.getComputedStyle(basis).height;
		shadow.style.padding = window.getComputedStyle(basis).padding;
		shadow.style.borderRadius = window.getComputedStyle(basis).borderRadius;

		// Position elements
		others.forEach(elements => {
			const e = elements.item(i);

			e.style.top = `${posY}px`;
		});

		basis.style.right = `${posX}px`;
		basis.style.top = `${posY}px`;

		shadow.style.right = `${posX - 10}px`;
		shadow.style.top = `${posY + 10}px`;

		animateShadowElements(posX, posY, basis, [basis, shadow])
	}
}

function positionElement(basisElement, others) {
	const shadow = shadows.item(0);

	// Calculate position
	const posX = parseFloat(window.getComputedStyle(basisElement).right.slice(0, -2));
	const posY = parseFloat(window.getComputedStyle(basisElement).top.slice(0, -2));

	// Match shadow dimensions to button dimensions
	shadow.style.width = window.getComputedStyle(basisElement).width;
	shadow.style.height = window.getComputedStyle(basisElement).height;
	shadow.style.padding = window.getComputedStyle(basisElement).padding;
	shadow.style.borderRadius = window.getComputedStyle(basisElement).borderRadius;
	
	// Position elements
	others.forEach(elements => {
		const e = elements.item(i);
		e.style.top = `${posY}px`;
	});

	console.log(posX)

	basisElement.style.right = `${posX}px`;
	basisElement.style.top = `${posY}px`;

	shadow.style.right = `${posX - 10}px`;
	shadow.style.top = `${posY + 10}px`;

	animateShadowElements(posX, posY, basisElement, [basisElement, shadow])
}