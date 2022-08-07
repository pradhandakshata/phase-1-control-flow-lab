function scuberGreetingForFeet(ridedistance){
  let result;
  if (ridedistance <= 400){
    result = 'This one is on me!'

  } 
  else if (ridedistance >400 && ridedistance<2000) {
    result = 'That will be twenty bucks.'
    
  } 
  else if (ridedistance>2000 && ridedistance<2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (ridedistance >2500){
    result = 'No can do.'
  }
    return result;
  }
  
function ternaryCheckCity(cityname){
   let city =  cityname === "NYC" ? "Ok, sounds good." : "No go.";
  return city;
}

function switchOnCharmFromTip(tip){
let tipquality;
switch (tip){
  case 'generous':
    tipquality = 'Thank you so much.';
    break;
  case 'not as generous':
    tipquality = 'Thank you.';
    break;
  case 'thanks for everything':
    tipquality = 'Bye.';
    break;
  default:
    break;
}
  return tipquality;
  
}
