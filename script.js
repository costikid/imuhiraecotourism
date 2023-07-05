    // JavaScript to change testimonials in the hero section every 4 seconds
    const testimonials = document.querySelectorAll(".testimonial");
    let currentTestimonialIndex = 0;

    function showTestimonial(testimonialIndex) {
      testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === testimonialIndex ? "block" : "none";
      });
    }

    function changeTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      showTestimonial(currentTestimonialIndex);
    }

    // Change testimonial every 4 seconds
    setInterval(changeTestimonial, 4000);

    // Initial show
    showTestimonial(currentTestimonialIndex);


// slider with arrows to go left and right 
const slider = document.querySelector('.activities-slider');
const slideWidth = document.querySelector('.slide').offsetWidth;

document.querySelector('.arrow-left').addEventListener('click', () => {
  slider.scrollLeft -= slideWidth;
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  slider.scrollLeft += slideWidth;
});

// Testimonials card changing automatically 


const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentCardIndex = 0;

function showNextCard() {
  testimonialCards[currentCardIndex].classList.remove('active');
  currentCardIndex = (currentCardIndex + 1) % testimonialCards.length;
  testimonialCards[currentCardIndex].classList.add('active');
}

setInterval(showNextCard, 3000);

// Text of the testimonial cards. Basically, regardless of the length of the text, the card enlarges or gets smaller


function truncateText() {
  testimonialCards.forEach(card => {
    const blockquote = card.querySelector('blockquote');
    const maxHeight = parseInt(getComputedStyle(card).height, 10);
    const lineHeight = parseInt(getComputedStyle(blockquote).lineHeight, 10);
    const maxLines = Math.floor(maxHeight / lineHeight);

    const originalText = blockquote.textContent;

    if (originalText.trim().split(' ').length <= maxLines) {
      return; // No need to truncate if text fits within card height
    }

    const words = originalText.trim().split(' ');

    blockquote.textContent = ''; // Clear existing content

    for (let i = 0; i < maxLines; i++) {
      blockquote.textContent += words[i] + ' ';
    }

    blockquote.textContent = blockquote.textContent.trim(); // Remove trailing space

    const remainingText = words.slice(maxLines).join(' ');

    if (remainingText.length > 0) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '... ';
      blockquote.appendChild(ellipsis);

      const moreText = document.createElement('span');
      moreText.textContent = remainingText;
      blockquote.appendChild(moreText);
    }
  });
}

window.addEventListener('DOMContentLoaded', truncateText);
window.addEventListener('resize', truncateText);


// modal opens when we click on image

const galleryImages = document.querySelectorAll('.gallery__image');
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal__image');
const modalClose = document.querySelector('.modal__close');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImage.src = image.src;
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});


$(function(){
  $('ul.tabs li:first').addClass('active');
  $('.block article').hide();
  $('.block article:first').show();
  $('ul.tabs li').on('click',function(){
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    $('.block article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
  });
})
