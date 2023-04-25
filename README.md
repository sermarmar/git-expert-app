
# Instalación y configuración de Jest + React Testing Library

## En proyectos de React + Vite

1. Instalaciones:
```bash
npm add --dev jest babel-jest @babel/preset-env @babel/preset-react
npm add --dev @testing-library/react @types/jest jest-environment-jsdom  
```
2. Opctional. Si usamos Fetch API en el proyecto:
```bash
npm add --dev whatwg-fetch  
```
3. Actualizar los scripts del package.json
```json
"scripts": {
    ...
    "test": "jest --watchAll"
}
```
4. Crear la configuración de babel **babel.config.js**
```javascript
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```
5. Opcional, pero eventualmente necesario, crear Jest config y setup:\

**jest.config.js**
```javascript
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```
**jest.setup.js**
```javascript
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```
