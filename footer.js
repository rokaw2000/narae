// naræ International Foundation — shared footer
// Edit this file once and all pages update automatically.

document.addEventListener('DOMContentLoaded', function () {
  var footer = document.querySelector('footer.site-footer');
  if (!footer) return;

  // Detect current page
  var current = window.location.pathname.split('/').pop() || 'index.html';
  if (current === '') current = 'index.html';

  // All pages with full brandmark HTML
  var pages = [
    { href: 'index.html',     html: 'Home' },
    { href: 'about.html',     html: 'About <span class="brandmark brand-inline"><span class="logo-word">nar\u00e6</span><span class="brand-plus" aria-hidden="true"><span class="arm arm-top"></span><span class="arm arm-right"></span><span class="arm arm-bottom"></span><span class="arm arm-left"></span></span></span>' },
    { href: 'program.html',   html: 'How <span class="brandmark brand-inline"><span class="logo-word">nar\u00e6</span><span class="brand-plus" aria-hidden="true"><span class="arm arm-top"></span><span class="arm arm-right"></span><span class="arm arm-bottom"></span><span class="arm arm-left"></span></span></span> Works' },
    { href: 'community.html', html: 'Ways to Be Part' },
    { href: 'founder.html',   html: 'Founder' },
    { href: 'leadership.html',html: 'Leadership' }
  ];

  // Build links — exclude current page
  var links = pages
    .filter(function(p) { return p.href !== current; })
    .map(function(p) { return '<a href="' + p.href + '">' + p.html + '</a>'; })
    .join('');

  var css =
    '<style>' +
      '.footer-inner{display:flex!important;align-items:center!important;justify-content:space-between!important;flex-wrap:wrap;gap:16px;}' +
      '.footer-copyright{font-size:0.84rem;font-weight:700;font-family:Arial,Helvetica,sans-serif;color:var(--muted);}' +
      '.footer-legal{font-size:0.72rem;font-weight:400;font-family:Arial,Helvetica,sans-serif;color:var(--muted);opacity:0.65;line-height:1.6;margin-top:4px;}' +
      '@media(max-width:760px){' +
        '.footer-inner{flex-direction:column!important;align-items:flex-start!important;}' +
        '.footer-links{justify-content:flex-start!important;margin-top:14px;gap:12px 16px!important;}' +
      '}' +
    '</style>';

  var html =
   '<div class="footer-inner" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">' +
      '<div>' +
        '<div class="footer-copyright">\u00a9 2026 nar\u00e6 International Foundation. All rights reserved.</div>' +
        '<div class="footer-legal">Maryland-based nonprofit &middot; Federally recognized 501(c)(3) &middot; Donations are tax-deductible as allowed by law.</div>' +
      '</div>' +
      '<div class="footer-links" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:22px;margin-left:auto;">' + links + '</div>' +
    '</div>';

  footer.innerHTML = css + html;
});
