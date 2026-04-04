// naræ International Foundation — shared footer
// Edit this file once and all pages update automatically.

document.addEventListener('DOMContentLoaded', function () {
  var footer = document.querySelector('footer.site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <style>
      .footer-legal { font-size:0.74rem; font-weight:400; font-family:Arial,Helvetica,sans-serif; color:var(--muted); opacity:0.75; line-height:1.6; margin-top:5px; }
      .footer-copyright { font-size:0.84rem; font-weight:700; font-family:Arial,Helvetica,sans-serif; color:var(--muted); }
      @media (min-width: 761px) {
        .footer-links-wrap { justify-content:flex-end !important; text-align:right; }
      }
      @media (max-width: 760px) {
        .footer-links-wrap { justify-content:flex-start !important; margin-top:14px; }
        .footer-inner { flex-direction:column !important; align-items:flex-start !important; }
      }
    </style>
    <div class="footer-inner">
      <div>
        <div class="footer-copyright">© 2026 naræ International Foundation. All rights reserved.</div>
        <div class="footer-legal">
          naræ International Foundation is a Maryland-based nonprofit.<br>
          Federally recognized 501(c)(3) nonprofit organization.<br>
          Donations are tax-deductible as allowed by law.
        </div>
      </div>
      <div class="footer-links footer-links-wrap">
        <a href="about.html">About <span class="brandmark brand-inline"><span class="logo-word">naræ</span><span class="brand-plus" aria-hidden="true"><span class="arm arm-top"></span><span class="arm arm-right"></span><span class="arm arm-bottom"></span><span class="arm arm-left"></span></span></span></a>
        <a href="program.html">How <span class="brandmark brand-inline"><span class="logo-word">naræ</span><span class="brand-plus" aria-hidden="true"><span class="arm arm-top"></span><span class="arm arm-right"></span><span class="arm arm-bottom"></span><span class="arm arm-left"></span></span></span> Works</a>
        <a href="community.html">Ways to Be Part</a>
        <a href="founder.html">Founder</a>
        <a href="leadership.html">Leadership</a>
      </div>
    </div>
  `;
});
