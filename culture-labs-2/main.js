jQuery(function($){


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 0, 'swing', function () {
            //window.location.hash = target;
        });
    });

    var $slider = $('.nft_products > .slides');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
    
    $slider.slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    }); 

   /* $slider.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickPrev');
        } else {
          $(this).slick('slickNext');
        }
    }));*/

// Cycle plugin
$('.slide_images').cycle({
    fx:     'none',
    speed:   150,
    timeout: 5
}).cycle("pause");

// Pause &amp; play on hover
/*$('.nft_products .slides .slide').hover(function(){
    $(this).find('.slide_images').addClass('active').cycle('resume');
}, function(){
    $(this).find('.slide_images').removeClass('active').cycle('pause');
});*/


new WOW().init();

AOS.init();

// AOS.init({
//     disable: function() {
//       var maxWidth = 767;
//       return window.innerWidth < maxWidth;
//     }
//   });

letterCarousel('.Frist','.big-title');
	
	function letterCarousel(parent_cls,child_cls) {
		var e = jQuery(parent_cls+' '+child_cls),
		t = jQuery(window).height();
		jQuery(window).on("scroll", function() {
			if (jQuery(parent_cls).length) {
				var t = jQuery(document).scrollTop() + jQuery(window).height(),
				n = jQuery(parent_cls).offset().top;
				jQuery('.main_title').css({})
				if (n <= t) {
					var i = jQuery(document).scrollTop() - n + jQuery(window).height();
					var scroll = i - 150;
					var scroll_slow = scroll + ((scroll/70)/100);
					var img_scroll = scroll_slow * 30 /100;
					e.css({
						transform: "translateX(" + img_scroll + "px)"
					})
				}
			}
		});
	}



function parallaxScrollEl() {
    jQuery('h2.section_title').each(function() {
        jQuery(this).attr('data-parallax', '{"y": 40, "smoothness": 10}')
    })
    jQuery('h3.section_title').each(function() {
        jQuery(this).attr('data-parallax', '{"y": 30, "smoothness": 10}')
    })
}
parallaxScrollEl();

/*
var imgtilt = $('.logo img');
var layer = $('body');

layer.mousemove(function(e){
  var cvalueX= (e.pageX * -1 / 10);
  var cvalueY= (e.pageY * -1 / 10);
  imgtilt.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
});
*/

});

 

/* particle  

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function between(min, max) {
  return Math.random() * (max - min) + min;
}

var c = document.getElementById('c');
var ctx = c.getContext('2d');
//context and id of canvas

var w = window.innerWidth;
var h = 800;
//width and height of canvas

c.width = w;
c.height = h;
//setting the width and height for canvas

var partNum = (w * h) / 800;
//particle number - change it!

var mouse = {
  x: w / 8, 
  y: h / 8,
  r: 50
};
//mouse position

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY 
}, false);
//finding the mouse position

mouse.r = 25;
var cursorOpacity = 1;
var cursorTrue = false;
var cursorMinDest = 25;

document.addEventListener('mousedown', function(){ 
  mouse.r = 100;
  cursorOpacity = 0.2;
  cursorTrue = true;
  cursorMinDest = 200;
}, false);
// making implode

document.addEventListener('mouseup', function(){ 
  mouse.r = 25;
  cursorOpacity = 1;
  cursorTrue = false;
  cursorMinDest = 80;
}, false);
// making implode

var particles = [];
for(i = 0; i < partNum; i++) {
  particles.push(new particle);
}
    
//the particle function
function particle() {
  this.x = Math.random() * c.width;
  this.y = Math.random() * c.height;
  //setting the mouse position to the particle x and y
  
  this.vx = 0;
  this.vy = 0;
  
  this.r = Math.random() * 7;
  
  var r = '#e2e2e2';
  var o = '#e2e2e2';
  var y = '#9f9f9f';
  var array = [r, o, y];
	this.color = array[Math.floor(Math.random() * 2)];
}

function draw() {
  requestAnimFrame(draw);
  
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, c.width, c.height);
  
  ctx.beginPath();
    ctx.fillStyle = '#fff, ' + cursorOpacity + ')';
    ctx.arc(mouse.x, mouse.y, mouse.r, Math.PI * 2, false);
    ctx.fill();
  
  for(t = 0; t < particles.length; t++) {
    var p = particles[t];
    
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, Math.PI * 2, false);
    ctx.fill();
    //the context of the particle(s)
    
    p.x+=p.vx;
    p.y+=p.vy;
    
    p.vx*=0.95;
    p.vy*=0.95;
    
    if(p.y < 0 + p.r) {
      p.vy *= -1;
    }
    if(p.y > c.height - p.r) {
      p.vy *= -1;
    }
    if(p.x < 0 + p.r) {
      p.vx *= -1;
    }
    if(p.x > c.width - p.r) {
      p.vx *= -1;
    }
    if(p.r < 3) {
      p.color = 'white';
    };
    

    
    for(j = 0; j < particles.length; j++) {
			var pp = particles[j];
			distance(p, pp);
    }
    
    distance(mouse, p);
  }
}

function distance(p1, p2) {
	var dist, 
		dx = p1.x - p2.x,
		dy = p1.y - p2.y;
	
	dist = Math.sqrt(dx*dx + dy*dy);
			
	// Draw the line when distance is smaller
	// then the minimum distance
  var minDist = p1.r + p2.r;
  
	if(dist <= minDist) {
		var ax = dx,
			ay = dy;
    // Some acceleration for the partcles 
		// depending upon their distance
		if(cursorTrue) {
      p2.vx += ax/100;
		  p2.vy += ay/100;
    } else {
      p2.vx -= ax/30;
		  p2.vy -= ay/30;
    }
	}
}

draw();
*/
  
