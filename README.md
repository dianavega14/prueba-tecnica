# Prueba Técnica - Desarrollador Frontend

Aplicación frontend desarrollada como parte de la prueba técnica para el puesto de **Desarrollador Frontend**.
El proyecto consume la API pública de **Star Wars**: [https://swapi.info](https://swapi.info)

## 🚀 Demo

👉 [Ver aplicación desplegada en Vercel](https://prueba-tecnica-tawny-gamma.vercel.app/)

---

## 📌 Objetivo

Desarrollar una aplicación en **Next.js** que muestre un listado de películas de Star Wars y permita visualizar el detalle de cada una de ellas.

---

## 🖥️ Funcionalidades

### Pantalla 1: Listado de Películas

* Muestra un **listado de películas** de Star Wars.
* Cada película aparece como una caja con el nombre de la película.
* Al hacer clic en una película, se redirige a la **pantalla de detalle**.

### Pantalla 2: Detalle de Película

1. **Encabezado**

   * Nombre de la película.
   * Botón para volver al listado.

2. **Información de la película**

   * *Opening crawl*
   * *Fecha de estreno*
   * *Director*
   * *Productor*

---

## 🛠️ Tecnologías utilizadas

* [Next.js v15](https://nextjs.org/) con **App Router**
* [Tailwind CSS v4](https://tailwindcss.com/) para los estilos
* [Lucide Icons](https://lucide.dev/) para iconos
* **Next Actions** para el fetching de datos desde la API
* [Vercel](https://vercel.com/) para despliegue

---

## 📂 Estructura del proyecto

```
prueba-tecnica/
│── app/
│   ├── Film/[id]/        # Pantalla de detalle de película
│   │   └── page.tsx
│   ├── globals.css       # Estilos globales
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Pantalla de listado de películas
│
│── components/           # Componentes reutilizables
│   ├── openingCrawl.tsx  # Componente para el opening crawl
│   └── starfield.tsx     # Componente del fondo estrellado
│
│── lib/
│   └── actions.ts        # Lógica para fetching de datos
│
│── public/               
│── .gitignore
│── README.md
│── package.json
```

---

## ⚡ Instalación y ejecución local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/dianavega14/prueba-tecnica.git
   cd prueba-tecnica
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar en entorno local:

   ```bash
   npm run dev
   ```

4. Abrir en el navegador:

   ```
   http://localhost:3000
   ```

---

## 👤 Autora

* **Diana Vega**
* [GitHub](https://github.com/dianavega14)

