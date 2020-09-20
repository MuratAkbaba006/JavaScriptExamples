function hesap(){
    
    var values=parseInt(document.getElementById("id").value);
    var deger=0;
    var sayi=values.toString().length;
  


    
          for(var i=0;i<sayi;i++){
        
         if((values%10==0) || (values%10==1))
             {
            deger=deger+((values%10)*Math.pow(2,[i]));
              values=parseInt(values/10);
          
          
          }
        else{
            alert("girdiginiz deger binary degil");
            break; 
        }
        
          }
    
    

      document.getElementById("lbl").innerHTML=deger;    
   
    
    
}
