/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
  if (cats.length === 0)
    return null;

  let cutest = cats[0]
  for (let i = 0; i < cats.length; i++) {
    let cat = cats[i];
    if (cat.cuteness > cutest.cuteness) {
      let cutest = cat;
    }

  }

  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
