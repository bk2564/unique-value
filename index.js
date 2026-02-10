const randomValues = [3, 5, 4, 5, 3, 4]
let found = 0;
for (value of randomValues){
    found ^= value;
}

console.log('Found value: ' + found);
