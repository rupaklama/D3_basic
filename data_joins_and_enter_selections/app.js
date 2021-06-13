var quotes = [
  {
    quote: 'I see dead people.',
    movie: 'The Sixth Sense',
    year: 1999,
    rating: 'PG-13',
  },
  {
    quote: 'May the force be with you.',
    movie: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
    rating: 'PG',
  },
  {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: 'Dirty Harry',
    year: 1971,
    rating: 'R',
  },
  {
    quote: "You had me at 'hello.'",
    movie: 'Jerry Maguire',
    year: 1996,
    rating: 'R',
  },
  {
    quote: 'Just keep swimming. Just keep swimming. Swimming, swimming, swiming.',
    movie: 'Finding Nemo',
    year: 2003,
    rating: 'G',
  },
];

// select ul

d3.select('#quotes')
  // add style on ul
  .style('list-style', 'none')

  // select li elements
  .selectAll('li')

  // data binding - to attach into DOM element
  // add our array data with data method into li elements
  .data(quotes)

  // enter method gets a data
  .enter()
  .append('li')
  .text(function (d) {
    return d.quote + ' ' + d.movie + ' ' + d.year;
  })
  .style('margin', '20px')
  .style('padding', '20px')
  .style('font-size', function (d) {
    return d.quote.length < 25 ? '2em' : '1em';
  });
