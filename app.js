// Dashboard Data
const dashboardData = {
  "market_segments": {
    "Dental Practices": {
      "description": "General dentists and orthodontists - main users of IOS for daily patient treatment",
      "market_penetration": 9,
      "needs": ["Higher efficiency", "Precision", "Patient comfort"],
      "current_support": "Intensive marketing, training, financing models, Key Opinion Leaders",
      "growth_potential": "High"
    },
    "Dental Laboratories": {
      "description": "Dual role - receive IOS data from practices and can act as multipliers",
      "market_penetration": 15,
      "needs": ["Data integration", "Workflow efficiency", "Communication tools"],
      "current_support": "Indirect support via software interfaces, laboratory roadshows",
      "growth_potential": "Medium-High"
    },
    "Universities & Research": {
      "description": "Dental faculties and technical research institutes - crucial for education and innovation",
      "market_penetration": 75,
      "needs": ["Educational tools", "Research capabilities", "Student training"],
      "current_support": "Academic programs, equipment donations, research partnerships",
      "growth_potential": "Stable"
    },
    "OEMs & Technology Companies": {
      "description": "Large traditional firms and specialized manufacturers producing IOS",
      "market_penetration": 90,
      "needs": ["Innovation", "Market expansion", "Partner networks"],
      "current_support": "Direct sales, product innovation, training academies",
      "growth_potential": "Mature market"
    },
    "Startups & Tech Enthusiasts": {
      "description": "Specialized solutions and technology enthusiasts driving innovation",
      "market_penetration": 5,
      "needs": ["Development resources", "Market access", "Community support"],
      "current_support": "Open interfaces, SDKs, community programs",
      "growth_potential": "High"
    },
    "Distributors & Resellers": {
      "description": "Sales channels connecting manufacturers with end users",
      "market_penetration": 60,
      "needs": ["Product training", "Marketing support", "Technical expertise"],
      "current_support": "Partner programs, training, marketing materials",
      "growth_potential": "Stable"
    }
  },
  "distribution_channels": {
    "Direct Sales": {
      "market_reach": 70,
      "segments_reached": ["Large practices", "Clinics", "Key accounts"],
      "providers": ["Align Technology", "Dentsply Sirona"],
      "advantages": ["Direct relationship", "Higher margins", "Control"],
      "challenges": ["High costs", "Limited reach"]
    },
    "Authorized Distributors": {
      "market_reach": 90,
      "segments_reached": ["General practices", "Small/medium labs"],
      "providers": ["3Shape", "Medit", "Most manufacturers"],
      "advantages": ["Wide reach", "Local support", "Established networks"],
      "challenges": ["Margin pressure", "Dependency"]
    },
    "Online Platforms": {
      "market_reach": 40,
      "segments_reached": ["Price-sensitive customers", "Tech-savvy users"],
      "providers": ["Emerging trend", "Bedent (Switzerland)"],
      "advantages": ["Lower costs", "Direct access", "Convenience"],
      "challenges": ["Limited personal support", "Trust issues"]
    },
    "Academic Channels": {
      "market_reach": 30,
      "segments_reached": ["Students", "Researchers", "Academic institutions"],
      "providers": ["Most major manufacturers"],
      "advantages": ["Future market development", "Research partnerships"],
      "challenges": ["Lower volumes", "Educational pricing"]
    },
    "Trade Shows & Conferences": {
      "market_reach": 50,
      "segments_reached": ["All segments", "International markets"],
      "providers": ["All manufacturers"],
      "advantages": ["Direct interaction", "Product demonstrations"],
      "challenges": ["High costs", "Limited frequency"]
    }
  },
  "strategic_partners": [
    {"Name": "Acteon Group", "Type": "Potential Hardware Partner", "Category": "Strategic Partner", "Country": "France", "Potential_Value": 5, "Strengths": "Imaging expertise, No current IOS offering, European presence", "Cooperation_Format": "F&E Partner for hardware development"},
    {"Name": "orangedental", "Type": "Distribution Partner", "Category": "Strategic Partner", "Country": "Germany", "Potential_Value": 5, "Strengths": "Digital dentistry expertise, Local market knowledge, Henry Schein connection", "Cooperation_Format": "Value-added distributor for DACH region"},
    {"Name": "DentalTwin", "Type": "Software/AI Partner", "Category": "Strategic Partner", "Country": "Germany", "Potential_Value": 5, "Strengths": "AI-based prosthetic planning, German startup, Cloud solutions", "Cooperation_Format": "API integration for AI-powered workflows"},
    {"Name": "Pearl Inc", "Type": "AI Technology Partner", "Category": "Strategic Partner", "Country": "USA", "Potential_Value": 5, "Strengths": "First FDA-cleared dental AI for 2D/3D, Global partnerships", "Cooperation_Format": "KI-Partner for scan analysis and diagnostics"},
    {"Name": "Dentallabor Lexmann", "Type": "Pilot User & Multiplier", "Category": "Strategic Partner", "Country": "Germany", "Potential_Value": 5, "Strengths": "Innovation-focused, Active in digital promotion, Practice partnerships", "Cooperation_Format": "Pilot implementation and feedback provider"},
    {"Name": "Align Technology", "Type": "OEM", "Category": "Major OEM", "Country": "USA", "Potential_Value": 1, "Strengths": "Market leadership, Integration with Invisalign, Strong support", "Cooperation_Format": "Limited - established competitor"},
    {"Name": "3Shape", "Type": "OEM", "Category": "Major OEM", "Country": "Denmark", "Potential_Value": 3, "Strengths": "Open ecosystem, Broad partner platform, Innovation", "Cooperation_Format": "Potential app integration"},
    {"Name": "Dentsply Sirona", "Type": "OEM", "Category": "Major OEM", "Country": "Germany", "Potential_Value": 2, "Strengths": "Comprehensive portfolio, Historical German roots", "Cooperation_Format": "Academic partnerships possible"},
    {"Name": "Envista/Dexis", "Type": "OEM", "Category": "Major OEM", "Country": "USA", "Potential_Value": 3, "Strengths": "Comprehensive imaging solutions, Software platform", "Cooperation_Format": "Modular integration opportunities"}
  ],
  "academic_institutions": [
    {"Name": "University of Giessen", "Country": "Germany", "Type": "University", "Potential_Value": 5, "Focus": "Digital impression studies, IOS research", "Current_Activity": "Presentations on digital impression adoption"},
    {"Name": "University Hospital Dresden", "Country": "Germany", "Type": "University", "Potential_Value": 5, "Focus": "EndoScan3D project, 3D endoscopy for children", "Current_Activity": "Collaboration with Fraunhofer HHI"},
    {"Name": "Fraunhofer HHI Berlin", "Country": "Germany", "Type": "Research Institute", "Potential_Value": 6, "Focus": "3D imaging technology, Optical measurement", "Current_Activity": "EndoScan3D development"},
    {"Name": "Fraunhofer IGD", "Country": "Germany", "Type": "Research Institute", "Potential_Value": 6, "Focus": "Dental imaging analysis, CAD software development", "Current_Activity": "Dental imaging and AI research"},
    {"Name": "AIT Austrian Institute of Technology", "Country": "Austria", "Type": "Research Institute", "Potential_Value": 5, "Focus": "Vision, Automation & Control, Optical measurement", "Current_Activity": "Developed world's smallest IOS"},
    {"Name": "ETH Zurich", "Country": "Switzerland", "Type": "University", "Potential_Value": 5, "Focus": "Medical technology, Digital workflows", "Current_Activity": "Advanced digital dentistry research"},
    {"Name": "University of Zurich", "Country": "Switzerland", "Type": "University", "Potential_Value": 5, "Focus": "Digital Dentistry Center, CAD/CAM pioneer", "Current_Activity": "KI integration in dental education"},
    {"Name": "DGDOA", "Country": "Germany", "Type": "Professional Network", "Potential_Value": 5, "Focus": "Digital impression technology", "Current_Activity": "Annual conferences and workshops"},
    {"Name": "Digital Dentistry Society", "Country": "International", "Type": "Professional Network", "Potential_Value": 5, "Focus": "Global expert network", "Current_Activity": "Conferences and publications"},
    {"Name": "Medical Valley EMN", "Country": "Germany", "Type": "Innovation Cluster", "Potential_Value": 5, "Focus": "Medical technology innovation", "Current_Activity": "Industry partnerships"},
    {"Name": "Life Science Cluster Zurich", "Country": "Switzerland", "Type": "Innovation Cluster", "Potential_Value": 5, "Focus": "Life sciences and medical technology", "Current_Activity": "Startup ecosystem support"}
  ],
  "company_support": [
    {"Company": "3Shape", "Multi-Level Support": 5, "Training Programs": 4, "Community Forums": 3, "Open Platforms": 5, "Developer Programs": 4, "User Recognition": 4},
    {"Company": "Medit", "Multi-Level Support": 3, "Training Programs": 3, "Community Forums": 5, "Open Platforms": 3, "Developer Programs": 3, "User Recognition": 3},
    {"Company": "Dentsply Sirona", "Multi-Level Support": 4, "Training Programs": 5, "Community Forums": 2, "Open Platforms": 2, "Developer Programs": 3, "User Recognition": 3},
    {"Company": "Align Technology", "Multi-Level Support": 4, "Training Programs": 4, "Community Forums": 2, "Open Platforms": 2, "Developer Programs": 3, "User Recognition": 5}
  ],
  "roadmap": [
    {"Phase": "Phase 1", "Period": "Months 1-6", "Title": "Preparation & Networking", "Objectives": ["Gain visibility", "Identify core partners", "Initiate pilot projects"], "Activities": ["Presence at IDS 2025 Cologne", "Establish Advisory Board", "Pilot partnerships", "Apply for funding"], "Key_Partners": ["Acteon", "orangedental", "Lexmann"], "Success_Metrics": ["3+ signed LOIs", "Advisory board established", "Funding secured"]},
    {"Phase": "Phase 2", "Period": "Months 6-12", "Title": "Development & Internal Community", "Objectives": ["Complete MVP toolkit", "Build internal test community", "Secure partnerships"], "Activities": ["Finalize open-source kit", "Co-engineering partnerships", "Establish collaboration hub", "Train early users"], "Key_Partners": ["Development partners", "Beta testers", "Research institutions"], "Success_Metrics": ["MVP completed", "10+ beta users", "MOUs signed"]},
    {"Phase": "Phase 3", "Period": "Months 12-18", "Title": "Launch & Market Entry", "Objectives": ["Public release", "Commercial application", "Network expansion"], "Activities": ["Official launch", "Distribution agreements", "Integration projects", "Community marketing"], "Key_Partners": ["Distributors", "AI partners", "Startups"], "Success_Metrics": ["100+ active users", "5+ integrations", "Media coverage"]},
    {"Phase": "Phase 4", "Period": "Months 18-24+", "Title": "Growth & Sustainability", "Objectives": ["European expansion", "Self-sustaining community", "Commercial viability"], "Activities": ["European expansion", "Community self-governance", "Commercial products", "Innovation challenges"], "Key_Partners": ["European distributors", "Community leaders"], "Success_Metrics": ["500+ users", "Self-sustaining community", "Revenue positive"]}
  ]
};

