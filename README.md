# ISW
Proyecto final del curso de Ingeniería de Software ESCOM 2023 con el profesor Marko Gonzalez.

DiabeticOS es una aplicación web para el registro de medicamentos, dietas y ejercicios de personas con diabetes. 

![diabeticos](https://github.com/AbrMa/ISW/assets/8070765/173dba2f-74dd-4bf2-a2c6-6f486f5c4600)

<img width="1162" alt="Captura de pantalla 2023-06-22 a la(s) 21 10 14" src="https://github.com/AbrMa/ISW/assets/8070765/85c19b50-8b1e-4ab3-959a-eddb6d692cdd">


## Documentación

- [Tercer Milestone](https://docs.google.com/document/d/1gN_dNSEHO716eH-g3t_bKnr7FsIW83CnUa69HoyqPTw/edit?usp=sharing)
- [Presentación](https://drive.google.com/file/d/1JHXXr_gCZbT54GFBlsE-ajNMCmqkJqL8/view?usp=sharing)
- [¿Cómo utiilizar la API?](https://github.com/AbrMa/ISW/wiki/%C2%BFC%C3%B3mo-utilizar-la-API%3F)

## Capturas del sistema

<img width="1043" alt="Captura de pantalla 2023-06-22 a la(s) 20 53 34" src="https://github.com/AbrMa/ISW/assets/8070765/c2009e88-e603-4834-b0f1-50312080a19a">

<img width="995" alt="Captura de pantalla 2023-06-22 a la(s) 20 53 58" src="https://github.com/AbrMa/ISW/assets/8070765/a906b838-8c88-4b2e-a6f7-f119cec2c298">

<img width="970" alt="Captura de pantalla 2023-06-22 a la(s) 20 54 11" src="https://github.com/AbrMa/ISW/assets/8070765/8d586265-ce6c-4e97-bf5f-9558736538dc">

<img width="999" alt="Captura de pantalla 2023-06-22 a la(s) 20 54 23" src="https://github.com/AbrMa/ISW/assets/8070765/e209d291-f994-4656-a06c-47b57535a982">

## ¿Cómo correr el proyecto?

### Backend

Generar un archivo llamado `.env` dentro de la carpeta `api`, el contenido del folder debe de ser el siguiente

```.env
DATABASE_URL="liga externa a la url de render (External Database URL )"
JWT_SECRET = "el secreto para el jwt, puede ser cualquiera"
```

Para mayor información sobre la liga de render se puede consultar el siguiente [artículo](https://render.com/docs/databases).

Posteriormente debemos cambiar al directorio `api` y ejecutar

```console
$ npm i
$ npm run dev
```

<img width="356" alt="Captura de pantalla 2023-06-22 a la(s) 20 51 40" src="https://github.com/AbrMa/ISW/assets/8070765/0ac4a16e-ee71-4045-8fe8-4c4b68883bdf">

### Frontend

Cambiar a la carpeta de frontend y ejecutar los siguientes comandos

```console
$ npm i
$ node server.js
```

<img width="827" alt="Captura de pantalla 2023-06-22 a la(s) 20 51 11" src="https://github.com/AbrMa/ISW/assets/8070765/dca21ca8-3af7-49eb-81f3-ce0e9c00173d">

## ¿Cómo contribuir al proyecto?

Para mayor información revisar el artículo de [contribuciones](https://github.com/AbrMa/ISW/wiki/Flujo-de-trabajo) en la wiki 
