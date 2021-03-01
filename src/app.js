import { sum } from './math';

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#app');
    el.innerHTML = `1 + 2 = ${sum(1, 2)}`;
})