// Global variables
let currentPage = 'market-overview';
let charts = {};

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeCharts();
  initializeTables();
  initializeFilters();
  initializeTabs();
  initializeModals();
  initializeDownloads();
  initializeRoadmap();
});

// Navigation
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetPage = this.getAttribute('data-page');
      showPage(targetPage);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Set initial active nav item
  document.querySelector('[data-page="market-overview"]').classList.add('active');
}

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  document.getElementById(pageId).classList.add('active');
  currentPage = pageId;
  
  // Initialize page-specific content if needed
  if (pageId === 'partners') {
    initializePartnerCards();
  } else if (pageId === 'academic') {
    initializeAcademicCards();
  }
}

// Charts initialization
function initializeCharts() {
  initializePenetrationChart();
  initializeDistributionChart();
  initializePartnershipChart();
  initializeAcademicChart();
  initializeSupportChart();
}

function initializePenetrationChart() {
  const ctx = document.getElementById('penetrationChart').getContext('2d');
  const segments = Object.keys(dashboardData.market_segments);
  const penetrationData = segments.map(segment => dashboardData.market_segments[segment].market_penetration);
  
  charts.penetration = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: segments,
      datasets: [{
        label: 'Market Penetration (%)',
        data: penetrationData,
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Market Penetration (%)'
          }
        }
      }
    }
  });
}

