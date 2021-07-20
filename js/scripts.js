function onlyNums(e) {
    const code = window.event ? e.which : e.ketCode;
    return !(code < 48 || code > 57);
}

    function visualizar() {
          var nOne = document.getElementById("valueOne").value;
        nOne = parseInt(nOne);
        var nTwo = document.getElementById("valueTwo").value;
        nTwo = parseInt(nTwo);
       
          var option = document.getElementById('opt');
        alert(option.value);
        switch (option.selectedIndex) {
          case 1: result = nOne + nTwo;
                 var out = document.getElementById("layout");
               out.innerHTML = `suma : ${result} `;
            break;
          case 2:
            result = nOne>nTwo?nOne-nTwo: nTwo-nOne;
                 var out = document.getElementById("layout");
               out.innerHTML = `suma : ${result} `;
            break;
          case 3:
          result = nOne*nTwo;
                 var out = document.getElementById("layout");
               out.innerHTML = `suma : ${result} `;
          break;
          case 4:
            result =  nOne>nTwo? nOne/nTwo:0;
                 var out = document.getElementById("layout");
               out.innerHTML = `suma : ${result} `;
            break;
            case 5:
                result= Math.pow(nOne,nTwo);
                 var out = document.getElementById("layout");
               out.innerHTML = `suma : ${result} `;
                break;
            case 6:
                mcd(nOne,nTwo);
              
                    break;
            case 7:
                
                  var out = document.getElementById("layout");
                  out.innerHTML = `   ${numAmigos(nOne,nTwo)} `;
                break;
            case 8:
             
             
                beginOne();
                break;
            case 9:
                var v1=document.getElementById("dateOne").value;
                var v2=document.getElementById("dateTwo").value;
                numDias=diasTranscurridos(v1,v2);
                 var out = document.getElementById("layout");
                  out.innerHTML = `     ${numDias} `;
                break;
            case 10:
                   var v2=document.getElementById("dateTwo").value;
                    date=birthday1(v2);
                 var out = document.getElementById("layout");
               out.innerHTML = ` ${date} `;
                break;
            case 11:
                  const vOne = document.getElementById('chain').value;
                resultado12=ucwords(vOne);
                 var out = document.getElementById("layout");
               out.innerHTML = `suma : ${resultado12} `;
                break;
            case 12:
                 var frase= document.getElementById('chain').value;
               
                if(esPalindromo(frase)){
                    var out = document.getElementById("layout");
               out.innerHTML = ` es palindromo`;
                }else{
                    var out = document.getElementById("layout");
               out.innerHTML = `No es palindromo`;
                }
              //  var out = document.getElementById("layout");
               //out.innerHTML = ` : ${ textArea()} `;
                break;
          default:
        }

        
   
}
function ucwords(oracion){
    return oracion.replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1){
       return $1.toUpperCase(); 
    });
}
function mcd(a,b){

     if (a>b)
            divisor=b;
        else
            divisor=a;
        //Y ahora empiezo a probar si ese número es el mcd o lo son
        //los sucesivos inferiores a él
        while ((a%divisor!=0 || b%divisor!=0) && divisor>1)
            divisor--;
        //Para salir del bucle while, se deben cumplir una de las dos condiciones:
        //- divisor es un mcd de ambos números
        //- divisor ha llegado a valer 1, con lo cual ése es el máximo común divisor
        var out = document.getElementById("layout");
               out.innerHTML = `  ${ divisor} `;
    
}
function textArea(){
  const vOne = document.getElementById('chain').value;
   // alert(vOne);
t=vOne.length;
    
    /*si la cadena esta vacia no es palindromo*/
    if (t==0){
        return false;
    }
   
    for(i=0;i<t/2;i++){
        if(vOne[i]!=vOne[t-1-i]){
            return false;
        } 
    }
    return true;
}
function esPalindromo(frase){
	var aux="";
  
	 n = frase.length;
	for (var i = 0; i <n; i++) {
		if(!(frase.substring(i, i+1)==(" ")
				||frase.substring(i, i+1)==(".")
				||frase.substring(i, i+1)==("¿")
				||frase.substring(i, i+1)==("?")
				||frase.substring(i, i+1)==("!")
				||frase.substring(i, i+1)==("¡")
				||frase.substring(i, i+1)==(","))){
			aux=aux+frase.substring(i, i+1);
		
			
		}
	}
	n=aux.length;
	for (var i = 0; i < n/2; i++) {
		if(!aux.substring(i,i+ 1)==(aux.substring(n-i-1, n-i))){
			return false;
		}
	}
	return true;
	
}
/*
function  esPrimo1( numero){
		  contador = 2;
		 primo=true;
		  while ((primo) && (contador!=numero)){
		    if (numero % contador == 0)
		      primo = false;
		    contador++;
		  }
		  return primo;
		}
function diasTranscurridos(f1, f2){
    var aFecha1 = f1.split('-');
 var aFecha2 = f2.split('-');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    alert(dias);
 return dias;
    
}
*/
function birthday1(date) {
    var birthday_arr = date.split("-");
    var birthday_date = new Date(birthday_arr[0], birthday_arr[1] - 1, birthday_arr[2]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    alert(date);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function  numAmigos( n1, n2){
	suma=0;
    resultado="";
     
      
        for(var i=1;i<n1;i++){  // for para sumar todos los divisores propios de n1
             if(n1%i==0){
                suma=suma+i;
             }
        }
        // si la suma de los divisores de n1 es igual a n2
        if(suma==n2){
           suma=0;
           for(var i=1;i<n2;i++){  // sumo los divisores propios de n2
                if(n2%i==0){
                   suma=suma+i;
               }
           }
        // si la suma de los divisores de n2 es igual a n1
           if(suma==n1){
             return "son amigos";
           }else{
                 return "No son Amigos";
           }
        }        
        else{
               return "No son Amigos";
        }
		}
function isCousing(n){
	var cont=2;
	var cousing=true;
	while(cont<=n/2 && cousing){
		cousing=!(n%cont++==0);
	}
	return cousing;
}
function beginOne(){
         
	alert("OK");
	const nOne=parseInt(document.getElementById("valueOne").value);
	const nTwo=parseInt(document.getElementById("valueTwo").value);
	const less=nOne<nTwo?nOne:nTwo;
	const higher=nOne>nTwo?nOne:nTwo;
	alert(`Mayor=${higher} Menor=${less}`);
	document.getElementById("titHead").innerHTML="";
	document.getElementById("titHead").appendChild(document.createTextNode(`Numeros primos del ${less} al ${higher}`));
	var tBody=document.getElementById("tblBody");
	document.getElementById("tblBody").innerHTML="";
	var contCousings=0;
	var sum=0;
	
	for(var cont=less;cont<=higher;cont++){
		if(isCousing(cont)){
			var row=document.createElement("tr");
			var col=document.createElement("td");
			col.appendChild(document.createTextNode(++contCousings));
			row.appendChild(col);
			
			col=document.createElement("td");
			col.appendChild(document.createTextNode(cont));
			row.appendChild(col);
			tBody.appendChild(row);
			 sum+=cont;
			
								
		}
	}

                

	document.getElementById("foot").appendChild(document.createTextNode(`Hay ${contCousings} numeros primos la Suma es ${sum}`));

   
}

function begin() {
    const vOne = document.getElementById('valueOne').value;
    const vTwo = document.getElementById('valueTwo').value;
    //const options = document.getElementById('opt').options
                
    const dates = [

        {
            code: "32423",
            name: "Juan Roa"
        },
        {
            code: "98734",
            name: "Maria Rojas"
        },
        {
            code: "8927423",
            name: "Lola Hernandez"
        }
]

    dates.forEach((record)=>{
        alert(`Codigo=${record.code} Name=${record.name}`)
    })

}

$(document).ready(function () {
    $('#btnHide').click( () =>{
       $('#layout').fadeOut('slow');
    });

    $('#btnView').click( () =>{
       $('#layout').fadeIn('slow');
    });
})

