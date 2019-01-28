// scroll reveal
window.sr = ScrollReveal();
sr.reveal('.info-left', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('.info-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.2
});

// change icon Sound devices
function changeIcon(x) {
  x.classList.toggle("fa-angle-right");
}

// tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// owlcarousel
$('.owl-carousel').owlCarousel({
  loop: true,
  // center: true,
  margin: 30,
  nav: true,
  navText: ["<i class='fas fa-angle-up'></i>", "<i class='fas fa-angle-down'></i>"],
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: true
    },
    900: {
      items: 3,
      nav: true,
      loop: true
    }
  }
});
// vertical multi-item carousel

$('.carousel .vertical .item').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 1; i < 2; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});