# BVP Admin Dashboard - Product Requirements Document

**Document Version:** 1.0
**Last Updated:** February 2026
**Status:** Draft
**Author:** Engineering

---

## Executive Summary

Build a custom, unified admin dashboard for Black Veterans Project that consolidates all operational tools into a single authenticated interface. This is not a portal with links—it's a fully integrated backend application where staff can manage content, view analytics, handle form submissions, monitor deployments, and coordinate communications without leaving the platform.

---

## Problem Statement

### Current State
- **Fragmented tools:** GA, Mailchimp, Vercel, GitHub, form submissions all live in separate interfaces
- **Context switching:** Staff must maintain multiple logins and jump between tabs
- **No unified view:** No single place to see "how is BVP doing digitally?"
- **Manual processes:** Form submissions have no home; data doesn't flow between systems

### Desired State
A single admin application where authorized users can:
- See real-time site analytics without opening Google Analytics
- Manage and edit site content without touching code
- View and export form submissions (contact, join, donations)
- Monitor site health and deployments
- Trigger and track email campaigns
- Access everything with one login

---

## Goals & Non-Goals

### Goals
1. **Unified Experience:** Single interface for all admin functions
2. **Real-time Data:** Live analytics, deployment status, form submissions
3. **Content Management:** Edit site pages without developer intervention
4. **Operational Efficiency:** Reduce time spent switching between tools
5. **Access Control:** Role-based permissions (Admin, Editor, Viewer)
6. **Audit Trail:** Track who changed what and when

### Non-Goals (v1)
- Replacing Mailchimp entirely (will integrate, not rebuild)
- Building a custom donation processor (will integrate Stripe/Donately)
- Mobile-native app (responsive web is sufficient)
- Public-facing features (this is internal tooling only)

---

## User Personas

### Primary: Executive Director
- Needs high-level view of site performance
- Reviews form submissions, especially membership applications
- Approves content changes
- Access level: Admin

### Secondary: Communications Lead
- Manages content updates, press releases
- Coordinates email campaigns
- Monitors social/site analytics
- Access level: Editor

### Tertiary: Volunteer/Intern
- Views submissions, exports data
- Read-only access to dashboards
- Access level: Viewer

---

## User Stories

### Authentication
- As a user, I can log in with email/password or Google SSO
- As an admin, I can invite new users and assign roles
- As a user, I see only the features my role permits

### Dashboard Home
- As a user, I see a summary dashboard upon login with key metrics
- As a user, I see recent activity (form submissions, deploys, content changes)
- As a user, I can quickly navigate to any section

### Analytics Module
- As a user, I can view site traffic for today, this week, this month, custom range
- As a user, I can see top pages, traffic sources, device breakdown
- As a user, I can see conversion events (donate clicks, form submissions)
- As a user, I do NOT need to open Google Analytics separately

### Content Management Module
- As an editor, I can view all site pages in a list
- As an editor, I can edit page content using a rich text editor
- As an editor, I can preview changes before publishing
- As an admin, I can approve/reject content changes
- As an editor, I can upload and manage media (images, PDFs)

### Forms & Submissions Module
- As a user, I can view all form submissions (Contact, Join, Newsletter)
- As a user, I can filter by form type, date, status
- As a user, I can mark submissions as reviewed, contacted, archived
- As a user, I can export submissions to CSV
- As an admin, I can delete submissions

### Members Module
- As a user, I can view all members who joined via /join
- As a user, I can see member details, tier, join date
- As an admin, I can manually add/edit members
- As a user, I can export member list for Mailchimp sync

### Deployments Module
- As a user, I can see recent deployments (status, time, commit message)
- As an admin, I can trigger a new deployment
- As a user, I can rollback to a previous deployment
- As a user, I can see if the site is healthy (build status)

### Email Module
- As a user, I can see recent Mailchimp campaigns and their performance
- As an editor, I can trigger a pre-built email template
- As a user, I can see email list subscriber count and growth