function initializeDistributionChart() {
  const ctx = document.getElementById('distributionChart').getContext('2d');
  const channels = Object.keys(dashboardData.distribution_channels);
  const reachData = channels.map(channel => dashboardData.distribution_channels[channel].market_reach);
  
  charts.distribution = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: channels,
      datasets: [{
        label: 'Market Reach (%)',
        data: reachData,
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Market Reach (%)'
          }
        }
      }
    }
  });
}

function initializePartnershipChart() {
  const ctx = document.getElementById('partnershipChart').getContext('2d');
  const partners = dashboardData.strategic_partners;
  const names = partners.map(p => p.Name);
  const values = partners.map(p => p.Potential_Value);
  const colors = partners.map(p => p.Category === 'Strategic Partner' ? '#1FB8CD' : '#FFC185');
  
  charts.partnership = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Partnership Potential',
        data: values,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 6,
          title: {
            display: true,
            text: 'Partnership Potential (1-6)'
          }
        }
      }
    }
  });
}

function initializeAcademicChart() {
  const ctx = document.getElementById('academicChart').getContext('2d');
  const institutions = dashboardData.academic_institutions;
  const countries = ['Germany', 'Austria', 'Switzerland', 'International'];
  const countCounts = countries.map(country => 
    institutions.filter(inst => inst.Country === country).length
  );
  
  charts.academic = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: countries,
      datasets: [{
        data: countCounts,
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  });
}

