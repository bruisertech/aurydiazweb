/** ==========================================================================
 * Funcionalidad Principal - Aury Díaz & Asociados
 * Documentación:
 * Este archivo contiene toda la lógica interactiva del sitio web.
 * Maneja el menú móvil, cambio de idioma, pestañas (tabs), modales y envío de formularios.
 * ========================================================================== */

/* ═══════════════════ LANGUAGE ═══════════════════ */
function setLang(lang) {
  const body = document.getElementById('body-root');
  body.classList.remove('lang-es','lang-en');
  body.classList.add('lang-' + lang);
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('html-root').lang = lang;
  localStorage.setItem('preferredLang', lang);
}

// Auto-detect language on load
(function(){
  const saved = localStorage.getItem('preferredLang');
  if(saved) { setLang(saved); return; }
  const browser = navigator.language || 'es';
  if(browser.startsWith('en')) setLang('en');
})();

/* ═══════════════════ MOBILE NAV ═══════════════════ */
function toggleMobile() {
  const nav = document.getElementById('mobile-nav');
  const ham = document.getElementById('hamburger');
  nav.classList.toggle('open');
  ham.classList.toggle('open');
}
function closeMobile() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* ═══════════════════ HEADER SCROLL ═══════════════════ */
window.addEventListener('scroll', () => {
  const h = document.querySelector('header');
  h.style.background = window.scrollY > 60 ? 'rgba(4,8,16,0.99)' : 'rgba(8,15,32,0.97)';
});

/* ═══════════════════ TABS ═══════════════════ */
function showTab(tabId, ev) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  if(ev && ev.currentTarget) ev.currentTarget.classList.add('active');
}

