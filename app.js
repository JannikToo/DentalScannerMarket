// Dashboard Application
class DashboardApp {
    constructor() {
        this.currentSection = 'executive';
        this.filters = {
            country: 'all',
            confidence: 'all',
            segment: 'all'
        };
        
        // Market data from the provided JSON
        this.data = {
            market_data: {
                european_market_size_2024: {
                    value: "€180.4 million",
                    source: "Persistence Market Research",
                    confidence: "High",
                    alternative_estimate: "€161.65 million (Data Bridge)",
                    projected_2031: "€390.2 million",
                    cagr: "11.6%"
                },
                germany_market_share: {
                    value: "32%",
                    penetration_rate: "8-10%",
                    confidence: "High",
                    source: "Multiple industry reports"
                },
                global_market_size_2024: {
                    value: "$744.7 million",
                    projected_2034: "$1,548.0 million",
                    cagr: "7.6%",
                    source: "Future Market Insights",
                    confidence: "High"
                }
            },
            market_segments: {
                dental_practices: {
                    size: 45,
                    penetration: "8-10% in Germany",
                    key_needs: ["Efficiency", "Precision", "Patient comfort"],
                    current_gaps: ["Training", "Workflow integration", "Cost barriers"],
                    confidence: "High"
                },
                dental_laboratories: {
                    size: 25,
                    role: "Data receivers + multipliers",
                    trend: "Increasing own scanner adoption",
                    strategic_value: "Can drive practice adoption",
                    confidence: "Medium"
                },
                universities: {
                    size: 15,
                    role: "R&D, validation, talent pipeline",
                    key_institutions: ["Uni Gießen", "TU Dresden", "Fraunhofer HHI"],
                    confidence: "High"
                },
                oems: {
                    size: 15,
                    leaders: ["Align (iTero)", "3Shape (Trios)", "Dentsply Sirona (Primescan)", "Medit", "Envista/Dexis"],
                    confidence: "High"
                }
            }
        };

        this.networkData = this.generateNetworkData();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeCharts();
        this.createNetworkGraph();
        this.showSection('executive');
    }

