const args = process.argv.splice(2)
console.log(args);

setTimeout(() => {
  process.stdout.write('\x07');
}, 3000);

setTimeout(() => {
  process.stdout.write('\x07');
}, 5000);

setTimeout(() => {
  process.stdout.write('\x07');
}, 9000);

setTimeout(() => {
  
  process.stdout.write('\x07'); 
}, 10000);

setTimeout(() => {
  
  process.stdout.write('\x07   \n'); 
}, 15000);