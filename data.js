let ciao = 'ciao'
console.log(ciao)

let p = ':p'
console.log(p)


let number = [1,2,3,4,5,6,7,8,9,10]
let somma = 0

for (i=0; i<number.length; i++){

  somma = somma+number[i]
}

console.log(somma)

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let pari = []

for (i=0; i<numbers.length;i++){

  if (numbers[i] % 2 == 0){
    pari.push(numbers[i])
  }
}

console.log(pari)

let asterisco = '#'
uff = ''
for (i=0; i< 5;i++){
  
  uff = uff+asterisco
  console.log(uff)
}

let numeri = [12, 45, 3, 22, 98, 4];
let massimo = Number.NEGATIVE_INFINITY
for (i=0; i< numeri.length;i++){

  if (numeri[i]>massimo){
    massimo = numeri[i]

  }
}

console.log(massimo)

let matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let s = 0
// Output atteso: 45

for (i=0; i<matrice.length; i++){
  for (j=0; j <matrice[i].length; j++){
    s = s+matrice[i][j]
  }
}
console.log(s)

let matrices = [
  [10, 20],
  [30, 40],
  [50, 60]
];

for (i=0; i<matrices.length; i++){

  for (j=0; j<matrices[i][j];j++){
    console.log(`Elemento ${matrices[i][j]}`)
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

/* Output atteso:
[
  [1, 4],
  [2, 5],
  [3, 6]
]
*/

for (i=0; i<matrix.length;i++){
  for (j=0; j<matrix[i].length;j++)
    if (matrix[i][j]== 1 || matrix[i][j]== 4){

    }
}

let matrixx = [
  [0, 1, 0],
  [2, 0, 3],
  [4, 5, 6]
];
let count = 0
// Output atteso: 3

for (i=0; i<matrixx.length;i++){
 for (j=0; j<matrixx[i].length;j++){
  if (matrixx[i][j] == 0){
    count++
  }
 }
}

console.log(count)



