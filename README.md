# Modern Developer Portfolio & Artifacts Showcase

A developer portfolio and engineering artifacts showcase built with **Vite**, **React 18**, and **Lucide Icons**, configured for **GitHub Pages** hosting.

---

## 🌟 Highlights & Features

- **⚡ Built with Vite**: Sub-second dev server, instant HMR, optimized production asset bundles.
- **🖼️ Homepage with Profile Photo**:
  - Profile image with ambient glowing backdrop and status badge.
  - Headline, role badges, credibility metrics, and bio.
  - Skills categorized by frontend, backend, AI & cloud.
  - Career timeline & interactive contact cards with 1-click email copy.
- **💎 Dedicated Artifacts Page**:
  - Live real-time search across titles, descriptions, and tech stacks.
  - Category filters (*AI & Agents*, *Web Applications*, *Developer Tools*, *Systems & Infrastructure*).
  - Detailed inspection modal breaking down problem statements, solution architecture, and performance benchmarks.
- **🚀 100% GitHub Pages Ready**:
  - Relative asset resolution (`base: './'`) so it works on user sites (`username.github.io`), project sites (`username.github.io/myportfolio/`), and custom domains.
  - Hash routing (`#/` and `#/artifacts`) to eliminate 404s on browser reloads.
  - Automated deployment workflow included (`.github/workflows/deploy.yml`).
  - Dark & Light theme mode with persistent preferences.

---

## 📁 Project Structure

```text
myportfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Actions deployment to Pages
├── public/
│   ├── avatar.svg              # Default profile avatar illustration
│   └── artifacts/              # Showcase vector illustrations & diagrams
│       ├── artifact-agentic-engine.svg
│       ├── artifact-neural-canvas.svg
│       ├── artifact-cloud-orchestrator.svg
│       ├── artifact-kv-store.svg
│       ├── artifact-design-system.svg
│       └── artifact-market-intelligence.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header with navigation, theme toggle, & mobile menu
│   │   ├── HeroSection.jsx     # Profile photo, bio, CTAs, & stats
│   │   ├── FeaturedArtifacts.jsx # Spotlight previews on homepage
│   │   ├── ArtifactsPage.jsx   # Dedicated artifacts gallery with search & filters
│   │   ├── ArtifactModal.jsx   # Deep-dive architecture modal
│   │   ├── SkillsSection.jsx   # Categorized skills grid
│   │   ├── ExperienceSection.jsx # Career history timeline
│   │   ├── ContactSection.jsx  # Contact cards & clipboard copy
│   │   └── Footer.jsx          # Footer & quick links
│   ├── data/
│   │   └── portfolioData.js    # Single file to customize all bio, photo, & artifacts!
│   ├── App.jsx                 # Main application & routing logic
│   ├── index.css               # Design system & dark/light theme styles
│   └── main.jsx                # Application root entry
├── index.html                  # HTML entry with SEO & Google Fonts
├── vite.config.js              # Vite configuration with relative base
└── package.json
```

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in `./dist`.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🎨 How to Customize

### 1. Replace the Homepage Photo
1. Place your photo file (e.g., `myphoto.jpg` or `profile.png`) into the `public/` directory.
2. Open [`src/data/portfolioData.js`](src/data/portfolioData.js) and change:
   ```javascript
   export const personalInfo = {
     name: "Your Name",
     // ...
     photo: "./myphoto.jpg", // <--- Point to your photo here!
   };
   ```

### 2. Update Your Personal Info & Links
In [`src/data/portfolioData.js`](src/data/portfolioData.js), you can edit:
- `personalInfo`: Name, role, location, headline, bio paragraphs, and stats.
- `socialLinks`: GitHub, LinkedIn, Twitter/X, and Email.
- `skillCategories`: Categorized skills and technologies.
- `experienceTimeline`: Work history and roles.

### 3. Add or Modify Artifacts
Add or edit items in the `artifacts` array in [`src/data/portfolioData.js`](src/data/portfolioData.js):
```javascript
{
  id: "my-new-artifact",
  title: "My Custom Project",
  category: "Web Applications",
  shortDescription: "A concise overview for the card preview.",
  fullDescription: "Detailed architectural breakdown shown in the modal.",
  image: "./artifacts/my-image.png",
  date: "2024",
  status: "Featured Artifact",
  tags: ["React", "TypeScript", "Node.js"],
  metrics: "Sub-50ms latency • 10k users",
  keyFeatures: [
    "Feature 1 with key highlight",
    "Feature 2 with architectural innovation"
  ],
  liveUrl: "https://your-demo-url.com",
  githubUrl: "https://github.com/your-username/repo",
  featured: true
}
```

---

## 🚀 How to Host on GitHub Pages

You have two simple options to deploy to GitHub Pages:

### Option A: Automatic Deployment with GitHub Actions (Recommended)

1. Create a repository on GitHub (e.g. `myportfolio` or `<your-username>.github.io`).
2. Push this project to your repository:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio and artifacts website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. Go to your repository on GitHub:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every time you push to the `main` branch, the workflow (`.github/workflows/deploy.yml`) will automatically build and publish your site!

---

### Option B: 1-Command Deploy via `gh-pages`

1. Push your code to GitHub.
2. Run:
   ```bash
   npm run deploy
   ```
   This will automatically build your app and push the `./dist` folder to a `gh-pages` branch.
3. In GitHub repository **Settings** > **Pages**:
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Set the branch to `gh-pages` and folder to `/(root)`.
   - Click **Save**.

Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/`!

