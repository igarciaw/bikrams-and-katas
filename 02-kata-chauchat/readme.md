![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# :shinto_shrine: - Chauchat #

## Introducción ##

![](comic-funcionamiento.gif)

La ametralladora con mayor producción durante la Primera Guerra Mundial, la Chauchat fue la primera de este tipo de armas lo suficientemente ligera como para poder ser operada por un sólo soldado, incluso para disparar desde la cintura en marcha. Utilizada por los ejércitos franceses así como por los norteamericanos, estos últimos desvelaron una serie de fallos que la convirtieron también en probablemente la peor ametralladora de la historia.

![](funcionamiento.gif)

Sus principales problemas eran

1. El cargador estaba abierto por un lado y el lodo bloqueaba el mecanismo, haciéndola inservible.

2. Se calentaba demasiado, por lo que se recomendaba a los soldados disparar solamente en ráfagas cortas.

![](sonrisas-y-lagrimas.webp)

## Requisitos ##

- Operadores
  
- Variables

- Arrays
  
- Condicionales

- Funciones
  
- Bucles


## Iteraciones ##

Nuestro ejercicio, será hacer una Chauchat virtual, que reproduzca su comportamiento.

1. Por un lado habrás de crear una variable `cargador` donde habrá de guardar unos 7 **_"pium!"_**

2. El otro elemento será nuestra **chauchat**, que "hace cosas", y será donde pondremos el cargador para que haga cosas.

    `chauchat(cargador)`

    Cuando ejecutemos dicho código, veremos impresos todos los **_"pium!"_** del cargador, uno tras otro.

    En el caso de 3 **_"pium!"_** en el cargador, veremos en la consola:

    ```
    pium!
    pium!
    pium!
    ```

-------------------------------------------------------------------------------

_Zona premium:_

Representaremos los 2 principales problemas:

3. Al tener el cargador abierto, era posible que se bloquease si algo entraba, como una "ramita".

    Digamos que existe un 80% de probabilidad de que se quede "pillada":

    - Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: _"Illo, me he quedao pillá!"_

    En este enlace sabrás cómo generar números aleatorios: [Math.random()](https://www.w3schools.com/js/js_random.asp)

4. Para evitar que se caliente y se bloquee, cada 3 disparos se imprimirá un espacio:

    ```
    pium!
    pium!
    pium!

    pium!
    pium!
    pium!

    pium!
    pium!
    pium!
    ```