    setupEventListeners() {
        // Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.showSection(section);
            });
        });

        // Global filters
        document.getElementById('countryFilter').addEventListener('change', (e) => {
            this.filters.country = e.target.value;
            this.applyFilters();
        });

        document.getElementById('confidenceFilter').addEventListener('change', (e) => {
            this.filters.confidence = e.target.value;
            this.applyFilters();
        });

        // Player cards
        document.querySelectorAll('.player-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.showPlayerDetails(e.currentTarget.dataset.player);
            });
        });

        // Network graph controls
        const resetBtn = document.getElementById('resetNetwork');
        const toggleBtn = document.getElementById('toggleLabels');
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetNetworkView());
        }
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleNetworkLabels());
        }

        // Segment items
        document.querySelectorAll('.segment-item').forEach(item => {
            item.addEventListener('click', (e) => {
                this.toggleSegmentDetails(e.currentTarget);
            });
        });

        // Source tooltips
        document.querySelectorAll('.metric-source').forEach(source => {
            source.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target, e.target.title);
            });
            source.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.dashboard-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        this.currentSection = sectionId;

        // Trigger section-specific actions
        this.onSectionChange(sectionId);
    }

    onSectionChange(sectionId) {
        switch (sectionId) {
            case 'segmentation':
                this.updateSegmentChart();
                break;
            case 'channels':
                this.updateChannelsChart();
                break;
            case 'network':
                this.updateNetworkGraph();
                break;
        }
    }

    initializeCharts() {
        this.initSegmentChart();
        this.initChannelsChart();
    }

    initSegmentChart() {
        const ctx = document.getElementById('segmentChart');
        if (!ctx) return;

        const segments = this.data.market_segments;
        const data = {
            labels: ['Dental Practices', 'Dental Laboratories', 'Universities', 'OEMs'],
            datasets: [{
                data: [
                    segments.dental_practices.size,
                    segments.dental_laboratories.size,
                    segments.universities.size,
                    segments.oems.size
                ],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        };

        this.segmentChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    initChannelsChart() {
        const ctx = document.getElementById('channelsChart');
        if (!ctx) return;

        const data = {
            labels: ['Direct Sales', 'Henry Schein', 'orangedental', 'Academic Programs', 'Online Channels'],
            datasets: [{
                label: 'Channel Effectiveness',
                data: [85, 90, 75, 60, 45],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#D2BA4C'],
                borderWidth: 1,
                borderColor: '#fff'
            }]
        };

        this.channelsChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'Effectiveness: ' + context.parsed.y + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    generateNetworkData() {
        const nodes = [
            // OEMs
            { id: 'align', name: 'Align Technology', type: 'oem', group: 1 },
            { id: '3shape', name: '3Shape', type: 'oem', group: 1 },
            { id: 'dentsply', name: 'Dentsply Sirona', type: 'oem', group: 1 },
            { id: 'medit', name: 'Medit', type: 'oem', group: 1 },
            
            // Distributors
            { id: 'henry_schein', name: 'Henry Schein', type: 'distributor', group: 2 },
            { id: 'orangedental', name: 'orangedental', type: 'distributor', group: 2 },
            { id: 'acteon', name: 'Acteon Group', type: 'distributor', group: 2 },
            
            // Startups
            { id: 'dentaltwin', name: 'DentalTwin', type: 'startup', group: 3 },
            { id: 'pearl', name: 'Pearl', type: 'startup', group: 3 },
            { id: 'lexmann', name: 'Lexmann', type: 'startup', group: 3 },
            
            // Academic
            { id: 'uni_giessen', name: 'Uni Giessen', type: 'academic', group: 4 },
            { id: 'tu_dresden', name: 'TU Dresden', type: 'academic', group: 4 },
            { id: 'fraunhofer', name: 'Fraunhofer IGD', type: 'academic', group: 4 },
            { id: 'ait', name: 'AIT Austria', type: 'academic', group: 4 },
            
            // Market Segments
            { id: 'practices', name: 'Dental Practices', type: 'segment', group: 5 },
            { id: 'labs', name: 'Dental Labs', type: 'segment', group: 5 },
            { id: 'universities', name: 'Universities', type: 'segment', group: 5 }
        ];

        const links = [
            // OEM to distributor relationships
            { source: 'align', target: 'henry_schein', strength: 3 },
            { source: '3shape', target: 'orangedental', strength: 2 },
            { source: 'dentsply', target: 'henry_schein', strength: 3 },
            
            // Distributor to segment relationships
            { source: 'henry_schein', target: 'practices', strength: 3 },
            { source: 'henry_schein', target: 'labs', strength: 2 },
            { source: 'orangedental', target: 'practices', strength: 3 },
            
            // Academic partnerships
            { source: 'uni_giessen', target: 'dentsply', strength: 2 },
            { source: 'tu_dresden', target: 'fraunhofer', strength: 3 },
            { source: 'ait', target: '3shape', strength: 2 },
            
            // Startup partnerships
            { source: 'dentaltwin', target: 'practices', strength: 2 },
            { source: 'pearl', target: 'align', strength: 2 },
            { source: 'lexmann', target: 'labs', strength: 3 },
            
            // Academic to segment
            { source: 'uni_giessen', target: 'universities', strength: 3 },
            { source: 'tu_dresden', target: 'universities', strength: 3 },
            { source: 'fraunhofer', target: 'universities', strength: 2 }
        ];

        return { nodes, links };
    }

    createNetworkGraph() {
        const container = document.getElementById('networkGraph');
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        // Clear any existing content
        d3.select(container).selectAll("*").remove();

        const svg = d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const simulation = d3.forceSimulation(this.networkData.nodes)
            .force('link', d3.forceLink(this.networkData.links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2));

        // Create links
        const link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(this.networkData.links)
            .enter().append('line')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', d => Math.sqrt(d.strength) * 2);

        // Create nodes
        const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(this.networkData.nodes)
            .enter().append('circle')
            .attr('r', 8)
            .attr('fill', d => this.getNodeColor(d.type))
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .call(d3.drag()
                .on('start', (event, d) => this.dragStarted(event, d, simulation))
                .on('drag', (event, d) => this.dragged(event, d))
                .on('end', (event, d) => this.dragEnded(event, d, simulation)));

        // Add labels
        const labels = svg.append('g')
            .attr('class', 'labels')
            .selectAll('text')
            .data(this.networkData.nodes)
            .enter().append('text')
            .attr('dx', 12)
            .attr('dy', 4)
            .style('font', '12px sans-serif')
            .style('fill', '#333')
            .text(d => d.name);

        // Add tooltips
        node.append('title')
            .text(d => `${d.name} (${d.type})`);

        // Update positions on simulation tick
        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);

            labels
                .attr('x', d => d.x)
                .attr('y', d => d.y);
        });

        this.networkSvg = svg;
        this.networkSimulation = simulation;
    }

    getNodeColor(type) {
        const colors = {
            'oem': '#1FB8CD',
            'distributor': '#FFC185',
            'startup': '#B4413C',
            'academic': '#5D878F',
            'segment': '#D2BA4C'
        };
        return colors[type] || '#999';
    }

    dragStarted(event, d, simulation) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    dragEnded(event, d, simulation) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    resetNetworkView() {
        if (this.networkSimulation) {
            this.networkSimulation.alpha(1).restart();
        }
    }

    toggleNetworkLabels() {
        const labels = d3.select('#networkGraph').selectAll('.labels text');
        const currentOpacity = labels.style('opacity');
        labels.style('opacity', currentOpacity === '0' ? '1' : '0');
    }

    updateSegmentChart() {
        if (this.segmentChart) {
            this.segmentChart.update();
        }
    }

    updateChannelsChart() {
        if (this.channelsChart) {
            this.channelsChart.update();
        }
    }

    updateNetworkGraph() {
        // Refresh network graph if needed
        if (this.networkSimulation) {
            this.networkSimulation.alpha(0.1).restart();
        }
    }

    applyFilters() {
        // Apply country filter
        this.applyCountryFilter();
        
        // Apply confidence filter
        this.applyConfidenceFilter();
        
        // Update visualizations
        this.updateFilteredVisualization();
    }

    applyCountryFilter() {
        const countryElements = document.querySelectorAll('[data-country]');
        countryElements.forEach(element => {
            const elementCountry = element.dataset.country;
            if (this.filters.country === 'all' || elementCountry === this.filters.country) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    }

    applyConfidenceFilter() {
        const confidenceElements = document.querySelectorAll('.confidence-indicator');
        confidenceElements.forEach(element => {
            const elementConfidence = element.textContent.toLowerCase().replace(' confidence', '');
            const parentCard = element.closest('.card, .player-card, .metric-card, .segment-item');
            
            if (parentCard) {
                if (this.filters.confidence === 'all' || elementConfidence === this.filters.confidence) {
                    parentCard.style.display = '';
                } else {
                    parentCard.style.display = 'none';
                }
            }
        });
    }

    updateFilteredVisualization() {
        // Update charts based on filters
        if (this.currentSection === 'segmentation') {
            this.updateSegmentChart();
        } else if (this.currentSection === 'channels') {
            this.updateChannelsChart();
        }
    }

    showPlayerDetails(playerId) {
        const playerData = {
            'align': {
                name: 'Align Technology',
                details: 'Market leader with 100,000+ iTero scanners globally. Revenue: $4.0B (2024)',
                partnerships: ['Henry Schein', 'Pearl'],
                strategic_value: 'High market access, moderate R&D fit'
            },
            '3shape': {
                name: '3Shape',
                details: 'Open ecosystem leader with Unite Platform connecting 1000+ labs',
                partnerships: ['orangedental', 'AIT Austria'],
                strategic_value: 'Excellent integration potential, strong R&D fit'
            },
            'acteon': {
                name: 'Acteon Group',
                details: 'French dental imaging leader with no current IOS offering',
                partnerships: ['European distributors'],
                strategic_value: 'Strong hardware expertise, good market access in Europe'
            }
        };

        const player = playerData[playerId];
        if (player) {
            this.showModal(player.name, this.createPlayerDetailsHTML(player));
        }
    }

    createPlayerDetailsHTML(player) {
        return `
            <div class="player-details">
                <h3>${player.name}</h3>
                <p><strong>Overview:</strong> ${player.details}</p>
                <p><strong>Key Partnerships:</strong> ${player.partnerships.join(', ')}</p>
                <p><strong>Strategic Value:</strong> ${player.strategic_value}</p>
            </div>
        `;
    }

    showModal(title, content) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('detailModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'detailModal';
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <div class="modal-body"></div>
                </div>
            `;
            document.body.appendChild(modal);

            // Add modal styles
            const style = document.createElement('style');
            style.textContent = `
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 1000;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.5);
                }
                .modal-content {
                    background-color: var(--color-surface);
                    margin: 10% auto;
                    padding: 20px;
                    border-radius: var(--radius-lg);
                    width: 80%;
                    max-width: 600px;
                    position: relative;
                }
                .modal-close {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    font-size: 24px;
                    cursor: pointer;
                    color: var(--color-text-secondary);
                }
                .modal-close:hover {
                    color: var(--color-text);
                }
            `;
            document.head.appendChild(style);

            // Add close functionality
            modal.querySelector('.modal-close').addEventListener('click', () => {
                modal.style.display = 'none';
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Update modal content
        modal.querySelector('.modal-body').innerHTML = content;
        modal.style.display = 'block';
    }

    toggleSegmentDetails(segmentElement) {
        const details = segmentElement.querySelector('.segment-details-content');
        if (details.style.display === 'none' || !details.style.display) {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    }

    showTooltip(element, text) {
        let tooltip = document.getElementById('tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'tooltip';
            tooltip.className = 'tooltip';
            document.body.appendChild(tooltip);
        }

        tooltip.textContent = text;
        tooltip.classList.add('visible');

        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    }

    hideTooltip() {
        const tooltip = document.getElementById('tooltip');
        if (tooltip) {
            tooltip.classList.remove('visible');
        }
    }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DashboardApp();
});

// Handle window resize for responsive charts
window.addEventListener('resize', () => {
    setTimeout(() => {
        if (window.dashboardApp) {
            window.dashboardApp.updateFilteredVisualization();
        }
    }, 100);
});