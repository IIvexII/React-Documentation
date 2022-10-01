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
const listOfTags = ['code', 'pre'];

listOfTags.forEach((tag) => {
  // Find and replace all the tags inside code element and escape them.
  document.querySelectorAll(tag).forEach((element) => {
    element.innerHTML = escapeHTML(element.innerHTML);
  });
});