function initializeSupportChart() {
  const ctx = document.getElementById('supportChart').getContext('2d');
  const companies = dashboardData.company_support;
  const categories = ['Multi-Level Support', 'Training Programs', 'Community Forums', 'Open Platforms', 'Developer Programs', 'User Recognition'];
  
  const datasets = companies.map((company, index) => ({
    label: company.Company,
    data: categories.map(cat => company[cat]),
    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'][index],
    borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'][index],
    borderWidth: 1
  }));
  
  charts.support = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: categories,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 5
        }
      }
    }
  });
}

// Tables
function initializeTables() {
  populateSegmentsTable();
  populateChannelsTable();
}

function populateSegmentsTable() {
  const tbody = document.querySelector('#segmentsTable tbody');
  const segments = dashboardData.market_segments;
  
  tbody.innerHTML = '';
  Object.keys(segments).forEach(segmentName => {
    const segment = segments[segmentName];
    const row = document.createElement('tr');
    
    const growthClass = getGrowthPotentialClass(segment.growth_potential);
    
    row.innerHTML = `
      <td><strong>${segmentName}</strong><br><small>${segment.description}</small></td>
      <td>${segment.market_penetration}%</td>
      <td><span class="status ${growthClass}">${segment.growth_potential}</span></td>
      <td>${segment.needs.join(', ')}</td>
      <td>${segment.current_support}</td>
    `;
    tbody.appendChild(row);
  });
}

