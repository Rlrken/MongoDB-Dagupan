/* =====================
   4.1 Access DOM Elements
   ===================== */

const output     = document.getElementById('output');
const clickBtn   = document.getElementById('click-btn');
const textInput  = document.getElementById('text-input');
const colorSelect = document.getElementById('color-select');
const demoForm   = document.getElementById('demo-form');
const formInput  = document.getElementById('form-input');
const keyupInput = document.getElementById('keyup-input');
const hoverBox   = document.getElementById('hover-box');
const focusInput = document.getElementById('focus-input');

/* Helper: update the output display */
const showOutput = (message) => {
    output.innerHTML = message;
};

/* =====================
   4.2 Click Event
   ===================== */

clickBtn.addEventListener('click', () => {
    showOutput('🖱️ <strong>click</strong> — Button was clicked!');
});

/* =====================
   4.3 Input & Change Events
   ===================== */

// input event: fires on every keystroke
textInput.addEventListener('input', () => {
    showOutput(`⌨️ <strong>input</strong> — You typed: "${textInput.value}"`);
});

// change event: fires when selection is finalized
colorSelect.addEventListener('change', () => {
    const selected = colorSelect.value;
    showOutput(`🎨 <strong>change</strong> — Color selected: "${selected}"`);
    output.style.color = selected || '#00d4aa';
});

/* =====================
   4.4 Submit Event
   ===================== */

demoForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload
    const name = formInput.value.trim();
    showOutput(`📋 <strong>submit</strong> — Form submitted! Name: "${name}"`);
    demoForm.reset();
});

/* =====================
   4.5 Keyup Event
   ===================== */

keyupInput.addEventListener('keyup', (event) => {
    showOutput(`🔑 <strong>keyup</strong> — Last key pressed: <strong>"${event.key}"</strong>`);
});

/* =====================
   4.6 Mouseover & Mouseout Events
   ===================== */

hoverBox.addEventListener('mouseover', () => {
    hoverBox.classList.add('hovered');
    hoverBox.textContent = '✅ Mouse is inside!';
    showOutput('🟢 <strong>mouseover</strong> — Mouse entered the hover box.');
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.classList.remove('hovered');
    hoverBox.textContent = 'Hover over me!';
    showOutput('🔴 <strong>mouseout</strong> — Mouse left the hover box.');
});

/* =====================
   4.7 Focus & Blur Events
   ===================== */

focusInput.addEventListener('focus', () => {
    focusInput.classList.add('focused');
    showOutput('🔵 <strong>focus</strong> — Input field is now focused.');
});

focusInput.addEventListener('blur', () => {
    focusInput.classList.remove('focused');
    showOutput('⚪ <strong>blur</strong> — Input field lost focus.');
});