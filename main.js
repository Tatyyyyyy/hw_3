let x = +prompt('Введите число');  
let y = +prompt('Введите степень');  
let z = 1;

for(let i = 0; i < y; i++) {
    z *= x ;
}

alert(z);
