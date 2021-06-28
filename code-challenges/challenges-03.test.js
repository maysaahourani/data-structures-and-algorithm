'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function called addTwo that takes in an array and adds two to every value using a for loop. Place the new value in a new array. Return the new array.
------------------------------------------------------------------------------------------------ */

const addTwo = (arr) => {
  let newArray=[];
  for (let i=0; i<arr.length;i++)
  {
    newArray.push(arr[i]+2);
  }
  return newArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named typeNum that, given an array as input, uses filter to return an array containing only the numbers.
For example, typeNum([1, 'bob' ,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

const typeNum = (arr) => {
  let newArray=arr.filter((element)=>
  {  
    if (typeof element !== 'string')
    return element;
  })
  return newArray;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named containsAnd that, given an array of strings as input, uses filter to return an array containing only strings that contain 'and' within the string.
For example, containsAnd(['panda', 'ran', 'and']) returns ['panda', 'and'].
------------------------------------------------------------------------------------------------ */


  const containsAnd = (arr) => {
   
    let newArr=arr.filter(element => element.includes("and"));
    return newArr;
  };


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.
For example, oddValues([1,2,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

const oddValues = (arr) => {
  // let newArray=[];
 
  // let newArray=arr.filter((element)=>
  // {  
  //   if (element %2!=0)
  //   newArray.push(element);
  // })
  // return newArray;

    let newArray=arr.filter(element => element %2 !== 0);
    return newArray;
  
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.
For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
------------------------------------------------------------------------------------------------ */

const notInFirstArray = (forbiddenValues, arr) => {
  
  let newArray=arr.filter(element => {
    if (!forbiddenValues.includes(element))
    return element;
    });
    return newArray;
    // let newArr=arr.filter(element => {
    //   if (!forbiddenValues.includes(element))
    //   return element;
    //   });
    //   return newArray;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal
Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.
For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const getBaseStatGreaterThan = (arr, minBaseStat) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 7. For this function, extend your solution from challenge 7 to only return the name of the stat, rather than the entire stat object.
For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].
------------------------------------------------------------------------------------------------ */

const getStatName = (arr, minBaseStat) => {
  let newArray = arr.filter((value) => {
    if (value.baseStat > minBaseStat) {
        return value.stat.name;
    }
}).map(value => value.stat.name);
return newArray;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getCharactersWithoutChildren = (arr) => {
  let newArr = arr.filter((value) => {
    if (!('children' in value)) {
        return value;
    }
});
return newArr;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.
For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].
------------------------------------------------------------------------------------------------ */

const evenOddNumericValues = (arr) => {
  let newArr = arr.filter((value) => {
    if (value === parseInt(value, 10)) {
        return value;
        
    }
});
let oddEven = newArr.map((value) => {
    if (value % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
});
return oddEven;
};

/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code*/