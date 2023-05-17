function autoMealCalculator(checkBoxCell, mealCell,) {
  var sheet         = SpreadsheetApp.getActiveSpreadsheet();
  var activeSheet   = sheet.getActiveSheet();
  var checkBox      = activeSheet.getRange(checkBoxCell).getValue();
  var firstSession  = activeSheet.getRange("AS2").getValue();
  var secondSession = activeSheet.getRange("AT2").getValue();
  var thirdSession  = activeSheet.getRange("AU2").getValue();
  var session       = 1;

  switch (session){
    case 1:     
      if (checkBox == true){
      activeSheet.getRange(mealCell).setValue(firstSession);
      session += 1;
      }

      else{
      activeSheet.getRange(mealCell).setValue(0);
      session += 1;
      }
    break;

    case 2:
      if (checkBox == true){
      activeSheet.getRange(mealCell).setValue(secondSession);
      session += 1;
      }

      else{
      activeSheet.getRange(mealCell).setValue(0);
      session += 1;
      }
    break;

    case 3:
      if (checkBox == true){
      activeSheet.getRange(mealCell).setValue(thirdSession);
      session = 1;
      }

      else{
      activeSheet.getRange(mealCell).setValue(0);
      session = 1;
      }
    break;
  }
  
}

var sheet       = SpreadsheetApp.getActiveSpreadsheet();
var activeSheet = sheet.getActiveSheet();
var day         = activeSheet.getRange("BH2").getValue();
var turnedOn    = activeSheet.getRange("AI2").getValue();
let checkBoxVar = 4;
let countVar    = 4;


if (turnedOn == true){

  switch (day){
    case 1:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AG"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AG"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AG"+countVar);
            break;
          }     
        }
      }
      break;

    case 2:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AH"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AH"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AH"+countVar);
            break;
          }     
        }
      }
      break;

    case 3:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AI"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AI"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AI"+countVar);
            break;
          }     
        }
      }
      break;

    case 4:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AJ"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AJ"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AJ"+countVar);
            break;
          }     
        }
      }
      break;

    case 5:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AK"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AK"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AK"+countVar);
            break;
          }     
        }
      }
      break;

    case 6:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AL"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AL"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AL"+countVar);
            break;
          }     
        }
      }
      break;

    case 7:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AM"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AM"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AM"+countVar);
            break;
          }     
        }
      }
      break;

    case 8:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AN"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AN"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AN"+countVar);
            break;
          }     
        }
      }
      break;

    case 9:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AO"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AO"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AO"+countVar);
            break;
          }     
        }
      }
      break;

    case 10:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AP"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AP"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AP"+countVar);
            break;
          }     
        }
      }
      break;

      case 11:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AQ"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AQ"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AQ"+countVar);
            break;
          }     
        }
      }
      break;

    case 12:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AR"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AR"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AR"+countVar);
            break;
          }     
        }
      }
      break;

    case 13:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AS"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AS"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AS"+countVar);
            break;
          }     
        }
      }
      break;

    case 14:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AT"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AT"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AT"+countVar);
            break;
          }     
        }
      }
      break;

    case 15:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AU"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AU"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AU"+countVar);
            break;
          }     
        }
      }
      break;

    case 16:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AV"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AV"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AV"+countVar);
            break;
          }     
        }
      }
      break;

    case 17:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AW"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AW"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AW"+countVar);
            break;
          }     
        }
      }
      break;

    case 18:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AX"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AX"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AX"+countVar);
            break;
          }     
        }
      }
      break;

    case 19:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AY"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AY"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AY"+countVar);
            break;
          }     
        }
      }
      break;

    case 20:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "AZ"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "AZ"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "AZ"+countVar);
            break;
          }     
        }
      }
      break;

    case 21:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BA"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BA"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BA"+countVar);
            break;
          }     
        }
      }
      break;

    case 22:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BB"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BB"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BB"+countVar);
            break;
          }     
        }
      }
      break;

    case 23:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BC"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BC"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BC"+countVar);
            break;
          }     
        }
      }
      break;

    case 24:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BD"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BD"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BD"+countVar);
            break;
          }     
        }
      }
      break;

    case 25:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BE"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BE"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BE"+countVar);
            break;
          }     
        }
      }
      break;

    case 26:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BF"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BF"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BF"+countVar);
            break;
          }     
        }
      }
      break;

    case 27:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BG"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BG"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BG"+countVar);
            break;
          }     
        }
      }
      break;

    case 28:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BH"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BH"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BH"+countVar);
            break;
          }     
        }
      }
      break;

    case 29:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BI"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BI"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BI"+countVar);
            break;
          }     
        }
      }
      break;

    case 30:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BJ"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BJ"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BJ"+countVar);
            break;
          }     
        }
      }
      break;

    case 31:
      for (let i = 0; i < 40; i++) {
      checkBoxVar += 1;
      for(let j = 0; j < 3; j++) {
        countVar += 1;
        switch(j){
          case 0:
            autoMealCalculator("Y"+checkBoxVar, "BK"+countVar);
            break;

          case 1:
            autoMealCalculator("Z"+checkBoxVar, "BK"+countVar);
            break;

          case 2:
            autoMealCalculator("AA"+checkBoxVar, "BK"+countVar);
            break;
          }     
        }
      }
      break;

    default:
      break;
    }
}



