

const spinner = () => {
  let time = 100;
  for(let i = 0; i < 9; i++) {
    let string ="";
    switch(i % 4) {
      case 0:
        string = "\r|   ";
        break;
      case 1:
        string = "\r/   ";
        break;
      case 2:
        string = "\r-   ";
        break;
      case 3:
        string = "\r\\   ";
        break;
    }
    setTimeout(() => {
      process.stdout.write(string); 
    }, time);
    time += 200;
  }
  setTimeout(() => {
    process.stdout.write('\n'); 
  }, time);
}
spinner();


//OR this would work too
// const spinner = array => {
//   time = 100;
//   for(const string of array) {
//     setTimeout(() => {
//       process.stdout.write(string); 
//     }, time);
//     time += 200;
//   }
//   setTimeout(() => {
//     process.stdout.write("\n"); 
//   }, time);
// }

// spinner(["\r|   ", "\r/   ", "\r-   ", "\r\\   ","\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "]);