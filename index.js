//Menu opening and closing 
var MenuItems=document.getElementById("MenuItems");
MenuItems.style.maxHeight="0px";
function menutoggle(){
    if(MenuItems.style.maxHeight=="0px")
{
     MenuItems.style.maxHeight="200px";
}

else{
     MenuItems.style.maxHeight="0px";
}
}
//Preview different images in single product page 
var product1img = document.getElementById("product1img");
var small1img = document.getElementsByClassName("small1img");

small1img[0].onclick = function()
{
     product1img.src=small1img[0].src;
}
small1img[1].onclick = function()
{
     product1img.src=small1img[1].src;
}
small1img[2].onclick = function()
{
     product1img.src=small1img[2].src;
}
small1img[3].onclick = function()
{
     product1img.src=small1img[3].src;
}
// Select the dark mode toggle button (add it in your HTML)
const toggleButton = document.getElementById('dark-mode-toggle');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme on load
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});
 