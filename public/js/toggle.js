 // Declare our element variables
 const button = document.querySelector('.menu_btn');
 const menu = document.querySelector('nav ul');

 // function statement
 function eventHandler() {
   // console.log('Menu is toggled');

   // This line of code runs only when `button` is clicked. The 'visible' class will the removed/added (or toggled) each time this event handler is invoked
   menu.classList.toggle('visible');
 }

 // The code in the `eventHandler` function (defined above) will be run (or "invoked") each time `button` is clicked
 button.addEventListener('click', eventHandler);