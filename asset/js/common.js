document.addEventListener('DOMContentLoaded', function () {

	let web_main = document.getElementById('web_main');
	let web_01 = document.getElementById('web_01');
	let web_02 = document.getElementById('web_02');
	let web_03 = document.getElementById('web_03');
	let web_04 = document.getElementById('web_04');
	let web_05 = document.getElementById('web_05');
	let web_06 = document.getElementById('web_06');

	if (Hls.isSupported()) {
		let hls_main = new Hls();
		hls_main.loadSource('./asset/images/web_main.m3u8');
		hls_main.attachMedia(web_main);

		let hls_01 = new Hls();
		hls_01.loadSource('./asset/images/web_01.m3u8');
		hls_01.attachMedia(web_01);

		let hls_02 = new Hls();
		hls_02.loadSource('./asset/images/web_02.m3u8');
		hls_02.attachMedia(web_02);

		let hls_03 = new Hls();
		hls_03.loadSource('./asset/images/web_03.m3u8');
		hls_03.attachMedia(web_03);

		let hls_04 = new Hls();
		hls_04.loadSource('./asset/images/web_04.m3u8');
		hls_04.attachMedia(web_04);

		let hls_05 = new Hls();
		hls_05.loadSource('./asset/images/web_05.m3u8');
		hls_05.attachMedia(web_05);

		let hls_06 = new Hls();
		hls_06.loadSource('./asset/images/web_06.m3u8');
		hls_06.attachMedia(web_06);

	} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		web_main.src = './asset/images/web_main.m3u8';
		web_main.addEventListener('canplay', () => {
			web_main.play();
		});

		web_01.src = './asset/images/web_01.m3u8';
		web_01.addEventListener('canplay', () => {
			web_01.play();
		});

		web_02.src = './asset/images/web_02.m3u8';
		web_02.addEventListener('canplay', () => {
			web_02.play();
		});

		web_03.src = './asset/images/web_03.m3u8';
		web_03.addEventListener('canplay', () => {
			web_03.play();
		});

		web_04.src = './asset/images/web_04.m3u8';
		web_04.addEventListener('canplay', () => {
			web_04.play();
		});

		web_05.src = './asset/images/web_05.m3u8';
		web_05.addEventListener('canplay', () => {
			web_05.play();
		});

		web_06.src = './asset/images/web_06.m3u8';
		web_06.addEventListener('canplay', () => {
			web_06.play();
		});
	}

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