// switch(day){
//   case 1:
//     autoMealCalculator("Y5", "AG5");
//     autoMealCalculator("Z5", "AG6");
//     autoMealCalculator("AA5", "AG7");
//     autoMealCalculator("Y6", "AG8");
//     autoMealCalculator("Z6", "AG9");
//     autoMealCalculator("AA6", "AG10");
//     break;

//   case 2:
//     autoMealCalculator("Y5", "AH5");
//     autoMealCalculator("Z5", "AH6");
//     autoMealCalculator("AA5", "AH7");
//     autoMealCalculator("Y6", "AH8");
//     autoMealCalculator("Z6", "AH9");
//     autoMealCalculator("AA6", "AH10");
//     break;

//   case 3:
//     autoMealCalculator("Y5", "AI5");
//     autoMealCalculator("Z5", "AI6");
//     autoMealCalculator("AA5", "AI7");
//     autoMealCalculator("Y6", "AI8");
//     autoMealCalculator("Z6", "AI9");
//     autoMealCalculator("AA6", "AI10");
//     break;

//   case 4:
//     autoMealCalculator("Y5", "AJ5");
//     autoMealCalculator("Z5", "AJ6");
//     autoMealCalculator("AA5", "AJ7");
//     autoMealCalculator("Y6", "AJ8");
//     autoMealCalculator("Z6", "AJ9");
//     autoMealCalculator("AA6", "AJ10");
//     break;

//   case 5:
//     autoMealCalculator("Y5", "AK5");
//     autoMealCalculator("Z5", "AK6");
//     autoMealCalculator("AA5", "AK7");
//     break;

//   case 6:
//     autoMealCalculator("Y5", "AL5");
//     autoMealCalculator("Z5", "AL6");
//     autoMealCalculator("AA5", "AL7");
//     break;

//   case 7:
//     autoMealCalculator("Y5", "AM5");
//     autoMealCalculator("Z5", "AM6");
//     autoMealCalculator("AA5", "AM7");
//     break;

//   case 8:
//     autoMealCalculator("Y5", "AN5");
//     autoMealCalculator("Z5", "AN6");
//     autoMealCalculator("AA5", "AN7");
//     break;

//   case 9:
//     autoMealCalculator("Y5", "AO5");
//     autoMealCalculator("Z5", "AO6");
//     autoMealCalculator("AA5", "AO7");
//     break;

//   case 10:
//     autoMealCalculator("Y5", "AP5");
//     autoMealCalculator("Z5", "AP6");
//     autoMealCalculator("AA5", "AP7");
//     break;

