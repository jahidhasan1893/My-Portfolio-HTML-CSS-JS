function initMap() { var map = new google.maps.Map(document.getElementById('ieatmaps'), { center: { lat: 24.9212, lng: 91.8331 }, zoom: 14, styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }] }); var marker = new google.maps.Marker({ position: new google.maps.LatLng(34.0937458, -118.3614978), title: 'ASL', map: map }); }
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
  
    const animateCounters = () => {
      counters.forEach(counter => {
        const to = parseInt(counter.getAttribute('data-to'));
        const duration = parseInt(counter.getAttribute('data-speed'));
        let currentValue = 0;
  
        const timer = setInterval(() => {
          counter.textContent = currentValue++;
  
          if (currentValue > to) {
            clearInterval(timer);
            counter.textContent = to;
          }
        }, duration / to);
      });
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'scale(1)';
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    counters.forEach(counter => {
      counter.style.transform = 'scale(0.5)';
      observer.observe(counter);
    });
  });

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.container1');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  var gallery = document.querySelector('#gallery');
  var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
  var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
  var resizeAll = function () {
      var altura = getVal(gallery, 'grid-auto-rows');
      var gap = getVal(gallery, 'grid-row-gap');
      gallery.querySelectorAll('.gallery-item').forEach(function (item) {
          var el = item;
          el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
      });
  };
  gallery.querySelectorAll('img').forEach(function (item) {
      item.classList.add('byebye');
      if (item.complete) {
          console.log(item.src);
      }
      else {
          item.addEventListener('load', function () {
              var altura = getVal(gallery, 'grid-auto-rows');
              var gap = getVal(gallery, 'grid-row-gap');
              var gitem = item.parentElement.parentElement;
              gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
              item.classList.remove('byebye');
          });
      }
  });
  window.addEventListener('resize', resizeAll);
  gallery.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
          item.classList.toggle('full');
      });
  });

  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  var navLinks = document.querySelectorAll('.menu li');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    

    // Remove 'active' class from all menu items
    navLinks.forEach(function(item) {
      item.classList.remove('current');
    });

    // Add 'active' class to the clicked menu item
    link.classList.add('current');
  });
});

var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
      if (entry.isIntersecting) {
          // Get the target section ID
          var targetSectionId = entry.target.getAttribute('id');

          // Remove the 'current' class from all menu items
          document.querySelectorAll('.anchor_nav li').forEach(function(item) {
              item.classList.remove('current');
          });

          // Add the 'current' class to the current menu item
          var activeMenuItem = document.querySelector('.anchor_nav li a[href="#' + targetSectionId + '"]');
          if (activeMenuItem) {
              activeMenuItem.parentElement.classList.add('current');
          }
      }
  });
}, { threshold: 0.5 });

// Observe each section
document.querySelectorAll('.anchor_nav li a').forEach(function(section) {
  var targetSectionId = section.getAttribute('href').substring(1);
  var targetSection = document.getElementById(targetSectionId);
  if (targetSection) {
      observer.observe(targetSection);
  }
});

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(
          "body").style.visibility = "hidden";
      document.querySelector(
          "#preloader").style.visibility = "visible";
  } else {
      document.querySelector(
          "#preloader").style.display = "none";
      document.querySelector(
          "body").style.visibility = "visible";
  }
};
