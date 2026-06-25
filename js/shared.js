/* =============================================
   LearnHub - Shared Components (Navbar, Footer)
   ============================================= */

/* ─── SVG ICONS ─── */
const ICONS = {
  logo: `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#CA895F"/><path d="M8 10h12M8 14h10M8 18h8M8 22h6" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M22 14l4 4-4 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  cart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  home: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  book: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  dashboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  logout: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  heart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  play: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  twitter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  facebook: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  youtube: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
};

/* ─── NAVBAR HTML ─── */
function getNavbarHTML(page = 'public', activePage = '') {
  const isLoggedIn = ['student', 'instructor', 'admin'].includes(page);

  return `
<nav class="navbar" id="mainNavbar">
  <div class="navbar-inner">
    <!-- Logo -->
    <a href="index.html" class="navbar-logo">
      ${ICONS.logo}
      Learn<span>Hub</span>
    </a>

    <!-- Search (hidden on mobile) -->
    <div class="navbar-search hide-mobile" style="flex:1;max-width:420px;">
      <span class="search-icon">${ICONS.search}</span>
      <input type="text" placeholder="ค้นหาคอร์ส..." id="navSearch" autocomplete="off">
    </div>

    <!-- Nav Links (hidden on mobile) -->
    <nav class="navbar-links hide-mobile">
      <a href="index.html" class="navbar-link ${activePage === 'home' ? 'active' : ''}">หน้าหลัก</a>
      <a href="courses.html" class="navbar-link ${activePage === 'courses' ? 'active' : ''}">คอร์สเรียน</a>
      ${isLoggedIn ? `<a href="${page === 'instructor' ? 'instructor-dashboard.html' : page === 'admin' ? 'admin-dashboard.html' : 'student-dashboard.html'}" class="navbar-link">Dashboard</a>` : ''}
    </nav>

    <!-- Actions -->
    <div class="navbar-actions">
      ${isLoggedIn ? `
        <!-- Notifications -->
        <button class="navbar-icon-btn hide-mobile" title="การแจ้งเตือน" onclick="toggleDropdown('notifDropdown')">
          ${ICONS.bell}
          <span class="nav-badge"></span>
        </button>
        <!-- Cart -->
        <a href="checkout.html" class="navbar-icon-btn hide-mobile" title="ตะกร้า">
          ${ICONS.cart}
        </a>
        <span class="navbar-divider hide-mobile"></span>
        <!-- Avatar -->
        <div class="dropdown">
          <div class="navbar-avatar" onclick="toggleDropdown('userDropdown')" title="บัญชีของฉัน">
            <img src="https://ui-avatars.com/api/?name=Somsak+R&background=CA895F&color=fff&size=72" alt="Avatar">
          </div>
          <div class="dropdown-menu" id="userDropdown">
            <div class="dropdown-header">สมศักดิ์ รักเรียน</div>
            <a href="student-dashboard.html" class="dropdown-item">${ICONS.dashboard} <span>Dashboard</span></a>
            <a href="my-courses.html" class="dropdown-item">${ICONS.book} <span>คอร์สของฉัน</span></a>
            <a href="certificate.html" class="dropdown-item">${ICONS.award} <span>ใบประกาศนียบัตร</span></a>
            <a href="profile.html" class="dropdown-item">${ICONS.settings} <span>ตั้งค่าบัญชี</span></a>
            <div class="dropdown-divider"></div>
            <a href="login.html" class="dropdown-item danger">${ICONS.logout} <span>ออกจากระบบ</span></a>
          </div>
        </div>
      ` : `
        <a href="login.html" class="btn btn-ghost btn-sm hide-mobile">เข้าสู่ระบบ</a>
        <a href="signup.html" class="btn btn-primary btn-sm">สมัครสมาชิก</a>
      `}

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu()">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html" class="mobile-menu-link">${ICONS.home} <span>หน้าหลัก</span></a>
    <a href="courses.html" class="mobile-menu-link">${ICONS.book} <span>คอร์สเรียน</span></a>
    ${isLoggedIn ? `
      <a href="student-dashboard.html" class="mobile-menu-link">${ICONS.dashboard} <span>Dashboard</span></a>
      <a href="my-courses.html" class="mobile-menu-link">${ICONS.play} <span>คอร์สของฉัน</span></a>
      <a href="certificate.html" class="mobile-menu-link">${ICONS.award} <span>ใบประกาศนียบัตร</span></a>
      <a href="profile.html" class="mobile-menu-link">${ICONS.settings} <span>ตั้งค่าบัญชี</span></a>
    ` : ''}
    <!-- Search on mobile -->
    <div style="padding:0.5rem 1rem;margin-top:0.5rem;">
      <div class="form-input-icon">
        <span class="input-icon">${ICONS.search}</span>
        <input type="text" class="form-input" placeholder="ค้นหาคอร์ส...">
      </div>
    </div>
    <div class="mobile-menu-actions">
      ${isLoggedIn ? `
        <a href="login.html" class="btn btn-outline btn-block">ออกจากระบบ</a>
      ` : `
        <a href="login.html" class="btn btn-outline btn-block">เข้าสู่ระบบ</a>
        <a href="signup.html" class="btn btn-primary btn-block">สมัครสมาชิก</a>
      `}
    </div>
  </div>
</nav>
`;
}

/* ─── FOOTER HTML ─── */
function getFooterHTML() {
  return `
<footer class="footer">
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo">${ICONS.logo} LearnHub</div>
          <p class="footer-tagline">แพลตฟอร์มเรียนออนไลน์ที่ดีที่สุด เรียนกับผู้เชี่ยวชาญจริง เรียนเมื่อไหร่ ที่ไหนก็ได้ พัฒนาทักษะและอาชีพของคุณวันนี้</p>
          <div class="footer-social">
            <a href="#" class="social-btn" title="Facebook">${ICONS.facebook}</a>
            <a href="#" class="social-btn" title="Twitter">${ICONS.twitter}</a>
            <a href="#" class="social-btn" title="YouTube">${ICONS.youtube}</a>
            <a href="#" class="social-btn" title="Instagram">${ICONS.instagram}</a>
          </div>
        </div>

        <!-- Courses -->
        <div>
          <h4 class="footer-col-title">คอร์สยอดนิยม</h4>
          <div class="footer-links">
            <a href="courses.html" class="footer-link">Web Development</a>
            <a href="courses.html" class="footer-link">Data Science & ML</a>
            <a href="courses.html" class="footer-link">UI/UX Design</a>
            <a href="courses.html" class="footer-link">Mobile Development</a>
            <a href="courses.html" class="footer-link">Digital Marketing</a>
            <a href="courses.html" class="footer-link">Photography</a>
          </div>
        </div>

        <!-- Company -->
        <div>
          <h4 class="footer-col-title">เกี่ยวกับเรา</h4>
          <div class="footer-links">
            <a href="#" class="footer-link">เกี่ยวกับ LearnHub</a>
            <a href="#" class="footer-link">สอนบน LearnHub</a>
            <a href="#" class="footer-link">พันธมิตรธุรกิจ</a>
            <a href="#" class="footer-link">ข่าวสาร & บล็อก</a>
            <a href="#" class="footer-link">ร่วมงานกับเรา</a>
            <a href="#" class="footer-link">ติดต่อเรา</a>
          </div>
        </div>

        <!-- Support -->
        <div>
          <h4 class="footer-col-title">ช่วยเหลือ</h4>
          <div class="footer-links">
            <a href="#" class="footer-link">ศูนย์ช่วยเหลือ</a>
            <a href="#" class="footer-link">นโยบายคืนเงิน</a>
            <a href="#" class="footer-link">นโยบายความเป็นส่วนตัว</a>
            <a href="#" class="footer-link">ข้อตกลงการใช้บริการ</a>
            <a href="empty-states.html" class="footer-link">รายงานปัญหา</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
      <p class="footer-copyright">© 2024 LearnHub. สงวนลิขสิทธิ์ทุกประการ</p>
      <div class="footer-bottom-links">
        <a href="#" class="footer-bottom-link">นโยบายความเป็นส่วนตัว</a>
        <a href="#" class="footer-bottom-link">ข้อกำหนดการใช้งาน</a>
        <a href="#" class="footer-bottom-link">Cookies</a>
      </div>
    </div>
  </div>
</footer>
`;
}

/* ─── MINIMAL NAVBAR (for auth / checkout pages) ─── */
function getMinimalNavbarHTML() {
  return `
<nav style="background:#fff;border-bottom:1px solid #E5E7EB;height:64px;display:flex;align-items:center;padding:0 1.5rem;">
  <a href="index.html" style="display:flex;align-items:center;gap:0.5rem;font-size:1.25rem;font-weight:800;color:#CA895F;text-decoration:none;">
    ${ICONS.logo} Learn<span style="color:#595758;">Hub</span>
  </a>
</nav>`;
}

/* ─── INIT PAGE ─── */
function initPage(config = {}) {
  const {
    type = 'public',   // 'public' | 'auth' | 'student' | 'instructor' | 'admin' | 'player' | 'cert'
    page = '',         // active page name for nav highlighting
    noFooter = false,
  } = config;

  // Inject navbar
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    if (type === 'auth') {
      navPlaceholder.outerHTML = getMinimalNavbarHTML();
    } else if (type === 'public') {
      navPlaceholder.outerHTML = getNavbarHTML('public', page);
    } else if (['student', 'instructor', 'admin'].includes(type)) {
      navPlaceholder.outerHTML = getNavbarHTML(type, page);
    }
  }

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder && !noFooter && type !== 'player' && type !== 'cert') {
    footerPlaceholder.outerHTML = getFooterHTML();
  } else if (footerPlaceholder) {
    footerPlaceholder.remove();
  }

  // Init behaviors
  initScrollEffect();
  initDropdowns();
  initNavSearch();
}

/* ─── SCROLL EFFECT ─── */
function initScrollEffect() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─── MOBILE MENU ─── */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  if (btn) btn.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

/* ─── DROPDOWN ─── */
function toggleDropdown(id) {
  const menu = document.getElementById(id);
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  if (isOpen) {
    const closeOthers = (e) => {
      if (!menu.closest('.dropdown').contains(e.target)) {
        menu.classList.remove('open');
        document.removeEventListener('click', closeOthers);
      }
    };
    setTimeout(() => document.addEventListener('click', closeOthers), 0);
  }
}

function initDropdowns() {
  // Close dropdowns on outside click (handled per-dropdown in toggleDropdown)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
    }
  });
}

/* ─── NAV SEARCH ─── */
function initNavSearch() {
  const input = document.getElementById('navSearch');
  if (!input) return;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = `courses.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}