### Settings Module
- As an admin, I can manage users and roles
- As an admin, I can configure integrations (API keys, webhooks)
- As an admin, I can view audit logs

---

## Functional Requirements

### FR-1: Authentication & Authorization
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-1.1 | Email/password authentication | P0 |
| FR-1.2 | Google OAuth SSO | P1 |
| FR-1.3 | Role-based access control (Admin, Editor, Viewer) | P0 |
| FR-1.4 | Session management (auto-logout after inactivity) | P1 |
| FR-1.5 | Password reset flow | P0 |
| FR-1.6 | User invitation system | P1 |

### FR-2: Dashboard Home
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-2.1 | Key metrics cards (visitors, submissions, members) | P0 |
| FR-2.2 | Activity feed (recent events across all modules) | P1 |
| FR-2.3 | Quick action buttons (view submissions, edit content) | P1 |
| FR-2.4 | Site health indicator (up/down, last deploy) | P0 |

### FR-3: Analytics Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-3.1 | Visitors chart (line graph, selectable time range) | P0 |
| FR-3.2 | Top pages table | P0 |
| FR-3.3 | Traffic sources breakdown | P1 |
| FR-3.4 | Device/browser breakdown | P2 |
| FR-3.5 | Conversion events tracking | P1 |
| FR-3.6 | Real-time active users | P2 |

### FR-4: Content Management Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-4.1 | Page list with edit status | P0 |
| FR-4.2 | Rich text editor (WYSIWYG) | P0 |
| FR-4.3 | Media library (upload, organize, delete) | P1 |
| FR-4.4 | Draft/publish workflow | P1 |
| FR-4.5 | Content versioning (revert to previous) | P2 |
| FR-4.6 | Preview mode | P1 |

### FR-5: Forms Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-5.1 | Submissions table with filters | P0 |
| FR-5.2 | Submission detail view | P0 |
| FR-5.3 | Status management (new, reviewed, contacted, archived) | P1 |
| FR-5.4 | CSV export | P0 |
| FR-5.5 | Email notification on new submission | P1 |
| FR-5.6 | Bulk actions (archive, delete) | P2 |

### FR-6: Members Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-6.1 | Members table with search/filter | P0 |
| FR-6.2 | Member detail view | P0 |
| FR-6.3 | Membership tier tracking | P1 |
| FR-6.4 | Manual member entry | P1 |
| FR-6.5 | Export to CSV/Mailchimp | P0 |

### FR-7: Deployments Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-7.1 | Deployment history list | P0 |
| FR-7.2 | Deployment status (success, failed, building) | P0 |
| FR-7.3 | Trigger manual deployment | P1 |
| FR-7.4 | Rollback to previous deployment | P2 |
| FR-7.5 | GitHub commit details | P1 |

### FR-8: Email Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-8.1 | Mailchimp campaign list | P1 |
| FR-8.2 | Campaign performance metrics | P1 |
| FR-8.3 | Subscriber count display | P0 |
| FR-8.4 | Trigger email from template | P2 |

### FR-9: Settings Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-9.1 | User management (invite, edit, remove) | P0 |
| FR-9.2 | Role assignment | P0 |
| FR-9.3 | API key configuration | P1 |
| FR-9.4 | Audit log viewer | P2 |

---

## Technical Architecture

### Stack Recommendation

