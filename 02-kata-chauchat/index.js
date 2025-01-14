const charger = ['pium', 'pium', 'pium', 'pium', 'pium', 'pium', 'pium'];

function shootChauchat(charger) {
  const probability = 80;
  const isChauchatPillada = Math.random() * 101 < probability;

  if (isChauchatPillada) {
    console.log('Illo, me quedao pillá!');
    return;
  }

  let shotsCounter = 0;
  charger.forEach((carga) => {
    shotsCounter++;
    if (shotsCounter % 3 === 0) {
      console.log(' ');
    }
    console.log(carga);
  });
}

shootChauchat(charger);
