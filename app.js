
//json = javascript object notacation
//এইটা হলো object কে stringifyFormat কিভাবে করে এবং তা থেকৈ কিভাবে object করব। 

/* const user = {
    id: 12,
    name: 'Rifat Bin Ilias',
    login: true,
    age: 20,
    address: 'Saltha'
}
const stringifyFormat = JSON.stringify(user)
// console.log(stringifyFormat);
const objectConvert = JSON.parse(stringifyFormat)
console.log(objectConvert); */


const market = {
    name: 'Rifat Bin Ilias',
    address: 'Faridpur',
    profit: 15000,
    products: ['laptop', 'mobile', 'match'],
    owner: {
        name: 'Rifat',
        profession: 'web Devoloper'
    },
    isExpensive: false
};

const stringify = JSON.stringify(market)
console.log(stringify);
