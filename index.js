/*
map - looks through entire document, emits each time that word is found
reduce - to a single number (rank)
sort - by rank
returns array of ranked entries

searches
  - javascript
  - programming
  - web development
*/

const dataset = require('./data');

// console.log(dataset);

/*
const rank = query => page => {
  let score = 0;
  const ereg = new RegExp(query,'gi');

  const titleMatches = page.title.match(ereg);
  if( titleMatches !== null ){
    score += titleMatches.length * 2;
  }

  const descriptionMatches = page.short_description.match(ereg);
  if( descriptionMatches !== null ){
    score += descriptionMatches.length;
  }

  const contentMatches = page.content.match(ereg);
  if( contentMatches !== null ){
    score += contentMatches.length;
  }

  return rank;

}; */

const rank = query => page =>
  [{ text:page.title, weight:2 }, {text:page.short_description, weight:1}, {text:page.content, weight:1}]
    .reduce( (score, field) => {
      const matches = field.text.match(new RegExp(query,'gi'));
      if( matches != null ){
        score += matches.length * field.weight;
      }
      return score;
    }, 0);

const searchResults = query => dataset.map( page => ({
    ...page,
    score : rank(query)(page)
  }))
  .filter( page => page.score > 0 )
  .sort((a,b) => b.score - a.score);


const javascriptResults = searchResults('javascript');

console.log(
  javascriptResults.map( ( { title, score } ) => ({ title, score }) )
);

