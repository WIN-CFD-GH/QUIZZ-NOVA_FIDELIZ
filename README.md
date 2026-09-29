# 🚀 MISIÓN WINNER - NOVA FIDELIZ - QUIZZES
### Plataforma Gamificada de Evaluación Espacial para Asesores de Fidelizaciones

---

## 🌌 Descripción General
**MISIÓN WINNER** es una aplicación web futurista diseñada para la evaluación, seguimiento y acompañamiento continuo de asesores en formación. A través de una narrativa inmersiva de exploración interplanetaria y una cabina de vuelo espacial, los asesores rinden evaluaciones diarias de 10 preguntas equilibradas (3 fáciles, 4 intermedias, 3 difíciles), ascienden en la **Carrera Espacial** de 8 rangos jerárquicos y se gradúan como **TRIPULANTES OFICIALES DE LA NAVE FIDELIZACIONES**.

---

## 🛸 Módulos de la Plataforma

| Archivo | Módulo | Descripción |
|---|---|---|
| [`index.html`](index.html) | **Portal del Participante** | Registro espacial sin contraseñas: DNI, Nombre, Área, Día, Código Capa y elección de avatar. Detección automática de historial previo. |
| [`quiz.html`](quiz.html) | **Cabina de Misión & Quizzes** | Generador de 10 preguntas (3-4-3), temporizador, racha de aciertos, síntesis de voz (TTS) para audio, feedback en vivo y lanzamiento de cohete al finalizar. |
| [`dashboard.html`](dashboard.html) | **Centro de Control & KPIs** | Tablero analítico con KPIs en tiempo real, evolutivo por asesor con gráficos Chart.js, ranking top 10 y tabla dinámica con filtros y exportación a Excel. |
| [`banco_preguntas.html`](banco_preguntas.html) | **Hangar de Preguntas** | CRUD completo de preguntas, clasificación por día, nivel y categoría, importación/exportación en Excel (.xlsx) y respaldos JSON. |
| [`certificado.html`](certificado.html) | **Acreditación Espacial PDF** | Generación y descarga directa de certificados oficiales en PDF con sellos holográficos, código de verificación y diploma de graduación supremo. |

---

## 🎖️ Carrera Espacial MISIÓN WINNER (12 Niveles de Progresión)

Cada quiz aprobado representa un ascenso directo dentro de la Academia Espacial:

0. **Aspirante a Tripulante** 🛸 *(Nivel Inicial)*
1. **Cadete Espacial** 🚀 *(Día 1 Aprobado)*
2. **Explorador Orbital** 🛰️ *(Día 2 Aprobado)*
3. **Navegante Estelar** 🌠 *(Día 3 Aprobado)*
4. **Piloto de Transbordador** ✈️ *(Día 4 Aprobado)*
5. **Oficial de Navegación** 🎖️ *(Día 5 Aprobado)*
6. **Comandante de Expedición** 🧭 *(Día 6 Aprobado)*
7. **Capitán Interplanetario** 🪐 *(Día 7 Aprobado)*
8. **Guardián de la Galaxia WINNER** 🛡️ *(Día 8 Aprobado)*
9. **Embajador del Universo WINNER** 🌌 *(Día 9 Aprobado)*
10. **Comandante Supremo de la Academia** ⭐ *(Día 10 Aprobado)*
11. **Tripulante Oficial de la Misión WINNER - Nave Fidelizaciones** 👑 *(Día 11 Aprobado - Rango Máximo)*

> **Ceremonia de Graduación:** El Día 11 activa automáticamente la ceremonia con animación de hiperespacio, fanfarria musical, presentación holográfica de la **NAVE FIDELIZACIONES** y el mensaje de graduación oficial:
> *"Felicitaciones Tripulante. Has completado tu formación y has sido asignado oficialmente a la nave FIDELIZACIONES de la MISIÓN WINNER. Tu preparación ha concluido. El viaje recién comienza."*

---

## 🚀 Despliegue Multi-Plataforma

La aplicación está diseñada bajo el estándar **Jamstack** (HTML5, Vanilla CSS, JS ES6+) con persistencia dual (**Firebase Firestore** + **LocalStorage** de contingencia inmediata), haciéndola compatible al 100% con cualquier plataforma estática sin dependencias de compilación:

### 1. GitHub Pages
1. Sube este repositorio a tu cuenta de GitHub.
2. Ve a **Settings** > **Pages**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Haz clic en **Save** y tu plataforma estará en línea en segundos.

### 2. Vercel
1. Instala el CLI de Vercel (`npm i -g vercel`) o conecta el repositorio desde [vercel.com](https://vercel.com).
2. Ejecuta `vercel --prod` en la raíz del proyecto.

### 3. Netlify
1. Arrastra la carpeta `QUIZZES-MW-NF` directamente al panel de [Netlify Drop](https://app.netlify.com/drop).
2. O conecta tu repositorio de Git y asigna el directorio raíz.

### 4. Firebase Hosting
1. Instala Firebase CLI: `npm install -g firebase-tools`
2. Ejecuta `firebase login` y luego `firebase init hosting`.
3. Selecciona el directorio actual como `public` o ajusta `firebase.json`.
4. Ejecuta `firebase deploy`.

---

## ⚙️ Configuración de Firebase Firestore (Opcional)
Para sincronizar las evaluaciones en la nube con Firestore:
1. Abre [`firebase/firebase-config.js`](firebase/firebase-config.js).
2. Reemplaza los valores de `firebaseConfig` con las credenciales de tu proyecto en Firebase Console.
3. *Nota:* Si no configuras Firebase de inmediato, la plataforma funcionará fluidamente utilizando el almacenamiento local (LocalStorage / IndexedDB) sin ningún error.

---
© 2026 Academia Galáctica WINNER • Flota Nova Fidelizaciones.
