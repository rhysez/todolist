// not exporting - find out why
export const getSection = (() => {
    const header = document.getElementById('header')
    const main = document.getElementById('main')
    const sidebar = document.getElementById('sidebar')
    const content = document.getElementById('content')
    return { header, main, sidebar, content }
})();

console.log('Hello World');