/* new */  

particlesJS("particles-js", {"particles":{"number":{"value":50,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"image","stroke":{"width":0,"color":"#fff"},"polygon":{"nb_sides":3},"image":{"src":"https://hztech.design/culture-labs/images/square-particle.png","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":0.5,"opacity_min":1,"sync":false}},"size":{"value":3.5,"random":true,"anim":{"enable":false,"speed":25,"size_min":2,"sync":true}},"line_linked":{"enable":true,"distance":100,"color":"#000","opacity":0,"width":0},"move":{"enable":true,"speed":4,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.display = 'none'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);


 

function loadImage(src) {
	return new Promise(function(ok, fail) {
		var img = document.createElement('img');

		function cb(fn) {
			return function() {
				img.onload = null;
				img.onerror = null;
				fn({
					width: img.width,
					height: img.height,
					src: img.src
				});
				img = null;
			};
		}

		img.onload = cb(ok);
		img.onerror = cb(fail);
		img.src = src;
	});
}

function PhotoModal(holder, body) {
	this.modal = holder;
	this.body = body || document.body;
	var cX = 0;
	var cY = 0;
	var degX = 0;
	var degY = 0;
	this.perspective = 1000; // smaller for "wide lens"
	this.dist = 0.02; // higher to "turn" more
	this.maxDeg = 10; // when deg is higher will trigger "force"
	this.maxDegForce = 0.75; // the closer do 1 the less movement will be visible after 10deg
	this.easing = 0.25; // higher for faster movement
	var self = this;

	this.init = function() {
		self.addEvents();
	};

	this.onMouseMove = function(e) {
		cX = (e.clientX - window.innerWidth * 0.5) * self.dist;
		cY = (e.clientY - window.innerHeight * 0.5) * -self.dist;
	};

	this.addEvents = function() {
		self.body.addEventListener('mousemove', self.onMouseMove);
	};

	this.removeEvents = function() {
		self.body.removeEventListener('mousemove', self.onMouseMove);
	};

	function forceMax(curr) {
		if (self.maxDeg && curr > self.maxDeg) {
			return curr - (curr - self.maxDeg) * self.maxDegForce;
		}
		if (self.maxDeg && curr < -self.maxDeg) {
			return curr - (curr + self.maxDeg) * self.maxDegForce;
		}
		return curr;
	}

	this.refresh = function() {
		degX += (cY - degX) * self.easing;
		degY += (cX - degY) * self.easing;
		self.modal.style.transform = [
			'perspective(' + self.perspective + 'px)',
			'rotateX(' + forceMax(degX) + 'deg)',
			'rotateY(' + forceMax(degY) + 'deg)'
		].join(' ');
	}
}

// applying
var modal = new PhotoModal(document.querySelector('.photo-modal'));
loadImage('images/logo.png')
// loadImage('https://i.imgur.com/Vzxpd.jpg')
	.then(function(img) {
		var width = Math.min(window.innerWidth * 0.5, img.width);
		var height = width * (img.height / img.width);
		if (img.height > img.width) {
			height = Math.min(window.innerHeight * 0.5, img.height);
			width = height * (img.width / img.height);
		}
		modal.init();
		modal.perspective = 1500;
		modal.dist = 0.001;
		modal.maxDeg = 0.001;
		modal.maxDegForce = 0.95; 
		// modal.easing = 0.02;
		modal.modal.style.cssText = [
			'background-image: url("' + img.src + '")',
		  
		].join(';');

		animate();
	});

function animate() { 
	modal.refresh();
	requestAnimationFrame(animate);
}
animate();


/*$(document).ready(function(){
  $(this).scrollTop(0);
	$('html, body').css({
		overflow: 'hidden',
		height: '100%'
	});
});*/
$('.photo-modal').on('click', function (e) {
	$('html, body').css({
	   overflow: 'auto',
		height: 'auto'
	});
});
  
  
  $(window).scroll(function() {
   var hT = $('#about').offset().top,
       hH = $('#about').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('.tlt').textillate({
  selector: '.texts',
  autoStart: true,
  in: {
	delay: 40,
	effect: 'flipInY',
  }
});
   }
});
  
  
  