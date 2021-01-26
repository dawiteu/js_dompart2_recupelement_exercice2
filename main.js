// 1 



//const content = document.getElementById('content'); 

const content = document.getElementsByTagName('div')[0];

console.log(content.children[0]); 

// ou // console.log(content.firstElementChild);


//2
const h3s = content.getElementsByTagName('h3'); 

console.log(h3s[1]);
// 3
console.log( h3s[1].previousElementSibling );

console.log('-------');
// 4 
const petitPara = document.getElementsByTagName('p')[1]; 

console.log(petitPara.nextElementSibling);


// 5 
const im = document.getElementsByClassName('important'); 

Array.from(im).forEach( (e) => {
    console.log(e.parentElement.nodeName); 
});


// 6
const ul = document.getElementsByTagName('ul')[0];

console.log(ul.firstElementChild);


// 7 

console.log(im[im.length-1].nextElementSibling);  // ???

console.log('----8---');
// 8 

const tGen = document.getElementsByTagName('p')[3];

const next = tGen.nextElementSibling.nextElementSibling; 

console.log(next); 


console.log('----9---');


// 9 

const footer = document.getElementsByTagName('div')[1];

const spanNom = footer.getElementsByTagName('span')[0];

console.log(spanNom); 

console.log(spanNom.parentElement.parentElement.getElementsByTagName('p')[1].firstElementChild);

const prenom = footer.getElementsByTagName('span')[1].firstElementChild; 

console.log(prenom); 


// 10 
console.log( prenom.parentElement.parentElement.parentElement.getElementsByTagName('p')[0].firstElementChild.firstElementChild );


// 11

const gParaf = document.querySelector('p.grandParagraphe'); 
console.log(gParaf); 


const lis = document.querySelectorAll('li');

Array.from(lis).forEach((e) =>{
    console.log(e); 
})






