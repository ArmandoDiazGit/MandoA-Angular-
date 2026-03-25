# MandoAI (Angular)

AI-powered Angular app that lets you enter a prompt and displays the response returned by a **separate FastAPI backend** (hosted in a different repository).  
This repo contains **frontend only**.

---

## Features

- Prompt input + submit button
- Fetches AI responses from a FastAPI API
- Loading + error handling

---

## Tech Stack

- Angular
- TypeScript

---


## Prerequisites

- Node.js 18+ (recommended)
- npm
- Angular CLI
- A running FastAPI backend (from other repo)

---

## Setup

### 1) Clone and install

```bash
git clone https://github.com/ArmandoDiazGit/MandoA-Angular-.git
cd MandoAI
npm install
```

### 2) Start app

``` ng serve ```
- The app will run at: http://localhost:4200

## Backend Requirements

- This frontend expects your FastAPI backend to be running and accessible locally.
- Expected request body example: ``` { "prompt": "Tell me a fun fact about San Francisco" } ```

https://github.com/user-attachments/assets/22cc4782-86b8-4453-876e-0491bd3120e7
  
