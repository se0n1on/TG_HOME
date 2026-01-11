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
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

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
   * Service projects data
   */
  const serviceProjects = {
    'ai-con': [
      'Enterprise Digital Transformation (2024)',
      'Global Market Entry Strategy (2023)',
      'Business Process Optimization (2023)',
      'Corporate Restructuring Initiative (2022)',
      'Strategic Partnership Development (2022)'
    ],
    'data-con': [
      'Financial Risk Assessment Platform (2024)',
      'Cybersecurity Enhancement Program (2023)',
      'Operational Risk Framework (2023)',
      'Compliance Management System (2022)',
      'Crisis Management Solution (2022)'
    ],
    'smart-farm-city': [
      'CRM System Implementation (2024)',
      'Supply Chain Optimization (2023)',
      'Business Intelligence Platform (2023)',
      'Workflow Automation Solution (2022)',
      'Customer Service Portal (2022)'
    ],
    'it-gov': [
      'Financial Forecasting Model (2024)',
      'Investment Portfolio Optimization (2023)',
      'Budget Management System (2023)',
      'Cash Flow Analysis Tool (2022)',
      'Tax Optimization Strategy (2022)'
    ],
    'global-con': [
      'Leadership Training Program (2024)',
      'Performance Management Framework (2023)',
      'Employee Engagement Initiative (2023)',
      'Skills Development Workshop (2022)',
      'Team Building Retreat (2022)'
    ],
    'soft-dist': [
      'AI Innovation Lab Setup (2024)',
      'R&D Strategy Development (2023)',
      'Product Innovation Pipeline (2023)',
      'Technology Scouting Program (2022)',
      'Innovation Workshop Series (2022)'
    ]
  };

  const serviceAreas = {
    'ai-con': [
      'AI Enterprise Application Consulting',
      'AI Governance Consulting & Solution',
      'AI Certification Consulting',
      'AI Data Reliability Verification Consulting',
      'AI Reliability Consulting',
      'AI Security Consulting',
      'AI Data Classification Consulting'
    ],
    'data-con': [
      'DATA Consulting',
      'Data Governance Consulting & Solution',
      'Data Standard Consulting & Solution',
      'Data Quality Consulting & Solution',
      'Big Data Analysis Consulting & Big Data Platform',
      'AI Data Consulting & Solution',
      'Public Data Consulting & My Data Consulting'
    ],
    'smart-farm-city': [
      'Smart Farm Consulting',
      'Smart Farm Data Analysis',
      'IoT, Big Data, and AI Agricultural Solutions',
      'Smart Farms in Developing Countries',
      'Smart City & Data Center Strategic Planning',
      'Smart City Data Collection & Analysis',
      'Smart City Governance Consulting'
    ],
    'it-gov': [
      'IT Governance Consulting & Solution',
      'Enterprise Architecture Consulting & Solution',
      'E-Government Performance Management',
      'E-Government Pre-Consultation',
      'IT Project Management (PMS)',
      'IT Resource Management (ITRMS)',
      'Service Management (ITSM)'
    ],
    'global-con': [
      'Official Development Assistance IT Consulting',
      'Public IT Governance (Multiple Countries)',
      'Mongolia Employment Service System',
      'Smart Farm Implementation (Vietnam, Uzbekistan, Rwanda, Malaysia)',
      'Vietnam Court Management System',
      'Smart City Framework Development (Kazakhstan, Kenya, Qatar)'
    ],
    'soft-dist': [
      'Software Solution Sales',
      'Technical Architect Consulting',
      'Functional Technology Solutions Design',
      'Technical Solution Process Management',
      'Hands-on Technical Solutions Development'
    ]
  };

  /**
   * Toggle service details expansion
   */
  window.toggleServiceDetails = function(button) {
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
      
      // Populate service areas list (What We Do)
      areasList.innerHTML = '';
      if (serviceAreas[serviceId]) {
        serviceAreas[serviceId].forEach(area => {
          const areaItem = document.createElement('div');
          areaItem.className = 'service-area-item';
          areaItem.innerHTML = '<i class="bi bi-check-circle"></i> <span>' + area + '</span>';
          areasList.appendChild(areaItem);
        });
      }
      
      // Populate projects list (What We Did)
      projectsList.innerHTML = '';
      if (serviceProjects[serviceId]) {
        serviceProjects[serviceId].forEach(project => {
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

})();