```
┌─────────────────────────────────────────────────────────────────┐
│                        BVP Admin Dashboard                       │
├─────────────────────────────────────────────────────────────────┤
│  FRONTEND                                                        │
│  ├── Next.js 14+ (App Router)                                   │
│  ├── React Server Components where possible                      │
│  ├── Tailwind CSS + shadcn/ui components                        │
│  ├── Recharts or Tremor for data visualization                  │
│  └── TipTap or Plate for rich text editing                      │
├─────────────────────────────────────────────────────────────────┤
│  AUTHENTICATION                                                  │
│  ├── Clerk (recommended) - handles SSO, roles, user management  │
│  └── Alternative: NextAuth.js + custom role logic               │
├─────────────────────────────────────────────────────────────────┤
│  DATABASE                                                        │
│  ├── Supabase (recommended) - Postgres + real-time + auth       │
│  │   ├── Tables: users, pages, submissions, members, audit_logs │
│  │   └── Row-level security for access control                  │
│  └── Alternative: PlanetScale (MySQL) + Prisma ORM              │
├─────────────────────────────────────────────────────────────────┤
│  INTEGRATIONS (via API)                                          │
│  ├── Google Analytics Data API → Analytics module               │
│  ├── Vercel API → Deployments module                            │
│  ├── GitHub API → Commit history, repo status                   │
│  ├── Mailchimp API → Email module                               │
│  └── Stripe API (future) → Donations module                     │
├─────────────────────────────────────────────────────────────────┤
│  INFRASTRUCTURE                                                  │
│  ├── Hosted on Vercel (same as main site, separate project)     │
│  ├── Custom domain: admin.blackveteransproject.org              │
│  └── Environment variables for all API keys                     │
└─────────────────────────────────────────────────────────────────┘
```

### Database Schema (Simplified)

```sql
-- Users (managed by Clerk, but reference here)
-- Clerk handles: id, email, name, role, avatar, created_at

-- Pages (for CMS)
CREATE TABLE pages (
  id UUID PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  content JSONB NOT NULL, -- TipTap/Plate JSON format
  status VARCHAR(50) DEFAULT 'draft', -- draft, published
  published_at TIMESTAMP,
  created_by VARCHAR(255), -- Clerk user ID
  updated_by VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Form Submissions
CREATE TABLE submissions (
  id UUID PRIMARY KEY,
  form_type VARCHAR(50) NOT NULL, -- contact, join, newsletter
  data JSONB NOT NULL,
  status VARCHAR(50) DEFAULT 'new', -- new, reviewed, contacted, archived
  reviewed_by VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Members
CREATE TABLE members (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  tier VARCHAR(50), -- basic, advocate, lifetime
  veteran_status VARCHAR(50),
  branch VARCHAR(100),
  source VARCHAR(50), -- website, manual, import
  mailchimp_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Audit Log
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  action VARCHAR(100) NOT NULL, -- page.created, submission.archived, etc.
  resource_type VARCHAR(50),
  resource_id UUID,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### API Routes Structure

```
/app/admin/
├── layout.tsx              # Auth wrapper, sidebar
├── page.tsx                # Dashboard home
├── analytics/
│   └── page.tsx            # GA integration
├── content/
│   ├── page.tsx            # Page list
│   └── [slug]/
│       └── page.tsx        # Page editor
├── submissions/
│   ├── page.tsx            # Submissions list
│   └── [id]/
│       └── page.tsx        # Submission detail
├── members/
│   ├── page.tsx            # Members list
│   └── [id]/
│       └── page.tsx        # Member detail
├── deployments/
│   └── page.tsx            # Vercel deployments
├── email/
│   └── page.tsx            # Mailchimp integration
└── settings/
    ├── page.tsx            # General settings
    ├── users/
    │   └── page.tsx        # User management
    └── integrations/
        └── page.tsx        # API keys config

/app/api/admin/
├── analytics/
│   └── route.ts            # Proxy to GA API
├── content/
│   └── route.ts            # CRUD for pages
├── submissions/
│   └── route.ts            # CRUD for submissions
├── members/
│   └── route.ts            # CRUD for members
├── deployments/
│   └── route.ts            # Vercel API proxy
└── email/
    └── route.ts            # Mailchimp API proxy
