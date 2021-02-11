const api="https://api.exchangeratesapi.io/";

var currency_one=document.getElementById("currency_one");
var currency_two=document.getElementById("currency_two");
var amounts=document.getElementById("amount");
var btn=document.getElementById("btn");
var result=document.getElementById("result");


fetch("currencies.json").then(res =>{
   return res.json();
}).then(data => {
   const keys=Object.keys(data);
   const values=Object.values(data);
   
    let options="";
    
    for(let i=0;i<keys.length;i++){
        
        options+= `<option value="${keys[i]}">${values[i]}</option>`;
        
        
    }
   
    currency_one.innerHTML+=options;
    currency_two.innerHTML+=options;
 
    
   
});

btn.addEventListener("click",function(){
    
    const base_currency=currency_one.value;
    const to=currency_two.value;
    const amount=amounts.value;
    //normalde burada base_currency olarak euro belirlenmişti ancak biz bunun kullanıcının seçmiş olduğu ilk currency_one a göre değişecek şekilde belirledik ve aşağıda yazdık
    fetch(`${api}latest?base=${base_currency}`).then(res=>{
        
        return res.json();
    }).then(data=>{
        const rate=data.rates[to];
        result.innerHTML=`${amount} ${base_currency}=${amount*rate} ${to}`;
        
    });
    
    
    
    
})