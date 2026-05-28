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
    card.style.display = visible ? '' : 'none';
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

const mailForms = $$('[data-mail-form]');
mailForms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const recipient = form.dataset.recipient || 'info@labottegaglutenfree.ch';
    const subject = 'Richiesta dal sito - La Bottega Gluten Free';
    const body = ['Nome: ' + (data.get('Nome') || ''),'Email: ' + (data.get('Email') || ''),'Telefono: ' + (data.get('Telefono') || ''),'','Messaggio:',data.get('Messaggio') || ''].join('\n');
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
