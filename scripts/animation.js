function animateShadowElements(posX, posY, elementListener, elementsToAnimate) {
	// Animations
	const expand = [
		{}, {
			top: `${posY - 10}px`,
			right: `${posX + 10}px`
		}
	];
	const compress = [
		{}, {
			top: `${posY}px`,
			right: `${posX}px`
		}
	];
	const expandShadow = [
		{}, {
			top: `${posY + 20}px`,
			right: `${posX - 20}px`
		}
	];
	const compressShadow = [
		{}, {
			top: `${posY + 10}px`,
			right: `${posX - 10}px`
		}
	];

	const animationDetails = {
		duration: 500,
		easing: "ease-in-out",
		delay: 0, iterations: 1, 
		direction: "normal",
		fill: "forwards" 
	};

	elementListener.addEventListener('mouseover', () => {
		elementsToAnimate.forEach(element => {
			if (element.className === "shadow") {
				element.animate(expandShadow, animationDetails);
			} else {
				element.animate(expand, animationDetails);
			}
		});
	});

	elementListener.addEventListener('mouseout', () => {
		elementsToAnimate.forEach(element => {
			if (element.className === "shadow") {
				element.animate(compressShadow, animationDetails);
			} else {
				element.animate(compress, animationDetails);
			}
		});
	});
}

function animateTimeline(sizes) {
	const timeline = document.getElementById("timeline");
	const section = timeline.parentNode;

	const expand = [
		{},
		{
			height: 'fit-content',
		}
	];

	const animationDetails = {
		duration: 500,
		easing: "ease-in-out",
		delay: 0, iterations: 1, 
		direction: "normal",
		fill: "forwards" 
	};

	console.log(section.children.upper.children);
	for (let i = 0; i < timeline.children.length - 1; i++) {
		const child = timeline.children.item(i);
		
		child.addEventListener("mouseover", () => {
			expand[1].height =`${sizes[i]}px`;
			
			if (i % 2 === 0) {
				const element = section.children.upper.children.item(i/2);

				element.animate(expand, animationDetails);
			} else {
				const element = section.children.lower.children.item(Math.floor(i/2));

				element.animate(expand, animationDetails);
			}
		});
	}
}