/*
 * This will Replace escape all the html
 * tags to display them without rendering them.
 *
 * @params element
 * @return escaped version of the innerHtml contained by element.
 */
const escapeHTML = function (element) {
  return element
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
};

// -------------------------------------------
// List of tags that contain the html code.
// -------------------------------------------
// Currently I have only one but can have
// more in future.
const listOfTags = ['pre'];

listOfTags.forEach((tag) => {
  // Find and replace all the tags inside code element and escape them.
  document.querySelectorAll(tag).forEach((element) => {
    element.innerHTML = escapeHTML(element.innerHTML);
  });
});

/*
 * This Functionality is only for the mobile and tablets.
 * It has toggle button that, when clicked, will hide/show
 * the menu.
 */
const menuBtn = document.querySelector('#mobile-menu-btn');

// Default menu state is hidden
let showMenu = false;
menuBtn.addEventListener('click', () => {
  if (showMenu) {
    showMenu = false;
    document.querySelector('#navbar ul').style = 'display: none;';
  } else {
    showMenu = true;
    document.querySelector('#navbar ul').style = 'display: block;';
  }
});
