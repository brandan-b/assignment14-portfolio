# Assignment 14 - Portfolio (Create React App + Docker)

This repo contains a **Create React App** portfolio site that uses a small component library (local) and ships a **production build inside Docker**. The container listens on **port 5575** as required.

- Container name (when you run it): **`Brajkovich_Brandan_coding_assignment14`**
- Site working directory in the image: **`/Brajkovich_Brandan_final_site`**
- Final app URL: **http://127.0.0.1:5575**

## Prereqs
- Windows 10/11
- VS Code
- Node.js 20 LTS (recommended) - optional if you only use Docker
- Docker Desktop

> Line endings: a `.gitattributes` is included to normalize endings and avoid CRLF/LF diffs on GitHub.

---


## 1) Build & run with Docker (production @ 5575)
```bash
# 1) Build the image
docker build -t brajkovich_brandan_final_site:latest .

# 2) Run the container (name and port per assignment)
docker run --rm -d --name Brajkovich_Brandan_coding_assignment14 -p 5575:5575 brajkovich_brandan_final_site:latest

# 3) Open the site
# -> http://127.0.0.1:5575

# 4) Stop the container when finished
docker stop Brajkovich_Brandan_coding_assignment14
```

**What the Dockerfile does**
- Uses a multi‑stage build: first stage builds the React production bundle.
- Final image is a minimal Node Alpine image.
- **Working directory** is `/Brajkovich_Brandan_final_site` (requirements).
- Serves the static **production build** from `./build` using a tiny Express server on **port 5575**.

## 2) Project structure
```
assignment14-portfolio/
  public/                 # static assets
  src/
    component-library/    # simple local component library used by the site
    content/              # data for Work, Skills, Resources
    pages/App.js
    index.js, index.css
  server.cjs              # minimal server to host production build at :5575
  Dockerfile
  .dockerignore
  .gitattributes
  .github/workflows/ci.yml
  README.md



---

## Rubric Mapping
- **Deployment pipeline:** Dockerfile + optional GitHub Actions.
- **Optimized web app:** Production build served via Express (gzip compression enabled).
- **CI/CD summary:** See section 7 and comments in Dockerfile + README steps.
