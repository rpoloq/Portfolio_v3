(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header),
		$scrollLink = $('#scroll-link'),
		$banner = $('#banner'),
		$nightModeIcon = $('.night-mode-icon');
		$typing = $('#typing');

	init_typing = function() {
		
		$('#typing').typed({
			strings: ['RAFAEL POLOPE CONTRERAS', 'MULTIMEDIA ENGINEER', '<span class="higl">3D</span> DEVELOPER'],
			typeSpeed: 5,
			startDelay: 2500,
			backDelay: 1500
		});
	}

	/* Contact form submit */
	const form = document.getElementById('form')
	
	if (form)
	{
		form.addEventListener('submit', function(event) {
			event.preventDefault();
	
			const formData = new FormData(event.target);
	
			// Agregar el destino de redirección después de enviar el formulario correctamente
			formData.append('_next', 'form-submitted.html');
	
			fetch('https://formspree.io/f/xjvnvbql', {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			})
			.then(function(response) {
				if (response.ok) {
					// Redirigir después de enviar el formulario correctamente
					window.location.href = 'form-submitted.html';
				} else {
					console.error('Error al enviar el formulario:', response.statusText);
					// Manejar el error aquí si es necesario
				}
			})
			.catch(function(error) {
				console.error('Error al enviar el formulario:', error);
				// Manejar el error aquí si es necesario
			});
		});
	}

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}
	
	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

		$(".menuToggle, .close").on("click", function(e) {
			e.preventDefault();
		});
		

		// Header.
			// if ($banner.length > 0
			// &&	$header.hasClass('alt')) {

			// 	$window.on('resize', function() { $window.trigger('scroll'); });

			// 	$banner.scrollex({
			// 		bottom:		$header.outerHeight() + 1,
			// 		terminate:	function() { $header.removeClass('alt'); },
			// 		enter:		function() { $header.addClass('alt'); },
			// 		leave:		function() { $header.removeClass('alt'); }
			// 	});

			// }
		
		// Night Mode
		$nightModeIcon.click(function() {
			var currentSrc = $(this).attr('src');
			
			// var nightModeBackground = '#39454b'; // Reemplaza con el nuevo color de fondo deseado
			var nightModeBackground = '#222222'; // Reemplaza con el nuevo color de fondo deseado


			var dayModeImage = 'assets/css/images/light-mode.svg';
			var nightModeImage = 'assets/css/images/night-mode.svg';
		
			if (currentSrc === dayModeImage) {
				$(this).attr('src', nightModeImage);
				$('#one').css('background', '');
				$('#two').css('background', '');
				$('.main.style3.secondary').css('background', '');
				$('.main.style3.secondary h2').css('color', '#39454b');
			} else {
				$(this).attr('src', dayModeImage);
				$('#one').css('background', nightModeBackground);
				$('#two').css('background', nightModeBackground);
				$('.main.style3.secondary').css('background', nightModeBackground);
				$('.main.style3.secondary h2').css('color', '#ffffff');
			}
		});

	// Gallery.
		// $window.on('load', function() {

		// 	var $gallery = $('.gallery');

		// 	// Hack: Adjust margins when 'small' activates.
		// 		breakpoints.on('>small', function() {
		// 			$gallery.each(function() {
		// 				$(this)[0]._poptrox.windowMargin = 50;
		// 			});
		// 		});

		// 		breakpoints.on('<=small', function() {
		// 			$gallery.each(function() {
		// 				$(this)[0]._poptrox.windowMargin = 5;
		// 			});
		// 		});

		// });

	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); 
													 updateScrollLink('contact');},
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('#banner')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive');
													 updateScrollLink('one');
													 $scrollLink.css('color', '');},
							leave:		function() { $(this).addClass('inactive'); 
													 $scrollLink.css('color', 'darkgray');}
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive');
													 $(this).attr('id') === "one"
														? updateScrollLink('two')
														: updateScrollLink('work');},
							leave:		function() { $(this).addClass('inactive'); }
						});
					
				// Work
					$('#work')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive');
													 updateScrollLink('contact');},
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); 
													 updateScrollLink('contact-enter')},
							leave:		function() { $(this).addClass('inactive'); 
													 updateScrollLink('contact-leave')}
						});
			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
				if ($typing != null)
				{
					init_typing();
				}
			});

	function updateScrollLink(nextSectionId)
	{
		if (nextSectionId.includes("contact"))
		{
			if (nextSectionId == "contact-enter"){
				$scrollLink.css('display', 'none');
			}
			else {
				$scrollLink.css('display', '');
			}
		}
		$scrollLink.attr('href', '#' + nextSectionId);
		$('a[href^="#"]').scrolly({
			speed: 1500,
			offset: $header.outerHeight()
		});
	}

})(jQuery);