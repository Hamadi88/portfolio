
 var bouton=document.createElement("button");
 bouton.classList.add("boutonN");

 document.body.appendChild(bouton);
 bouton.textContent="bouton";
// bouton.addEventListener('click',function()){

var clique = document.querySelector('.clique')
console.log(clique);
clique.addEventListener('click', function(){
	var para = document.querySelector('.monpara')
	para.classList.toggle('visible');
	clique.classList.add('invisible');
	para.addEventListener('click', function(){
		clique.classList.remove('invisible');
		para.classList.remove('visible');
	})
});