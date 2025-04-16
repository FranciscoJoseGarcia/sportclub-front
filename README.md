# SportClub Frontend

Frontend para la aplicación de beneficios de SportClub, desarrollado con Vite, React, TypeScript y Tailwind CSS.

## Características

- Lista de beneficios con paginación y búsqueda
- Detalles de cada beneficio
- Sistema de favoritos con persistencia local
- Diseño responsive
- Interfaz moderna y amigable

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (viene incluido con Node.js)
- [Git](https://git-scm.com/)

## Configuración del Proyecto

### 1. Clonar el Repositorio

```bash
git clone https://github.com/FranciscoJoseGarcia/sportclub-front.git
cd sportclub-front
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

Editar el archivo `.env` y configurar:

```
VITE_API_URL=http://localhost:3000/api
```

### 4. Configurar el Backend

El proyecto requiere que el backend esté en ejecución. Asegúrate de:

1. Tener el repositorio del backend clonado
2. Seguir las instrucciones de instalación del backend
3. Iniciar el servidor backend en el puerto 3000

### 5. Iniciar la Aplicación

En una terminal, ejecuta:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── BenefitHeader.tsx
│   ├── BenefitImage.tsx
│   ├── BenefitInfo.tsx
│   ├── FavoriteButton.tsx
│   ├── Header.tsx
│   ├── Loading.tsx
│   └── ErrorDisplay.tsx
├── hooks/             # Custom hooks
│   ├── useBenefits.ts
│   ├── useBenefitDetails.ts
│   └── useSearch.ts
├── pages/            # Componentes de página
│   ├── BenefitsList.tsx
│   ├── BenefitDetails.tsx
│   └── NotFound.tsx
├── services/         # Servicios y API
│   └── api.ts
├── types/           # Tipos y interfaces
│   └── types.ts
├── utils/           # Utilidades
│   ├── dateHelpers.ts
│   └── favoritesHelpers.ts
└── App.tsx         # Componente principal
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm test` - Ejecuta los tests
- `npm run test:coverage` - Ejecuta los tests con reporte de cobertura

## Tecnologías Utilizadas

- **React** - Biblioteca para construir interfaces de usuario
- **TypeScript** - JavaScript con tipado estático
- **Tailwind CSS** - Framework CSS utilitario
- **React Router** - Enrutamiento para aplicaciones React
- **Axios** - Cliente HTTP para solicitudes API
- **Vite** - Herramienta de desarrollo rápido
- **Jest** - Framework de testing

## Configuración de Desarrollo

### Vite

El proyecto utiliza la configuración predeterminada de Vite. Para personalizarla, modifica `vite.config.ts`.

### Tailwind CSS

Los estilos están configurados en `tailwind.config.js`. Puedes personalizar:
- Colores
- Espaciado
- Tipografía
- Breakpoints

### TypeScript

La configuración de TypeScript está en `tsconfig.json`. Incluye:
- Strict mode
- Path aliases
- Configuración de módulos

## Integración con la API

La aplicación se conecta al backend en `http://localhost:3000/api`. Asegúrate de:

1. Tener el backend en ejecución
2. Verificar que la URL en `.env` sea correcta
3. Comprobar que el backend esté respondiendo en `/api/benefits`

## Testing

El proyecto utiliza jest para tests. 

Para ejecutar los tests:
```bash
npm test
```

Para ver el reporte de cobertura:
```bash
npm run test:coverage
```

## Solución de Problemas

### Problemas Comunes

1. **Backend no responde**
   - Verifica que el backend esté en ejecución
   - Comprueba la URL en `.env`
   - Revisa los logs del backend

2. **Errores de TypeScript**
   - Verifica las importaciones
   - Comprueba los tipos en `types.ts`

3. **Problemas de Estilos**
   - Verifica la configuración de Tailwind
   - Comprueba las clases en los componentes
   - Reinicia el servidor de desarrollo


© 2025 Francisco José García. Todos los derechos reservados.