```

---

## UI/UX Specifications

### Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  ┌──────┐  BVP Admin                              [🔔] [Avatar ▼]   │
│  │ LOGO │                                                            │
├──┴──────┴────────────────────────────────────────────────────────────┤
│ │            │                                                       │
│ │ 📊 Dashboard│  ┌─────────────────────────────────────────────────┐ │
│ │            │  │                                                   │ │
│ │ 📈 Analytics│  │              MAIN CONTENT AREA                   │ │
│ │            │  │                                                   │ │
│ │ 📝 Content │  │   - Dashboard widgets                            │ │
│ │            │  │   - Data tables                                  │ │
│ │ 📬 Forms   │  │   - Editors                                      │ │
│ │            │  │   - Detail views                                 │ │
│ │ 👥 Members │  │                                                   │ │
│ │            │  │                                                   │ │
│ │ 🚀 Deploys │  │                                                   │ │
│ │            │  │                                                   │ │
│ │ 📧 Email   │  │                                                   │ │
│ │            │  │                                                   │ │
│ │ ⚙️ Settings│  │                                                   │ │
│ │            │  └─────────────────────────────────────────────────┘ │
│ └────────────┘                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

### Design System
- **Colors:** Match BVP brand (black, white, gold accents)
- **Typography:** Same font stack as main site
- **Components:** shadcn/ui for consistency and accessibility
- **Icons:** Lucide React (already in use)
- **Dark mode:** Optional, not required for v1

### Key UI Components Needed
1. **Sidebar navigation** - Collapsible, icon + label
2. **Data tables** - Sortable, filterable, paginated
3. **Metric cards** - Number + label + trend indicator
4. **Charts** - Line, bar, pie for analytics
5. **Rich text editor** - For content management
6. **Modal dialogs** - For confirmations, quick edits
7. **Toast notifications** - For success/error feedback
8. **Empty states** - For new installations

---

## Integration Specifications

### Google Analytics Data API

**Purpose:** Display site analytics within dashboard

**Endpoints Used:**
- `runReport` - Get pageviews, sessions, users
- `runRealtimeReport` - Active users now

**Required Scopes:**
- `https://www.googleapis.com/auth/analytics.readonly`

**Setup:**
1. Create Google Cloud project
2. Enable Analytics Data API
3. Create service account
4. Grant service account access to GA4 property
5. Store credentials in environment variables

**Data to Fetch:**
```javascript
{
  visitors: { today, thisWeek, thisMonth, trend },
  topPages: [{ path, views, avgTime }],
  sources: [{ source, sessions, percentage }],
  devices: { desktop, mobile, tablet },
  realtime: { activeUsers }
}
```

### Vercel API

**Purpose:** Display and manage deployments

**Endpoints Used:**
- `GET /v6/deployments` - List deployments
- `POST /v13/deployments` - Trigger deployment
- `GET /v13/deployments/{id}` - Deployment details

**Required Token:**
- Vercel personal access token or team token

**Data to Fetch:**
```javascript
{
  deployments: [{
    id, url, state, createdAt,
    meta: { githubCommitMessage, githubCommitRef }
  }],
  currentProduction: { url, createdAt }
}
```

### GitHub API

**Purpose:** Show commit history, repo status

**Endpoints Used:**
- `GET /repos/{owner}/{repo}/commits` - Recent commits
- `GET /repos/{owner}/{repo}` - Repo info

**Required Token:**
- GitHub personal access token with `repo` scope

### Mailchimp API

**Purpose:** Display email campaigns, subscriber stats

**Endpoints Used:**
- `GET /campaigns` - List campaigns
- `GET /campaigns/{id}/report` - Campaign performance
- `GET /lists/{id}` - Subscriber count

**Required Token:**
- Mailchimp API key

---

## Security Requirements

| ID | Requirement | Implementation |
|----|-------------|----------------|
| SEC-1 | All routes require authentication | Clerk middleware |
| SEC-2 | Role-based access control | Clerk + custom middleware |
| SEC-3 | API keys stored securely | Vercel environment variables |
| SEC-4 | HTTPS only | Vercel handles |
| SEC-5 | Session timeout after 24h inactivity | Clerk settings |
| SEC-6 | Audit logging for sensitive actions | Custom audit_logs table |
| SEC-7 | No API keys exposed to client | Server-side API calls only |
| SEC-8 | Rate limiting on API routes | Vercel Edge middleware |

