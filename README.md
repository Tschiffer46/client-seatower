# Havstornet — seatower.schiffer.se

Static community website for the Havstornet building in Rydebäck, rebuilt as a modern
React/Tailwind app in March 2026.
**Preview URL:** https://seatower.agiletransition.se
**Live URL (future):** https://seatower.schiffer.se

---

## Tech stack

| Layer | Tool |
|-------|------|
| Framework | Vite + React 18 + TypeScript |
| Styling | Tailwind CSS v3 |
| Routing | react-router-dom v6 (HashRouter) |
| Hosting | Hetzner VPS — nginx:alpine Docker container |
| CI/CD | GitHub Actions → rsync to server |
| Proxy / SSL | Nginx Proxy Manager + Let's Encrypt |
| DNS | Cloudflare (proxied) |

HashRouter is used so the nginx container needs no special `try_files` configuration.

---

## Pages

| Route | File | Content |
|-------|------|---------|
| `/#/` | `src/pages/Valkommen.tsx` | Hero, building intro, CTA buttons |
| `/#/information` | `src/pages/Information.tsx` | Architect, builder, facts, links |
| `/#/bilder` | `src/pages/Bilder.tsx` | 201-photo gallery with lightbox |
| `/#/film` | `src/pages/Film.tsx` | 12 embedded YouTube videos |
| `/#/kontakt` | `src/pages/Kontakt.tsx` | Email cards + Google Maps embed |
| `/#/nyhetsarkiv` | `src/pages/Nyhetsarkiv.tsx` | News archive placeholder |

### Photo gallery

201 full-size JPGs are committed directly in the repo under `public/assets/gallery/`.
They were extracted from the original iWeb site's media folders. Each photo is already
compressed (64–100 KB), making the total ~16 MB — acceptable for git.

The gallery component (`Bilder.tsx`) uses:
- Native `loading="lazy"` for performance
- `encodeURIComponent()` on filenames to handle the one file with a space
  (`HAVSTORNET 2013.jpg`)
- A click-to-expand lightbox with keyboard-accessible close button

The photo list is defined statically in `src/data/gallery.ts`.

---

## Local development

```bash
cd client-seatower
npm install
npm run dev       # → http://localhost:5173
```

Build for production:

```bash
npm run build     # output in ./dist/
```

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` which:

1. Runs `npm ci && npm run build`
2. Rsyncs `./dist/` → `deploy@89.167.90.112:~/hosting/sites/client-seatower/dist/`

The server's nginx container mounts `~/hosting/sites/client-seatower/dist` and serves it on port 80.
Nginx Proxy Manager routes `seatower.agiletransition.se` → the container with Force SSL + Let's Encrypt.

### Required GitHub secrets

| Secret | Value |
|--------|-------|
| `HETZNER_HOST` | `89.167.90.112` |
| `HETZNER_USER` | `deploy` |
| `HETZNER_SSH_KEY` | Private key matching deploy user's `~/.ssh/authorized_keys` |

---

## Server location

```
/home/deploy/hosting/
  docker-compose.yml        ← seatower service defined here
  sites/
    client-seatower/
      dist/                 ← deployed files land here
        assets/
          gallery/          ← 201 photos rsynced from public/assets/gallery/
```

Docker service in `docker-compose.yml`:

```yaml
seatower:
  image: nginx:alpine
  container_name: seatower
  restart: unless-stopped
  volumes:
    - ./sites/client-seatower/dist:/usr/share/nginx/html:ro
  networks:
    - web
```

---

## Origin

Rebuilt from the original iWeb-generated site (`seatower.schiffer.se`, circa 2012) stored in
`/Users/thomasschiffer/Downloads/www/havstornet/`.
All 201 photos were preserved from the original media folders.
