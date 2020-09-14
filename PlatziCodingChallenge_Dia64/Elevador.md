# PlatziCodingChallenge Dia 64 - Programar un elevador

Crea un algoritmo que le permita a los residentes de un edificio de 10 pisos utilizar su elevador para cambiar de pisos con los siguientes requerimientos:

Botones:

* Cada piso tiene un botón para subir y otro para bajar. Ambos se pueden activar en el mismo piso.
* Cuando se presiona un botón, aparece otro menú para seleccionar el piso al que se desea ir. Si presionas arriba, este menú solo debe mostrar los pisos arriba del actual. Y si presionas abajo, solo muestra los pisos debajo del actual.
* El primer piso de arriba no puede seleccionar el botón de ir hacia abajo. Y el última piso no puede ir hacia arriba.
* Los residentes no pueden subir y bajar en el mismo piso.
* Si el elevador atiende un piso porque va en una cierta dirección (digamos, hacía arriba), pero el piso tiene los botones de ambas direcciones activados, la dirección que no se está atendiendo actualmente (en este caso, abajo) debe seguir “pendiente”.

Cómo decide el elevador a qué pisos atender primero (órden):

* Prioridad 1: dependiendo de la dirección en la que se dirige actualmente el elevador (recuerda que también puede estar quieto)
* Prioridad 2: dependiendo de qué piso se encuentra más cerca (recuerda que aplica tanto para recoger residentes como para dejarlos en el piso que desean)
* Cada piso puede presionar sus botones en cualquier momento y el elevador debe evaluarlos “en tiempo real” y evaluarlos sin discriminar, es decir, sin importar si presionan el botón mientras el elevador está quieto, subiendo, bajando o atendiendo a personas de otros pisos.

Tiempo:

* El elevador tarda 2 segundos en subir o bajar cada piso.
* El elevador tarda 5 segundos en atender a las personas que quieren entrar.
* El elevador también tarda 5 segundos en atender a las personas que quieren bajar.
* Si hay personas que suben y bajan en el mismo piso, se debe sumar el tiempo en que bajan y suben (10 segundos).