/* ═══════════════════ SMOOTH SCROLL ═══════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href === '#') return;
    const target = document.querySelector(href);
    if(target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

/* ═══════════════════ SCROLL REVEAL ═══════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.08});
document.querySelectorAll('.reveal, .area-card, .sol-card, .service-feature, .credential-item, .recurso-card, .nivel').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ═══════════════════ MODAL DATA ═══════════════════ */
const modalData = {
  macro1: {
    badge_es: 'Macro-Área 01 — El Eje Central',
    badge_en: 'Practice Area 01 — Core Expertise',
    title_es: 'Litigios y Resolución de Conflictos',
    title_en: 'Litigation & Conflict Resolution',
    desc_es: 'Defensa estratégica en todas las instancias judiciales colombianas. Liderada directamente por Aury Fernán Díaz Alarcón, esta macro-área es el núcleo de la firma. Especialización penalista de alto nivel, respaldada por más de 10 años de litigio activo en el sistema acusatorio colombiano.',
    desc_en: 'Strategic defense at all levels of Colombian courts. Led directly by Aury Fernán Díaz Alarcón, this is the firm\'s core practice area. Top-level criminal specialization backed by 10+ years of active litigation in the Colombian accusatory system.',
    items_es: ['<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2L1 21h22L12 2zm0 3.516L19.38 19H4.62L12 5.516z"/></svg> Defensa Penal y Sistema Acusatorio — Ley 906/2004','Defensa técnica desde indagación hasta juicio oral','Preacuerdos y negociaciones — Arts. 348-354 CPP','Principio de oportunidad — Art. 324 CPP','Habeas corpus — Ley 1095/2006','Medidas de aseguramiento y sustitución','Delitos económicos: peculado, cohecho, fraude procesal','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M2 21v-2h2V7H2V5h20v2h-2v12h2v2H2zm4-2h2V7H6v12zm4 0h2V7h-2v12zm4 0h2V7h-2v12z"/></svg> Derecho Público y Disciplinario','Defensa ante la Procuraduría — Ley 1952/2019','Responsabilidad del Estado — CPACA Ley 1437/2011','Nulidades de actos administrativos','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Litigio Civil — CGP Ley 1564/2012','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> Justicia Transicional — JEP Ley 1957/2019','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> Representación sin desplazamiento para no residentes'],
    items_en: ['<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2L1 21h22L12 2zm0 3.516L19.38 19H4.62L12 5.516z"/></svg> Criminal Defense & Accusatory System — Law 906/2004','Technical defense from investigation to oral trial','Pre-agreements and negotiations — Arts. 348-354 CPP','Opportunity principle — Art. 324 CPP','Habeas corpus — Law 1095/2006','Precautionary measures and substitution','Economic crimes: embezzlement, bribery, procedural fraud','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M2 21v-2h2V7H2V5h20v2h-2v12h2v2H2zm4-2h2V7H6v12zm4 0h2V7h-2v12zm4 0h2V7h-2v12z"/></svg> Public & Disciplinary Law','Defense before the Procuraduría — Law 1952/2019','State Liability — CPACA Law 1437/2011','Administrative nullities','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Civil Litigation — CGP Law 1564/2012','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> Transitional Justice — JEP Law 1957/2019','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> Representation without travel for non-residents'],
    norm_es: 'Normatividad principal: Constitución Política 1991 · Ley 906 de 2004 (CPP) · Ley 599 de 2000 (CP) · Ley 1952 de 2019 (Disciplinario) · Ley 1437 de 2011 (CPACA) · Ley 1564 de 2012 (CGP) · Ley 1448 de 2011 (Víctimas)',
    norm_en: 'Key regulations: 1991 Political Constitution · Law 906 of 2004 (CPP) · Law 599 of 2000 (CP) · Law 1952 of 2019 (Disciplinary) · Law 1437 of 2011 (CPACA) · Law 1564 of 2012 (CGP) · Law 1448 of 2011 (Victims)'
  },
  macro2: {
    badge_es: 'Macro-Área 02 — Corporativo y Negocios',
    badge_en: 'Practice Area 02 — Corporate & Business',
    title_es: 'Derecho Corporativo y Negocios',
    title_en: 'Corporate Law & Business',
    desc_es: 'Protección jurídica integral para empresas, inversionistas y emprendedores en Colombia. Desde la constitución societaria hasta la defensa penal económica. Incluye la especialidad de Habeas Data Financiero para defensa de historial crediticio ante Datacrédito y TransUnion.',
    desc_en: 'Comprehensive legal protection for companies, investors and entrepreneurs in Colombia. From corporate formation to economic criminal defense. Includes the specialty of Financial Habeas Data for credit history defense before Datacrédito and TransUnion.',
    items_es: ['<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M3 3h18v18H3zM5 5v14h14V5H5zm2 2h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg> Constitución de SAS, S.A. — Ley 1258/2008','Código de Comercio — Decreto 410/1971','Fusiones, escisiones y adquisiciones','Insolvencia empresarial — Ley 1116/2006','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.64-2.1 1.64-1.71 0-2.28-.92-2.36-1.79H8.01c.08 1.61 1.15 2.89 2.89 3.32V19h2.4v-1.66c1.65-.37 2.8-1.38 2.8-2.98 0-2.09-1.67-2.88-3.79-3.36z"/></svg> Estatuto Tributario — Decreto 624/1989','Defensa ante DIAN: sanciones y recursos','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-1.3l-.85-.6C7.8 13.27 7 11.23 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.23-.8 4.27-2.15 5.1z"/></svg> Registro de marcas y patentes — Decisión 486 CAN','Derechos de autor — Ley 23/1982','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg> Habeas Data Financiero — Ley 1581/2012 · Ley 1266/2008','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> Propiedad Horizontal — Ley 675/2001'],
    items_en: ['<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M3 3h18v18H3zM5 5v14h14V5H5zm2 2h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg> Formation of SAS, S.A. — Law 1258/2008','Commercial Code — Decree 410/1971','Mergers, spin-offs and acquisitions','Business insolvency — Law 1116/2006','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.64-2.1 1.64-1.71 0-2.28-.92-2.36-1.79H8.01c.08 1.61 1.15 2.89 2.89 3.32V19h2.4v-1.66c1.65-.37 2.8-1.38 2.8-2.98 0-2.09-1.67-2.88-3.79-3.36z"/></svg> Tax Statute — Decree 624/1989','Defense before DIAN: sanctions and appeals','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-1.3l-.85-.6C7.8 13.27 7 11.23 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.23-.8 4.27-2.15 5.1z"/></svg> Trademark and patent registration — CAN Decision 486','Copyright — Law 23/1982','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg> Financial Habeas Data — Law 1581/2012 · Law 1266/2008','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> Horizontal Property — Law 675/2001'],
    norm_es: 'Normatividad principal: Código de Comercio · Ley 1258/2008 (SAS) · Estatuto Tributario · Ley 1581/2012 (Habeas Data) · Ley 1266/2008 (Habeas Data Financiero) · Decisión 486 CAN (Prop. Industrial) · Ley 675/2001 (PH)',
    norm_en: 'Key regulations: Commercial Code · Law 1258/2008 (SAS) · Tax Statute · Law 1581/2012 (Habeas Data) · Law 1266/2008 (Financial Habeas Data) · CAN Decision 486 (Industrial Property) · Law 675/2001 (HP)'
  },
  macro3: {
    badge_es: 'Macro-Área 03 — Personas y Familias',
    badge_en: 'Practice Area 03 — Persons & Families',
    title_es: 'Derecho de las Personas y Familias',
    title_en: 'Persons & Family Law',
    desc_es: 'Acompañamiento jurídico integral en las decisiones más trascendentes de su vida personal, laboral y familiar. También incluye representación legal para colombianos en el exterior y servicios de insolvencia personal.',
    desc_en: 'Comprehensive legal counsel for the most transcendent decisions in your personal, professional and family life. Also includes legal representation for Colombians abroad and personal insolvency services.',
    items_es: ['<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M20 5h-4.58c-.22-1.72-1.7-3-3.42-3s-3.2 1.28-3.42 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM12 4c.83 0 1.5.67 1.5 1.5S12.83 7 12 7s-1.5-.67-1.5-1.5S11.17 4 12 4zm0 10l-2.5-3h5L12 14z"/></svg> CST — Decreto 2663/1950: contratos laborales','Despido con y sin justa causa, liquidaciones','Acoso laboral — Ley 1010/2006','Fuero sindical, de maternidad, estabilidad reforzada','Pensiones, ARL, EPS y seguridad social','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> Custodia, alimentos, divorcio, adopción','Unión marital de hecho — Ley 54/1990','Violencia intrafamiliar — Ley 294/1996','Sucesiones: intestada y testamentaria','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg> Insolvencia personal — Arts. 531-576 CGP','Negociación de deudas y liquidación patrimonial','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> Colombianos en USA, UK u otros países'],
    items_en: ['<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M20 5h-4.58c-.22-1.72-1.7-3-3.42-3s-3.2 1.28-3.42 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM12 4c.83 0 1.5.67 1.5 1.5S12.83 7 12 7s-1.5-.67-1.5-1.5S11.17 4 12 4zm0 10l-2.5-3h5L12 14z"/></svg> CST — Decree 2663/1950: employment contracts','Termination with and without cause, severance','Workplace harassment — Law 1010/2006','Union, maternity and reinforced employment protections','Pensions, ARL, EPS and social security','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> Custody, alimony, divorce, adoption','Common-law union — Law 54/1990','Domestic violence — Law 294/1996','Estates: intestate and testamentary','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg> Personal insolvency — Arts. 531-576 CGP','Debt negotiation and asset liquidation','<svg class="emoji-svg" viewBox="0 0 24 24" fill="var(--gold)" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> Colombians in USA, UK or other countries'],
    norm_es: 'Normatividad principal: CST Decreto 2663/1950 · Código Civil · Ley 100/1993 (SS) · Ley 1098/2006 (Infancia) · Ley 1257/2008 (Género) · CGP Arts. 531-576 (Insolvencia) · Ley 1997/2019 (Migración)',
    norm_en: 'Key regulations: CST Decree 2663/1950 · Civil Code · Law 100/1993 (SS) · Law 1098/2006 (Childhood) · Law 1257/2008 (Gender) · CGP Arts. 531-576 (Insolvency) · Law 1997/2019 (Migration)'
  }
};

