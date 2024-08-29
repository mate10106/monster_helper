# Summon Your Monster Helper

## 🤖 Introduction

Discover the ideal monster companion to make your everyday tasks easier and more fun! Whether you're looking for help with cleaning, cooking, organizing, or just need a morale boost, we have a monster with the perfect abilities for you.

Click on a monster below to explore their unique skills and see how they can become a valuable part of your daily routine!"

## ⚙️ Tech Stack

- Next.js
- Typescript
- Convex
- Clerk
- Tailwind CSS

## 🚀 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/mate10106/monster_helper.git
cd monster_helper
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named **.env.local** in the root of your project and add the following content:

```bash
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=
```

Replace the placeholder values with your actual Clerk & Convex credentials. You can obtain these credentials by signing up on the **Clerk** and **Convex** website.

**Running the Project**

```bash
npm run dev
```

Open **http://localhost:3000** in your browser to view the project.
