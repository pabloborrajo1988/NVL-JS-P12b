function guardapares(aleatorio)
{
  pares.push(aleatorio);

}
function guardaimpares(aleatorio)
{
  impares.push(aleatorio);
}
var pares=[];
var impares=[];
var aleatorio=0;
for (var i=0;i<50;i++){

  aleatorio= Math.floor((Math.random() * 100) + 1);
  if(aleatorio%2==0)
    guardapares(aleatorio);
  else {
    guardaimpares(aleatorio);
  }
}

  alert("tamaño de pares:"+pares.length);
    alert("tamaño de impares:"+impares.length);
