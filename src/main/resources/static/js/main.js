/**
* Template Name: UpScale
* Template URL: https://bootstrapmade.com/upscale-bootstrap-business-template/
* Updated: Nov 07 2025 with Bootstrap v5.3.8
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  // Store isotope instances globally
  window.isotopeInstances = window.isotopeInstances || {};
  
  function initIsotopeLayout() {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
      
      // Get a unique ID for this isotope layout
      const layoutId = isotopeItem.id || 'isotope-' + Math.random().toString(36).substr(2, 9);
      if (!isotopeItem.id) isotopeItem.id = layoutId;

      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        // Store the isotope instance
        window.isotopeInstances[layoutId] = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
        
        // Re-layout after a short delay to ensure proper sizing
        setTimeout(() => {
          if (window.isotopeInstances[layoutId]) {
            window.isotopeInstances[layoutId].layout();
          }
        }, 100);
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          
          if (window.isotopeInstances[layoutId]) {
            window.isotopeInstances[layoutId].arrange({
              filter: this.getAttribute('data-filter')
            });
            
            // Force layout recalculation
            setTimeout(() => {
              if (window.isotopeInstances[layoutId]) {
                window.isotopeInstances[layoutId].layout();
              }
            }, 50);
          }
          
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });
  }
  
  // Initialize on load
  initIsotopeLayout();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Service Data - Loaded from JSON
   */
  let servicesData = null;

  async function loadServicesData() {
    if (servicesData) return servicesData;
    
    const htmlLang = document.documentElement.getAttribute('lang');
    const currentPage = window.location.pathname;
    const pageFilename = currentPage.substring(currentPage.lastIndexOf('/') + 1);
    
    const isKorean = htmlLang === 'ko' || 
                    pageFilename === 'index_ko.html' || 
                    currentPage.includes('index_ko');
    
    const jsonFile = isKorean ? '/data/services_ko.json' : '/data/services.json';
    
    try {
      const response = await fetch(jsonFile);
      servicesData = await response.json();
      return servicesData;
    } catch (error) {
      console.error('Failed to load services data:', error);
      return {};
    }
  }

  /**
   * Toggle service details expansion
   */
  window.toggleServiceDetails = async function(button) {
    // Load services data if not already loaded
    const data = await loadServicesData();
    
    const serviceId = button.getAttribute('data-service');
    const serviceCard = button.closest('.service-card');
    const detailsContainer = document.getElementById('service-details-container');
    const detailsImg = document.getElementById('service-details-image');
    const projectsList = document.getElementById('service-projects-list');
    const areasList = document.getElementById('service-areas-list');
    const detailsTitle = document.getElementById('service-details-title');
    const allCards = document.querySelectorAll('.service-card');
    const allButtons = document.querySelectorAll('.learn-more');
    
    // Check if this service is already active
    const isActive = serviceCard.classList.contains('active');
    
    // Remove active state from all cards and reset buttons
    allCards.forEach(card => card.classList.remove('active'));
    allButtons.forEach(btn => {
      btn.innerHTML = 'Learn More <i class="bi bi-arrow-right"></i>';
    });
    
    if (isActive) {
      // Close details if clicking the same service
      detailsContainer.style.display = 'none';
    } else {
      // Mark current card as active
      serviceCard.classList.add('active');
      button.innerHTML = 'Close <i class="bi bi-x-lg"></i>';

      detailsImg.src = '/img/services/' + serviceId + '.jpg';
      
      // Get service title
      const serviceTitle = serviceCard.querySelector('h3').textContent;
      detailsTitle.textContent = serviceTitle;
      
      // Populate service areas list (What We Do) from JSON data
      areasList.innerHTML = '';
      if (data[serviceId] && data[serviceId].areas) {
        data[serviceId].areas.forEach(area => {
          const areaItem = document.createElement('div');
          areaItem.className = 'service-area-item';
          areaItem.innerHTML = '<i class="bi bi-check-circle"></i> <span>' + area + '</span>';
          areasList.appendChild(areaItem);
        });
      }
      
      // Populate projects list (What We Did) from JSON data
      projectsList.innerHTML = '';
      if (data[serviceId] && data[serviceId].projects) {
        data[serviceId].projects.forEach(project => {
          const li = document.createElement('li');
          li.innerHTML = '<i class="bi bi-check-circle-fill"></i> ' + project;
          projectsList.appendChild(li);
        });
      }
      
      // Show details container
      detailsContainer.style.display = 'block';
      
      // Smooth scroll to details - using 'nearest' to avoid excessive scrolling
      setTimeout(() => {
        detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  /**
   * Close service details
   */
  window.closeServiceDetails = function() {
    const detailsContainer = document.getElementById('service-details-container');
    const allCards = document.querySelectorAll('.service-card');
    const allButtons = document.querySelectorAll('.learn-more');
    
    // Remove active state and reset buttons
    allCards.forEach(card => card.classList.remove('active'));
    allButtons.forEach(btn => {
      btn.innerHTML = 'Learn More <i class="bi bi-arrow-down"></i>';
    });
    
    // Hide details container
    detailsContainer.style.display = 'none';
  };

  /**
   * Team Carousel Functionality
   */
  const carouselStates = {
    management: { currentIndex: 0, totalSlides: 0 },
    directors: { currentIndex: 0, totalSlides: 0 },
    consultants: { currentIndex: 0, totalSlides: 0 }
  };

  function initCarousel(carouselId) {
    const carousel = document.getElementById(`${carouselId}-carousel`);
    if (!carousel) return;

    const track = carousel.querySelector('.team-carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const indicatorsContainer = document.getElementById(`${carouselId}-indicators`);
    
    carouselStates[carouselId].totalSlides = slides.length;
    
    // Create indicators
    if (indicatorsContainer && slides.length > 1) {
      indicatorsContainer.innerHTML = '';
      for (let i = 0; i < slides.length; i++) {
        const indicator = document.createElement('button');
        indicator.className = 'carousel-indicator';
        indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(carouselId, i));
        indicatorsContainer.appendChild(indicator);
      }
    }
    
    updateCarousel(carouselId);
  }

  function updateCarousel(carouselId) {
    const carousel = document.getElementById(`${carouselId}-carousel`);
    if (!carousel) return;

    const track = carousel.querySelector('.team-carousel-track');
    const state = carouselStates[carouselId];
    const offset = -state.currentIndex * 100;
    
    track.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    const indicators = document.querySelectorAll(`#${carouselId}-indicators .carousel-indicator`);
    indicators.forEach((indicator, index) => {
      if (index === state.currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
    
    // Update button states
    const wrapper = carousel.closest('.team-carousel-wrapper');
    const prevBtn = wrapper.querySelector('.carousel-btn.prev');
    const nextBtn = wrapper.querySelector('.carousel-btn.next');
    
    if (prevBtn) {
      prevBtn.disabled = state.currentIndex === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = state.currentIndex === state.totalSlides - 1;
    }
  }

  function goToSlide(carouselId, index) {
    const state = carouselStates[carouselId];
    if (index >= 0 && index < state.totalSlides) {
      state.currentIndex = index;
      updateCarousel(carouselId);
    }
  }

  window.moveCarousel = function(carouselId, direction) {
    const state = carouselStates[carouselId];
    const newIndex = state.currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < state.totalSlides) {
      state.currentIndex = newIndex;
      updateCarousel(carouselId);
    }
  };

  // Initialize all carousels on page load
  window.addEventListener('load', () => {
    initCarousel('management');
    initCarousel('directors');
    initCarousel('consultants');
  });

  // Touch support for carousels
  function addTouchSupport(carouselId) {
    const carousel = document.getElementById(`${carouselId}-carousel`);
    if (!carousel) return;

    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe(carouselId);
    }, { passive: true });
    
    function handleSwipe(carouselId) {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          moveCarousel(carouselId, 1);
        } else {
          // Swipe right - previous slide
          moveCarousel(carouselId, -1);
        }
      }
    }
  }

  // Add touch support on load
  window.addEventListener('load', () => {
    addTouchSupport('management');
    addTouchSupport('directors');
    addTouchSupport('consultants');
  });

  // News Modal Functions
  window.openNewsModal = function(imageUrl, category, title, year, description = '') {
    const modal = document.getElementById('newsModal');
    const modalImage = document.getElementById('newsModalImage');
    const modalCategory = document.getElementById('newsModalCategory');
    const modalTitle = document.getElementById('newsModalTitle');
    const modalYear = document.getElementById('newsModalYear');
    const modalDescription = document.getElementById('newsModalDescription');

    modalImage.src = imageUrl;
    modalImage.alt = title;
    modalCategory.textContent = category;
    modalTitle.textContent = title;
    modalYear.textContent = year;
    modalDescription.textContent = description || 'TG is proud to announce this achievement.';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeNewsModal = function() {
    const modal = document.getElementById('newsModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Close modal when clicking outside the content
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('newsModal');
    if (event.target === modal) {
      closeNewsModal();
    }
  });

  // Close modal on Escape key
  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeNewsModal();
    }
  });

  // Load news from JSON and render dynamically
  async function loadNewsFromJSON() {
    try {
      // Detect current page language - check multiple sources for robustness
      const htmlLang = document.documentElement.lang;
      const currentPage = window.location.pathname;
      const pageFilename = currentPage.substring(currentPage.lastIndexOf('/') + 1);
      
      // Determine if Korean version based on multiple checks
      const isKorean = htmlLang === 'ko' || 
                      pageFilename === 'index_ko.html' || 
                      currentPage.includes('index_ko');
      
      const jsonFile = isKorean ? '/data/news_ko.json' : '/data/news.json';
      
      const response = await fetch(jsonFile);
      const newsData = await response.json();
      
      const container = document.querySelector('.isotope-container');
      if (!container || newsData.length === 0) return;
      
      // Clear existing news items (keep template structure)
      container.innerHTML = '';
      
      // Render each news item
      newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = `col-lg-6 portfolio-item isotope-item ${news.filter}`;
        newsItem.innerHTML = `
          <div class="portfolio-wrapper">
            <div class="portfolio-image">
              <img src="${news.imagePath}" alt="${news.category}" class="img-fluid" loading="lazy">
              <div class="portfolio-category">${news.category}</div>
            </div>
            <div class="portfolio-content">
              <div class="portfolio-header">
                <h3>${news.title}</h3>
                <span class="portfolio-year">${news.year}</span>
              </div>
            </div>
          </div>
        `;
        container.appendChild(newsItem);
      });
      
      // Re-initialize isotope properly
      if (typeof Isotope !== 'undefined' && typeof imagesLoaded !== 'undefined') {
        const layoutId = 'news-isotope-layout';
        const isotopeLayout = document.getElementById(layoutId);
        
        if (isotopeLayout) {
          // Destroy existing isotope instance if it exists
          if (window.isotopeInstances && window.isotopeInstances[layoutId]) {
            window.isotopeInstances[layoutId].destroy();
          }
          
          // Wait for images to load before initializing isotope
          imagesLoaded(container, function() {
            // Create new isotope instance
            window.isotopeInstances = window.isotopeInstances || {};
            window.isotopeInstances[layoutId] = new Isotope(container, {
              itemSelector: '.isotope-item',
              layoutMode: 'masonry',
              filter: '*',
              sortBy: 'original-order'
            });
            
            // Force layout after a short delay
            setTimeout(() => {
              if (window.isotopeInstances[layoutId]) {
                window.isotopeInstances[layoutId].layout();
              }
            }, 100);
          });
        }
      }
      
      // Re-initialize news card click handlers
      initializeNewsCardHandlers();
      
    } catch (error) {
      console.error('Error loading news data:', error);
    }
  }

  // Initialize news card click handlers
  function initializeNewsCardHandlers() {
    const newsCards = document.querySelectorAll('.portfolio-item .portfolio-wrapper');
    newsCards.forEach(card => {
      card.addEventListener('click', function() {
        const image = this.querySelector('.portfolio-image img');
        const category = this.querySelector('.portfolio-category');
        const title = this.querySelector('.portfolio-header h3');
        const year = this.querySelector('.portfolio-year');

        if (image && category && title && year) {
          openNewsModal(
            image.src,
            category.textContent,
            title.textContent,
            year.textContent
          );
        }
      });
    });
  }

  // Load news on page load
  window.addEventListener('load', () => {
    loadNewsFromJSON();
  });

})();