// Configuration object for editable content
const defaultConfig = {
  platform_title: "SyntaxForge",
  tagline: "Forge Your Code Mastery",
  hero_subtitle: "Master Python & C++ from Zero to Hero",
  footer_text: "2025 Made by GlitchForge"
};

// Content database with enhanced structure
const contentDatabase = {
  'python-basics': {
    title: 'Variables & Data Types',
    breadcrumb: 'Python > Fundamentals',
    language: 'python',
    intro: 'Master the building blocks of Python programming'
  },
  'python-control': {
    title: 'Control Flow & Loops',
    breadcrumb: 'Python > Control Structures',
    language: 'python',
    intro: 'Navigate program execution with precision'
  },
  'python-functions': {
    title: 'Functions & Scope',
    breadcrumb: 'Python > Functions',
    language: 'python',
    intro: 'Create reusable, modular code components'
  },
  'python-oop': {
    title: 'Object-Oriented Programming',
    breadcrumb: 'Python > Advanced',
    language: 'python',
    intro: 'Design elegant, maintainable software architectures'
  },
  'python-decorators': {
    title: 'Decorators & Metaclasses',
    breadcrumb: 'Python > Advanced',
    language: 'python',
    intro: 'Unlock Python\'s most powerful metaprogramming features'
  },
  'python-async': {
    title: 'Async Programming',
    breadcrumb: 'Python > Concurrency',
    language: 'python',
    intro: 'Master concurrent and asynchronous programming'
  },
  'python-frameworks': {
    title: 'Frameworks & Libraries',
    breadcrumb: 'Python > Ecosystem',
    language: 'python',
    intro: 'Explore Python\'s rich ecosystem of tools'
  },
  'cpp-basics': {
    title: 'Syntax & Fundamentals',
    breadcrumb: 'C++ > Fundamentals',
    language: 'cpp',
    intro: 'Build a solid foundation in C++ programming'
  },
  'cpp-memory': {
    title: 'Memory Management',
    breadcrumb: 'C++ > Core Concepts',
    language: 'cpp',
    intro: 'Master manual memory control and optimization'
  },
  'cpp-stl': {
    title: 'Standard Template Library',
    breadcrumb: 'C++ > STL',
    language: 'cpp',
    intro: 'Harness the power of C++\'s standard library'
  },
  'cpp-oop': {
    title: 'Object-Oriented Design',
    breadcrumb: 'C++ > Advanced',
    language: 'cpp',
    intro: 'Design robust, scalable C++ applications'
  },
  'cpp-templates': {
    title: 'Templates & Generics',
    breadcrumb: 'C++ > Advanced',
    language: 'cpp',
    intro: 'Create flexible, reusable code with templates'
  },
  'cpp-threading': {
    title: 'Multithreading & Concurrency',
    breadcrumb: 'C++ > Concurrency',
    language: 'cpp',
    intro: 'Build high-performance concurrent applications'
  },
  'cpp-advanced': {
    title: 'Advanced Patterns',
    breadcrumb: 'C++ > Expert',
    language: 'cpp',
    intro: 'Master expert-level C++ design patterns'
  }
};

// Enhanced responsive particle system
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;

  // Clear existing particles
  particlesContainer.innerHTML = '';

  const colors = ['#00d4ff', '#ff4757', '#ffd700'];
  const sizes = ['small', 'medium', 'large'];

  // Responsive particle count based on screen size
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const particleCount = Math.min(Math.max(Math.floor((screenWidth * screenHeight) / 15000), 20), 100);

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = `particle ${sizes[Math.floor(Math.random() * sizes.length)]}`;

    // Ensure particles start from random positions across full width
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 12 + 's';
    particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Add slight random horizontal drift
    const drift = (Math.random() - 0.5) * 100;
    particle.style.setProperty('--drift', drift + 'px');

    particlesContainer.appendChild(particle);
  }
}

