const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const menuBtn = $('.menu-toggle');
const nav = $('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

const year = $('#year');
if (year) year.textContent = new Date().getFullYear();

const chips = $$('.chip[data-filter]');
const cards = $$('.product-card[data-category]');
const search = $('#catalogSearch');
const empty = $('.empty-state');
let activeFilter = 'tutti';

function normalize(value){ return (value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
function applyCatalog(){
  const term = normalize(search?.value || '');
  let shown = 0;
  cards.forEach(card => {
    const category = card.dataset.category;
    const haystack = normalize(card.innerText + ' ' + (card.dataset.keywords || ''));
    const filterOk = activeFilter === 'tutti' || category.includes(activeFilter) || (card.dataset.keywords || '').includes(activeFilter);
    const termOk = !term || haystack.includes(term);
    const visible = filterOk && termOk;
    card.classList.toggle('is-hidden', !visible);
    if (visible) shown++;
  });
  if (empty) empty.style.display = shown ? 'none' : 'block';
}
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  activeFilter = chip.dataset.filter;
  applyCatalog();
}));
if (search) search.addEventListener('input', applyCatalog);
applyCatalog();

