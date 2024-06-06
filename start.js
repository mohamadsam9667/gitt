
let inputText=document.getElementById('converter');
let Celsios=document.querySelector('.C')
let Farenhight=document.querySelector('.F');
let Converter=document.getElementById('converter');
let resault =document.querySelector('.result')


//  F = (1.8 × C) + 32
function convert(){
  let TempC=Number(inputText.value);
  let TempF=Number(inputText.value);
 
 
  if(Celsios.innerHTML=='°C'){
     TempC=Number(inputText.value);
     TempF=(1.8*TempC)+32;
   resault.innerHTML=TempF;
  }

  else{
    TempC=(TempF-32)/1.8;
    resault.innerHTML=TempC;
  }


}
  
   function reset(){
    inputText.value=" "
    resault.innerHTML="";
 
 
  }
    
    function change(){
     
     
      if(Celsios.innerHTML=='°C')
      {
        Celsios.innerHTML='°F';
        Farenhight.innerHTML="°C";
      }

      else{
        Celsios.innerHTML="°C";
        Farenhight.innerHTML="°F";
      }

      if(document.title==='SalzLearn| Js | °C to °F'){
        document.title="SalzLearn| Js | °F to °C ";
      }

      else{
         document.title="SalzLearn| Js | °C to °F";
      }


      if(Converter.placeholder==="°C"){
        Converter.placeholder='°F';
      }

      else{
        Converter.placeholder='°C';
      }
  
  };
