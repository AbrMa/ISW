# ISW
Proyecto final del curso de Ingeniería de Software ESCOM 2023 con el profesor Marko Gonzalez.

DiabeticOS es una aplicación web para el registro de medicamentos, dietas y ejercicios de personas con diabetes. 


![248143702-173dba2f-74dd-4bf2-a2c6-6f486f5c4600](https://github.com/AbrMa/ISW/assets/8070765/c124dfd4-a5e0-4b24-afbb-48d62cfb61b0)

<img width="1162" alt="248143906-85c19b50-8b1e-4ab3-959a-eddb6d692cdd" src="https://github.com/AbrMa/ISW/assets/8070765/b7b2cbd3-dd0b-4885-8d2c-901b1477a4ce">

## Documentación

- [Tercer Milestone](https://docs.google.com/document/d/1gN_dNSEHO716eH-g3t_bKnr7FsIW83CnUa69HoyqPTw/edit?usp=sharing)
- [Presentación](https://drive.google.com/file/d/1JHXXr_gCZbT54GFBlsE-ajNMCmqkJqL8/view?usp=sharing)
- [¿Cómo utiilizar la API?](https://github.com/AbrMa/ISW/wiki/%C2%BFC%C3%B3mo-utilizar-la-API%3F)

## Capturas del sistema

<img width="1162" alt="248143906-85c19b50-8b1e-4ab3-959a-eddb6d692cdd" src="https://github.com/AbrMa/ISW/assets/8070765/6abe15e3-4f0f-496f-99aa-672cf744cd4f">

<img width="995" alt="248141955-a906b838-8c88-4b2e-a6f7-f119cec2c298" src="https://github.com/AbrMa/ISW/assets/8070765/36cf5ce8-d6b4-4eea-9e72-c8b353532674">

<img width="970" alt="248141991-8d586265-ce6c-4e97-bf5f-9558736538dc" src="https://github.com/AbrMa/ISW/assets/8070765/87b91503-6d2c-48c1-a16f-786db1cce68e">

<img width="999" alt="248142016-e209d291-f994-4656-a06c-47b57535a982" src="https://github.com/AbrMa/ISW/assets/8070765/cbcc2b67-92e8-4219-899b-121fe64f43a8">


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

<img width="356" alt="248141643-0ac4a16e-ee71-4045-8fe8-4c4b68883bdf" src="https://github.com/AbrMa/ISW/assets/8070765/3b53193f-ec3c-4478-a64a-65ca7c9c8a3b">

### Frontend

Cambiar a la carpeta de frontend y ejecutar los siguientes comandos

```console
$ npm i
$ node server.js
```

<img width="827" alt="248141585-dca21ca8-3af7-49eb-81f3-ce0e9c00173d" src="https://github.com/AbrMa/ISW/assets/8070765/b924f484-b6a4-481d-85f1-144d81f11ab6">

## ¿Cómo contribuir al proyecto?

Para mayor información revisar el artículo de [contribuciones](https://github.com/AbrMa/ISW/wiki/Flujo-de-trabajo) en la wiki 