---

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup (Next.js, Tailwind, shadcn/ui)
- [ ] Clerk authentication integration
- [ ] Supabase database setup
- [ ] Basic layout (sidebar, header, routing)
- [ ] Dashboard home with placeholder widgets
- [ ] User management (invite, roles)

**Deliverable:** Authenticated shell with navigation

### Phase 2: Core Modules (Week 3-4)
- [ ] Forms module (submissions table, detail view, export)
- [ ] Members module (table, detail, manual entry)
- [ ] Connect public site forms to Supabase
- [ ] Basic audit logging

**Deliverable:** Working forms and members management

### Phase 3: Integrations (Week 5-6)
- [ ] Google Analytics integration
- [ ] Vercel deployments integration
- [ ] GitHub commits display
- [ ] Dashboard widgets with real data

**Deliverable:** Live data from all external services

### Phase 4: Content Management (Week 7-8)
- [ ] Page list and editor UI
- [ ] Rich text editor integration
- [ ] Media library
- [ ] Draft/publish workflow
- [ ] Connect CMS to public site rendering

**Deliverable:** Functional CMS

### Phase 5: Polish & Email (Week 9-10)
- [ ] Mailchimp integration
- [ ] Email notifications for submissions
- [ ] UI polish and responsive fixes
- [ ] Performance optimization
- [ ] Documentation

**Deliverable:** Production-ready admin dashboard

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Login to insight time | < 10 seconds | Time from login to viewing key metrics |
| Tool consolidation | 5 → 1 | Number of separate apps needed daily |
| Form response time | < 24 hours | Time from submission to staff review |
| Content update time | < 5 minutes | Time to edit and publish a page change |
| Uptime | 99.9% | Vercel status monitoring |

---

## Open Questions

1. **Hosting:** Same Vercel project as main site, or separate project?
   - Recommendation: Separate project at admin.blackveteransproject.org

2. **CMS Scope:** Which pages should be editable via CMS?
   - All pages? Just news/press?
   - Recommendation: Start with press releases, expand later

3. **Email sending:** Use Mailchimp only, or add transactional email (Resend)?
   - Recommendation: Mailchimp for campaigns, Resend for notifications

4. **Mobile support:** Full mobile admin or desktop-focused?
   - Recommendation: Responsive but optimized for desktop

5. **Backup strategy:** How to handle database backups?
   - Recommendation: Supabase handles automatic backups

---

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| API rate limits (GA, Vercel) | Medium | Medium | Implement caching, show cached data with timestamp |
| Clerk pricing at scale | Low | Low | Free tier supports 10K MAU, sufficient for admin |
| Supabase free tier limits | Low | Medium | Upgrade to Pro ($25/mo) if needed |
| Integration API changes | Low | High | Abstract integrations behind internal API |
| Scope creep | High | High | Strict phase boundaries, defer non-P0 features |

---

## Appendix

### Competitive/Inspiration References
- **Vercel Dashboard** - Clean deployment management
- **Linear** - Excellent sidebar navigation, keyboard shortcuts
- **Notion** - Content editing experience
- **Plausible Analytics** - Simple, focused analytics UI
- **Retool** - Data table and form patterns

### Technology Alternatives Considered

| Category | Chosen | Alternatives | Why Chosen |
|----------|--------|--------------|------------|
| Auth | Clerk | NextAuth, Auth0 | Best DX, built-in user management UI |
| Database | Supabase | PlanetScale, Neon | Real-time, auth, storage all-in-one |
| UI Components | shadcn/ui | Radix, MUI | Customizable, accessible, matches existing |
| Charts | Tremor | Recharts, Chart.js | Built for dashboards, React-native |
| Rich Text | TipTap | Plate, Slate | Best DX, extensible, good docs |

---

*Document ends. Ready for review and approval before implementation begins.*
