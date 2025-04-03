/*======================Navbar Section=========================*/
window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar");
  if(window.scrollY > 50) {
    navbar.classList.add("scrolled");
  }else {
    navbar.classList.remove("scrolled");
  }
});

/*======================Navbar at 768px screen============================*/
document.addEventListener("DOMContentLoaded", function() {
  const hamburger =document.getElementById("hamburger");
  const closeMenu = document.getElementById("closeMenu");
  const navbarLinks = document.querySelector(".navbar-links");

  hamburger.addEventListener("click", function() {
    navbarLinks.classList.add("active");
    hamburger.style.display = "none";
    closeMenu.style.display = "block"; 
  });

  closeMenu.addEventListener("click", function() {
    navbarLinks.classList.remove("active");
    hamburger.style.display = "block";
    closeMenu.style.display = "none";
  });
})

//*=====================Banner Section carousel=============== */
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      let activeIndex = this.realIndex; // Get the real index of the active slide (0-based)
      let countItems = document.querySelectorAll(".banner-count ul li");

      // Remove "active" class from all numbers
      countItems.forEach((item) => item.classList.remove("active"));

      // Add "active" class to the current slide number
      countItems[activeIndex].classList.add("active");
    },
  },
});


document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});


/*=======================Menu Section Transition================*/
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-section .menu-content-section .menu-content");

  if (menuItems.length === 0) {
    console.warn("No menu-content elements found! Check your HTML structure.");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  menuItems.forEach((item) => observer.observe(item));
});

/*========================Service Section Transition================*/
document.addEventListener("DOMContentLoaded", function() {
  const serviceItems = document.querySelectorAll(".service-section .service-content-section .service-content");

  if(serviceItems.length == 0) {
    console.log("No Service section occurs");
    return; 
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target)
      }
    });
  }, {threshold: 0.3} )

  serviceItems.forEach((item) => observer.observe(item));
});

/*==========================Blog Section=====================================*/
document.addEventListener("DOMContentLoaded", function() {
  const blogItems = document.querySelectorAll(".blog-section .blog-content-section .blog-content"); 

  if (blogItems.length == 0) {
    console.log("No blog section avalable")
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.3 })

  blogItems.forEach((item) => observer.observe(item));
})

/*==========================Testimonial Section Animation=====================*/
document.addEventListener("DOMContentLoaded", function () {
  var testimonialSwiper = new Swiper(".testimonial-swiper-container", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.testimonial-pagination',
        clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
});

/*====================When user click on the order now button it blast the celebration*/
document.addEventListener("DOMContentLoaded", function () {
  const orderButton = document.querySelector(".order-btn");

  if (orderButton) {
      orderButton.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent form submission for demo
          
          // Bigger, longer-lasting confetti
          confetti({
              particleCount: 500,  //more particles
              spread: 360, //Full 360 degree spread
              startVelocity: 30, //Faster initial speed
              scalar: 1.5, //Larger particles
              gravity: 0.5,  //Slower falling speed
              decay: 0.94,  //Particles last long
              ticks: 200, //Longer animation duration
              origin: { y: 0.6 },  //Starts 60% from the top
              shapes: ['circle', 'square'], //Mixed of shaped
              colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9500', '#fc95c4']  //Colorful confetti
          });

          // Additional confetti effects
          setTimeout(() => {
              confetti({
                  particleCount: 100,
                  angle: 60,  //Angle for left side blast
                  spread: 55,
                  origin: { x: 0 }
              });
          }, 250);

          setTimeout(() => {
              confetti({
                  particleCount: 100,
                  angle: 120,    //Angle for right side blast
                  spread: 55,
                  origin: { x: 1 }
              });
          }, 400);

          // Show order success message after 2 seconds
          setTimeout(() => {
              showOrderSuccess();
          }, 2000);
      });
  }

  function showOrderSuccess() {
      const messageBox = document.createElement("div");
      messageBox.classList.add("order-success-box");
      messageBox.innerHTML = `
          <div class="success-animation">
              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
              <h2>Order Successful! 🎉</h2>
              <p>Your delicious ice cream is on its way!</p>
              <button class="track-btn">Track Your Order</button>
          </div>
      `;

      document.body.appendChild(messageBox);   //Add success message to webpage

      // Add click handler for track button
      const trackBtn = messageBox.querySelector(".track-btn");
      if (trackBtn) {
          trackBtn.addEventListener("click", function () {
              alert("Redirecting to order tracking...");
              // You can implement actual tracking page redirection here
          });
      }

      // Auto-remove message after 5 seconds
      setTimeout(() => {
          messageBox.style.animation = "fadeOut 1s ease-in-out forwards";
          setTimeout(() => {
              if (messageBox.parentNode) {
                  messageBox.parentNode.removeChild(messageBox);
              }
          }, 1000);
      }, 5000);
  }
});

/*====================When user click on the click me button in map section then map will appear and after new second it disappear=================================*/
document.addEventListener("DOMContentLoaded", function() {
  const visitButton = document.querySelector(".visit-btn");
  const mapContainer = document.getElementById("map-container");

  if (visitButton) {
    visitButton.addEventListener("click", function() {
      mapContainer.style.display = "block";

      setTimeout(() => {
        mapContainer.style.display = "none";
      }, 7000)
    });
  }
});
