let weeks= new Array(7);
weekDAY[1] = 'Sunday' ; 
weekDAY[2] = 'Monday';
weekDAY[3] = 'Tuesday';
weekDAY[4] = 'Wednesday';
weekDAY[5] = 'Thursday';
weekDAY[6] = 'Friday';
weekDAY[7] = 'Saturday';

function weeksNumbersTowards(x) {
    if(x < 1 || x > 7) {
        return null;
      }
      else {
        return weekDAY[x];
      } 
    }