function openModal(id) {
  const data = modalData[id];
  if(!data) { document.getElementById('modal-overlay').classList.add('open'); document.getElementById('modal-content').innerHTML = '<p style="color:white">Contenido próximamente.</p>'; return; }
  const lang = document.body.classList.contains('lang-en') ? 'en' : 'es';
  const items = (lang === 'en' ? data.items_en : data.items_es).map((i,idx) => {
    const featured = idx < 2;
    return `<li class="${featured?'featured':''}">${i}</li>`;
  }).join('');
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-badge">${data['badge_'+lang]}</div>
    <div class="modal-title">${data['title_'+lang]}</div>
    <div class="modal-desc">${data['desc_'+lang]}</div>
    <ul class="modal-list">${items}</ul>
    <div class="modal-norm"><h5>${lang==='es'?'Marco Normativo':'Legal Framework'}</h5><p>${data['norm_'+lang]}</p></div>
    <a href="#contacto" class="modal-cta" onclick="closeModal()">${lang==='es'?'Consultar este Caso →':'Consult this Case →'}</a>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalIf(e) { if(e.target === document.getElementById('modal-overlay')) closeModal(); }

/* ═══════════════════ POLICIES ═══════════════════ */
const policyContent = {
  privacidad: {
    title: 'Política de Privacidad y Tratamiento de Datos Personales',
    date: 'Última actualización: Enero 2025',
    content: `
      <h3>1. Responsable del Tratamiento</h3>
      <p>Aury Díaz & Asociados, liderado por Aury Fernán Díaz Alarcón, con domicilio en la ciudad de Santiago de Cali, Valle del Cauca, Colombia. Correo: fernan@aurydiaz.com</p>
      <h3>2. Fundamento Legal</h3>
      <p>Esta política se rige por la <strong>Ley 1581 de 2012</strong> de Protección de Datos Personales, el <strong>Decreto 1377 de 2013</strong> y demás normas concordantes. Para clientes internacionales, también se consideran los principios del <strong>GDPR</strong> (Reglamento Europeo) y las regulaciones aplicables en EE.UU.</p>
      <h3>3. Datos que Recopilamos</h3>
      <p>Recopilamos únicamente los datos necesarios para prestar el servicio jurídico: nombre, teléfono, correo electrónico, país de residencia y descripción del asunto jurídico. No recopilamos datos sensibles sin consentimiento expreso.</p>
      <h3>4. Finalidad del Tratamiento</h3>
      <ul><li>Prestación de servicios jurídicos contratados</li><li>Comunicación sobre el estado de los asuntos</li><li>Envío de información jurídica relevante (con opción de cancelación)</li><li>Cumplimiento de obligaciones legales profesionales</li></ul>
      <h3>5. Secreto Profesional</h3>
      <p>Toda la información proporcionada está protegida por el <strong>secreto profesional del abogado</strong>, conforme al artículo 28 del Código Disciplinario del Abogado. Esta protección es absoluta e inviolable.</p>
      <h3>6. Derechos del Titular</h3>
      <p>Usted tiene derecho a: conocer, actualizar, rectificar, suprimir sus datos y revocar la autorización. Puede ejercerlos escribiendo a fernan@aurydiaz.com.</p>
      <h3>7. Habeas Data</h3>
      <p>Para solicitar la baja o modificación de sus datos, envíe comunicación escrita a fernan@aurydiaz.com. Responderemos en un plazo máximo de 15 días hábiles conforme a la Ley 1581 de 2012.</p>
    `
  },
  terminos: {
    title: 'Términos de Uso del Sitio Web',
    date: 'Última actualización: Enero 2025',
    content: `
      <h3>1. Naturaleza del Contenido</h3>
      <p>El contenido de este sitio web tiene carácter <strong>informativo y educativo</strong>. No constituye asesoría jurídica. Cada caso tiene sus propias particularidades y requiere análisis profesional individualizado.</p>
      <h3>2. Relación Abogado-Cliente</h3>
      <p>La relación profesional abogado-cliente solo se establece mediante contrato de prestación de servicios jurídicos debidamente suscrito. El formulario de contacto no crea dicha relación.</p>
      <h3>3. Propiedad Intelectual</h3>
      <p>Todos los contenidos del sitio (textos, diseño, marca Aury Díaz & Asociados) son propiedad exclusiva de Aury Fernán Díaz Alarcón. Queda prohibida su reproducción sin autorización expresa.</p>
      <h3>4. Limitación de Responsabilidad</h3>
      <p>Aury Díaz & Asociados no se responsabiliza por decisiones tomadas con base en el contenido informativo del sitio sin haber obtenido asesoría jurídica formal y personalizada.</p>
      <h3>5. Ley Aplicable</h3>
      <p>Este sitio se rige por las leyes de la República de Colombia. Para asuntos con elementos internacionales, se aplicarán los tratados y convenios internacionales vigentes.</p>
    `
  },
  aviso: {
    title: 'Aviso Legal',
    date: 'Enero 2025',
    content: `
      <h3>Identificación del Titular</h3>
      <p><strong>Razón Social:</strong> Aury Díaz & Asociados<br><strong>Propietario:</strong> Aury Fernán Díaz Alarcón<br><strong>Tarjeta Profesional:</strong> Abogado inscrito ante el Consejo Superior de la Judicatura<br><strong>Domicilio:</strong> Santiago de Cali, Valle del Cauca, Colombia<br><strong>Contacto:</strong> fernan@aurydiaz.com</p>
      <h3>Ejercicio Profesional</h3>
      <p>El Dr. Aury Fernán Díaz Alarcón ejerce la abogacía de manera independiente, regulado por la <strong>Ley 1123 de 2007</strong> (Código Disciplinario del Abogado) y sometido a la ética y deontología profesional.</p>
      <h3>Conflicto de Intereses</h3>
      <p>Aury Díaz & Asociados no ha estado ni está vinculado a ninguna entidad pública o privada que pueda generar conflictos de interés. Toda representación se realiza con plena independencia.</p>
      <h3>Confidencialidad</h3>
      <p>El secreto profesional es un deber irrenunciable del abogado. Toda información recibida de clientes o potenciales clientes es estrictamente confidencial.</p>
    `
  },
  cookies: {
    title: 'Política de Cookies',
    date: 'Enero 2025',
    content: `
      <h3>¿Qué son las Cookies?</h3>
      <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos permiten mejorar su experiencia de navegación.</p>
      <h3>Cookies que Utilizamos</h3>
      <ul>
        <li><strong>Cookies técnicas (esenciales):</strong> Necesarias para el funcionamiento básico del sitio. No requieren consentimiento.</li>
        <li><strong>Cookie de idioma:</strong> Almacena su preferencia de idioma (español/inglés). Se guarda en localStorage.</li>
        <li><strong>Cookies de análisis:</strong> Si se activan, nos ayudan a entender cómo se usa el sitio (Google Analytics). Requieren su consentimiento.</li>
      </ul>
      <h3>Base Legal</h3>
      <p>La gestión de cookies se realiza conforme a la <strong>Ley 1581 de 2012</strong> y los estándares internacionales aplicables.</p>
      <h3>Gestión de Cookies</h3>
      <p>Puede configurar su navegador para bloquear o eliminar cookies. Esto puede afectar la funcionalidad del sitio. Para más información sobre gestión de cookies, visite la ayuda de su navegador.</p>
      <h3>Contacto</h3>
      <p>Para consultas sobre cookies: fernan@aurydiaz.com</p>
    `
  }
};

function openPolicy(id) {
  const data = policyContent[id];
  if(!data) return;
  document.getElementById('policies-content').innerHTML = `
    <h2>${data.title}</h2>
    <p class="policy-date">${data.date}</p>
    ${data.content}
  `;
  document.getElementById('policies-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePolicies() {
  document.getElementById('policies-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function closePoliciesIf(e) { if(e.target === document.getElementById('policies-modal')) closePolicies(); }

/* ═══════════════════ ENVÍO DE FORMULARIO ═══════════════════ */
function submitForm() {
  const nombre = document.getElementById('f-nombre').value.trim();
  const tel = document.getElementById('f-tel').value;
  const email = document.getElementById('f-email').value.trim();
  const pais = document.getElementById('f-pais').value;
  const area = document.getElementById('f-area').value;
  const caso = document.getElementById('f-caso').value.trim();
  const privacidad = document.getElementById('privacidad').checked;
  const lang = document.body.classList.contains('lang-en') ? 'en' : 'es';

  if(!nombre || !email || !area || !caso || !tel) {
    alert(lang === 'es' ? 'Por favor complete todos los campos obligatorios (*)' : 'Please fill in all required fields (*)');
    return;
  }
  if(!privacidad) {
    alert(lang === 'es' ? 'Debe aceptar la Política de Privacidad para continuar.' : 'You must accept the Privacy Policy to continue.');
    return;
  }

  // Cambiar el texto del botón mientras se envía
  const submitBtn = document.querySelector('.btn-submit');
  const originalBtnContent = submitBtn.innerHTML;
  submitBtn.innerHTML = lang === 'es' ? 'Enviando...' : 'Sending...';
  submitBtn.disabled = true;

  // Enviar los datos mediante AJAX usando Web3Forms
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        access_key: '485428c1-8039-4ade-8980-2e25b7cfabe9',
        Nombre: nombre,
        Teléfono: tel,
        Email: email,
        País: pais,
        Área: area,
        Caso: caso,
        subject: `Consulta Jurídica — ${area} — ${nombre}`,
        from_name: nombre,
        replyto: email
    })
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      // Mostrar mensaje de éxito
      document.getElementById('form-content').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else {
      console.error(json);
      alert(lang === 'es' ? 'Hubo un error al enviar el formulario: ' + json.message : 'There was an error sending the form: ' + json.message);
      submitBtn.innerHTML = originalBtnContent;
      submitBtn.disabled = false;
    }
  })
  .catch(error => {
    console.error('Error al enviar el formulario:', error);
    alert(lang === 'es' ? 'Hubo un error de red al enviar el formulario. Por favor, inténtelo de nuevo más tarde.' : 'There was a network error sending the form. Please try again later.');
    submitBtn.innerHTML = originalBtnContent;
    submitBtn.disabled = false;
  });
}

