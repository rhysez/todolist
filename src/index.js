const getSection = (() => {
    'use strict';
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    return { header, main, sidebar, content };
})();

export default getSection

console.log(getSection);
console.log('hello world');