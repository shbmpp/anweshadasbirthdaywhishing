$(window).load(function() {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
let alwTobgCng = false;
$('document').ready(function() {
	var vw;
	$(window).resize(function() {
		let vw = $(window).width() / 2;
		let bw = $(window).width() * 0.10; // balloon width = 10vw
		let gap = 10; // 10px gap
		let totalWidth = (7 * bw) + (6 * gap);
		let startX = vw - (totalWidth / 2); // প্রথম balloon এর অবস্থান
		
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		
		// সবগুলো balloon loop করে সাজানো
		$('#b11, #b22, #b33, #b44, #b55, #b66, #b77').each(function(index) {
			$(this).animate({
				top: 100, // vertical position
				left: startX + index * (bw + gap) // x position formula
			}, 500);
		});
	});
	
	$('#turn_on').click(function() {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function() {
			$('#play').fadeIn('slow');
		});
	});
	
	$('#play').click(function() {
		alwTobgCng = true;
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function() {
			$('#bannar_coming').fadeIn('slow');
		});
	});
	
	$('#bannar_coming').click(function() {
		$('.bannar').addClass('bannar-come');
		
		// 2 সেকেন্ড পরে photo fade in হবে
		setTimeout(function() {
			$('.photo').css({ opacity: 0, display: 'block' }) // শুরুতে invisible
				.animate({ opacity: .9 }, 2000); // 2 সেকেন্ডে fadeIn
		}, 2000);
		
		// পুরোনো flow একই রাখছি
		$(this).fadeOut('slow').delay(6000).promise().done(function() {
			$('#balloons_flying').fadeIn('slow');
		});
	});
	
	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function() {
			loopOne();
		});
	}
	
	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function() {
			loopTwo();
		});
	}
	
	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function() {
			loopThree();
		});
	}
	
	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function() {
			loopFour();
		});
	}
	
	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function() {
			loopFive();
		});
	}
	
	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function() {
			loopSix();
		});
	}
	
	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').animate({ left: randleft, bottom: randtop }, 10000, function() {
			loopSeven();
		});
	}
	
	$('#balloons_flying').click(function() {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function() {
			$('#cake_fadein').fadeIn('slow');
		});
	});
	
	$('#cake_fadein').click(function() {
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function() {
			$('#light_candle').fadeIn('slow');
		});
	});
	
	$('#light_candle').click(function() {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function() {
			$('#wish_message').fadeIn('slow');
		});
	});
	
	let fireworksInterval;
	
	function createFireworksExplosion(x, y) {
		const container = document.querySelector('.fireworks-container');
		const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
		
		// একটি নির্দিষ্ট বিস্ফোরণ তৈরি করার জন্য 100টি কণা তৈরি করা
		for (let i = 0; i < 100; i++) {
			const particle = document.createElement('div');
			particle.classList.add('particle');
			
			// কণাগুলির র্যান্ডম আকার এবং রঙ
			const size = Math.random() * 5 + 2;
			particle.style.width = `${size}px`;
			particle.style.height = `${size}px`;
			particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
			
			// সমস্ত কণা একই বিন্দু থেকে শুরু হবে
			particle.style.left = `${x}px`;
			particle.style.top = `${y}px`;
			
			container.appendChild(particle);
			
			// কণিকাগুলি বিস্ফোরিত হবার জন্য একটি ছোট বিলম্ব
			setTimeout(() => {
				particle.style.opacity = 1;
				
				// কেন্দ্র থেকে র্যান্ডম কোণে এবং দূরত্বে ছড়িয়ে পড়া
				const angle = Math.random() * 2 * Math.PI; // র্যান্ডম কোণ (0 থেকে 360 ডিগ্রি)
				const distance = Math.random() * 150 + 50; // দূরত্ব (50px থেকে 200px)
				
				const endX = x + distance * Math.cos(angle);
				const endY = y + distance * Math.sin(angle);
				
				particle.style.transform = `translate(${endX - x}px, ${endY - y}px)`;
			}, 50);
			
			// 2 সেকেন্ড পর কণিকাগুলি অদৃশ্য করে দেওয়া এবং DOM থেকে মুছে ফেলা
			setTimeout(() => {
				particle.style.opacity = 0;
				setTimeout(() => {
					particle.remove();
				}, 500);
			}, 2000);
		}
	}
	
	function startFireworks() {
		if (!fireworksInterval) {
			// একটি নির্দিষ্ট বিরতিতে বিস্ফোরণ তৈরি করা
			fireworksInterval = setInterval(() => {
				// র্যান্ডম বিস্ফোরণ স্থান নির্বাচন
				const x = Math.random() * window.innerWidth;
				const y = Math.random() * window.innerHeight * 0.7; // উপরের দিকে বিস্ফোরণ স্থান সীমাবদ্ধ রাখা
				createFireworksExplosion(x, y);
			}, 1500); // প্রতি 1.5 সেকেন্ড পর পর বিস্ফোরণ
		}
	}
	
	function stopFireworks() {
		clearInterval(fireworksInterval);
		fireworksInterval = null;
		
		// স্ক্রিন থেকে অবশিষ্ট কণিকাগুলো সরিয়ে ফেলা
		const container = document.querySelector('.fireworks-container');
		container.innerHTML = '';
	}
	
	
	$('#wish_message').click(function() {
		let vw = $(window).width() / 2;
		let bw = $(window).width() * 0.10; // balloon width = 10vw
		let bh = $(window).height() * 0.08; // balloon height = 8vh
		let gap = 10;
		startFireworks();
		// মোট প্রস্থ (৭টা বেলুন + ৬টা gap)
		let total_width = 7 * bw + 6 * gap;
		// শুরু করার x পজিশন (সেন্টার থেকে left shift)
		let x_start = vw - (total_width / 2);
		
		// সব বেলুনের id পরিবর্তন
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22');
		$('#b3').attr('id', 'b33');
		$('#b4').attr('id', 'b44');
		$('#b5').attr('id', 'b55');
		$('#b6').attr('id', 'b66');
		$('#b7').attr('id', 'b77');
		
		let ids = ['#b11', '#b22', '#b33', '#b44', '#b55', '#b66', '#b77'];
		
		ids.forEach((id, i) => {
			$(id).animate({
				top: 100, // চাইলে vh এ কনভার্ট করা যাবে
				left: x_start + i * (bw + gap)
			}, 500);
		});
		
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function() {
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function() {
		$(this).fadeOut('slow');
		$('.message').fadeIn('slow');
		
		function msgLoop(i) {
			let $p = $("p:nth-child(" + i + ")");
			let textLength = $p.text().length;
			
			// প্রতি ক্যারেক্টারের জন্য 50ms → চাইলে বাড়াতে/কমাতে পারবেন
			let visibleDuration = textLength * 80;
			
			$p.fadeIn('slow').delay(visibleDuration).fadeOut('slow').promise().done(function() {
				i = i + 1;
				if ($("p:nth-child(" + i + ")").length) {
					msgLoop(i);
				} else {
					console.log("Messages finished!");
				}
			});
		}
		
		msgLoop(1); // nth-child index 1 থেকে শুরু
	});
});

function randomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

function changeBackgroundSmooth() {
	if (!alwTobgCng) return; // যদি false হয়, থেমে যাবে
	
	document.body.style.transition = 'background-color 2s ease';
	document.body.style.backgroundColor = randomColor();
	
	// পরবর্তী কল 3 সেকেন্ড পরে
	setTimeout(changeBackgroundSmooth, 400);
}

// সবসময় চেক করবে এবং true থাকলে চালু হবে
function watchBackground() {
	if (alwTobgCng) {
		changeBackgroundSmooth();
	} else {
		// false হলে কিছু হবে না, আবার true হলে watchBackground() কল করতে হবে
		setTimeout(watchBackground, 500); // 0.5s পর আবার চেক করবে
	}
}

// শুরু করা
watchBackground();

//alert('hello');