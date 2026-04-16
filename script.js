// ==========================================
// HAMBURGER MENU NAVBAR (HP)
// ==========================================
function toggleNav() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
}

// DROPDOWN MENU
function toggleDropdown() {
  let dropdown = document.getElementById("cat-dropdown");
  if (dropdown) dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn') && !event.target.matches('#current-category')) {
    let dropdowns = document.getElementsByClassName("dropdown-list");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown && openDropdown.style.display === 'flex') {
        openDropdown.style.display = 'none';
      }
    }
  }
}

// FILTER MENU
function filterMenu(category, categoryName, btnElement) {
  document.getElementById("current-category").innerText = categoryName;

  document.querySelectorAll(".cat-item").forEach(btn => btn.classList.remove("active"));
  btnElement.classList.add("active");

  document.querySelectorAll(".card").forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// SEARCH
document.addEventListener("DOMContentLoaded", () => {
  let search = document.getElementById("search");
  if (search) {
    search.addEventListener("keyup", function() {
      let val = this.value.toLowerCase();
      document.querySelectorAll(".card").forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(val) ? "flex" : "none"; 
      });
    });
  }
});

// LOGIKA POPUP DETAIL MINUMAn
function openDetail(cardElement) {
  let imgSrc = cardElement.querySelector('.card-img img').src;
  let title = cardElement.querySelector('.card-info h3').innerText;
  let price = cardElement.querySelector('.card-info .price').innerText;
  let desc = cardElement.querySelector('.card-info .desc-hidden').innerText;

  document.getElementById("popup-img").src = imgSrc;
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-price").innerText = price;
  document.getElementById("popup-desc").innerText = desc;
  
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// KODE ORDER & NOTIFIKASI
function confirmOrder() {
  let namaMinuman = document.getElementById("popup-title").innerText;
  
  showProfessionalToast(namaMinuman + " berhasil dipesan.");
  
  closePopup();
}

function showProfessionalToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  
  if (toast && toastMsg) {
      toastMsg.innerText = message;
      
      toast.classList.add('show'); 

      setTimeout(() => {
          toast.classList.remove('show');
      }, 3500);
  }
}
// LOGIKA POPUP STORY (HOME)
function openStoryDetail(cardElement) {
  let imgSrc = cardElement.querySelector('img').src;
  let title = cardElement.querySelector('h3').innerText;
  let desc = cardElement.querySelector('.desc-hidden').innerText;

  document.getElementById("popup-story-img").src = imgSrc;
  document.getElementById("popup-story-title").innerText = title;
  document.getElementById("popup-story-desc").innerText = desc;
  
  document.getElementById("popup-story").style.display = "flex";
}

function closeStoryPopup() {
  document.getElementById("popup-story").style.display = "none";
}
// LOGIKA AUTO SLIDER (HOME)
document.addEventListener("DOMContentLoaded", () => {
  const sliderElement = document.getElementById("slider");
  if (!sliderElement) return;

  const slides = document.querySelectorAll(".slide");
  const slideCount = slides.length;
  let currentIndex = 0;
  let autoSlideInterval;

  window.moveSlide = function(direction) {
    clearInterval(autoSlideInterval);
    currentIndex += direction;

    if (currentIndex >= slideCount) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = slideCount - 1;
    }
    
    updateSliderPosition();
    startAutoSlide();
  };

  function updateSliderPosition() {
    sliderElement.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= slideCount) currentIndex = 0;
      updateSliderPosition();
    }, 3500);
  }

  startAutoSlide();
});