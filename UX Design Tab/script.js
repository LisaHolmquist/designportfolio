
let navigationBar = document.querySelector('burger-menu');
let navigationToggle = document.querySelector('mob-nav');

navigationToggle.addEventListener('click', function(event)
{
    navigationBar.classList.toggle('active')
});
