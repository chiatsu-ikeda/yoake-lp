window,addEventListener('load', () => {
	const loading = document.getElementById('loading');
	loading.classList.add('loading-fade-out');
	const mvTxt = document.getElementById('mvTxt');
	mvTxt.classList.add('mv-txt-ani');

		// `ripples` プラグインを設定
		$('.ripple').ripples({
				interactive: false, // ユーザー操作によるリップルを無効化
		});

		// 要素の中央位置を計算
		const x = $('.ripple').outerWidth() / 2;
		const y = $('.ripple').outerHeight() / 2;

		// リップルの半径と強さを設定
		const dropRadius = 100;
		const strength = 0.1;

		// 繰り返し回数と間隔を設定
		const repeatCount = 3;
		const interval = 500; // ミリ秒

		let count = 0;

		// 繰り返し実行のためのタイマー設定
		const rippleInterval = setInterval(() => {
				$('.ripple').ripples('drop', x, y, dropRadius, strength);
				
				count++;
				if (count >= repeatCount) {
						clearInterval(rippleInterval); // 繰り返しを停止
						// 波紋の効果を停止するための方法
						// $('.ripple').ripples('destroy'); // `ripples` プラグインのエフェクトを完全に削除
				}
		}, interval);

		// 5秒後にリップルエフェクトを完全に停止
		setTimeout(() => {
				// 波紋の効果を停止するための方法
				$('.ripple').ripples('destroy'); // `ripples` プラグインのエフェクトを完全に削除
		}, 4680); // 5000ミリ秒 = 5秒

		// line animation
		const lineAnimation = () => {
			const lineParent = document.querySelectorAll('#lineParent')
		
			const options = {
				root: null,
				rootMargin: "-25% 0%",
				threshold: 0,
			};
		
			let observers = []; // IntersectionObserverを複数持つための配列
		
			// 監視対象の要素に対してIntersectionObserverを設定
			lineParent.forEach(function (target) {
				let observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							entry.target.classList.add('lineActive')
						}
					});
				}, options);
		
				observers.push(observer);
				observer.observe(target);
			});
		};
		lineAnimation();

		const textGradient = () => {
			const targetElements = document.querySelectorAll('.text-fade');
		
			const options = {
				root: null,
				rootMargin: "-25% 0%",
				threshold: 0,
			};
		
			let observers = []; // IntersectionObserverを複数持つための配列
		
			// 監視対象の要素に対してIntersectionObserverを設定
			targetElements.forEach(function (target) {
				let observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							entry.target.classList.add('move-gradient');
						}
					});
				}, options);
		
				observers.push(observer);
				observer.observe(target);
			});
		};
		textGradient();

		const textBlueGradient = () => {
			const targetElements = document.querySelectorAll('.text-blue-fade');
		
			const options = {
				root: null,
				rootMargin: "-25% 0%",
				threshold: 0,
			};
		
			let observers = []; // IntersectionObserverを複数持つための配列
		
			// 監視対象の要素に対してIntersectionObserverを設定
			targetElements.forEach(function (target) {
				let observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							entry.target.classList.add('move-gradient');
						}
					});
				}, options);
		
				observers.push(observer);
				observer.observe(target);
			});
		};
		textBlueGradient();

		const orangeIntersection = () => {
			const targetElements = document.querySelectorAll('.orangeOb');
			const activeElements = document.querySelectorAll('.orange');
			const drop = document.getElementById('orangeDrop');
			const rippleOranges = document.querySelectorAll('.rippleOrange');
			const offTop = drop.getBoundingClientRect().top + window.pageYOffset;
			document.addEventListener('scroll', () => {
				const scrollTop = window.scrollY;
				drop.style.transform = `translateY(${(scrollTop - offTop + 700) * 0.7}px)`;
			})
		
			const options = {
				root: null,
				rootMargin: "-45% 0%",
				threshold: 0,
			};
		
			let observers = []; // IntersectionObserverを複数持つための配列
		
			// 監視対象と挙動する要素の関係を紐づける
			targetElements.forEach(function (target, index) {
				let observe = new IntersectionObserver((entries) => callback(entries, activeElements[index], index), options);
				observers.push(observe);
				observe.observe(target);
			});
		
		
			function callback(entries, activeElement, index) {
				if (entries[0].isIntersecting) {
					activeElements.forEach(activeElement => {
						activeElement.classList.remove('orange-open')
					});
					activeElement.classList.add('orange-open');
					if(index == 2){
						drop.classList.add('orange-drop-open');
						rippleOranges.forEach(rippleOrange => {
							rippleOrange.classList.remove('ripple-orange-animation');
						});
					}else{
						drop.classList.remove('orange-drop-open');
					}
				}
			}
		}
		orangeIntersection();

		const rippleOrange = () => {
			const drop = document.getElementById('orangeDrop');
			const targetElements = document.querySelectorAll('.rippleOrangeFirst');
			const rippleOranges = document.querySelectorAll('.rippleOrange');

			const options = {
				root: null,
				rootMargin: "-20% 0%",
				threshold: 0.5,
			};
		
			let observers = []; // IntersectionObserverを複数持つための配列
		
			// 監視対象の要素に対してIntersectionObserverを設定
			targetElements.forEach(function (target) {
				let observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							rippleOranges.forEach(rippleOrange => {
								rippleOrange.classList.add('ripple-orange-animation');
							});
							drop.classList.remove('orange-drop-open')
						}else{
							// drop.classList.add('orange-drop-open');
						}
					});
				}, options);
		
				observers.push(observer);
				observer.observe(target);
			});
		}
		rippleOrange();

		const backgroundChange = () => {
			const commonBg = document.querySelectorAll('.commonBg');
			const cts = document.querySelectorAll('.ct');
		
			const options = {
				root: null,
				rootMargin: "-45% 0%",
				threshold: 0,
			};
		
			let observers = []; // IntersectionObserverを複数持つための配列
		
			// 監視対象と挙動する要素の関係を紐づける
			cts.forEach(function (target, index) {
				let observe = new IntersectionObserver((entries) => callback(entries, commonBg[index]), options);
				observers.push(observe);
				observe.observe(target);
			});
		
		
			function callback(entries, activeElements) {
				if (entries[0].isIntersecting) {
					activeElements.classList.add('bg-open')
				}else{
					activeElements.classList.remove('bg-open')
				}
			}

		}	
		backgroundChange();

		// 画像マスク表示
		const maskOpen = () => {
			const targetElements = document.querySelectorAll('.maskWrap');
		
			const options = {
				root: null,
				rootMargin: "-45% 0%",
				threshold: 0,
			};
		
			let observers = []; // IntersectionObserverを複数持つための配列
		
			// 監視対象の要素に対してIntersectionObserverを設定
			targetElements.forEach(function (target) {
				let observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							entry.target.classList.add('mask-open');
						}
					});
				}, options);
		
				observers.push(observer);
				observer.observe(target);
			});
		};
		maskOpen()
})