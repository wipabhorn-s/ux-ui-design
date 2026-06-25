/* =============================================
   LearnHub - Page Interactions
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initTabs();
  initAccordions();
  initSidebar();
  initRangeInputs();
  initFormValidation();
  initSearchFilters();
  initVideoPlayer();
  initCharts();
  initWishlist();
  initCertificateActions();
  initPaymentForm();
});

/* ─── RANGE INPUT DISPLAY ─── */
function initRangeInputs() {
  document.querySelectorAll('input[type="range"]').forEach(input => {
    const display = document.getElementById(input.id + 'Display');
    if (display) {
      input.addEventListener('input', () => { display.textContent = parseInt(input.value).toLocaleString(); });
    }
  });
}

/* ─── FORM VALIDATION ─── */
function initFormValidation() {
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(field => {
        const err = field.closest('.form-group')?.querySelector('.form-error');
        if (!field.value.trim()) {
          valid = false;
          field.classList.add('form-input-error');
          if (err) err.textContent = 'กรุณากรอกข้อมูลนี้';
        } else {
          field.classList.remove('form-input-error');
          if (err) err.textContent = '';
        }
      });
      if (valid) {
        const btn = form.querySelector('[type="submit"]');
        if (btn) { btn.disabled = true; btn.innerHTML = '<span style="display:inline-block;animation:spin 0.8s linear infinite;border:2px solid #fff;border-top-color:transparent;border-radius:50%;width:16px;height:16px;"></span> กำลังดำเนินการ...'; }
        setTimeout(() => {
          if (form.dataset.redirect) window.location.href = form.dataset.redirect;
        }, 1200);
      }
    });

    // Clear error on input
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('form-input-error');
        const err = field.closest('.form-group')?.querySelector('.form-error');
        if (err) err.textContent = '';
      });
    });
  });
}

