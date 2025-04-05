// Smooth Scroll
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Testimonials Slider
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 5000);

// Scroll animations for 'Why Choose Us'
document.addEventListener("DOMContentLoaded", function() {
  const whyChooseUsSections = document.querySelectorAll(".why-choose-us");
  
  function handleScroll() {
    const triggerPoint = window.innerHeight * 0.8;
    whyChooseUsSections.forEach(section => {
      const reasons = section.querySelectorAll(".reason");
      if (section.getBoundingClientRect().top < triggerPoint) {
        reasons.forEach((reason, index) => {
          setTimeout(() => {
            reason.classList.add("animate");
          }, index * 200);
        });
      }
    });
  }
  
  window.addEventListener("scroll", handleScroll);

  // Show More functionality
  document.querySelectorAll(".show-more-btn").forEach(button => {
    button.addEventListener("click", function() {
      const extraText = this.previousElementSibling;
      const isExpanded = extraText.style.display === "block";
      extraText.style.display = isExpanded ? "none" : "block";
      this.textContent = isExpanded ? "Show More" : "Show Less";
    });
  });

  // Change button text on hover
  document.querySelectorAll('.book-now-btn').forEach(button => {
    button.addEventListener('mouseover', () => button.textContent = 'Call Now');
    button.addEventListener('mouseout', () => button.textContent = 'Book Now');
  });

  // EmailJS Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form values
      const templateParams = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        message: this.message.value
      };

      // Send email using EmailJS
      emailjs.send('service_5oclbeb', 'template_z4d8ha6', templateParams)
        .then(response => {
          alert('Message sent successfully!');
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch(error => {
          alert('Failed to send message. Please try again later.');
          console.log('FAILED...', error);
        });
    });
  }

  // WhatsApp Contact Popup
  const whatsappIcon = document.querySelector('.whatsapp-icon');
  const whatsappChat = document.getElementById('whatsappChat');
  
  function toggleWhatsAppPopup() {
    whatsappChat.style.display = whatsappChat.style.display === 'block' ? 'none' : 'block';
  }
  
  if (whatsappIcon) {
    whatsappIcon.addEventListener('click', toggleWhatsAppPopup);
  }

  const closeChatButton = document.querySelector('.chat-header button');
  if (closeChatButton) {
    closeChatButton.addEventListener('click', toggleWhatsAppPopup);
  }

  // Call Us Popup
  const callIcon = document.querySelector('.call-icon');
  const callChat = document.getElementById('callChat');

  function toggleCallPopup() {
    callChat.style.display = callChat.style.display === 'block' ? 'none' : 'block';
  }

  if (callIcon) {
    callIcon.addEventListener('click', toggleCallPopup);
  }

  const closeCallButton = document.querySelector('.call-header button');
  if (closeCallButton) {
    closeCallButton.addEventListener('click', toggleCallPopup);
  }
  // Event listener for "Book Now" buttons
document.querySelectorAll('.book-now-btn').forEach(button => {
  button.addEventListener('click', function() {
    const serviceTitle = this.closest('.service-card').querySelector('.service-title').textContent;
    const subServiceTitle = this.previousElementSibling.textContent;

    // Replace this with the action you want to perform, e.g., an API call or a popup
    alert(`Booking initiated for ${serviceTitle} - ${subServiceTitle}`);

    // Example: Open phone dialer (if on a mobile device)
    window.location.href = "tel:+918218636176"; // Replace with the number to dial
  });
});

  // Contact Popup Toggle
const mailIcon = document.querySelector('.mail-icon');
const mailChat = document.getElementById('mailChat');

function toggleMailPopup() {
  mailChat.style.display = mailChat.style.display === 'block' ? 'none' : 'block';
}

if (mailIcon) {
  mailIcon.addEventListener('click', toggleMailPopup);
}

// EmailJS for Popup Form
const popupContactForm = document.getElementById('popupContactForm');
if (popupContactForm) {
  popupContactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      message: this.message.value,
    };

    emailjs.send('service_5oclbeb', 'template_z4d8ha6', templateParams)
      .then(response => {
        alert('Message sent successfully!');
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch(error => {
        alert('Failed to send message. Please try again later.');
        console.log('FAILED...', error);
      });
  });
}
// Toggle mail popup visibility
function toggleMailPopup() {
  const mailChat = document.getElementById('mailChat');
  mailChat.style.display = mailChat.style.display === 'block' ? 'none' : 'block';
}

// Add event listener to close button in the mail popup
document.querySelector('.mail-header button').addEventListener('click', toggleMailPopup);

});
