function findShortestString(arr) {
  let x = arr[0];
  arr.forEach(i =>{
    if(i.length < x.length){
      i=x
    }
  })
  return x
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);
}

/*
take a value from the index, can start at 0
set comparison i < x
if true, i = x
iterate over each element
*/ 

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