/* ─── TOAST ─── */
function showToast(msg, type = 'success', duration = 3500) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icon = { success: '✅', warning: '⚠️', danger: '❌', info: 'ℹ️' }[type] || '✅';
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span style="font-size:1.25rem;">${icon}</span><div><p style="font-size:0.9rem;font-weight:600;color:#1F2937;margin:0;">${msg}</p></div>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; toast.style.transition = 'all 0.3s ease'; setTimeout(() => toast.remove(), 300); }, duration);
}

/* ─── TABS ─── */
function initTabs(containerSelector) {
  const containers = document.querySelectorAll(containerSelector || '[data-tabs]');
  containers.forEach(container => {
    const btns = container.querySelectorAll('.tab-btn');
    const panels = container.querySelectorAll('.tab-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  });
}

/* ─── ACCORDION ─── */
function initAccordions() {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
    if (!header || !body) return;
    header.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      body.style.maxHeight = isOpen ? body.scrollHeight + 'px' : '0';
    });
  });
}

/* ─── SIDEBAR (DASHBOARD) ─── */
function initSidebar() {
  const sidebar = document.getElementById('dashSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const toggleBtn = document.getElementById('sidebarToggle');
  if (!sidebar) return;
  function openSidebar() { sidebar.classList.add('open'); if (overlay) overlay.classList.add('show'); document.body.style.overflow = 'hidden'; }
  function closeSidebar() { sidebar.classList.remove('open'); if (overlay) overlay.classList.remove('show'); document.body.style.overflow = ''; }
  if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
}

/* ─── COUNTER ANIMATION ─── */
function animateCounter(el, target, duration = 1500) {
  const start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(step);
}

/* ─── SCROLL REVEAL ─── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-reveal]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ─── RENDER COURSE CARD ─── */
function renderCourseCard(course) {
  const inst = MOCK.instructors.find(i => i.id === course.instructorId);
  return `
<div class="course-card" onclick="window.location.href='course-detail.html?id=${course.id}'">
  <div class="course-card-img">
    <img src="${course.thumbnail}" alt="${course.title}" loading="lazy">
    ${course.isBestseller ? '<div class="course-card-badge"><span class="badge badge-bestseller">🏆 Bestseller</span></div>' : course.isNew ? '<div class="course-card-badge"><span class="badge badge-new">✨ ใหม่</span></div>' : ''}
  </div>
  <div class="course-card-body">
    <div class="course-card-category">${course.category}</div>
    <h3 class="course-card-title">${course.title}</h3>
    <p class="course-card-instructor">${course.instructor}</p>
    <div class="course-card-meta">
      <span class="course-card-rating">${course.rating}</span>
      ${renderStars(course.rating)}
      <span class="course-card-reviews">(${course.reviews.toLocaleString()})</span>
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;font-size:0.75rem;color:var(--color-text-muted);">
      <span>⏱ ${course.duration}</span>
      <span>📚 ${course.lessons} บทเรียน</span>
      <span>📶 ${course.level}</span>
    </div>
  </div>
  <div class="course-card-footer">
    <div>
      <span class="course-card-price">${formatPrice(course.price)}</span>
      ${course.originalPrice ? `<span class="course-card-original-price" style="margin-left:0.5rem;">${formatPrice(course.originalPrice)}</span>` : ''}
    </div>
    <button class="btn btn-outline btn-sm" onclick="event.stopPropagation();showToast('เพิ่มในรายการโปรดแล้ว ❤️')">❤</button>
  </div>
</div>`;
}

/* ─── TAILWIND CONFIG (shared object) ─── */
const TW_CONFIG = {
  theme: {
    extend: {
      colors: {
        'brand': '#CA895F',
        'brand-dark': '#B5764E',
        'brand-active': '#9E6440',
        'brand-light': '#E5B08A',
        'brand-bg': '#FBF3EC',
        'charcoal': '#595758',
        'charcoal-light': '#7A797A',
        'periwinkle': '#C3BEF7',
        'periwinkle-dark': '#A49BF0',
        'periwinkle-bg': '#F5F3FE',
        'mint': '#D6F6DD',
        'mint-dark': '#A8E8B5',
        'mint-bg': '#F0FDF4',
        'paleoak': '#EBD2B4',
        'paleoak-dark': '#D9BC98',
        'paleoak-bg': '#FBF5EE',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    }
  }
};
