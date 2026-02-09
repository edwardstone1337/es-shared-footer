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
    <a class="es-footer-parent" href="https://edwardstone.design">Edward Stone</a>
    <nav aria-label="More from Edward Stone">
      <ul class="es-footer-links">
        ${listItems}
      </ul>
    </nav>
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
