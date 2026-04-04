// naræ International Foundation — shared footer
// Edit this file once and all pages update automatically.

document.addEventListener('DOMContentLoaded', function () {
  var footer = document.querySelector('footer.site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        © 2026 naræ International Foundation. All rights reserved.<br><br>
        naræ International Foundation is a Maryland-based nonprofit.
        Federally recognized 501(c)(3) nonprofit organization.
        Donations are tax-deductible as allowed by law.
      </div>
      <div class="footer-links">
        <a href="about.html">About <span class="brandmark brand-inline"><span class="logo-word">naræ</span><span class="brand-plus" aria-hidden="true"><span class="arm arm-top"></span><span class="arm arm-right"></span><span class="arm arm-bottom"></span><span class="arm arm-left"></span></span></span></a>
        <a href="program.html">How <span class="brandmark brand-inline"><span class="logo-word">naræ</span><span class="brand-plus" aria-hidden="true"><span class="arm arm-top"></span><span class="arm arm-right"></span><span class="arm arm-bottom"></span><span class="arm arm-left"></span></span></span> Works</a>
        <a href="community.html">Ways to Be Part</a>
        <a href="founder.html">Founder</a>
        <a href="leadership.html">Leadership</a>
      </div>
    </div>
  `;
});
