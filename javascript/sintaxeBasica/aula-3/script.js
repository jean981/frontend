//trabalhando com vetores (arrays)

let array = ['string', 1, true];
console.log(array);

let arrayDentroDoArray = ['string', 1, false, 
                         ['frutas','laranjas','melancias'], 
                         ['bebidas','refri','sucos', 
                         [1,2,3,5,4,6], 
                         [true,true,false,false,false]],8];
console.log(arrayDentroDoArray);

//manipulacao de array
//metodo foreach
arrayDentroDoArray.forEach(function(item, index){console.log(item, index)});

//metodo push - final do array
arrayDentroDoArray.push('newItem');
console.log(arrayDentroDoArray);

//metodo shift - remove inicio do array
arrayDentroDoArray.shift();
console.log(arrayDentroDoArray);

//metodo pop - remove final do array
arrayDentroDoArray.pop();
console.log(arrayDentroDoArray);

//metodo unshift - adiciona inicio do array
arrayDentroDoArray.unshift('itemNoComeco');
console.log(arrayDentroDoArray);

//metodo indexOf - retorna posicao valor do array
console.log(arrayDentroDoArray.indexOf(8));

//metodo splice - remove ou substitui item atraves do indice
arrayDentroDoArray.splice(0,3);
console.log(arrayDentroDoArray);

//metodo slice - retorna parte de um array existente atraves do indice
let newArrayDentroDoArray = arrayDentroDoArray.slice(0,3);
console.log(newArrayDentroDoArray);

//manipular objetos

//criar objeto
let Objecto = {string:'string', number:1, boolean: true, array:['array'],objectItern:{objetoItn:'objectInt'}}
console.log(Objecto.boolean);

var string = Objecto.string;
console.log(string);

var {string, boolean, objectItern} = Objecto;
console.log(string, boolean, objectItern);