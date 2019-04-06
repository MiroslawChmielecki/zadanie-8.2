var output = document.getElementById('greeter-output');


output.innerHTML = '<br>'+output.innerHTML;


var button = document.getElementById('greeter-button');


var temp;


button.addEventListener('click', function(){


  temp = window.prompt('Write water temperature in ℃ !!');

  if (isNaN(temp)) {
    output.innerHTML = '<br>Write correct content !!' + '<br><br>' + output.innerHTML;
  }
  else {
    output.innerHTML = '<br>Water temperature equal '+temp+'℃ = ' + (temp * 1.8 + 32) + '℉'+ '<br><br>' + output.innerHTML;
  }
  if (isNaN(temp)) {
    output.innerHTML = '<br>You wrote incorrect content !!' + '<br><br>' + output.innerHTML;
  }
  else if (temp >= 100) {
    output.innerHTML = '<br>Water become steam'+ '<br><br>' + output.innerHTML;
  }
  else if(temp > 60){
  output.innerHTML = '<br>In this temperature water is hot'+ '<br><br>' + output.innerHTML;
  }
  else if(temp > 20){
  output.innerHTML = '<br>In this temperature water is warm' + '<br><br>' + output.innerHTML;
  }
  else if(temp >= 0){
  output.innerHTML = '<br>In this temperature water is really cool' + '<br><br>' + output.innerHTML;       
  } 
  else {
    output.innerHTML = '<br>Water become ice' + '<br><br>' + output.innerHTML;
  }
  
});

var output = document.getElementById('greeter-output2');


output.innerHTML = '<br>'+'Click one of the button and write temperature of water' +'<br>'+ 'You will see the same temperature in ℃ and in ℉' + '<br>'+'See what happend with water in this temperature !!'+output.innerHTML;


var button = document.getElementById('greeter-button2');


var temp;


button.addEventListener('click', function(){


  temp = window.prompt('Write water temperature in ℉ !!');

  if (isNaN(temp)) {
    output.innerHTML = '<br>Write correct content !!' + '<br><br>' + output.innerHTML;
  }
  else {
    output.innerHTML = '<br>Water temperature equal '+ temp + '℉ = ' +(5/9*(temp-32))+' ℃' + '<br><br>' + output.innerHTML;
  }
  if (isNaN(temp)) {
    output.innerHTML = '<br>You wrote incorrect content !!' + '<br><br>' + output.innerHTML;
  }
  else if (temp >= 212) {
    output.innerHTML = '<br>Water become steam'+ '<br><br>' + output.innerHTML;
  }
  else if(temp > 140){
  output.innerHTML = '<br>In this temperature water is hot'+ '<br><br>' + output.innerHTML;
  }
  else if(temp > 68){
  output.innerHTML = '<br>In this temperature water is warm' + '<br><br>' + output.innerHTML;
  }
  else if(temp > 32){
  output.innerHTML = '<br>In this temperature water is really cool' + '<br><br>' + output.innerHTML;       
  } 
  else {
    output.innerHTML = '<br>Water become ice' + '<br><br>' + output.innerHTML;
  }
  
});