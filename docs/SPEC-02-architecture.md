# BVP SPEC 02: TECHNICAL ARCHITECTURE
## Stack, Structure & Deployment

---

## TECHNOLOGY STACK

| Layer | Choice | Status | Why |
|-------|--------|--------|-----|
| **Framework** | Next.js 16 (App Router) | ✅ Active | Industry standard, SEO-friendly, Vercel-optimized |
| **Language** | TypeScript | ✅ Active | Type safety, fewer bugs, better DX |
| **Styling** | Tailwind CSS | ✅ Active | Utility-first, fast iteration |
| **Animation** | Framer Motion | ✅ Active | Best React animation library |
| **Hosting** | Vercel | ✅ Active | Built for Next.js, instant deploys, preview URLs |
| **CMS** | Sanity.io | 🔜 Planned | Real-time previews, generous free tier, flexible |
| **Forms** | Action Network API | 🔜 Planned | Custom UI, member database, advocacy tools |
| **Newsletter** | Zapier → Substack | 🔜 Planned | Webhook integration |
| **Donations** | Donately | 🔜 Planned | Nonprofit-focused, handles PCI |
| **Analytics** | Vercel Analytics + GA4 | 🔜 Planned | Privacy-friendly + comprehensive |

---

## REPOSITORY STRUCTURE

```
bvp-site/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (global meta, fonts)
│   │   ├── globals.css           # Global styles
│   │   │
│   │   ├── (main)/               # Route group for public pages (with Header/Footer)
│   │   │   ├── layout.tsx        # Adds Header + Footer wrapper
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── about/            # About Us (was who-we-are)
│   │   │   ├── our-work/
│   │   │   ├── join/
│   │   │   ├── donate/
│   │   │   ├── contact/
│   │   │   ├── press/
│   │   │   ├── faq/
│   │   │   ├── financials/
│   │   │   ├── privacy/
│   │   │   ├── terms/
│   │   │   └── accessibility/
│   │   │
│   │   ├── admin/                # Admin dashboard (no Header/Footer)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── admin.css
│   │   │
│   │   └── api/
│   │       ├── contact/route.ts
│   │       ├── feedback/route.ts
│   │       └── newsletter/route.ts
│   │
│   ├── components/
│   │   ├── ui/                   # Base components
│   │   │   ├── Button.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── CookieConsent.tsx
│   │   │   └── DebugOverlay.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Global nav with dropdowns
│   │   │   └── Footer.tsx        # 4-column footer
│   │   └── sections/             # Page sections
│   │       ├── Hero.tsx
│   │       ├── NewsletterBanner.tsx
│   │       └── ...
│   │
│   ├── config/
│   │   └── seo.ts                # Centralized SEO metadata for all pages
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   └── styles/                   # (moved to app/globals.css)
│
├── public/
│   └── images/                   # Static images (logo, team photos, etc.)
│
├── docs/                         # These spec files
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## ENVIRONMENT VARIABLES

```bash
# .env.local (NEVER COMMIT)

# Analytics (planned)
NEXT_PUBLIC_GA_ID=G-xxxxx

# Sanity CMS (planned)
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_xxxxx              # Server only

# Action Network (planned)
ACTION_NETWORK_API_KEY=xxxxx           # Server only

# Zapier (planned)
ZAPIER_NEWSLETTER_WEBHOOK=xxxxx        # Server only

# Donately (planned)
NEXT_PUBLIC_DONATELY_ID=xxxxx          # Public OK
```

**Rule:** Anything without `NEXT_PUBLIC_` prefix stays server-side only.

---

## INTEGRATION STATUS

| Integration | Status | Notes |
|-------------|--------|-------|
| Vercel Hosting | ✅ Live | Deployed at bvp-main-site.vercel.app |
| SEO Meta Tags | ✅ Done | All 12 pages have title, description, OG, Twitter tags |
| Cookie Consent | ✅ Done | GDPR-compliant banner with preferences |
| Admin Dashboard | ✅ Done | Mock data, SEO overview at /admin |
| Sanity CMS | 🔜 Next | Will replace hardcoded team/FAQ/content |
| Donately | 🔜 Next | Will handle donations (currently mock form) |
| Action Network | 🔜 Next | Will handle form submissions |
| Google Analytics | 🔜 Next | Cookie consent ready, need GA ID |
| Zapier/Substack | 🔜 Later | Newsletter integration |

---

## DATA FLOW ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────┐
│                         VERCEL                               │
│                                                              │
│   Static Assets ──► Edge CDN (cached)                       │
│   Pages ──► ISR (revalidate on CMS webhook)                 │
│   API Routes ──► Serverless Functions                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
  │   Sanity    │     │   Substack  │     │   Action    │
  │    CMS      │     │    RSS      │     │   Network   │
  │             │     │             │     │             │
  │ Team, FAQs  │     │ Blog posts  │     │ Forms/      │
  │ Stats, etc  │     │             │     │ Members     │
  └─────────────┘     └─────────────┘     └─────────────┘
         │
         ▼
  ┌─────────────┐
  │   Zapier    │──────► Substack (newsletter sync)
  └─────────────┘
```

---

## DEPLOYMENT FLOW

```
Developer pushes to GitHub
         │
         ▼
Vercel detects push
         │
         ├── TypeScript check
         ├── ESLint
         ├── Build Next.js
         ├── Generate static pages
         │
         ▼
Preview URL created (for PRs)
         │
         ▼
Merge to main = Production deploy
```

---

## CACHING STRATEGY

| Content Type | Strategy | Revalidation |
|--------------|----------|--------------|
| Static pages | ISR | On Sanity webhook |
| Blog feed | ISR | Every 1 hour |
| Images | CDN cached | Long TTL |
| API routes | No cache | Real-time |

---

## SECURITY LAYERS

| Layer | Protection |
|-------|------------|
| Infrastructure | Vercel handles DDoS, SSL, edge security |
| CMS | Sanity handles encryption, SOC 2 compliant |
| Payments | Donately handles PCI compliance |
| Forms | Honeypot, rate limiting, server validation |
| Access | 2FA on all admin accounts |

---

*Next: [SPEC-03-design-system.md](./SPEC-03-design-system.md)*