/* ─── SEARCH & FILTER (courses.html) ─── */
function initSearchFilters() {
  const courseGrid = document.getElementById('courseGrid');
  if (!courseGrid) return;

  const searchInput = document.getElementById('courseSearch');
  const sortSelect = document.getElementById('courseSort');
  const filterCheckboxes = document.querySelectorAll('.filter-check');
  const resultCount = document.getElementById('resultCount');

  function filterCourses() {
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedCats = [...document.querySelectorAll('.filter-check[name="category"]:checked')].map(c => c.value);
    const selectedLevels = [...document.querySelectorAll('.filter-check[name="level"]:checked')].map(c => c.value);
    const showFree = document.querySelector('.filter-check[name="price"][value="free"]')?.checked;
    const showPaid = document.querySelector('.filter-check[name="price"][value="paid"]')?.checked;

    let filtered = MOCK.courses.filter(course => {
      const matchQ = !query || course.title.toLowerCase().includes(query) || course.instructor.toLowerCase().includes(query) || course.category.toLowerCase().includes(query);
      const matchCat = selectedCats.length === 0 || selectedCats.includes(course.category);
      const matchLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
      const matchPrice = (!showFree && !showPaid) || (showFree && course.price === 0) || (showPaid && course.price > 0);
      return matchQ && matchCat && matchLevel && matchPrice;
    });

    // Sort
    if (sortSelect) {
      const sort = sortSelect.value;
      if (sort === 'popular') filtered.sort((a, b) => b.students - a.students);
      else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);
      else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
      else if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
      else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    }

    renderCourseGrid(filtered);
    if (resultCount) resultCount.textContent = `พบ ${filtered.length} คอร์ส`;
  }

  function renderCourseGrid(courses) {
    if (courses.length === 0) {
      courseGrid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <div class="empty-state-icon" style="background:#F3F4F6;">🔍</div>
          <h3 class="empty-state-title">ไม่พบคอร์สที่ตรงกับการค้นหา</h3>
          <p class="empty-state-text">ลองเปลี่ยน keyword หรือล้าง filter แล้วค้นหาใหม่</p>
          <button class="btn btn-primary" onclick="clearFilters()">ล้าง Filter ทั้งหมด</button>
        </div>`;
      return;
    }
    courseGrid.innerHTML = courses.map(c => renderCourseCard(c)).join('');
  }

  if (searchInput) searchInput.addEventListener('input', debounce(filterCourses, 250));
  if (sortSelect) sortSelect.addEventListener('change', filterCourses);
  filterCheckboxes.forEach(cb => cb.addEventListener('change', filterCourses));
}

function clearFilters() {
  document.querySelectorAll('.filter-check').forEach(cb => cb.checked = false);
  const search = document.getElementById('courseSearch');
  if (search) search.value = '';
  const event = new Event('change');
  document.querySelectorAll('.filter-check').forEach(cb => cb.dispatchEvent(event));
}

/* ─── VIDEO PLAYER ─── */
function initVideoPlayer() {
  const videoArea = document.getElementById('videoArea');
  if (!videoArea) return;

  const lessonItems = document.querySelectorAll('.player-lesson');
  const progressFill = document.getElementById('playerProgress');
  let currentLesson = 0;
  const total = lessonItems.length;

  lessonItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      lessonItems.forEach(l => l.classList.remove('active'));
      item.classList.add('active');
      currentLesson = index;
      const title = item.querySelector('.player-lesson-title')?.textContent || 'กำลังโหลด...';
      const placeholder = videoArea.querySelector('.video-title');
      if (placeholder) placeholder.textContent = title;
      updateProgress();
    });
  });

  function updateProgress() {
    const completed = document.querySelectorAll('.player-lesson.completed').length;
    const pct = Math.round((completed / total) * 100);
    if (progressFill) progressFill.style.width = pct + '%';
    const pctEl = document.getElementById('playerProgressPct');
    if (pctEl) pctEl.textContent = pct + '%';
  }

  // Mark complete button
  const markBtn = document.getElementById('markCompleteBtn');
  if (markBtn) {
    markBtn.addEventListener('click', () => {
      const active = document.querySelector('.player-lesson.active');
      if (active && !active.classList.contains('completed')) {
        active.classList.add('completed');
        const check = active.querySelector('.player-lesson-check');
        if (check) check.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';
        updateProgress();
        showToast('บทเรียนนี้เสร็จสมบูรณ์แล้ว! ✅');
        // Move to next
        const next = lessonItems[currentLesson + 1];
        if (next) setTimeout(() => next.click(), 500);
      }
    });
  }

  updateProgress();

  // Mobile sidebar toggle
  const sidebarToggle = document.getElementById('playerSidebarToggle');
  const playerSidebar = document.getElementById('playerSidebar');
  if (sidebarToggle && playerSidebar) {
    sidebarToggle.addEventListener('click', () => playerSidebar.classList.toggle('mobile-open'));
  }
}

/* ─── SIMPLE CSS CHARTS ─── */
function initCharts() {
  // Render bar charts
  document.querySelectorAll('[data-chart="bar"]').forEach(chart => {
    const data = JSON.parse(chart.dataset.values || '[]');
    const labels = JSON.parse(chart.dataset.labels || '[]');
    if (!data.length) return;
    const max = Math.max(...data);
    const barsHTML = data.map((v, i) => `
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0.375rem;">
        <span style="font-size:0.7rem;color:var(--color-text-muted);font-weight:600;">${v >= 1000 ? (v/1000).toFixed(0)+'K' : v.toLocaleString()}</span>
        <div style="width:100%;height:140px;background:var(--color-primary-bg);border-radius:4px 4px 0 0;position:relative;overflow:hidden;">
          <div style="position:absolute;bottom:0;left:0;right:0;background:var(--color-primary);border-radius:4px 4px 0 0;height:${Math.round((v/max)*100)}%;transition:height 0.6s ease;"></div>
        </div>
        <span style="font-size:0.7rem;color:var(--color-text-muted);">${labels[i] || ''}</span>
      </div>`).join('');
    chart.innerHTML = `<div style="display:flex;align-items:flex-end;gap:0.5rem;padding:0.5rem 0;">${barsHTML}</div>`;
  });
}

/* ─── WISHLIST ─── */
function initWishlist() {
  document.querySelectorAll('[data-wishlist]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const active = btn.dataset.wishlisted === 'true';
      btn.dataset.wishlisted = active ? 'false' : 'true';
      btn.style.color = active ? '' : 'var(--color-danger)';
      showToast(active ? 'นำออกจากรายการโปรดแล้ว' : 'เพิ่มในรายการโปรดแล้ว ❤️', active ? 'info' : 'success');
    });
  });
}

/* ─── CERTIFICATE ACTIONS ─── */
function initCertificateActions() {
  const printBtn = document.getElementById('printCertBtn');
  const downloadBtn = document.getElementById('downloadCertBtn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
  if (downloadBtn) downloadBtn.addEventListener('click', () => showToast('กำลังสร้าง PDF... โปรดรอสักครู่ 📄', 'info'));
}

/* ─── PAYMENT FORM ─── */
function initPaymentForm() {
  // Payment method tabs
  const payBtns = document.querySelectorAll('[data-pay-method]');
  payBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      payBtns.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = 'var(--color-border)';
        b.style.background = '#fff';
      });
      btn.classList.add('active');
      btn.style.borderColor = 'var(--color-primary)';
      btn.style.background = 'var(--color-primary-bg)';
      // Show/hide sections
      document.querySelectorAll('[data-pay-section]').forEach(s => s.style.display = 'none');
      const section = document.getElementById('paySection-' + btn.dataset.payMethod);
      if (section) section.style.display = 'block';
    });
  });

  // Card number formatting
  const cardInput = document.getElementById('cardNumber');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      e.target.value = val.replace(/(.{4})/g, '$1 ').trim();
    });
  }

  // Expiry formatting
  const expiryInput = document.getElementById('cardExpiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 3) val = val.substring(0, 2) + '/' + val.substring(2);
      e.target.value = val;
    });
  }

  // CVV
  const cvvInput = document.getElementById('cardCvv');
  if (cvvInput) cvvInput.addEventListener('input', (e) => { e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4); });

  // Promo code
  const promoBtn = document.getElementById('applyPromoBtn');
  const promoInput = document.getElementById('promoCode');
  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      const discountEl = document.getElementById('promoDiscount');
      const totalEl = document.getElementById('orderTotal');
      if (code === 'LEARN20') {
        if (discountEl) { discountEl.textContent = '-฿398'; discountEl.style.color = 'var(--color-success)'; }
        if (totalEl) totalEl.textContent = '฿1,592';
        showToast('ใช้โค้ดส่วนลด LEARN20 สำเร็จ! ลด 20% 🎉');
        promoBtn.textContent = '✓ ใช้แล้ว';
        promoBtn.disabled = true;
      } else if (code === 'FIRST50') {
        if (discountEl) { discountEl.textContent = '-฿995'; discountEl.style.color = 'var(--color-success)'; }
        if (totalEl) totalEl.textContent = '฿995';
        showToast('ใช้โค้ด FIRST50 สำเร็จ! ลด 50% 🎉');
        promoBtn.textContent = '✓ ใช้แล้ว';
        promoBtn.disabled = true;
      } else {
        showToast('โค้ดส่วนลดไม่ถูกต้องหรือหมดอายุแล้ว', 'danger');
      }
    });
  }
}

/* ─── ADMIN TABLE ACTIONS ─── */
function initAdminActions() {
  document.querySelectorAll('.admin-approve-btn').forEach(btn => {
    btn.addEventListener('click', () => showToast('อนุมัติสำเร็จ ✅'));
  });
  document.querySelectorAll('.admin-reject-btn').forEach(btn => {
    btn.addEventListener('click', () => showToast('ปฏิเสธสำเร็จ', 'warning'));
  });
  document.querySelectorAll('.admin-ban-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('ยืนยันที่จะแบนผู้ใช้นี้?')) showToast('แบนผู้ใช้แล้ว', 'danger');
    });
  });
}

/* ─── MY COURSES FILTER TABS ─── */
function initMyCoursesFilter() {
  const tabs = document.querySelectorAll('[data-course-filter]');
  const cards = document.querySelectorAll('[data-course-status]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.style.borderBottomColor = 'transparent'; t.style.color = 'var(--color-text-muted)'; });
      tab.classList.add('active');
      tab.style.borderBottomColor = 'var(--color-primary)';
      tab.style.color = 'var(--color-primary)';
      const filter = tab.dataset.courseFilter;
      let visible = 0;
      cards.forEach(card => {
        const status = card.dataset.courseStatus;
        const show = filter === 'all' || status === filter;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      const empty = document.getElementById('myCoursesEmpty');
      if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
    });
  });
}

/* ─── SETTINGS TABS ─── */
function initSettingsTabs() {
  const tabs = document.querySelectorAll('[data-settings-tab]');
  const panels = document.querySelectorAll('[data-settings-panel]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); });
      panels.forEach(p => p.classList.add('hidden'));
      tab.classList.add('active');
      const panel = document.querySelector(`[data-settings-panel="${tab.dataset.settingsTab}"]`);
      if (panel) panel.classList.remove('hidden');
    });
  });
}

/* ─── PROFILE PHOTO UPLOAD ─── */
function initProfilePhotoUpload() {
  const uploadBtn = document.getElementById('uploadPhotoBtn');
  const photoInput = document.getElementById('photoInput');
  const avatar = document.getElementById('profileAvatar');
  if (uploadBtn && photoInput) {
    uploadBtn.addEventListener('click', () => photoInput.click());
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && avatar) {
        const url = URL.createObjectURL(file);
        avatar.src = url;
        showToast('อัปโหลดรูปโปรไฟล์สำเร็จ ✅');
      }
    });
  }
}

/* ─── NOTIFICATIONS TOGGLE ─── */
function initNotifToggles() {
  document.querySelectorAll('.notif-toggle').forEach(toggle => {
    toggle.addEventListener('change', () => {
      showToast(toggle.checked ? 'เปิดการแจ้งเตือนแล้ว ✅' : 'ปิดการแจ้งเตือนแล้ว', toggle.checked ? 'success' : 'info');
    });
  });
}

/* ─── CREATE COURSE MULTI-STEP ─── */
function initCreateCourse() {
  const steps = document.querySelectorAll('[data-step]');
  const panels = document.querySelectorAll('[data-step-panel]');
  const nextBtns = document.querySelectorAll('[data-next-step]');
  const prevBtns = document.querySelectorAll('[data-prev-step]');
  let currentStep = 1;

  function goToStep(step) {
    currentStep = step;
    steps.forEach(s => {
      const n = parseInt(s.dataset.step);
      s.classList.toggle('active', n === step);
      s.style.color = n <= step ? 'var(--color-primary)' : 'var(--color-text-muted)';
      const circle = s.querySelector('.step-circle');
      if (circle) {
        circle.style.background = n < step ? 'var(--color-primary)' : n === step ? 'var(--color-primary)' : 'var(--color-gray-200)';
        circle.style.color = n <= step ? '#fff' : 'var(--color-text-muted)';
        circle.textContent = n < step ? '✓' : n;
      }
    });
    panels.forEach(p => { p.style.display = parseInt(p.dataset.stepPanel) === step ? 'block' : 'none'; });
  }

  nextBtns.forEach(btn => { btn.addEventListener('click', () => { if (currentStep < steps.length) goToStep(currentStep + 1); }); });
  prevBtns.forEach(btn => { btn.addEventListener('click', () => { if (currentStep > 1) goToStep(currentStep - 1); }); });

  if (steps.length) goToStep(1);

  // Add curriculum section
  const addSectionBtn = document.getElementById('addSectionBtn');
  if (addSectionBtn) {
    addSectionBtn.addEventListener('click', () => {
      const container = document.getElementById('curriculumContainer');
      if (!container) return;
      const idx = container.children.length + 1;
      const section = document.createElement('div');
      section.className = 'curriculum-section';
      section.style.cssText = 'border:1.5px solid var(--color-border);border-radius:var(--radius-lg);margin-bottom:1rem;overflow:hidden;';
      section.innerHTML = `
        <div style="background:var(--color-gray-50);padding:1rem 1.25rem;display:flex;align-items:center;gap:0.75rem;">
          <span style="font-weight:700;color:var(--color-primary);">Section ${idx}</span>
          <input type="text" class="form-input" placeholder="ชื่อ Section" style="flex:1;" value="Section ${idx}">
          <button type="button" style="color:var(--color-danger);font-size:1.25rem;background:none;border:none;cursor:pointer;" onclick="this.closest('.curriculum-section').remove()">×</button>
        </div>
        <div style="padding:0.75rem 1.25rem;">
          <button type="button" style="color:var(--color-primary);font-size:0.875rem;font-weight:600;background:none;border:none;cursor:pointer;" onclick="addLesson(this)">+ เพิ่มบทเรียน</button>
        </div>`;
      container.appendChild(section);
      showToast('เพิ่ม Section ใหม่แล้ว');
    });
  }
}

function addLesson(btn) {
  const container = btn.closest('div');
  const lesson = document.createElement('div');
  lesson.style.cssText = 'display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem;';
  lesson.innerHTML = `
    <span style="color:var(--color-text-muted);">▶</span>
    <input type="text" class="form-input" placeholder="ชื่อบทเรียน" style="flex:1;">
    <input type="text" class="form-input" placeholder="ระยะเวลา" style="width:100px;">
    <button type="button" style="color:var(--color-danger);background:none;border:none;cursor:pointer;font-size:1.1rem;" onclick="this.closest('div').remove()">×</button>`;
  container.insertBefore(lesson, btn);
}

/* ─── DEBOUNCE ─── */
function debounce(fn, delay) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

/* ─── INIT SPECIFIC PAGES ─── */
window.addEventListener('load', () => {
  const path = window.location.pathname;
  if (path.includes('my-courses')) initMyCoursesFilter();
  if (path.includes('profile')) { initSettingsTabs(); initProfilePhotoUpload(); initNotifToggles(); }
  if (path.includes('create-course')) initCreateCourse();
  if (path.includes('admin')) initAdminActions();

  // Animate stats counters
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.dataset.counter);
    if (!isNaN(target)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { animateCounter(el, target); observer.unobserve(el); } });
      });
      observer.observe(el);
    }
  });

  // Smooth reveal
  initScrollReveal();
});

/* ─── SPIN KEYFRAME ─── */
const style = document.createElement('style');
style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(style);
