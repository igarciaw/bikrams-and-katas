// function promise(ms) {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(`${ms}s`);
//     }, ms * 1000)
//   );
// }
//
// async function temp(ms) {
//   return await promise(ms);
// }
// const oneSec = temp(1);
// const threeSec = temp(3);
// const fiveSec = temp(5);
//
// oneSec.then(console.log);
// threeSec.then(console.log);
// fiveSec.then(console.log);

///
// async function promise(ms) {
//   return await new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(`${ms}s`);
//     }, ms * 1000)
//   );
// }
//
// const oneSec = promise(1);
// const threeSec = promise(3);
// const fiveSec = promise(5);
//
// oneSec.then(console.log);
// threeSec.then(console.log);
// fiveSec.then(console.log);

////////
function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}

async function oneSecPromise() {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(randomNum());
    }, 1000)
  );
}
async function threeSecPromise() {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(randomNum());
    }, 1000 * 3)
  );
}

async function fiveSecPromise() {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(randomNum());
    }, 1000 * 5)
  );
}
const oneSec = oneSecPromise();
const threeSec = threeSecPromise();
const fiveSec = fiveSecPromise();

oneSec.then(console.log);
threeSec.then(console.log);
fiveSec.then(console.log);

Promise.all([oneSec, threeSec, fiveSec]).then((values) => {
  const sum = values.reduce((acc, current) => acc + current);
  console.log(sum);
});
