/* Alwakala challenge · shared client: Supabase calls, tracking, uploads, header + sign-in. */
window.CH = (function () {
  'use strict';
  var SB = 'https://xpjxnksnqmynqueddinf.supabase.co', KEY = 'sb_publishable_5e-Vx3e9vlEdi3ydhh-0pw_7W8M6sOo';
  var WM = 'M24.50 22.83L29.33 26.67L34.50 32.50L36.00 31.67L38.33 28.33L41.50 25.17L45.00 22.67L49.83 25.67L56.17 32.50L56.83 32.50L59.67 28.67L65.83 23.17L66.50 21.83L61.50 17.83L56.50 12.17L55.67 12.17L49.50 19.33L46.50 21.67L45.33 21.83L40.00 18.00L34.33 12.00L30.67 16.50L24.50 22.00ZM133.00 5.17L132.33 4.67L112.00 4.67L111.00 5.50L111.00 60.67L110.17 64.17L108.50 67.00L105.83 69.33L103.50 70.50L81.00 70.83L76.83 69.33L74.50 66.83L73.33 63.83L73.17 42.50L72.33 41.33L19.50 41.50L18.67 42.33L9.17 61.50L4.83 74.83L4.33 78.33L4.67 89.67L6.83 97.17L9.67 102.00L14.33 106.67L18.67 109.33L24.00 111.50L30.17 112.67L36.50 112.67L41.50 111.83L50.17 108.33L55.33 104.83L59.17 101.33L65.50 93.00L66.50 93.83L67.83 98.83L70.33 103.00L74.17 106.33L80.00 108.67L83.83 109.17L108.00 108.83L116.50 106.67L122.67 103.17L126.33 99.83L129.33 95.83L131.83 90.00L133.00 83.83ZM58.83 55.50L57.83 59.50L53.67 66.00L48.67 70.67L42.83 74.00L37.50 75.50L29.50 75.33L24.83 73.00L22.00 69.33L21.17 66.67L21.67 62.33L23.50 59.17L28.17 55.83L31.17 55.00L57.67 54.83ZM476.17 4.17L475.33 5.00L475.33 108.17L476.33 109.17L496.00 109.17L496.83 108.33L496.83 5.00L496.17 4.17ZM466.00 5.50L465.67 4.67L464.67 4.17L445.83 4.17L444.83 5.17L444.83 60.17L443.50 65.50L439.50 69.50L435.33 70.83L429.00 70.83L428.00 70.00L427.83 42.33L426.67 41.33L396.00 41.50L387.67 43.00L382.50 45.17L376.17 49.33L372.17 53.17L368.83 58.00L367.17 61.67L365.83 66.50L365.67 75.50L367.83 82.83L369.50 86.00L373.17 90.83L379.50 95.83L387.83 99.50L394.00 100.67L408.83 100.83L409.83 101.50L409.33 102.50L403.00 105.83L396.50 107.50L352.83 107.67L349.00 106.33L348.17 104.83L351.33 101.00L353.67 97.00L355.67 88.83L355.67 48.50L355.00 44.67L352.50 38.83L348.00 33.67L344.17 31.17L340.00 29.50L336.83 29.00L203.17 28.83L202.00 27.83L202.00 19.00L203.17 18.00L300.83 18.00L302.33 16.83L306.00 6.17L305.50 4.67L194.17 4.83L193.33 5.67L190.17 12.67L187.17 22.33L186.67 32.17L186.83 56.00L187.67 56.67L335.50 56.67L339.50 57.83L342.33 61.33L343.00 63.83L343.00 69.33L342.17 70.67L172.33 70.50L169.33 69.00L167.17 67.00L165.33 63.83L164.50 60.17L164.50 5.50L163.50 4.67L143.50 4.67L142.67 5.33L142.83 85.67L143.50 89.83L146.67 96.67L148.33 98.83L153.67 103.67L159.50 106.67L168.33 108.67L334.00 108.83L343.33 107.50L344.50 108.50L364.83 139.33L391.00 139.67L400.33 138.17L408.50 134.67L413.50 131.17L418.33 126.33L422.67 120.17L427.67 109.17L440.83 108.67L449.33 106.67L454.00 104.17L457.00 101.67L461.33 96.67L463.67 92.33L465.17 87.67L465.83 82.17Z';
  var HEAD = { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json' };

  function rpc(name, body) {
    return fetch(SB + '/rest/v1/rpc/' + name, { method: 'POST', headers: HEAD, body: JSON.stringify(body || {}) })
      .then(function (r) { return r.text().then(function (t) { var j = null; try { j = t ? JSON.parse(t) : null; } catch (e) { } if (!r.ok) { throw new Error((j && j.message) || String(r.status)); } return j; }); });
  }
  function pub(p) { return SB + '/storage/v1/object/public/challenge-video/' + p; }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n) { return Math.round(+n || 0).toLocaleString('en-US'); }
  function uuid() { return (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  function dev() { var d = ls('aw_dev'); if (!d) { d = uuid().replace(/-/g, '').slice(0, 16); ls('aw_dev', d); } return d; }
  function me() { try { var o = JSON.parse(ls('aw_chal') || 'null'); return (o && o.token) ? o : null; } catch (e) { return null; } }
  function setMe(o) { ls('aw_chal', o ? JSON.stringify({ token: o.token, id: o.id, name: o.name }) : null); }
  function cd() { var m = me(); return m && m.id ? 'E-' + String(m.id).replace(/-/g, '').slice(0, 8) : 'PUB-' + dev().slice(0, 8); }
  var SID = uuid();
  function useSid(id) { if (id) SID = id; }

  /* ---- tracking: one session row per page load, events on top ---- */
  var page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
  var secs = 0, tick = null, utm = null;
  try { var q = new URLSearchParams(location.search), u = {}; ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'src'].forEach(function (k) { if (q.get(k)) u[k] = q.get(k).slice(0, 60); }); if (Object.keys(u).length) { utm = u; ls('aw_utm', JSON.stringify(u)); } else { utm = JSON.parse(ls('aw_utm') || 'null'); } } catch (e) { }
  function ping(extra) {
    var b = { p_session: SID, p_cd: cd(), p_seconds: secs, p_step: 0, p_film: null, p_ua: navigator.userAgent.slice(0, 300), p_build: 'v7', p_page: page,
      p_ref: (document.referrer || '').slice(0, 200) || null, p_utm: utm, p_lang: (navigator.language || '').slice(0, 8), p_screen: screen.width + 'x' + screen.height,
      p_tz: (Intl.DateTimeFormat().resolvedOptions().timeZone || '').slice(0, 48) };
    if (extra) for (var k in extra) b[k] = extra[k];
    try { fetch(SB + '/rest/v1/rpc/brief_ping', { method: 'POST', keepalive: true, headers: HEAD, body: JSON.stringify(b) }).catch(function () { }); } catch (e) { }
  }
  function event(kind, meta) { try { fetch(SB + '/rest/v1/rpc/brief_event', { method: 'POST', keepalive: true, headers: HEAD, body: JSON.stringify({ p_session: SID, p_cd: cd(), p_kind: kind, p_meta: meta || null }) }).catch(function () { }); } catch (e) { } }
  function track() {
    ping(); event('page_view', { page: page, path: location.pathname + location.search });
    function start() { if (tick) return; tick = setInterval(function () { secs += 5; if (secs % 30 === 0) ping(); }, 5000); }
    function stop() { if (tick) { clearInterval(tick); tick = null; } }
    document.addEventListener('visibilitychange', function () { if (document.hidden) { stop(); ping(); } else start(); });
    window.addEventListener('pagehide', function () { ping(); });
    if (!document.hidden) start();
  }

  /* ---- uploads ---- */
  function upload(path, file, onp) {
    return new Promise(function (res, rej) {
      var x = new XMLHttpRequest(); x.open('POST', SB + '/storage/v1/object/challenge-video/' + path);
      x.setRequestHeader('apikey', KEY); x.setRequestHeader('Authorization', 'Bearer ' + KEY); x.setRequestHeader('Content-Type', file.type || 'application/octet-stream');
      x.upload.onprogress = function (e) { if (e.lengthComputable && onp) onp(e.loaded / e.total); };
      x.onload = function () { if (x.status >= 200 && x.status < 300) res(path); else { var m = ''; try { m = JSON.parse(x.responseText).message || ''; } catch (e) { } rej(new Error(m || ('upload ' + x.status))); } };
      x.onerror = function () { rej(new Error('network')); }; x.send(file);
    });
  }
  function poster(file) {
    return new Promise(function (res) {
      try {
        var v = document.createElement('video'); v.muted = true; v.playsInline = true; v.preload = 'auto'; v.src = URL.createObjectURL(file);
        v.onloadedmetadata = function () { v.currentTime = Math.min(1, Math.max(0, v.duration - .1)); };
        v.onseeked = function () { var W = 720, H = Math.round(720 * v.videoHeight / v.videoWidth) || 1280, c = document.createElement('canvas'); c.width = W; c.height = H; c.getContext('2d').drawImage(v, 0, 0, W, H); c.toBlob(function (b) { URL.revokeObjectURL(v.src); res({ blob: b, w: v.videoWidth, h: v.videoHeight, dur: v.duration }); }, 'image/jpeg', .78); };
        v.onerror = function () { res(null); }; setTimeout(function () { res(null); }, 9000);
      } catch (e) { res(null); }
    });
  }
  function shrink(file, max) {
    max = max || 2000;
    return new Promise(function (res) {
      try {
        var img = new Image(); img.onload = function () {
          var w = img.naturalWidth, h = img.naturalHeight, s = Math.min(1, max / Math.max(w, h));
          if (s === 1 && file.size < 4 * 1048576) { URL.revokeObjectURL(img.src); return res({ blob: file, w: w, h: h }); }
          var c = document.createElement('canvas'); c.width = Math.round(w * s); c.height = Math.round(h * s); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          c.toBlob(function (b) { URL.revokeObjectURL(img.src); res({ blob: b || file, w: c.width, h: c.height }); }, 'image/jpeg', .86);
        }; img.onerror = function () { res({ blob: file, w: null, h: null }); }; img.src = URL.createObjectURL(file);
      } catch (e) { res({ blob: file, w: null, h: null }); }
    });
  }

  /* ---- header + sign-in ---- */
  var CSS = '.chbar{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:10px;padding:10px 16px;background:rgba(20,19,18,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid #3C3C39;font-family:"IBM Plex Sans Arabic",Tahoma,sans-serif}'
    + '.chbar .wm{width:78px;height:auto;flex:none;display:block}.chbar .sp{flex:1}.chbar a,.chbar button{color:#EDEDEA;text-decoration:none;font-weight:700;font-size:14px;border:1.5px solid #3C3C39;border-radius:999px;padding:7px 14px;background:transparent;font-family:inherit;cursor:pointer;white-space:nowrap}'
    + '.chbar a.on{border-color:#EDEDEA}.chbar .m{background:#FF0A8C;color:#1C1C1B;border-color:#FF0A8C}.chbar .me{border-color:#FF0A8C;color:#FF0A8C}'
    + '@media (max-width:520px){.chbar{gap:6px;padding:8px 10px}.chbar a,.chbar button{padding:6px 10px;font-size:13px}.chbar .hidem{display:none}.chbar .wm{width:62px}}'
    + '.chdlg{position:fixed;inset:0;z-index:90;background:rgba(10,10,9,.72);display:grid;place-items:center;padding:16px}.chdlg[hidden]{display:none}'
    + '.chdlg .cd{background:#1C1C1B;border:1px solid #3C3C39;border-radius:22px;padding:24px;max-width:400px;width:100%;color:#EDEDEA;font-family:"IBM Plex Sans Arabic",Tahoma,sans-serif}'
    + '.chdlg h3{margin:0 0 6px;font-size:22px}.chdlg p{margin:0 0 14px;color:#BDBDB8;font-size:14px;line-height:1.7}'
    + '.chdlg label{display:block;font-size:13px;color:#BDBDB8;margin-bottom:10px}.chdlg label span{display:block;margin-bottom:4px}'
    + '.chdlg input{width:100%;box-sizing:border-box;border:1.5px solid rgba(247,247,245,.25);background:#141312;color:#F7F7F5;border-radius:12px;padding:11px 14px;font:inherit;font-size:16px}.chdlg input:focus{outline:0;border-color:#FF0A8C}'
    + '.chdlg .row{display:flex;gap:8px;margin-top:6px}.chdlg .go{flex:1;border:0;border-radius:999px;background:#FF0A8C;color:#1C1C1B;font-weight:800;font-size:16px;padding:12px;cursor:pointer;font-family:inherit}.chdlg .x{border:1.5px solid #3C3C39;background:transparent;color:#EDEDEA;border-radius:999px;padding:12px 16px;cursor:pointer;font-family:inherit;font-weight:700}'
    + '.chdlg .err{min-height:1.4em;color:#FFB8D9;font-size:14px;margin-top:10px}.chdlg .hint{font-size:12px;color:#8C8C88;margin-top:12px;line-height:1.6}.chdlg .hint a{color:#FF0A8C}';
  function header(active) {
    var st = document.createElement('style'); st.id = 'chcss'; st.textContent = CSS; document.head.appendChild(st);
    var m = me(), host = document.getElementById('chbar') || document.body.insertBefore(document.createElement('div'), document.body.firstChild);
    var links = [['index', 'الرئيسية', 'index.html'], ['brief', 'الـBrief', 'brief.html'], ['gallery', 'شارع الأفكار', 'gallery.html']];
    host.className = 'chbar'; host.id = 'chbar';
    host.innerHTML = '<a href="index.html" style="border:0;padding:0" aria-label="الوكالة.ai"><svg class="wm" viewBox="0 0 500 144" role="img"><path fill="#FF0A8C" fill-rule="evenodd" d="' + WM + '"/></svg></a><span class="sp"></span>'
      + links.map(function (l) { return '<a href="' + l[2] + '"' + (l[0] === active ? ' class="on"' : '') + (l[0] === 'brief' ? ' class="hidem' + (l[0] === active ? ' on' : '') + '"' : '') + '>' + l[1] + '</a>'; }).join('')
      + (m ? '<a class="me" href="submit.html" id="chme">مشروعي · ' + esc(m.name || '').split(' ')[0] + '</a>' : '<button type="button" class="m" id="chlogin">دخول</button>');
    return loginDialog();
  }
  var dlgBuilt = null;
  function loginDialog() {
    if (dlgBuilt) return dlgBuilt;
    if (!document.getElementById('chcss')) { var st2 = document.createElement('style'); st2.id = 'chcss'; st2.textContent = CSS; document.head.appendChild(st2); }
    var dlg = document.createElement('div'); dlg.className = 'chdlg'; dlg.hidden = true; dlg.setAttribute('role', 'dialog'); dlg.setAttribute('aria-modal', 'true');
    dlg.innerHTML = '<div class="cd"><h3>دخول</h3><p>رقم الواتساب اللي سجّلت به، ورمزك المكوّن من 6 أرقام.</p><form id="chlf" novalidate>'
      + '<label><span>رقم الواتساب</span><input name="phone" inputmode="tel" dir="ltr" autocomplete="tel" placeholder="05xxxxxxxx" maxlength="20"></label>'
      + '<label><span>الرمز (6 أرقام)</span><input name="pin" inputmode="numeric" dir="ltr" autocomplete="current-password" type="password" maxlength="6" pattern="[0-9]{6}"></label>'
      + '<div class="row"><button type="submit" class="go">ادخل</button><button type="button" class="x" id="chlx">إغلاق</button></div><div class="err" id="chle"></div>'
      + '<div class="hint">ما سجّلت بعد؟ <a href="join.html">سجّل من هنا</a>. نسيت الرمز؟ راسل <a href="mailto:win@alwakala.ai">win@alwakala.ai</a> من نفس رقمك.</div></form></div>';
    document.body.appendChild(dlg);
    var open = function () { dlg.hidden = false; event('login_open'); setTimeout(function () { dlg.querySelector('input[name=phone]').focus(); }, 50); };
    var close = function () { dlg.hidden = true; };
    var b = document.getElementById('chlogin'); if (b) b.addEventListener('click', open);
    document.getElementById('chlx').addEventListener('click', close);
    dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !dlg.hidden) close(); });
    document.getElementById('chlf').addEventListener('submit', function (e) {
      e.preventDefault(); var f = e.target, err = document.getElementById('chle'); err.textContent = '';
      if (!/^[0-9]{6}$/.test(f.pin.value)) { err.textContent = 'الرمز 6 أرقام.'; return; }
      f.querySelector('.go').disabled = true;
      rpc('chal_login', { p_phone: f.phone.value, p_pin: f.pin.value }).then(function (j) { if (!j || j.ok === false) { var k = (j && j.error) || ''; err.textContent = k === 'locked' ? 'محاولات كثيرة. جرّب بعد 15 دقيقة.' : k === 'bad_pin' ? 'الرقم أو الرمز غير صحيح.' + (j.left === 0 ? ' آخر محاولة قبل الإيقاف 15 دقيقة.' : '') : 'صار خطأ. جرّب مرة ثانية.'; event('login_fail', { e: k }); return; } setMe(j); event('login_ok'); location.href = 'submit.html'; })
        .catch(function (x) { err.textContent = 'صار خطأ. جرّب مرة ثانية.'; event('login_fail'); })
        .then(function () { f.querySelector('.go').disabled = false; });
    });
    dlgBuilt = { open: open, close: close };
    return dlgBuilt;
  }
  function logout() { setMe(null); event('logout'); }
  function days(iso) { return Math.max(0, Math.ceil((new Date(iso) - Date.now()) / 864e5)); }
  function share(text, url) { return 'https://wa.me/?text=' + encodeURIComponent(text + '\n' + url); }
  function base() { return location.origin + location.pathname.replace(/[^/]*$/, ''); }

  /* project sections: key, heading, help (shared by the form and the project page) */
  var SEC = [
    ['hook', 'الجملة الافتتاحية', 'اختياري · سطر واحد يفتح الحملة، مثل عنوان الفيلم.'],
    ['idea', 'الفكرة في ثلاث جمل', 'وش الحملة؟ وش نشوف؟ ووش تخلي الناس يحسّون؟'],
    ['notice', 'كيف ينتبه صاحب المحل، هو أو هي؟', 'اللحظة الأولى: وين يشوفها، ووش يوقّفه.'],
    ['better', 'كيف يشوف علامته أحسن؟', 'الشي اللي يخليه يقول: هذا أنا، بس أحلى.'],
    ['forward', 'وش اللي يخليه يرسلها لجاره؟', 'آلية الانتشار بدون ما ندفع عليها.'],
    ['price', 'السعر على الشاشة: 149 ريال', 'كيف يظهر السعر بدون ما يخرّب الفكرة؟'],
    ['campaign', 'لو صارت حملة كاملة', 'ثمانية أسابيع: وش يصير في الشارع، وعلى الشاشات، وفي المحلات؟']
  ];
  var LIM = { video: 104857600, pdf: 20971520, image: 10485760, total: 262144000, n: 6 };

  return { SB: SB, KEY: KEY, SEC: SEC, LIM: LIM, rpc: rpc, pub: pub, esc: esc, fmt: fmt, dev: dev, me: me, setMe: setMe, cd: cd, sid: SID, ping: ping, event: event, track: track, upload: upload, poster: poster, shrink: shrink, header: header, loginDialog: loginDialog, useSid: useSid, logout: logout, days: days, share: share, base: base, uuid: uuid };
})();
