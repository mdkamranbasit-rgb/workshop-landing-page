# AI & Robotics Summer Workshop — Full-Stack Landing Page & Enquiry Portal

A highly polished, responsive, and production-ready full-stack educational workshop landing page. Features an interactive block-coding simulation playground, a responsive course specs board, a fluid FAQ accordion, client-side checked text inputs, and a server-side high-performance registration controller.

---

## 📂 Project Structure

This workspace is structured as a **unified full-stack monorepo** using **Vite + Express.js**:

- `/tsconfig.json` — Shared TypeScript compiler configurations.
- `/package.json` — Integrated dependency manager & build scripts.
- `/server.ts` — Full-stack Express.js server entry point with Vite middleware proxy routing.
- `/src/` — React frontend application space.
  - `main.tsx` — Client bootstrap file.
  - `App.tsx` — Main page component containing the dynamic alert bar, sections grid, and footer.
  - `data.ts` — Centralized workshop specifications, learning outcomes, and FAQ objects.
  - `types.ts` — Shared static and API TypeScript interfaces.
  - `index.css` — Global stylesheets introducing Space Grotesk header custom typography.
  - `components/` — Sub-divided UI elements:
    - `Header.tsx` — Responsive navigation with mobile slide-overs.
    - `Hero.tsx` — Title headings and the interactable kid-block visual robot simulator.
    - `Details.tsx` — Specs grid detailing target age, duration, start dates, and tuition discounts.
    - `LearningOutcomes.tsx` — Target curriculum bento cards.
    - `FAQ.tsx` — Interactive disclosures supporting animated accordion expansion.
    - `RegistrationForm.tsx` — Intake form with user validations, loading buttons, and server persistence checklists.

---

## 🛠️ Step-by-Step Installation & Local Run Instructions

### 1. Prerequisites
Ensure you have **Node.js (v18 or higher)** and **npm** installed.

### 2. Setup Commands
Execute the following commands in your terminal to unpack the workspace, install package modules, and boot up development servers:

```bash
# 1. Boot up package manager and install dependencies
npm install

# 2. Boot up fullstack Development environment (serves Port 3000)
npm run dev

# 3. Transpile and build optimization packages for production deployment
npm run build

# 4. Spin up server inside production environment
npm run start
```

---

## 🔒 Environment Variable Configuration (`.env`)

Create a `.env` file in the project's root folder taking variables defined in `.env.example`:

```env
# Port on which the server starts (hardcoded inside AI Studio container environment, standard is 3000)
PORT=3000

# App environment configuration
NODE_ENV="development"
```

---

## 🚀 Cloud Deployment Instructions

### Option A: Vercel Deployment (Serverless Frontend & API Proxy)
Vercel supports serverless full-stack deployments directly through direct configuration parsing:

1. Connect your Github Repository to **Vercel Dashboard**.
2. Set the **Framework Preset** to `Vite`.
3. Set the **Root Directory** as `/`.
4. Configure environment setups inside Vercel Dashboard parameters:
   - Add `NODE_ENV` set to `production`.
5. Specify the Build and Output parameters:
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
6. To enable `/api/*` proxies on serverless, add a `/vercel.json` file directing `/api/(.*)` towards your Express backend, or deploy the Express backend separately (on Render) and link the URL.

### Option B: Render Deployment (Full-Stack Continuous Integration)
Render handles Docker/Node full-stack platforms seamlessly:

1. Create a **New Web Service** inside **Render Dashboard** and connect your repository.
2. Configure environment settings:
   - **Language/Runtime**: `Node`
   - **Build Command**: `npm run build` (This bundles client code inside `dist/` and runs Esbuild compiler on `server.ts` into a fast, portable CommonJS `dist/server.cjs` file)
   - **Start Command**: `npm run start`
3. Add environmental variables inside the Render Config Panel:
   - Add `NODE_ENV` set to `production`.
4. Render automatically exposes ports matching routing requests. Click **Deploy**.

---

## 📌 Suggested Git Commit Sequence

To ensure an elegant, pristine git record for internship submissions, follow this step-by-step commit progress:

1. **`feat: initial full-stack project scaffold and design foundations`**
   - Introduces directory structures, custom index.css typographies, shared TypeScript models in `/src/types.ts`, and core mock dataset arrays in `/src/data.ts`.
2. **`feat: build modular responsive UI components for landing experience`**
   - Creates `Header.tsx`, `Details.tsx` matrix, `LearningOutcomes.tsx`, and the custom animated accordion disclosures in `FAQ.tsx`.
3. **`feat: implement interactive junior block-code simulator in Hero`**
   - Designs the custom `Hero.tsx` featuring visual block elements, active step micro-highlights, and the reactive SVG robotic rover.
4. **`feat: assemble Express.js server portal and memory cache module`**
   - Configures `/server.ts` with Vite middlewares and sets up quick-response concurrent registration cache lists.
5. **`feat: connect registration form inputs with server validation APIs`**
   - Updates `RegistrationForm.tsx` with validation feedback, handles spinners when requesting `POST /api/enquiry`, and renders in-memory registration success sheets.
6. **`docs: compile production readme guidelines and submission portfolios`**
   - Builds this documentation.

---

## 📝 Submission Portfolio Note (120 Words)

Our approach centers on creating a highly responsive, visual, and secure full-stack experience tailored to kids and parents. The interface introduces bespoke brand styling using **Tailwind CSS**, pairing technological display typography with micro-animations from **motion** to capture enthusiasm. To represent actual laboratory workshops, an interactive Junior block-coding editor is developed inside the hero panel to let prospective students compile functional logic directly on the screen.

The backend architecture utilizes **Express.js** providing strict validation schemas alongside memory cache modeling for complete registration persistence. A robust concurrent in-memory datastore activates to showcase features instantly with zero installation bottleneck. Future enhancements include implementing live WebSockets/Socket.IO to enable synchronized visual coding screens, multiplayer code arenas, and real-time chat with robotics course mentors.