// Responsive particle recreation on window resize
function handleResize() {
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(() => {
    createParticles();
  }, 250);
}

// Hero section animation and transition
function startLearning() {
  const heroSection = document.getElementById('heroSection');
  const mainApp = document.getElementById('mainApp');

  heroSection.classList.add('hidden');

  setTimeout(() => {
    heroSection.style.display = 'none';
    mainApp.classList.add('visible');
    createParticles();
  }, 800);
}

// Progress tracking system
let completedTopics = new Set(['python-basics']); // Start with first topic completed
const totalTopics = 14;

function updateProgressStats() {
  const completed = completedTopics.size;
  const percentage = Math.round((completed / totalTopics) * 100);

  const progressFill = document.getElementById('progressFill');
  const progressPercentage = document.getElementById('progressPercentage');

  if (progressFill && progressPercentage) {
    progressFill.style.width = percentage + '%';
    progressPercentage.textContent = `${completed}/${totalTopics} (${percentage}%)`;
  }
}

function markTopicComplete() {
  const activeItem = document.querySelector('.nav-item.active');
  if (!activeItem) return;

  const topic = activeItem.dataset.topic;
  const markCompleteBtn = document.getElementById('markCompleteBtn');

  // Add to completed topics
  completedTopics.add(topic);

  // Update UI with animation
  activeItem.classList.add('completed');
  markCompleteBtn.classList.add('completed');
  markCompleteBtn.textContent = '✅ Completed!';

  // Update progress stats
  updateProgressStats();

  // Show celebration effect
  showCompletionCelebration();

  // Save progress to localStorage
  localStorage.setItem('syntaxforge_progress', JSON.stringify([...completedTopics]));
}

