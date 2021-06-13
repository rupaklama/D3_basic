// select form element & add event handler
d3.select('#new-note').on('submit', function () {
  d3.event.preventDefault();

  // select input element
  let input = d3.select('input');

  // select div to add notes
  d3.select('#notes')
    // add element to insert text
    .append('p')
    // add class
    .classed('note', true)
    // get input text
    .text(input.property('value'));

  // clear input
  input.property('value', '');
});
