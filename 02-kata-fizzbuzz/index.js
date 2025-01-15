//// ifelse
// for (let i = 1; i <= 1000; i++) {
//   const modulDe3 = i % 3 === 0;
//   const modulDe5 = i % 5 === 0;

//   if (modulDe3 && modulDe5) {
//     console.log('FizzBuzz');
//   } else if (modulDe3) {
//     console.log('Fizz');
//   } else if (modulDe5) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

//// if
// for (let i = 1; i <= 1000; i++) {
//   let msg = '';
//   const modulDe3 = i % 3 === 0;
//   const modulDe5 = i % 5 === 0;

//   if (modulDe3) {
//     msg += 'Fizz';
//   }
//   if (modulDe5) {
//     msg += 'Buzz';
//   }
//   console.log(msg);
// }

//// ternary
// for (let i = 1; i <= 15; i++) {
//   let msg = '';

//   i % 3 === 0 ? (msg += 'Fizz') : '';
//   i % 5 === 0 ? (msg += 'Buzz') : '';

//   console.log(msg || i);
// }

//// one line
for (let i = 1; i <= 1000; i++) {
  console.log(
    i % 15 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i
  );
}
