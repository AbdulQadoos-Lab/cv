
(function(){
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') root.setAttribute('data-theme', 'dark');

  const themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn){
    const syncLabel = () => {
      const dark = root.getAttribute('data-theme') === 'dark';
      themeBtn.querySelector('.theme-label').textContent = dark ? 'Light mode' : 'Dark mode';
    };
    syncLabel();
    themeBtn.addEventListener('click', function(){
      const dark = root.getAttribute('data-theme') === 'dark';
      if (dark){ root.removeAttribute('data-theme'); localStorage.setItem('theme', 'light'); }
      else { root.setAttribute('data-theme', 'dark'); localStorage.setItem('theme', 'dark'); }
      syncLabel();
    });
  }

  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile]');
  if (burger && mobile){
    burger.addEventListener('click', function(){
      mobile.classList.toggle('show');
      burger.setAttribute('aria-expanded', String(mobile.classList.contains('show')));
    });
  }

  document.querySelectorAll('.accordion').forEach(function(acc){
    const btn = acc.querySelector('.acc-btn');
    const panel = acc.querySelector('.acc-panel');
    const sign = acc.querySelector('.acc-sign');
    if (!btn || !panel || !sign) return;
    const setState = function(open){
      panel.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      sign.textContent = open ? '−' : '+';
    };
    setState(acc.dataset.open === 'true');
    btn.addEventListener('click', function(){ setState(btn.getAttribute('aria-expanded') !== 'true'); });
  });

  document.querySelectorAll('[data-last-updated]').forEach(function(el){
    el.textContent = 'Last profile update: 2026-03-07';
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
