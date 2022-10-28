/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";

  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function toggleDropdown() {
    document.getElementById("header-dropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.header__dropdown__btn')) {
      var dropdowns = document.getElementsByClassName("header__dropdown__content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.onload = function() {
    document.getElementsByClassName('header__dropdown__btn')[0].addEventListener('click', toggleDropdown);
  }
} )();
