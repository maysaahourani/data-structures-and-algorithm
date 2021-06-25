let newArr=[];
let arr=[1,2,3];

const addOne = (arr) => {
    arr.forEach(element => {
    newArr.push (element+1);
  });
  return (newArr);
};

addOne();
console.log (newArr);