function showCompletionCelebration() {
  // Create celebration particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    background: var(--accent-gold);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10000;
                    left: 50%;
                    top: 50%;
                    animation: celebrate 1.5s ease-out forwards;
                `;

    const angle = (i / 20) * Math.PI * 2;
    const velocity = 100 + Math.random() * 100;

    particle.style.setProperty('--angle', angle + 'rad');
    particle.style.setProperty('--velocity', velocity + 'px');

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1500);
  }

  // Add celebration animation to CSS
  if (!document.getElementById('celebration-styles')) {
    const style = document.createElement('style');
    style.id = 'celebration-styles';
    style.textContent = `
                    @keyframes celebrate {
                        0% {
                            transform: translate(-50%, -50%) scale(1);
                            opacity: 1;
                        }
                        100% {
                            transform: translate(
                                calc(-50% + cos(var(--angle)) * var(--velocity)),
                                calc(-50% + sin(var(--angle)) * var(--velocity))
                            ) scale(0);
                            opacity: 0;
                        }
                    }
                `;
    document.head.appendChild(style);
  }
}

function loadProgress() {
  const saved = localStorage.getItem('syntaxforge_progress');
  if (saved) {
    completedTopics = new Set(JSON.parse(saved));

    // Update UI for completed topics
    completedTopics.forEach(topic => {
      const navItem = document.querySelector(`[data-topic="${topic}"]`);
      if (navItem) {
        navItem.classList.add('completed');
      }
    });

    updateProgressStats();
  }
}

// Enhanced navigation with smooth transitions
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      navItems.forEach(nav => nav.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');

      // Load content with animation
      const topic = item.dataset.topic;
      loadContent(topic);

      // Update mark complete button state
      updateMarkCompleteButton(topic);
    });
  });
}

function updateMarkCompleteButton(topic) {
  const markCompleteBtn = document.getElementById('markCompleteBtn');
  if (!markCompleteBtn) return;

  if (completedTopics.has(topic)) {
    markCompleteBtn.classList.add('completed');
    markCompleteBtn.textContent = '✅ Completed!';
  } else {
    markCompleteBtn.classList.remove('completed');
    markCompleteBtn.textContent = '🎯 Mark as Complete';
  }
}

// Enhanced content loading with animations
function loadContent(topic) {
  const content = contentDatabase[topic];
  if (!content) return;

  const breadcrumb = document.getElementById('breadcrumb');
  const contentTitle = document.getElementById('contentTitle');
  const contentViewer = document.getElementById('contentViewer');

  // Fade out current content
  contentViewer.style.opacity = '0';
  contentViewer.style.transform = 'translateY(30px)';

  setTimeout(() => {
    breadcrumb.textContent = content.breadcrumb;
    contentTitle.textContent = content.title;

    // Fade in new content
    contentViewer.style.opacity = '1';
    contentViewer.style.transform = 'translateY(0)';

    // Re-animate sections
    const sections = contentViewer.querySelectorAll('.content-section');
    sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, 300);
}

// Enhanced code execution simulation
function runCode(button) {
  const codeBlock = button.closest('.code-block');
  const textarea = codeBlock.querySelector('.code-editable');
  const output = codeBlock.querySelector('.output-area');
  const code = textarea.value;

  // Show loading with animation
  output.innerHTML = '<span style="color: var(--python-blue);">⚡ Executing code...</span>';
  button.textContent = 'Running...';
  button.disabled = true;

  // Simulate code execution with realistic delay
  setTimeout(() => {
    try {
      let result = simulatePythonExecution(code);
      output.innerHTML = result;
      output.style.color = 'var(--accent-silver)';
    } catch (error) {
      output.innerHTML = `<span style="color: var(--cpp-crimson);">❌ Error: ${error.message}</span>`;
    }

    button.textContent = 'Execute Code';
    button.disabled = false;
  }, 1200);
}

// Enhanced Python execution simulation
function simulatePythonExecution(code) {
  const lines = code.split('\n');
  let output = [];

  for (let line of lines) {
    line = line.trim();
    if (line.startsWith('print(')) {
      const match = line.match(/print\((.*)\)/);
      if (match) {
        let content = match[1];

        // Handle f-strings with enhanced variable substitution
        content = content.replace(/f"([^"]*)"/, (match, str) => {
          return str.replace(/\{([^}]+)\}/g, (match, expr) => {
            // Enhanced variable mapping
            const variables = {
              'platform_name': 'SyntaxForge',
              'current_year': '2025',
              'is_learning': 'True',
              'progress_rate': '95.7',
              'integer_power': '42',
              'float_precision': '3.14159265359',
              'complex_dimension': '(3+4j)',
              'welcome_message': 'Hello, SyntaxForge Learners!',
              'skill_levels': "['Beginner', 'Intermediate', 'Advanced', 'Expert']",
              'coordinates_3d': '(10.5, 20.7, 30.2)',
              'developer_profile': "{'name': 'Code Ninja', 'level': 'Advanced', 'languages': ['Python', 'C++', 'JavaScript'], 'experience_years': 5}",
              'unique_technologies': "{'Python', 'C++', 'Machine Learning', 'Web Dev'}",
              'x': '100', 'y': '200', 'z': '300',
              'alpha': '84', 'beta': '42',
              'latitude': '37.7749', 'longitude': '-122.4194', 'city_name': 'San Francisco',
              'first': '1', 'second': '2', 'middle': '[3, 4, 5, 6, 7, 8]', 'second_last': '9', 'last': '10',
              'str_number': '2025', 'converted_int': '2025', 'converted_float': '2025.0', 'converted_bool': 'True',
              'name_length': '10'
            };

            // Handle type() expressions
            if (expr.includes('type(') && expr.includes(').__name__')) {
              const varName = expr.match(/type\((\w+)\)/)?.[1];
              const typeMap = {
                'platform_name': 'str', 'current_year': 'int', 
                'is_learning': 'bool', 'progress_rate': 'float'
              };
              return typeMap[varName] || 'str';
            }

            // Handle len() expressions
            if (expr.includes('len(')) {
              const lengthMap = {
                'len("SyntaxForge Learners!")': '23',
                'len(skill_levels)': '4',
                'len(unique_technologies)': '4',
                'len("SyntaxForge")': '10'
              };
              return lengthMap[expr] || '0';
            }

            return variables[expr] || expr;
          });
        });

        // Clean up quotes and add to output
        content = content.replace(/"/g, '').replace(/'/g, '');
        output.push(content);
      }
    }
  }

  if (output.length === 0) {
    return '<span style="color: var(--accent-gold);">✅ Code executed successfully (no output)</span>';
  }

  return output.join('<br>');
}

// Enhanced search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = 'flex';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      } else {
        item.style.opacity = query ? '0.3' : '1';
        item.style.transform = query ? 'translateX(-10px)' : 'translateX(0)';
      }
    });
  });

  // Enhanced keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });
}

// Sidebar toggle with animation
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

// Enhanced AI Assistant with more tips
function showAITip() {
  const tips = [
    "💡 Pro Tip: Use Ctrl+K to instantly search any topic across both Python and C++!",
    "🚀 Learning Hack: Try modifying the code examples to see different outputs and learn by experimentation!",
    "⭐ Memory Trick: Variables in Python are like labeled boxes - the label stays, but contents can change!",
    "🔥 Advanced Insight: Master both Python and C++ to become a versatile full-stack developer!",
    "💻 Practice Tip: Each completed section builds upon the previous - follow the progression for best results!",
    "🎯 Focus Mode: Concentrate on one language at a time, then compare concepts between Python and C++!",
    "⚡ Speed Learning: Use the quick reference panel to rapidly look up syntax while coding!",
    "🌟 Expert Advice: The interactive examples are your playground - break them, fix them, learn from them!"
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  // Create enhanced tooltip with animation
  const tooltip = document.createElement('div');
  tooltip.style.cssText = `
                position: fixed;
                bottom: 120px;
                right: 32px;
                background: linear-gradient(135deg, rgba(0, 212, 255, 0.95), rgba(255, 71, 87, 0.95));
                color: white;
                padding: 16px 20px;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 500;
                max-width: 300px;
                z-index: 1000;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                line-height: 1.4;
            `;

  // Add slide-in animation
  const style = document.createElement('style');
  style.textContent = `
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `;
  document.head.appendChild(style);

  tooltip.textContent = randomTip;
  document.body.appendChild(tooltip);

  // Remove tooltip with fade out
  setTimeout(() => {
    tooltip.style.animation = 'slideInUp 0.3s reverse';
    setTimeout(() => {
      tooltip.remove();
      style.remove();
    }, 300);
  }, 5000);
}

// Element SDK integration
async function render(config) {
  document.getElementById('platformTitle').textContent = config.platform_title || defaultConfig.platform_title;
  document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
  document.getElementById('heroTitle').textContent = config.platform_title || defaultConfig.platform_title;
  document.getElementById('heroTagline').textContent = config.tagline || defaultConfig.tagline;
  document.getElementById('heroSubtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById('footerText').textContent = config.footer_text || defaultConfig.footer_text;
}

function mapToCapabilities(config) {
  return {
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["platform_title", config.platform_title || defaultConfig.platform_title],
    ["tagline", config.tagline || defaultConfig.tagline],
    ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
    ["footer_text", config.footer_text || defaultConfig.footer_text]
  ]);
}

// Initialize everything with enhanced startup
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Element SDK
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      render,
      mapToCapabilities,
      mapToEditPanelValues
    });
  }

  // Load saved progress
  loadProgress();

  // Setup all functionality
  setupNavigation();
  setupSearch();

  // Initialize mark complete button state
  updateMarkCompleteButton('python-basics');

  // Add resize listener for responsive particles
  window.addEventListener('resize', handleResize);

  // Auto-start after hero display (optional)
  setTimeout(() => {
    // Uncomment to auto-start after 8 seconds
    // startLearning();
  }, 8000);
});
