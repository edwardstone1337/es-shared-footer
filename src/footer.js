/**
 * es-shared-footer — shared footer component for Edward Stone projects.
 * Load as ES module: <script type="module" src="https://footer.edwardstone.design/src/footer.js"></script>
 * Place <div id="es-footer" data-project="project-id"></div> where the footer should appear.
 */

const PROJECTS = [
  { id: 'flip7', name: 'Flip 7', url: 'https://flip7scorecard.com' },
  { id: 'scp', name: 'SCP Reader', url: 'https://scp-reader.co' },
  { id: 'fairshare', name: 'Fair Share', url: 'https://fairsharecalculator.com' },
  { id: 'lostcities', name: 'Lost Cities', url: 'https://lostcitiesscorecalculator.com' },
  { id: 'kaomoji', name: 'Kaomoji', url: 'https://kaomoji.click' },
];

const LOGO_SVG = `<svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(-180 40 40)" fill="black"/>
<g clip-path="url(#clip0_815_266)">
<path d="M17.5356 4.99999C27.6155 2.01097 38.8338 11.6176 33.7466 26.1765C35.0001 19.5588 25.0997 16.3646 16.4009 13.8235C11.1332 12.2847 7.45569 7.98901 17.5356 4.99999Z" fill="url(#paint0_linear_815_266)"/>
<path d="M22.4644 35C12.3845 37.989 1.16624 28.3823 6.25343 13.8235C4.99994 20.4412 14.9003 23.6353 23.5991 26.1765C28.8668 27.7153 32.5443 32.011 22.4644 35Z" fill="url(#paint1_linear_815_266)" fill-opacity="0.5"/>
<path d="M22.4644 35C12.3845 37.989 1.16624 28.3823 6.25343 13.8235C4.99994 20.4412 14.9003 23.6353 23.5991 26.1765C28.8668 27.7153 32.5443 32.011 22.4644 35Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_815_266" x1="11.5176" y1="9.51703" x2="36.2755" y2="24.2457" gradientUnits="userSpaceOnUse">
<stop stop-color="#FC8787"/>
<stop offset="1" stop-color="#FDA1A1"/>
</linearGradient>
<linearGradient id="paint1_linear_815_266" x1="16.9063" y1="13.8235" x2="16.9063" y2="35.5455" gradientUnits="userSpaceOnUse">
<stop stop-color="#FC8787"/>
<stop offset="1" stop-color="#FDA1A1"/>
</linearGradient>
<clipPath id="clip0_815_266">
<rect x="35" y="35" width="30" height="30" rx="15" transform="rotate(-180 35 35)" fill="white"/>
</clipPath>
</defs>
</svg>`;

function init() {
  const host = document.getElementById('es-footer');
  if (!host) return;

  const shadow = host.attachShadow({ mode: 'open' });

  const cssHref = new URL('footer.css', import.meta.url).href;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssHref;
  shadow.appendChild(link);

  const currentProject = (host.getAttribute('data-project') || '').trim().toLowerCase();

  const listItems = PROJECTS.map((p) => {
    const isActive = p.id === currentProject;
    if (isActive) {
      return `<li class="es-footer-link es-footer-link--active"><span>${escapeHtml(p.name)}</span></li>`;
    }
    return `<li class="es-footer-link"><a href="${escapeHtml(p.url)}">${escapeHtml(p.name)}</a></li>`;
  }).join('');

  const footerHtml = `
<footer>
  <div class="es-footer-inner">
    <a class="es-footer-parent" href="https://edwardstone.design">
      <span class="es-footer-logo">${LOGO_SVG}</span>
      Edward Stone
    </a>
    <nav aria-label="More from Edward Stone">
      <ul class="es-footer-links">
        ${listItems}
      </ul>
    </nav>
    <p class="es-footer-copyright">© ${new Date().getFullYear()} Edward Stone</p>
  </div>
</footer>`;

  const wrap = document.createElement('div');
  wrap.className = 'es-footer-root';
  wrap.innerHTML = footerHtml;
  shadow.appendChild(wrap);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

init();
