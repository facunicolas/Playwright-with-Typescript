Practicas de Playwright

Este repositorio contiene mis ejercicios, pruebas y experimentos realizados con Playwright. El objetivo principal es profundizar en el uso de buenas prácticas en pruebas E2E (End-to-End).

En este proyecto, estoy implementando y aplicando los siguientes patrones de diseño y funcionalidades avanzadas de Playwright:

POM (Page Object Model): Estructuración del código para separar la lógica de las pruebas de los selectores de los elementos de la interfaz, mejorando la mantenibilidad y legibilidad.

Fixtures: Uso de fixtures personalizados para configurar el estado de las pruebas, gestionar la autenticación y preparar el entorno de forma limpia y reutilizable.
_________
NOTA IMPORTANTE: El archivo .env esta incluido en el repositorio solo para simplificar la ejecucion de las pruebas y no estaria incluido en un caso real de uso.
_________
Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1- Clona el repositorio:
git clone https://github.com/facunicolas/Playwright-with-Typescript.git

2- Instala las dependencias:
npm install

3- Instala los navegadores necesarios:
npx playwright install
_________
Cómo ejecutar las pruebas

Puedes ejecutar todas las pruebas con el siguiente comando:
npx playwright test

Para ver el reporte de resultados después de la ejecución:
npx playwright show-report
_________
Objetivos del Proyecto
- Aprender a estructurar proyectos de automatización escalables.
- Dominar el manejo de estados mediante fixtures.
- Implementar buenas prácticas de selectores y aserciones.