function populateChannelsTable() {
  const tbody = document.querySelector('#channelsTable tbody');
  const channels = dashboardData.distribution_channels;
  
  tbody.innerHTML = '';
  Object.keys(channels).forEach(channelName => {
    const channel = channels[channelName];
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td><strong>${channelName}</strong></td>
      <td>${channel.market_reach}%</td>
      <td>${channel.segments_reached.join(', ')}</td>
      <td>${channel.providers.join(', ')}</td>
      <td>${channel.advantages.join(', ')}</td>
      <td>${channel.challenges.join(', ')}</td>
    `;
    tbody.appendChild(row);
  });
}

function getGrowthPotentialClass(potential) {
  switch(potential) {
    case 'High': return 'status--high';
    case 'Medium-High': return 'status--medium';
    case 'Stable': return 'status--stable';
    case 'Mature market': return 'status--stable';
    default: return 'status--stable';
  }
}

// Filters
function initializeFilters() {
  // Growth filter for segments
  document.getElementById('growthFilter').addEventListener('change', function() {
    filterSegmentsTable(this.value);
  });
  
  // Reach filter for channels
  document.getElementById('reachFilter').addEventListener('change', function() {
    filterChannelsTable(this.value);
  });
  
  // Partner filters
  document.getElementById('partnerTypeFilter').addEventListener('change', filterPartners);
  document.getElementById('countryFilter').addEventListener('change', filterPartners);
  
  // Academic filters
  document.getElementById('institutionTypeFilter').addEventListener('change', filterAcademicInstitutions);
  document.getElementById('academicCountryFilter').addEventListener('change', filterAcademicInstitutions);
}

function filterSegmentsTable(growthFilter) {
  const rows = document.querySelectorAll('#segmentsTable tbody tr');
  
  rows.forEach(row => {
    if (growthFilter === 'all') {
      row.style.display = '';
    } else {
      const growthCell = row.cells[2].textContent.trim();
      row.style.display = growthCell.includes(growthFilter) ? '' : 'none';
    }
  });
}

function filterChannelsTable(reachFilter) {
  const rows = document.querySelectorAll('#channelsTable tbody tr');
  
  rows.forEach(row => {
    if (reachFilter === 'all') {
      row.style.display = '';
    } else {
      const reachValue = parseInt(row.cells[1].textContent);
      let show = false;
      
      switch(reachFilter) {
        case 'high': show = reachValue > 60; break;
        case 'medium': show = reachValue >= 40 && reachValue <= 60; break;
        case 'low': show = reachValue < 40; break;
      }
      
      row.style.display = show ? '' : 'none';
    }
  });
}

function filterPartners() {
  const typeFilter = document.getElementById('partnerTypeFilter').value;
  const countryFilter = document.getElementById('countryFilter').value;
  
  // Re-render partner cards with filters
  initializePartnerCards();
}

function filterAcademicInstitutions() {
  const typeFilter = document.getElementById('institutionTypeFilter').value;
  const countryFilter = document.getElementById('academicCountryFilter').value;
  
  // Re-render academic cards with filters
  initializeAcademicCards();
}

// Tabs
function initializeTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Update active tab button
      tabBtns.forEach(tab => tab.classList.remove('active'));
      this.classList.add('active');
      
      // Show/hide tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(`${targetTab}-tab`).classList.add('active');
    });
  });
}

// Partner cards
function initializePartnerCards() {
  const typeFilter = document.getElementById('partnerTypeFilter').value;
  const countryFilter = document.getElementById('countryFilter').value;
  
  const strategicPartners = dashboardData.strategic_partners.filter(p => {
    const typeMatch = typeFilter === 'all' || p.Category === typeFilter;
    const countryMatch = countryFilter === 'all' || p.Country === countryFilter;
    return p.Category === 'Strategic Partner' && typeMatch && countryMatch;
  });
  
  const oemPartners = dashboardData.strategic_partners.filter(p => {
    const typeMatch = typeFilter === 'all' || p.Category === typeFilter;
    const countryMatch = countryFilter === 'all' || p.Country === countryFilter;
    return p.Category === 'Major OEM' && typeMatch && countryMatch;
  });
  
  renderPartnerCards('strategicPartners', strategicPartners);
  renderPartnerCards('oemPartners', oemPartners);
}

function renderPartnerCards(containerId, partners) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  partners.forEach(partner => {
    const card = document.createElement('div');
    card.className = 'partner-card card';
    card.innerHTML = `
      <div class="card__body">
        <div class="partner-header">
          <h4>${partner.Name}</h4>
          <span class="partner-score">${partner.Potential_Value}/6</span>
        </div>
        <p><strong>Type:</strong> ${partner.Type}</p>
        <p><strong>Country:</strong> ${partner.Country}</p>
        <p><strong>Strengths:</strong> ${partner.Strengths}</p>
        <p><strong>Cooperation:</strong> ${partner.Cooperation_Format}</p>
      </div>
    `;
    
    card.addEventListener('click', () => showPartnerModal(partner));
    container.appendChild(card);
  });
}

// Academic cards
function initializeAcademicCards() {
  const typeFilter = document.getElementById('institutionTypeFilter').value;
  const countryFilter = document.getElementById('academicCountryFilter').value;
  
  const countries = ['Germany', 'Austria', 'Switzerland', 'International'];
  
  countries.forEach(country => {
    const institutions = dashboardData.academic_institutions.filter(inst => {
      const typeMatch = typeFilter === 'all' || inst.Type === typeFilter;
      const countryMatch = countryFilter === 'all' || inst.Country === countryFilter;
      return inst.Country === country && typeMatch && countryMatch;
    });
    
    const containerId = country.toLowerCase() + 'Institutions';
    renderAcademicCards(containerId, institutions);
  });
}

function renderAcademicCards(containerId, institutions) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  institutions.forEach(institution => {
    const card = document.createElement('div');
    card.className = 'institution-card card';
    card.innerHTML = `
      <div class="card__body">
        <span class="institution-type">${institution.Type}</span>
        <h4>${institution.Name}</h4>
        <p><strong>Focus:</strong> ${institution.Focus}</p>
        <p><strong>Current Activity:</strong> ${institution.Current_Activity}</p>
        <p><strong>Collaboration Potential:</strong> ${institution.Potential_Value}/6</p>
      </div>
    `;
    
    card.addEventListener('click', () => showInstitutionModal(institution));
    container.appendChild(card);
  });
}

// Modals
function initializeModals() {
  const modal = document.getElementById('detailModal');
  const closeBtn = document.querySelector('.modal-close');
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function showPartnerModal(partner) {
  const modal = document.getElementById('detailModal');
  const modalBody = document.getElementById('modalBody');
  
  modalBody.innerHTML = `
    <h2>${partner.Name}</h2>
    <div style="margin-bottom: 16px;">
      <span class="partner-score" style="font-size: 18px;">Partnership Potential: ${partner.Potential_Value}/6</span>
    </div>
    <p><strong>Type:</strong> ${partner.Type}</p>
    <p><strong>Category:</strong> ${partner.Category}</p>
    <p><strong>Country:</strong> ${partner.Country}</p>
    <p><strong>Key Strengths:</strong> ${partner.Strengths}</p>
    <p><strong>Cooperation Format:</strong> ${partner.Cooperation_Format}</p>
    
    <h3>Strategic Assessment</h3>
    <p>This partner offers ${partner.Potential_Value === 5 ? 'high' : partner.Potential_Value >= 3 ? 'medium' : 'limited'} strategic value for the OralScan Innovation Hub initiative.</p>
  `;
  
  modal.style.display = 'block';
}

function showInstitutionModal(institution) {
  const modal = document.getElementById('detailModal');
  const modalBody = document.getElementById('modalBody');
  
  modalBody.innerHTML = `
    <h2>${institution.Name}</h2>
    <div style="margin-bottom: 16px;">
      <span class="institution-type">${institution.Type}</span>
      <span class="partner-score" style="margin-left: 16px;">Collaboration Potential: ${institution.Potential_Value}/6</span>
    </div>
    <p><strong>Country:</strong> ${institution.Country}</p>
    <p><strong>Research Focus:</strong> ${institution.Focus}</p>
    <p><strong>Current Activities:</strong> ${institution.Current_Activity}</p>
    
    <h3>Collaboration Opportunities</h3>
    <p>This institution offers ${institution.Potential_Value >= 5 ? 'high' : 'medium'} potential for research collaboration and academic partnerships in the DACH region.</p>
  `;
  
  modal.style.display = 'block';
}

// Downloads
function initializeDownloads() {
  document.getElementById('downloadSegments').addEventListener('click', () => downloadCSV('segments'));
  document.getElementById('downloadChannels').addEventListener('click', () => downloadCSV('channels'));
  document.getElementById('downloadPartners').addEventListener('click', () => downloadCSV('partners'));
  document.getElementById('downloadAcademic').addEventListener('click', () => downloadCSV('academic'));
  document.getElementById('downloadSupport').addEventListener('click', () => downloadCSV('support'));
  document.getElementById('downloadRoadmap').addEventListener('click', () => downloadCSV('roadmap'));
}

function downloadCSV(type) {
  // Simulate CSV download
  let filename;
  let data;
  
  switch(type) {
    case 'segments':
      filename = 'market_segments.csv';
      data = 'Segment,Penetration %,Growth Potential,Description\n';
      Object.keys(dashboardData.market_segments).forEach(segment => {
        const s = dashboardData.market_segments[segment];
        data += `"${segment}",${s.market_penetration},"${s.growth_potential}","${s.description}"\n`;
      });
      break;
    case 'channels':
      filename = 'distribution_channels.csv';
      data = 'Channel,Market Reach %,Segments Reached,Providers\n';
      Object.keys(dashboardData.distribution_channels).forEach(channel => {
        const c = dashboardData.distribution_channels[channel];
        data += `"${channel}",${c.market_reach},"${c.segments_reached.join('; ')}","${c.providers.join('; ')}"\n`;
      });
      break;
    case 'partners':
      filename = 'strategic_partners.csv';
      data = 'Name,Type,Category,Country,Potential Value,Strengths\n';
      dashboardData.strategic_partners.forEach(partner => {
        data += `"${partner.Name}","${partner.Type}","${partner.Category}","${partner.Country}",${partner.Potential_Value},"${partner.Strengths}"\n`;
      });
      break;
    case 'academic':
      filename = 'academic_institutions.csv';
      data = 'Name,Country,Type,Potential Value,Focus,Current Activity\n';
      dashboardData.academic_institutions.forEach(inst => {
        data += `"${inst.Name}","${inst.Country}","${inst.Type}",${inst.Potential_Value},"${inst.Focus}","${inst.Current_Activity}"\n`;
      });
      break;
    case 'support':
      filename = 'support_comparison.csv';
      data = 'Company,Multi-Level Support,Training Programs,Community Forums,Open Platforms,Developer Programs,User Recognition\n';
      dashboardData.company_support.forEach(company => {
        data += `"${company.Company}",${company['Multi-Level Support']},${company['Training Programs']},${company['Community Forums']},${company['Open Platforms']},${company['Developer Programs']},${company['User Recognition']}\n`;
      });
      break;
    case 'roadmap':
      filename = 'strategic_roadmap.csv';
      data = 'Phase,Period,Title,Objectives,Activities,Key Partners,Success Metrics\n';
      dashboardData.roadmap.forEach(phase => {
        data += `"${phase.Phase}","${phase.Period}","${phase.Title}","${phase.Objectives.join('; ')}","${phase.Activities.join('; ')}","${phase.Key_Partners.join('; ')}","${phase.Success_Metrics.join('; ')}"\n`;
      });
      break;
  }
  
  // Create and trigger download
  const blob = new Blob([data], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Roadmap
function initializeRoadmap() {
  const timelineBtns = document.querySelectorAll('.timeline-btn');
  
  timelineBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      // Update active button
      timelineBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Show phase details
      showPhaseDetails(index);
    });
  });
  
  // Show initial phase
  showPhaseDetails(0);
}

function showPhaseDetails(phaseIndex) {
  const phase = dashboardData.roadmap[phaseIndex];
  const container = document.getElementById('phaseDetails');
  
  container.innerHTML = `
    <div class="phase-card">
      <div class="phase-header">
        <h3>${phase.Title}</h3>
        <span class="phase-period">${phase.Period}</span>
      </div>
      
      <div class="phase-section">
        <h4>Objectives</h4>
        <ul class="phase-list">
          ${phase.Objectives.map(obj => `<li>${obj}</li>`).join('')}
        </ul>
      </div>
      
      <div class="phase-section">
        <h4>Key Activities</h4>
        <ul class="phase-list">
          ${phase.Activities.map(activity => `<li>${activity}</li>`).join('')}
        </ul>
      </div>
      
      <div class="phase-section">
        <h4>Key Partners</h4>
        <ul class="phase-list">
          ${phase.Key_Partners.map(partner => `<li>${partner}</li>`).join('')}
        </ul>
      </div>
      
      <div class="phase-section">
        <h4>Success Metrics</h4>
        <ul class="phase-list">
          ${phase.Success_Metrics.map(metric => `<li>${metric}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}