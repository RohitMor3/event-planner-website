# Event Planner

A full-stack event planning application built with Next.js 16, Neon Auth, Prisma, and Neon Postgres. Users can create events, manage event details, generate invite links, and securely access their dashboard through authentication.

## Live Demo

🔗 **Live Application:** https://event-planner-website-vq58.vercel.app

---
## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Neon-00E699?style=for-the-badge&logo=neon&logoColor=black" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---
## Features

* User authentication and session management
* Secure route protection
* Create and manage events
* View event details
* Generate shareable invite links
* Responsive user interface
* Server-side rendering with Next.js App Router
* PostgreSQL database integration
* Production deployment on Vercel

---

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Server Actions
* Neon Auth
* Prisma ORM

### Database

* Neon Postgres

### Deployment

* Vercel

---

## Project Structure

```text
app/
├── dashboard/
├── events/
├── sign-in/
├── sign-up/

components/
├── dashboard-content
├── event-detail-content
├── ui/

lib/
├── auth/
├── prisma/

prisma/
├── schema.prisma
```

## Getting Started

### Prerequisites

* Node.js
* npm or pnpm
* Neon Database Account

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd event-planner
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=
NEON_AUTH_BASE_URL=
NEON_AUTH_COOKIE_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

## Database Schema

The application uses PostgreSQL through Prisma and includes models for:

* Users
* Events
* Event Invitations

---

## Challenges Solved

During development and deployment:

* Authentication setup with Neon Auth
* Session-based route protection
* Prisma and Neon Postgres integration
* Vercel deployment configuration
* Trusted domain configuration for production authentication
* TypeScript null-safety handling for authenticated sessions

---

## Future Improvements

* Event editing functionality
* Event deletion functionality
* RSVP tracking
* Email invitations
* Event analytics dashboard
* User profile management

---

## Author

**Rohit More**

If you found this project interesting, feel free to star the repository.
