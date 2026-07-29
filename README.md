# Anuragg Sharma — Actor Portfolio

A cinematic, responsive portfolio website for Indian actor Anuragg Sharma.

## What is included

- Premium editorial one-page design
- Actor profile and selected screen credits
- Feature film, OTT, television, commercial, and music-video experience
- Professional memberships and representation details
- Responsive desktop and mobile layouts
- Search and social-sharing metadata

## Run locally

Install [Node.js 22 or newer](https://nodejs.org), then:

```bash
npm install
npm run dev:next
```

Open `http://localhost:3000`.

## Deploy from GitHub with Vercel

1. Create an empty GitHub repository.
2. Upload or push this project to the repository.
3. Sign in to [Vercel](https://vercel.com) with GitHub.
4. Choose **Add New → Project** and import the repository.
5. Keep the detected framework as **Next.js** and select **Deploy**.

The included `vercel.json` tells Vercel to use the standard Next.js production
build.

## Git commands

If Git is installed, run these commands from the project folder:

```bash
git init
git add .
git commit -m "Add Anuragg Sharma actor portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub details.

## Update content

- Main page content: `app/page.tsx`
- Styling and responsive layouts: `app/globals.css`
- Page title and social metadata: `app/layout.tsx`
- Images: `public/`

## Production commands

```bash
npm run build:next
npm run start:next
```
