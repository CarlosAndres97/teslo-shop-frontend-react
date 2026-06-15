# Teslo Shop Frontend (React)

Aplicación frontend para una tienda en línea con módulo público, autenticación y panel administrativo para gestión de productos.
<img width="1894" height="894" alt="image" src="https://github.com/user-attachments/assets/a6e6e6d0-d726-4668-8109-5746302bf208" />


## Requisitos

- Node.js 20+
- Backend de Teslo Shop disponible (por defecto usando `VITE_API_URL`)

## Configuración local

1. Clona el repositorio.
2. Copia el archivo `.env.template` y renómbralo como `.env`.
3. Configura las variables de entorno (especialmente `VITE_API_URL`).
4. Instala dependencias:

```bash
npm install
```

5. Inicia el entorno de desarrollo:

```bash
npm run dev
```

## Scripts disponibles

- `npm run dev`: inicia Vite en modo desarrollo.
- `npm run build`: compila TypeScript y genera build de producción.
- `npm run lint`: ejecuta ESLint sobre el proyecto.
- `npm run preview`: sirve localmente el build de producción.

## Tecnologías usadas y cómo se implementaron

### React 19 + TypeScript + Vite (SWC)
- El proyecto está montado con React y TypeScript para tipado fuerte de componentes, props y respuestas del API.
- Vite se usa como bundler y servidor de desarrollo, con `@vitejs/plugin-react-swc` para transformación rápida.
- La entrada principal está en `src/main.tsx` y el bootstrap de la app en `src/TesloShopApp.tsx`.

### React Router
- Se implementa navegación con `createHashRouter` en `src/app.router.tsx`.
- Se organiza en rutas públicas (`/`), autenticación (`/auth`) y administración (`/admin`).
- Se usan layouts por módulo y rutas protegidas (`AdminRoute`, `NotAuthenticatedRoute`) para controlar acceso según estado de sesión.

### Zustand (estado global de autenticación)
- El estado de autenticación se centraliza en `src/auth/store/auth.store.ts`.
- Define estado de usuario/token y acciones como `login`, `register`, `logout` y `checkAuthStatus`.
- El token se persiste en `localStorage` para mantener sesión entre recargas.

### TanStack React Query
- Se utiliza para manejo de estado asíncrono, caché y sincronización con backend.
- En `src/TesloShopApp.tsx` se configura `QueryClientProvider`.
- Hooks como `useProducts` encapsulan consultas y filtros de productos.
- También se usa para verificar sesión periódicamente (`checkAuthStatus`) y mantener rutas protegidas actualizadas.

### Axios
- Cliente HTTP centralizado en `src/api/tesoApi.ts`.
- Se configura `baseURL` desde variables de entorno.
- Se agrega interceptor para adjuntar el token `Bearer` en cada request autenticado.

### Tailwind CSS v4 + shadcn/ui + Radix UI
- Tailwind v4 se integra vía plugin de Vite y estilos globales en `src/index.css`.
- shadcn/ui está configurado en `components.json` con alias del proyecto.
- Se reutilizan componentes UI (botones, inputs, tablas, etc.) construidos sobre Radix para accesibilidad y consistencia visual.

### React Hook Form
- Se usa en formularios complejos del panel admin, por ejemplo `ProductForm`.
- Permite registro de campos, validaciones y manejo eficiente de formularios sin re-render innecesario.

### Librerías de UI/UX
- `lucide-react` para iconografía.
- `sonner` para notificaciones toast.

## Estructura funcional (resumen)

- `src/shop`: experiencia pública de tienda (listado, filtros y detalle).
- `src/auth`: autenticación y registro.
- `src/admin`: dashboard y mantenimiento de productos.
- `src/components`: componentes compartidos (`ui` y `custom`).
- `src/api`, `src/interfaces`, `src/lib`: infraestructura común de red, contratos y utilidades.
