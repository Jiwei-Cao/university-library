# 📚 University Library Management System - Tech Stack Analysis
A full-stack University Library Management System built with Next.js, TypeScript, and PostgreSQL.  
Features include user registration with university ID, book catalog browsing, borrowing system,  
role-based access for admins, and responsive UI. Uses Redis caching, rate limiting, and ImageKit for media.

## 🛠 Built With

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)  
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)  
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)  
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![ImageKit](https://img.shields.io/badge/ImageKit-18A999?style=for-the-badge&logo=imagekit&logoColor=white)](https://imagekit.io/)  
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🖥 Core Framework & Runtime
- **Next.js 15.1.2** – React framework with App Router  
- **React 19.0.0** – UI library  
- **TypeScript 5** – Type-safe JavaScript  
- **Node.js** – JavaScript runtime

## 🗄 Database & ORM
- **PostgreSQL (Neon Database)** – Primary database  
- **Drizzle ORM 0.38.4** – TypeScript ORM  
- **Redis (Upstash)** – Caching and rate limiting  
- **Drizzle Kit** – Database migrations and management

## 🔐 Authentication & Security
- **NextAuth.js v5** – Authentication solution  
- **bcryptjs** – Password hashing  
- **Upstash Ratelimit** – Rate limiting protection

## 🎨 UI & Styling
- **Tailwind CSS 3.4.17** – Utility-first CSS framework  
- **Radix UI** – Headless UI components (Avatar, Label, Toast, etc.)  
- **shadcn/ui** – Component library built on Radix UI  
- **Lucide React** – Icon library  
- **React Hook Form 7.61** – Form management  
- **Zod 3.25** – Schema validation  
- **Sonner** – Toast notifications  
- **next-themes** – Dark mode support

## 🖼 File Storage & Media
- **ImageKit** – Image optimization and delivery CDN  
- **imagekitio-next** – Next.js integration for ImageKit

## 🛠 Development Tools
- **ESLint** – Code linting  
- **Prettier** – Code formatting  
- **PostCSS** – CSS processing  
- **Autoprefixer** – CSS vendor prefixing

## 🧪 Key Features
1. **User Management** – Registration and authentication with university ID  
2. **Book Catalog** – Browse, search, and view book details  
3. **Admin Panel** – Manage books, users, and library operations  
4. **Borrowing System** – Track book loans and returns  
5. **Role-based Access** – User and Admin roles  
6. **Rate Limiting** – API protection  
7. **Responsive Design** – Mobile-friendly interface
