(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved) root.setAttribute('data-theme', saved);

  var themeBtn = document.getElementById('themebtn');
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paint() { if (themeBtn) themeBtn.textContent = currentTheme() === 'dark' ? '\u2600 Light' : '\u263E Dark'; }
  if (themeBtn) themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paint();
  });
  paint();

  var menuBtn = document.getElementById('menubtn');
  if (menuBtn) menuBtn.addEventListener('click', function () { document.body.classList.toggle('menu-open'); });
  document.addEventListener('click', function (e) {
    if (document.body.classList.contains('menu-open') && !e.target.closest('.sidebar') && e.target.id !== 'menubtn') document.body.classList.remove('menu-open');
  });

  document.querySelectorAll('.codeblock').forEach(function (block) {
    var pre = block.querySelector('pre');
    if (!pre) return;
    var btn = document.createElement('button');
    btn.className = 'iconbtn copy'; btn.type = 'button'; btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      var text = pre.innerText.replace(/^>>> ?/gm, '');
      function done() { btn.textContent = 'Copied!'; setTimeout(function () { btn.textContent = 'Copy'; }, 1400); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done);
      else { var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) {} document.body.removeChild(ta); }
    });
    block.appendChild(btn);
  });

  var active = document.querySelector('.sidebar a.active');
  if (active && active.scrollIntoView) active.scrollIntoView({ block: 'center' });

  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || /input|textarea/i.test((e.target.tagName || ''))) return;
    var sel = e.key === 'ArrowRight' ? 'a.next' : e.key === 'ArrowLeft' ? 'a.prev' : null;
    if (!sel) return;
    var a = document.querySelector('.pager ' + sel);
    if (a) window.location.href = a.href;
  });
})();
