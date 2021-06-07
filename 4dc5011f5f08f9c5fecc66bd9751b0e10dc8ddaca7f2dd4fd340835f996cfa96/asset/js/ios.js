document.addEventListener('DOMContentLoaded', function () {

	let web_main = document.getElementById('web_main');
	let web_01 = document.getElementById('web_01');
	let web_02 = document.getElementById('web_02');
	let web_03 = document.getElementById('web_03');
	let web_04 = document.getElementById('web_04');
	let web_05 = document.getElementById('web_05');
	let web_06 = document.getElementById('web_06');

		web_main.src = 'https://naiaru.github.io/Test/4dc5011f5f08f9c5fecc66bd9751b0e10dc8ddaca7f2dd4fd340835f996cfa96/asset/images/web_main.m3u8';
		web_main.addEventListener('canplay', () => {
			web_main.play();
		});

		web_01.src = 'https://naiaru.github.io/Test/4dc5011f5f08f9c5fecc66bd9751b0e10dc8ddaca7f2dd4fd340835f996cfa96/asset/images/web_01.m3u8';
		web_01.addEventListener('canplay', () => {
			web_01.play();
		});

		web_02.src = 'https://naiaru.github.io/Test/4dc5011f5f08f9c5fecc66bd9751b0e10dc8ddaca7f2dd4fd340835f996cfa96/asset/images/web_02.m3u8';
		web_02.addEventListener('canplay', () => {
			web_02.play();
		});

		web_03.src = 'https://naiaru.github.io/Test/4dc5011f5f08f9c5fecc66bd9751b0e10dc8ddaca7f2dd4fd340835f996cfa96/asset/images/web_03.m3u8';
		web_03.addEventListener('canplay', () => {
			web_03.play();
		});

		web_04.src = 'https://naiaru.github.io/Test/4dc5011f5f08f9c5fecc66bd9751b0e10dc8ddaca7f2dd4fd340835f996cfa96/asset/images/web_04.m3u8';
		web_04.addEventListener('canplay', () => {
			web_04.play();
		});

		web_05.src = 'https://naiaru.github.io/Test/4dc5011f5f08f9c5fecc66bd9751b0e10dc8ddaca7f2dd4fd340835f996cfa96/asset/images/web_05.m3u8';
		web_05.addEventListener('canplay', () => {
			web_05.play();
		});

		web_06.src = 'https://naiaru.github.io/Test/4dc5011f5f08f9c5fecc66bd9751b0e10dc8ddaca7f2dd4fd340835f996cfa96/asset/images/web_06.m3u8';
		web_06.addEventListener('canplay', () => {
			web_06.play();
		});


	let mySwiper = new Swiper('.swiper-container', {

		autoplay: {
			delay: 8000
		},
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	gsap.registerPlugin(ScrollTrigger);

	gsap.utils.toArray('.scroll-h-l').forEach((section, index) => {
		let w = section.querySelector('p');
		let [x, xEnd] = [w.scrollWidth * -1, '80vw'];
		gsap.fromTo(w, {
			x
		}, {
			x: xEnd,
			scrollTrigger: {
				trigger: section,
				scrub: 0.1
			}
		});
	});

	gsap.utils.toArray('.scroll-h-r').forEach((section, index) => {
		let w = section.querySelector('p');
		let [x, xEnd] = [w.scrollWidth * 5, 0];
		gsap.fromTo(w, {
			x
		}, {
			x: xEnd,
			scrollTrigger: {
				trigger: section,
				scrub: 0.1
			}
		});
	});

	const sections = gsap.utils.toArray('.fade-in-up');

	sections.forEach((box, i) => {
		const anim = gsap.fromTo(box, {
			autoAlpha: 0,
			y: 100
		}, {
			duration: 0.8,
			autoAlpha: 1,
			y: 0
		});
		ScrollTrigger.create({
			trigger: box,
			animation: anim,
			toggleActions: 'play pause resume reset',
			once: true,
		});
	});

	gsap.from('#about .line', {
		scrollTrigger: {
			trigger: '#about .line',
			toggleActions: 'restart pause resume pause'
		},
		scaleX: 0,
		duration: 1,
		transformOrigin: 'left center',
		ease: 'none'
	});

	gsap.from('#services .line', {
		scrollTrigger: {
			trigger: '#services .line',
			toggleActions: 'restart pause resume pause'
		},
		scaleX: 0,
		duration: 1,
		transformOrigin: 'left center',
		ease: 'none'
	});

	gsap.from('#company .line', {
		scrollTrigger: {
			trigger: '#company .line',
			toggleActions: 'restart pause resume pause'
		},
		scaleX: 0,
		duration: 1,
		transformOrigin: 'left center',
		ease: 'none'
	});

	gsap.from('#contact .line', {
		scrollTrigger: {
			trigger: '#contact .line',
			toggleActions: 'restart pause resume pause'
		},
		scaleX: 0,
		duration: 1,
		transformOrigin: 'left center',
		ease: 'none'
	});

	let touch_event = window.ontouchstart;
	let touch_points = navigator.maxTouchPoints;

	if (touch_event !== undefined && 0 < touch_points) {
		$('.cursor').css({
			'display': 'inherit'
		});

		$('.cursor-follower').css({
			'display': 'none'
		});
	} else {
		$('.cursor').css({
			'display': 'none'
		});

		$('.cursor-follower').css({
			'display': 'inherit'
		});

		let cursor = $('.cursor'),
			follower = $('.cursor-follower');

		let posX = 0,
			posY = 0;

		let mouseX = 0,
			mouseY = 0;

		TweenMax.to({}, 0.01, {
			repeat: -1,
			onRepeat: function () {
				posX += (mouseX - posX) / 3;
				posY += (mouseY - posY) / 3;

				TweenMax.set(follower, {
					css: {
						left: posX - 2,
						top: posY - 2
					}
				});

				TweenMax.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY
					}
				});
			}
		});

		$(document).on('mousemove', function (e) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		});

		$('.link').on('mouseenter', function () {
			cursor.addClass('active');
			follower.addClass('active');
		});
		$('.link').on('mouseleave', function () {
			cursor.removeClass('active');
			follower.removeClass('active');
		});
	}




});