const operators=document.querySelectorAll(".operator");
const numbers=document.querySelectorAll(".num");
var displayscreen=document.getElementById("inputs");
var equal=document.getElementById("bt15");
var clear=document.getElementById("bt16");


var sayi1=0;
var sayi2=0;


for(j=0;j<numbers.length;j++){
    
    numbers[j].addEventListener("click",function(e){
    displayscreen.value+=e.target.textContent;
     
    e.preventDefault();
    });    
}


for(i=0;i<operators.length;i++){
    
    operators[i].addEventListener("click",function(e){
    displayscreen.value+=this.textContent;

    e.preventDefault();
    });
}

function calculate(sayi,sayi2,ope){
    
    if(ope=="*"){
        
        var sonuc=sayi*sayi2;
        return sonuc;
        
    }
    else if(ope=="/"){
        
        var sonuc=sayi/sayi2;
        return sonuc;
        
    }
    else if(ope="+"){
        
        var sonuc=sayi+sayi2;
        return sonuc;
    }
    else if(ope=="-"){
        var sonuc=sayi-sayi2;
        return sonuc;
        
    }
    
}


equal.addEventListener("click",function(e){
    
    var text=displayscreen.value;
    
    for(i=0;i<text.length;i++){
    

        
      if(text[i]==="*"){
         
          var sayi1=parseFloat(text.substring(0,i));
          var sayi2=parseFloat(text.substring(i+1,text.length));
          var sonuc=calculate(sayi1,sayi2,"*");

         
         }
        else if(text[i]==="+"){
            
             var sayi1=parseFloat(text.substring(0,i));
          var sayi2=parseFloat(text.substring(i+1,text.length));
          var sonuc=calculate(sayi1,sayi2,"+");

         
            
        }
          else if(text[i]==="/"){
                 var sayi1=parseFloat(text.substring(0,i));
          var sayi2=parseFloat(text.substring(i+1,text.length));
          var sonuc=calculate(sayi1,sayi2,"/");

            
        }
          else if(text[i]==="-"){
            
     var sayi1=parseFloat(text.substring(0,i));
          var sayi2=parseFloat(text.substring(i+1,text.length));
          var sonuc=calculate(sayi1,sayi2,"-");
   
            
        }
            
    }
    
    displayscreen.value=sonuc;
    
    e.preventDefault();
});

clear.addEventListener("click",function(e){
    
    
   displayscreen.value=" ";
   e.preventDefault(); 
});