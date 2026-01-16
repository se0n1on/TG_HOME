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
		'Consulting Project for Efficient Management of Future-Oriented National Health Insurance Big Data (National Health Insurance Service)',
		'ISP Study for the Transportation Vulnerable Mobility Convenience Information Management System (Ministry of Land, Infrastructure and Transport)',
		'Mid- to Long-Term Information Strategy Planning Consulting Project for KORAD (Korea Radioactive Waste Agency)',
		'ISP Consulting for Next-Generation HIS Implementation (Yonsei Medical Center)',
		'ISP/ISMP Consulting Project for Advancement of the Inter-Ministerial Integrated Research Support System (IRIS)',
		'IT Consulting for Next-Generation ERP System Implementation (National Federation of Taxi Transport Associations)',
		'BPR/ISP for Next-Generation Information System 구축 (Korea Student Aid Foundation)',
		'Information Strategy Planning (ISP) for LX Metaverse Platform',
		'ISP Consulting for Detailed Cloud Transformation Strategy (National Railroad Corporation)',
		'ISP Research Project for Cloud-Based Data Center Construction (Chungcheongbuk-do)',
		'ISP Project for Cloud-Based Information Strategy (Korea Fair Trade Mediation Agency)',
		'Consulting for AI Training Data Quality Management and System Advancement',
		'ISP for Digital Transformation of Food Crop Research',
		'BPR/ISP Consulting for Open Verification Tools for AI Reliability',
		'ISMP for Intelligent Defense Platform Construction',
		'Demand Consulting and Project Operation Support for SBA AI-Based Business Innovation Program',
		'ISP Consulting for AI Education Platform Construction',
		'Research Project for AI Service Discovery',
		'Consulting for Online Virtual Math and Science Experiment Platform',
		'Smart Jiphyeonjeon ISP Consulting',
		'ISP Consulting for Veterans Discharge Portal (Ministry of Patriots and Veterans Affairs)',
		'AI Roadmap Consulting for the Constitutional Court',
		'International Video Conferencing Solution Project (Ministry of Foreign Affairs)',
		'ISP Consulting for Overseas Cultural Promotion Centers (Ministry of Foreign Affairs)',
		'ISP Consulting for Korea National Park Service',
		'Financial ISP Consulting for Korea Institute of Startup & Entrepreneurship Development',
		'PMO for Sejong Autonomous Driving Big Data Center',
		'PMO for Call Center Construction (Ministry of Foreign Affairs)',
		'ISP for NIPA Next-Generation System Reconstruction',
		'AI Consulting for the Personal Information Protection Commission',
		'ISP for Reorganization of AI Hub',
		'ISP Consulting for “Ilmoa” Employment Information System (Korea Employment Information Service)',
		'AI Training Data Call Center Project',
		'ISMP for New Customs Clearance System for E-Commerce Goods',
		'Consulting for Smart Tourism City Platform Guidelines',
		'Integrated Consulting for Korea Mine Rehabilitation and Mineral Resources Corporation',
		'ISP Consulting for ASEAN–Korea Centre',
		'Feasibility Consulting for Next-Generation Budget System (National Health Insurance Service)',
		'G4K Consulting (Ministry of Foreign Affairs)',
		'Digital Governance Consulting (Ministry of Foreign Affairs)',
		'ISP Consulting for Broadcasting and Video System (Korea Copyright Commission)',
		'AI Service Discovery Research Project (Yeongdeungpo District)',
		'BPR/ISP for Intelligent Cloud Computing Integrated Management (National Information Resources Service)',
		'AI ISP Consulting for Ministry of Patriots and Veterans Affairs',
		'Local Finance Informatization Consulting',
		'PMO and Consulting for Intelligent Advancement of Consular Call Center (Ministry of Foreign Affairs)',
		'ISP for AI-Based Integrated Construction Site Information System (Korea Occupational Safety and Health Agency)',
		'BPR Consulting for Veterans Appeals Committee',
		'New Technology Infrastructure Consulting (Korea Fiscal Information Service)',
		'BPR/ISP for Integrated Childcare Helper Management System (Ministry of Gender Equality and Family)',
		'PMO Project for Sejong Smart City Autonomous Driving Construction',
		'Data Coordinator Operation Service for Incheon Lifelog Shared Platform',
		'R&D Project for AI-Based Childcare Facility Parent Safety Service Platform',
		'Incheon Smart Tourism Platform Construction',
		'AI Solution Voucher Program',
		'AI Consulting for Cybercrime Investigation (National Police Agency)',
		'Intelligent Fraud Detection System (FDS) Construction for e-Naradoom (Korea Fiscal Information Service)',
		'ISP for Intelligent Integrated Administrative Work Support System (Ministry of the Interior and Safety)',
		'BPR and Blockchain Application Study for Military Judicial Information System (Ministry of National Defense)',
		'ISP for Intelligent Accounting and Financial Administration Support System (Ministry of Foreign Affairs)',
		'AI Healthcare Industry Commercialization Strategy Study (Jeju Free International City)',
		'Smart City CityLab Consulting (Siheung City)',
		'Business Model and Platform Development for Education Sector in National Smart City Pilot Project (KERIS)',
		'Blockchain-Based Smart Contract System Research (Korea Technology & Information Promotion Agency for SMEs)',
		'ISP for Next-Generation 112 Emergency Call System (National Police Agency)',
		'ISP Consulting for AI-Based Fraud Detection System (FDS) for e-Naradoom (Ministry of Economy and Finance)',
		'Intelligent Constitutional Court ISP Consulting',
		'Intelligent Advancement ISP Consulting for Consular Call Center (Ministry of Foreign Affairs)',
		'Intelligent ISP Consulting (Korea Employment Information Service)',
		'Intelligent ISP Consulting (Korea East-West Power)',
		'Mid- to Long-Term ISP Roadmap for Intelligent E-Government Administrative Service Redesign (Ministry of the Interior and Safety)',
		'Chatbot Consulting (Seoul Metropolitan Government)',
		'Roadmap Planning and Research for Intelligent Infrastructure R&D (KISTI)',
		'4th Industrial Revolution and Smart ISP Consulting (Korea East-West Power)',
		'Research Project on Blockchain Technology Applications in the Public Sector (KAIST)'
    ],
    'data-con': [
		'Consulting Project for Activation of Public Data and Data-Driven Administration (2024)',
		'Consulting Project for Integrated Management of National Land Safety Data',
		'Public Data Quality Management Consulting Project for Yeoncheon County (2024)',
		'Public Data Disclosure and Quality Management Support Project for Gangseo District (2024)',
		'Public Data Operation and Quality Management Consulting Project (2024)',
		'Consulting for Public Data Provision and Activation of Data-Driven Administration',
		'Standardization for the Expansion and Adoption of National MyData',
		'Financial Public Data Disclosure Expansion Project (2024)',
		'“Benefits Notification” (Personalized Public Service Guidance) Service Implementation (Phase 1)',
		'Reconstruction of the Maritime and Fisheries Informatization Support System',
		'Support for Establishment of the 4th National Basic Plan for Public Data (NIA)',
		'Reconstruction of the Maritime and Fisheries Informatization Support System (Ministry of Oceans and Fisheries)',
		'Consulting Project for Expansion of Public Data Disclosure (Korea Water Resources Corporation)',
		'System Maintenance Project for SW Asset Bank (NIPA, 2024)',
		'ISMP Roadmap for Big Data Platform Construction of Zero-Emission Vehicle Integrated Portal (Korea Environment Corporation)',
		'Data Quality Management Advancement Project',
		'Data Standardization and Management Strategy Consulting Project (KORAD)',
		'Public Data Quality Management and Pan-Government Data Evaluation Response Project (Korea Rural Community Corporation)',
		'Public Data Operation and Quality Management Consulting Project (Korea Gas Corporation)',
		'Consulting for Enhancement of Data Utilization and Management Capabilities (Korea Asset Management Corporation)',
		'Public Data Quality Management Consulting Project',
		'Public Data Disclosure and Quality Management Support Project for Gangseo District (2023)',
		'Public Data Quality Management Consulting Project for Tongyeong City (2023)',
		'Public Data Disclosure, Operation, and Quality Management Project (KOICA, 2023)',
		'Public Data Quality Management Consulting Project for Yeoncheon County',
		'Public Data Quality Management Consulting Project for Tongyeong City (2023)',
		'Data and Information Resource Management Consulting Project (Korea East-West Power, 2023)',
		'Consulting for Quality Management and System Advancement of AI Training Data',
		'Financial Public Data Disclosure Expansion Project (2023)',
		'Public Data Status Assessment and Quality Management Maturity Diagnosis Consulting (KOICA)',
		'Consulting Project for National Land Safety Data Management',
		'ISP Establishment and Data Operation Evaluation Support for Integrated Data Analysis System (Ministry of Health and Welfare)',
		'Integrated Data Management Consulting Project (Korea Western Power)',
		'Public Data Operation and Quality Management Consulting Project (KIAT, 2022)',
		'Functional Enhancement of Data-Based Industry and Market Change Prediction System (KISTI)',
		'Power Metadata Standardization Consulting Project',
		'ISP Research Project for Cloud-Based Data Center Construction (Chungcheongbuk-do)',
		'SME Data Analysis and Utilization Support Project (Incheon, 2022)',
		'Public Data Quality Diagnosis and Management Project (Korea Foundation for International Cultural Exchange, 2022)',
		'Public Data Operation and Quality Management Consulting Project (Korea East-West Power, 2022)',
		'Data Standardization and Utilization Model Discovery Project (Korea Road Traffic Authority)',
		'Public Data Disclosure and Quality Management Support Project for Gangseo District (2022)',
		'Financial Public Data Disclosure Project for Individual Business Owner Information',
		'Consulting for Quality Management and System Advancement of AI Training Data',
		'Public Data Disclosure and Quality Management Consulting Project (Korea Industrial Complex Corporation, 2022)',
		'Renewable Energy Data Standardization and Quality Management Consulting',
		'Smart City Data Platform Construction Pre-Feasibility Study (Tashkent Region / Angren City, Uzbekistan, 2021–2022)',
		'Demand-Centered Public Data Disclosure and Utilization Framework Improvement Project (NIA)',
		'Public Data Provision, Operation, and Quality Management Evaluation Support Project (Korea Real Estate Board)',
		'Data Coordinator Operation Project for Lifelog Shared Platform (Incheon, 2021)',
		'COVID-19 Infectious Disease Data Disclosure and High-Quality Integrated Open Data Framework Construction',
		'Public Data Operation and Quality Management Consulting Project (KIAT, 2021)',
		'Information Strategy Planning for Energy Data Integrated Management Platform',
		'Power Transaction Data Disclosure Framework Construction',
		'Standard-Based Establishment Study for Public Diplomacy Project Information Data',
		'Public Data Operation Status and Quality Management Consulting Project (Ulsan Port Authority)',
		'Diagnosis and Improvement of Construction Workers Database',
		'Public Data Operation and Quality Management Consulting Project (Korea East-West Power, 2021)',
		'Deliverable Data Quality Inspection for Data Voucher Support Program',
		'Comprehensive Public Data Operation and Quality Management Consulting Project (Korea Western Power)',
		'ISP for Smart Management Technology Application and Infrastructure Data Dam Integration of Underground Utility Tunnels',
		'ISP for MyAgriData (Agricultural MyData) Construction (2021)',
		'Public Data Disclosure and Quality Management Consulting Project for Industrial Complexes (2021)',
		'BPR/ISP for Integrated Management and Services of Meteorological and Climate Data',
		'Data Coordinator Operation Project for Lifelog Shared Platform (Incheon, 2020)',
		'Survey, Performance Management, and Utilization Expansion Support Project for AI Training Data',
		'AI Training Data Quality Management Framework and Common Standards Guidelines',
		'Preliminary Consulting for Establishment of Public Data Quality Management Framework (Korea Gas Corporation)',
		'Public Data Operation and Quality Management Consulting Project (Korea East-West Power)',
		'Public Data Quality Management Maturity Evaluation Consulting (Korea Credit Guarantee Fund)',
		'Public Data Quality Management Consulting Project (Korea Midland Power)',
		'Comprehensive Public Data Operation and Quality Management Consulting Project (Korea Western Power)',
		'Improvement Project for Demand-Centered Utilization of Public Data (Ministry of Trade, Industry and Energy)',
		'Study on Standardization of Veterans Appeals Decisions and Construction of Big Data-Based Review Case System',
		'Public Data Quality Management Consulting Project (JPDC)',
		'Improvement Project for Demand-Centered Utilization of Public Data (Ministry of Trade, Industry and Energy)',
		'Study on Public Data Quality Management and Expansion of Disclosure in the Health and Welfare Sector',
		'Support Project for Establishment of the 3rd National Basic Plan for Public Data (NIA)',
		'Study on Improvement of Data Quality Management (Ministry of Trade, Industry and Energy)',
		'ISP Project for National Master Data Designation and Management Framework Establishment',
		'Delivery of DQMS Solution for Data Consulting',
		'Industry–Academia Cooperation Project: Public Data Disclosure SW Architecture Model Design',
		'Information Strategy Planning for Energy Database Construction'
    ],
    'smart-farm-city': [
		'Pre-Feasibility Study for Smart City Integrated Control Center of Indonesia’s New Capital',
		'Master Plan for Development and Promotion of Smart Logistics in Konza Smart City under Kenya EIPP (2022–2023)',
		'Policy Advisory Project for Uzbekistan: Pre-Feasibility Study (Pre-F/S) for Smart City Data Platform Construction in Tashkent Region (Angren City)',
		'Smart City Consulting Project for Konza Smart City, Kenya',
		'Control Center Consulting Project for Konza Smart City, Kenya',
		'Smart City Consulting Project for Nairobi, Kenya',
		'Smart City Consulting Project for Senegal',
		'Smart City Consulting Project for Malaysia (Korea Land & Housing Corporation)',
		'PMO for Big Data Project in Sejong Smart City Autonomous Driving Special Zone',
		'Big Data Platform Project for Sejong Smart City Autonomous Driving Special Zone',
		'Strategic Planning for Smart City Development in La Ceiba, Honduras',
		'Establishment and Education Program for Smart City Department at Huree University, Mongolia',
		'Smart City Consulting Project in Gaziantep, Türkiye',
		'Smart City Consulting Project in Ankara, Türkiye',
		'Participation in Autonomous Driving AI Data Construction for Pangyo Smart City',
		'Smart City Framework Consulting Project for Qatar',
		'Smart City CityLab Consulting Project for Siheung City',
		'Business Model and Platform Development for National Smart City Pilot Project',
		'Smart City and CityLab Education Program for Kazakhstan',
		'Planning Project for Digital Agriculture Information Platform for Climate Change Response in Tashkent, Uzbekistan',
		'Smart Farm Project for High-Quality Fruit and Vegetable Production in Tashkent, Uzbekistan (2023)',
		'Advancement of Agricultural Policy Big Data Platform (2022)',
		'Operation of AI Agriculture Competition and Establishment of International Competition Master Plan (Agricultural Policy Institute, 2022)',
		'ISMP for Construction and Advancement of Smart Farm Innovation Valley Big Data Centers (Jeonnam & Gyeongnam)',
		'ISP for Digital Transformation of Food Crop Research',
		'Planning and Equipment Deployment Strategy and Industry–Academia–Research–Government Network Establishment for Jeonnam Smart Farm Innovation Valley Demonstration Complex',
		'Mid- to Long-Term Roadmap for Smart Farm Big Data Collection Framework Establishment',
		'Smart Farm Construction and Consulting Project in Southern Vietnam',
		'Consulting for Agricultural Information System Construction in the Philippines',
		'Smart Farm Big Data Consulting Project',
		'Pre-Feasibility Survey for Rwanda Smart Agricultural Value Chain Support Project',
		'AI-Based Localization Model Development for Smart Agriculture in Malaysia (Korea–Malaysia International IT Cooperation Project, Phase 1)',
		'Smart Farm Big Data Collection Project (Korea Agency of Education, Promotion and Information Service in Food, Agriculture, Forestry and Fisheries)'
    ],
    'it-gov': [
		'Fair Trade Commission (Korea)',
		'National Assembly of the Republic of Korea',
		'Ministry of National Defense',
		'Korea Customs Service',
		'Anti-Corruption and Civil Rights Commission',
		'Ministry of Agriculture, Food and Rural Affairs',
		'Supreme Prosecutors’ Office',
		'Defense Acquisition Program Administration (DAPA)',
		'Ministry of Government Legislation',
		'National Fire Agency',
		'Korea Coast Guard',
		'Ministry of Oceans and Fisheries',
		'Ministry of Environment',
		'Seoul Metropolitan Government',
		'Busan Metropolitan City',
		'Agency for Defense Development (ADD)',
		'Defense Agency for Technology and Quality (DTaQ)',
		'Korea Tourism Organization',
		'Korea Mine Rehabilitation and Mineral Resources Corporation',
		'Korea Southern Power Co., Ltd.',
		'Korea Racing Authority',
		'Korea Hydro & Nuclear Power Co., Ltd. (KHNP)',
		'Korea Water Resources Corporation (K-water)',
		'Korea Internet & Security Agency (KISA)',
		'Korea Energy Agency',
		'National Health Insurance Service Ilsan Hospital',
		'Korea Housing Finance Corporation (or Korea Housing Guarantee, depending on context)',
		'Korea District Heating Corporation',
		'Korea Trade-Investment Promotion Agency (KOTRA)',
		'Pan-Government e-Government Performance Management Program',
		'Daewoo Shipbuilding & Marine Engineering (DSME)',
		'SK hynix Inc.',
		'Gyeonggi Provincial Government',
		'Ministry of the Interior and Safety',
		'Ministry of Culture, Sports and Tourism',
		'Ministry of Gender Equality and Family',
		'Ministry of Trade, Industry and Energy',
		'Korea Forest Service',
		'Ministry of Food and Drug Safety',
		'Ministry of Public Safety (former)',
		'Korea Institute of Science and Technology Information (KISTI)',
		'Korea Employment Information Service',
		'National Health Insurance Service',
		'Korea Expressway Corporation',
		'Korea Land and Geospatial Informatix Corporation (LX)',
		'Korea Rural Community Corporation',
		'Korea Copyright Commission',
		'Health Insurance Review & Assessment Service (HIRA)',
		'Korea Midland Power Co., Ltd.'
    ],
    'global-con': [
		'PMC Consulting Service for Rwanda Integrated Employment Information System Construction Project',
		'Planning Service for the Construction of a Digital Agriculture Information Platform for Climate Change Response in Tashkent, Uzbekistan',
		'Improvement Measures for Tax Revenue Data Governance and Analytical Models in Ecuador',
		'Pre-Feasibility Study for Digital ID Transformation in Mongolia',
		'Korea–Cambodia Digital Government Cooperation Center Joint Cooperation Project (2024)',
		'ASEAN Data Status Survey Project',
		'Pilot Project for Smart Production and Fresh Distribution System in Southern Vietnam',
		'Korea–Kazakhstan IT Cooperation Project: Joint Cooperation Task (2023)',
		'Pre-Feasibility Study for Smart City Integrated Control Center of Indonesia’s New Capital',
		'Korea–Uzbekistan Digital Government Cooperation Center Joint Cooperation Project (2023)',
		'(2022/23 KSP Policy Advisory) Construction of a Risk-Based Inspection (RBI) System for Imported Cargo Management at Egyptian Ports',
		'Master Plan for Development and Promotion of Smart Logistics in Konza Smart City under Kenya EIPP (2022–2023)',
		'High-Quality Fruit and Vegetable Smart Farm Project in Tashkent, Uzbekistan',
		'Pilot Project for Smart Production and Fresh Distribution System in Southern Vietnam (Phase 3)',
		'Korea–Cambodia Digital Government Cooperation Center Joint Cooperation Project (2022)',
		'Korea–Uzbekistan Digital Government Joint Cooperation Project (2022)',
		'Pilot Project for Smart Production and Fresh Distribution System in Southern Vietnam (Phase 2)',
		'PMC Consulting Service for Nigeria Digital Governance Foundation-Building Project',
		'(2021/22 EIPP) Pre-Feasibility Study for Smart City Data Platform Construction in Tashkent Region (Angren City), Uzbekistan',
		'(2021/22 EIPP) Master Plan for Konza Smart City, Kenya',
		'(2021/22 EIPP) Detailed Implementation Plan for Integrated Control Center Construction in Konza Smart City, Kenya',
		'Development and Demonstration of Issue Analysis Tasks through Big Data Analytics Platform Construction in Kazakhstan (Long-Term Project, Phase 2)',
		'Pilot Project for Smart Production and Fresh Distribution System in Southern Vietnam',
		'Korea–Cambodia Digital Government Cooperation Center Joint Cooperation Project (2021)',
		'Development and Demonstration of Issue Analysis Tasks through Big Data Analytics Platform Construction in Kazakhstan (Long-Term Project, Phase 1)',
		'Korea–Indonesia Digital Government Cooperation Center Joint Cooperation Project (2021)',
		'Maintenance and Operational Support Project for Mongolia Employment Service Information Network',
		'Korea–Uzbekistan Digital Government Joint Cooperation Project (2021)',
		'Pre-Feasibility Study (F/S) for Next-Generation Financial Management System Construction in Indonesia',
		'Korea–Tunisia e-Government Cooperation Center Joint Cooperation Project (2020)',
		'ISP Consulting Service for the ASEAN–Korea Centre',
		'AI-Based Localization Model Development for Smart Agriculture in Malaysia',
		'(2020/21 EIPP) Establishment of the National Big Data Promotion Strategy of Uzbekistan',
		'Consulting on Overseas Expansion Strategy for EdTech',
		'Execution of Phase 1 Tasks for Korea–Kazakhstan International IT Cooperation Project',
		'Pre-Feasibility Study for Construction Administration System in Vietnam',
		'Support Project for Construction of Mongolia Employment Service Information Network (2020)',
		'Consulting Project for e-Resident Identification (e-ID) System Construction in Madagascar',
		'Information System Construction Project for Enhancing Transparency and Trial Quality of Judicial Procedures of the People’s Courts in Vietnam',
		'Korea–Kenya e-Government Cooperation Center Joint Cooperation Project (2019)',
		'ISP Establishment Project for Mongolia Employment Service Information Network',
		'Enterprise Architecture (EA) System Construction for Vietnam National University, Hanoi',
		'KSP Policy Advisory Project on Industry and Trade Investment in Peru',
		'Planning Project for Introduction of the “Minwon24” Civil Service Portal to Improve Administrative Services in Paraguay',
		'Pre-Feasibility Study for EAMS Construction in Vietnam',
		'EA Establishment Project for the Republic of Botswana'
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
      const response = await fetch('/data/news.json');
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
      
      // Re-initialize isotope if it exists
      if (typeof Isotope !== 'undefined') {
        const isotopeLayout = document.querySelector('.isotope-layout');
        if (isotopeLayout) {
          new Isotope(container, {
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            filter: '*'
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