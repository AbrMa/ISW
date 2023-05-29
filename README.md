# ISW
Proyecto final del curso de Ingeniería de Software ESCOM 2023

## Tercer Milestone

[Link al archivo](https://docs.google.com/document/d/1ZxBMlGkUOWD7_F8A5R6ZfmielrzXwcnSJc9ytfArKaA/edit)

1. Correcciones (Cada quien tiene que hacer su parte)
    1. Marco teórico: Añadir investigación sobre las tecnologías que se estan utilizando en el proyecto (Jair)
    2. Justificación: Contextualizar. En México ..., uno de 6 personas tienen, sin embargo solo la mitad se cuida, es por eso que se propones... (Diana)
    3. Cronogramas: Cómo se representan los Milestones? (Jorge)
    4. Estimación: Corregir (Abraham)
    5. Investigar el formato adecuado para presentar los requerimientos funcionales y no funcionales. (Saúl)
    6. Casos de uso: Solo hay un usuario? (Jorge)

## Flujo de trabajo

Clonar repo

`git clone https://github.com/AbrMa/ISW.git`

Hay que verificar que nos encontremos en la rama principal

```console
$ git status
> On branch main
> Your branch is up to date with 'origin/main'.
> nothing to commit, working tree clean
```

Creamos una rama, podemos verificar con el comando `git status`

```console
$ git checkout -b <nombre de la rama>
```

Una vez que tengamos las modificaciones podemos agregar los archivos con 

```console
$ git add <nombre archivos>
```

O agregar todos los cambios con 

```console
$ git add .
```

Agregamos comentarios para los cambios 

```console
$ git commit -m "<comentatios sobre los cambios>"
```

Es importante revisar que tengamos los últimos cambios con 

```console
$ git pull origin main
```

Finalmente subimos los cambios 

```console
$ git push origin <nombre de la rama>
```

En la página del repo se debe de ver el siguiente botón, le damos click 
<img width="910" alt="Captura de pantalla 2023-05-28 a la(s) 21 43 39" src="https://github.com/AbrMa/ISW/assets/8070765/ab3f087d-4529-45e7-83f7-5cc936355993">

Damos una breve descripción de los cambios, podemos incluir capturas de pantalla etc. para hacer más comprensible el PR, y pulsamos el botón de "Create Pull Request"
<img width="925" alt="Captura de pantalla 2023-05-28 a la(s) 21 45 17" src="https://github.com/AbrMa/ISW/assets/8070765/3478bac8-a8e5-46d1-a972-c8758d9aef5a">

Agregamos reviewers para nuestro PR 
<img width="361" alt="Captura de pantalla 2023-05-28 a la(s) 21 45 37" src="https://github.com/AbrMa/ISW/assets/8070765/8ab25a21-d14d-45ba-afbd-22d9a953a671">

Finalmente cuando ya tengamos aprovaciones pulsamos en el botón de "Merge Pull Request" y confirmamos
<img width="938" alt="Captura de pantalla 2023-05-28 a la(s) 21 45 47" src="https://github.com/AbrMa/ISW/assets/8070765/d2b50049-2e6a-43e2-af1e-7ccbede85615">

## Ejecución Proyecto

### Backend

Debemos cambiar al directorio `api` y ejecutar

```console
$ npm i
$ node run dev
```