//   case 11:
//     autoMealCalculator("Y5", "AQ5");
//     autoMealCalculator("Z5", "AQ6");
//     autoMealCalculator("AA5", "AQ7");
//     break;

//   case 12:
//     autoMealCalculator("Y5", "AR5");
//     autoMealCalculator("Z5", "AR6");
//     autoMealCalculator("AA5", "AR7");
//     break;

//   case 13:
//     autoMealCalculator("Y5", "AS5");
//     autoMealCalculator("Z5", "AS6");
//     autoMealCalculator("AA5", "AS7");
//     break;

//   case 14:
//     autoMealCalculator("Y5", "AT5");
//     autoMealCalculator("Z5", "AT6");
//     autoMealCalculator("AA5", "AT7");
//     break;

//   case 15:
//     autoMealCalculator("Y5", "AU5");
//     autoMealCalculator("Z5", "AU6");
//     autoMealCalculator("AA5", "AU7");
//     break;

//   case 16:
//     autoMealCalculator("Y5", "AV5");
//     autoMealCalculator("Z5", "AV6");
//     autoMealCalculator("AA5", "AV7");
//     break;

//   case 17:
//     autoMealCalculator("Y5", "AW5");
//     autoMealCalculator("Z5", "AW6");
//     autoMealCalculator("AA5", "AW7");
//     break;

//   case 18:
//     autoMealCalculator("Y5", "AX5");
//     autoMealCalculator("Z5", "AX6");
//     autoMealCalculator("AA5", "AX7");
//     break;

//   case 19:
//     autoMealCalculator("Y5", "AY5");
//     autoMealCalculator("Z5", "AY6");
//     autoMealCalculator("AA5", "AY7");
//     break;

//   case 20:
//     autoMealCalculator("Y5", "AZ5");
//     autoMealCalculator("Z5", "AZ6");
//     autoMealCalculator("AA5", "AZ7");
//     break;

//   case 21:
//     autoMealCalculator("Y5", "BA5");
//     autoMealCalculator("Z5", "BA6");
//     autoMealCalculator("AA5", "BA7");
//     break;

//   case 22:
//     autoMealCalculator("Y5", "BB5");
//     autoMealCalculator("Z5", "BB6");
//     autoMealCalculator("AA5", "BB7");
//     break;

//   case 23:
//     autoMealCalculator("Y5", "BC5");
//     autoMealCalculator("Z5", "BC6");
//     autoMealCalculator("AA5", "BC7");
//     break;

//   case 24:
//     autoMealCalculator("Y5", "BD5");
//     autoMealCalculator("Z5", "BD6");
//     autoMealCalculator("AA5", "BD7");
//     break;

//   case 25:
//     autoMealCalculator("Y5", "BE5");
//     autoMealCalculator("Z5", "BE6");
//     autoMealCalculator("AA5", "BE7");
//     break;

//   case 26:
//     autoMealCalculator("Y5", "BF5");
//     autoMealCalculator("Z5", "BF6");
//     autoMealCalculator("AA5", "BF7");
//     break;

//   case 27:
//     autoMealCalculator("Y5", "BG5");
//     autoMealCalculator("Z5", "BG6");
//     autoMealCalculator("AA5", "BG7");
//     break;

//   case 28:
//     autoMealCalculator("Y5", "BH5");
//     autoMealCalculator("Z5", "BH6");
//     autoMealCalculator("AA5", "BH7");
//     break;

//   case 29:
//     autoMealCalculator("Y5", "BI5");
//     autoMealCalculator("Z5", "BI6");
//     autoMealCalculator("AA5", "BI7");
//     break;

//   case 30:
//     autoMealCalculator("Y5", "BJ5");
//     autoMealCalculator("Z5", "BJ6");
//     autoMealCalculator("AA5", "BJ7");
//     break;

//   case 31:
//     autoMealCalculator("Y5", "BK5");
//     autoMealCalculator("Z5", "BK6");
//     autoMealCalculator("AA5", "BK7");
//     break;
// }
