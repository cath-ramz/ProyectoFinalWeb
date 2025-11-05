// categorias.js
function initCategorias() {
  const panel = document.getElementById('categories-panel');
  const hamb  = document.querySelector('.henl-menu');

  if (!panel || !hamb) return;

  // Toggle panel desde el botón del header
  hamb.addEventListener('click', (e) => {
    e.preventDefault();
    const willOpen = !panel.classList.contains('open');
    panel.classList.toggle('open', willOpen);
    panel.setAttribute('aria-hidden', String(!willOpen));
    hamb.setAttribute('aria-expanded', String(willOpen));
  });

  // Acordeón categorías → subcategorías
  const categoryButtons = panel.querySelectorAll('.category-btn');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.target;
      // Sin subcategorías: solo parpadeo visual opcional
      if (!id) {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        setTimeout(()=> btn.classList.remove('active'), 200);
        return;
      }

      const target = panel.querySelector('#' + id);

      // Cerrar otros
      panel.querySelectorAll('.subcategory-list.open').forEach(l => {
        if (l !== target) l.classList.remove('open');
      });
      categoryButtons.forEach(b => {
        if (b !== btn) b.classList.remove('active');
      });

      // Alternar actual
      const opening = !target.classList.contains('open');
      target.classList.toggle('open', opening);
      btn.classList.toggle('active', opening);
    });
  });
}