/* ═══════════════════ KEYBOARD ESC ═══════════════════ */
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') { closeModal(); closePolicies(); }
});

/* ═══════════════════ PROTECCIÓN DEL CÓDIGO Y CONTENIDO ═══════════════════ */
// Deshabilitar el clic derecho (menú contextual)
document.addEventListener('contextmenu', e => e.preventDefault());

// Deshabilitar atajos de teclado para herramientas de desarrollo y copiar (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+C)
document.addEventListener('keydown', e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
    (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'c' || e.key === 'C' || e.key === 's' || e.key === 'S'))
  ) {
    e.preventDefault();
  }
});

// Deshabilitar arrastre de imágenes y enlaces
document.addEventListener('dragstart', e => e.preventDefault());

// Efecto Matrix Anti-DevTools
(function detectDevTools() {
  let devtoolsOpen = false;

  function executeMatrix() {
    if (devtoolsOpen) return;
    devtoolsOpen = true;

    // Destruir el contenido real
    document.body.innerHTML = '';
    document.head.innerHTML = '';
    document.documentElement.style.backgroundColor = '#000';
    document.body.style.backgroundColor = '#000';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';

    // Crear el canvas
    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Ajustar tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(draw, 33);
  }

  // Detectar abriendo DevTools a través de la diferencia de tiempo que genera "debugger"
  setInterval(() => {
    const start = performance.now();
    debugger;
    if (performance.now() - start > 100) {
      executeMatrix();
    }
  }, 1000);

})();

function toggleFabMenu() {
  const menu = document.getElementById('fab-menu');
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
}

function closeFabMenu() {
  const menu = document.getElementById('fab-menu');
  menu.classList.remove('active');
}

// Close FAB menu when clicking outside
document.addEventListener('click', function(event) {
  const fabContainer = document.querySelector('.fab-container');
  if (fabContainer && !fabContainer.contains(event.target)) {
    closeFabMenu();
  }
});
