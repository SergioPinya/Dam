//Executeu este codi i mireu el que mostra per consola

 let dies=["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres","Dissabte","Diumenge"];
/*function paraCada(array, accio){
    for(let i=0;i<array.length;i++){
        accio(array[i]);
    }
}
paraCada(dies,console.log);
 */
//Modifiqueu-lo per a que faça el mateix utilitzant una funció fletxa (=>)

/* 
const paraCada=(array, accio)=>{
    for(let i=0;i<array.length;i++){
        accio(array[i]);
    }
}
paraCada(dies,console.log);;

 */
//Modifiqueu el codi per a que faça el mateix utilitzant el mètode forEach()




/* 
const paraCada=(array, accio)=>{
   
    array.forEach(element => {
        accio(element)
    });
}
paraCada(dies,console.log);; */
 

// Que cree un altre array on calcule el numero de caracters de cada dia de la setmana
// ex: numCar=[7,7,8,6,9,8,8] 
// i després que mostre el contingut dels dos arrays de la següent manera:
// Dilluns: 7
// Dimarts: 7
// Dimecres: 8
// ...
/* 
 const paraCada=(array, accio)=>{
   
    array.forEach(element => {
       accio(element +": "+ element.length)
    });
   
}
paraCada(dies,console.log); */

 


//Mostra els dies que ténen més de 7 caracters (filter)


/* const paraCada=(array, accio)=>{
 accio( array.filter(array => array.length > 7));
}
paraCada(dies,console.log);
  */



let _mostraDiesMesDe= (unDia,numCaracters,acc) =>{
    if(unDia.length>numCaracters)
     return acc+unDia+", ";
    else
     return acc+"";
 }
let stringAmbDiesMesDe7 = dies.reduce((acc,unDia) =>_mostraDiesMesDe(unDia,7,acc),"");
console.log(stringAmbDiesMesDe7);
let rdo = dies.reduce((acc,unDia)=>(unDia.length>7)?acc+unDia+", ":acc,"");
console.log(rdo);
/* Ara volem fer el mateix, però que ens torne un String amb els dies que ténen més de 7 caracters */
/* reduce */