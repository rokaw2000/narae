// naræ International Foundation — shared footer
// Edit this file once and all pages update automatically.

document.addEventListener('DOMContentLoaded', function () {
  var footer = document.querySelector('footer.site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <div style="font-size:0.84rem; font-weight:700; font-family:Arial,Helvetica,sans-serif; color:var(--muted);">
          © 2026 naræ International Foundation. All rights reserved.
        </div>
        <div style="margin-top:5px; font-size:0.74rem; font-weight:400; font-family:Arial,Helvetica,sans-serif; color:var(--muted); opacity:0.75; line-height:1.6;">
          naræ International Foundation is a Maryland-based nonprofit.<br>
          Federally recognized 501(c)(3) nonprofit organization.<br>
          Donations are tax-deductible as allowed by law.
        </div>
      </div>
      <div class="footer-links" style="justify-content:flex-end; text-align:right;">
        <a href="about.html">About <span class="brandmark brand-inline"><span class="logo-word">naræ</span><span class="brand-plus" aria-hidden="true"><span class="arm arm-top"></span><span class="arm arm-right"></span><span class="arm arm-bottom"></span><span class="arm arm-left"></span></span></span></a>
        <a href="program.html">How <span class="brandmark brand-inline"><span class="logo-word">naræ</span><span class="brand-plus" aria-hidden="true"><span class="arm arm-top"></span><span class="arm arm-right"></span><span class="arm arm-bottom"></span><span class="arm arm-left"></span></span></span> Works</a>
        <a href="community.html">Ways to Be Part</a>
        <a href="founder.html">Founder</a>
        <a href="leadership.html">Leadership</a>
      </div>
    </div>
  `;
});
