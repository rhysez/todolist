const getSection = (() => {
    'use strict';

    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    const home = document.getElementById('home');
    const today = document.getElementById('today');
    const week = document.getElementById('week');
    const groups = document.getElementById('groups');
    const notes = document.getElementById('notes');
    return { 
            header, 
            main, 
            sidebar, 
            content,
            home,
            today,
            week,
            groups,
            notes 
           };
})();

export default getSection

console.log(getSection);