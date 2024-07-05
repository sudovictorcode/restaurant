const searchicon1 = document.querySelector('#searchicon1')
const srchicon1 = document.querySelector('#srchicon1')
const search1 = document.querySelector('#search-input1')
const searchinput2 = document.querySelector('#searchinput2')
const search2 = document.querySelector('#search2')

searchicon1.addEventListener('click', function () {
    search1.style.display = 'flex';
    searchicon1.style.display = 'none'
})

srchicon1.addEventListener('click', function () {
    searchinput2.style.display = 'flex';
    srchicon1.style.display ='none'
    
})

const bar = document.querySelector('.open');
const close = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        close.style.display = 'flex';
    },200);
    headerbar.style.right = '0%';
    bar.style.display = 'none'
})

close.addEventListener('click', function(){
    close.style.display = 'none'
    bar.style.display = 'block'
    headerbar.style.right = '-100%'
})