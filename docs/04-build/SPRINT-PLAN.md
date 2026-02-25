---
project: AncestorTree
path: docs/04-build/SPRINT-PLAN.md
type: build
version: 1.3.0
updated: 2026-02-25
owner: "@pm"
status: approved
---

# Sprint Plan - Gia Phả Điện Tử

## 📅 Sprint Overview

```
Timeline: Feb 24 → Apr 4, 2026 (6 weeks)

Sprint 1 ████████████████████████████████ Week 1 (Feb 24-28) ✅ DONE
Sprint 2 ████████████████████████████████ Week 2 (Mar 3-7)   ✅ DONE
Sprint 3 ████████████████████████████████ Week 3 (Mar 10-14) ✅ DONE
Sprint 4 ████████████████████████████████ Week 4 (Mar 17-21) ✅ DONE
Sprint 5 ████████████████████████████████ Week 5 (Mar 24-28) ✅ DONE
Sprint 6 ████████████████████████████████ Week 6 (Mar 31-Apr 4) ✅ DONE

Milestones:
├── v0.1.0 Alpha    → End Sprint 1  ✅
├── v0.5.0 Beta     → End Sprint 2  ✅
├── v1.0.0 MVP      → End Sprint 3  ✅
├── v1.1.0 Enhanced → End Sprint 4  ✅
├── v1.2.0 Release  → End Sprint 5  ✅
└── v1.3.0 Culture  → End Sprint 6  ✅
```

---

## 🏃 Sprint 1: Foundation (5 days) ✅

**Dates:** Feb 24-28, 2026
**Goal:** Project setup + Database + Basic UI shell
**Version:** v0.1.0-alpha

### Tasks

| Day | Task | Hours | Owner | Status |
|-----|------|-------|-------|--------|
| **Day 1** | | | | |
| | Project scaffolding (Next.js 16, TypeScript) | 2h | @fullstack | ✅ |
| | Tailwind CSS 4 + shadcn/ui setup | 1h | @fullstack | ✅ |
| | Project structure (folders, configs) | 1h | @fullstack | ✅ |
| | Git repo setup, .gitignore, README | 1h | @fullstack | ✅ |
| **Day 2** | | | | |
| | Supabase project creation | 1h | @fullstack | ✅ |
| | Database schema (people, families, children) | 2h | @fullstack | ✅ |
| | RLS policies setup | 1h | @fullstack | ✅ |
| | Seed data (sample family) | 1h | @fullstack | ✅ |
| **Day 3** | | | | |
| | Supabase client setup | 1h | @fullstack | ✅ |
| | Auth provider (login/register) | 2h | @fullstack | ✅ |
| | Protected routes (middleware) | 1h | @fullstack | ✅ |
| | User profiles table | 1h | @fullstack | ✅ |
| **Day 4** | | | | |
| | Layout component (app-sidebar) | 2h | @fullstack | ✅ |
| | Navigation menu | 1h | @fullstack | ✅ |
| | Mobile responsive shell | 1h | @fullstack | ✅ |
| | Theme setup (colors, fonts) | 1h | @fullstack | ✅ |
| **Day 5** | | | | |
| | Homepage (dashboard with stats) | 1h | @fullstack | ✅ |
| | Deploy to Vercel | 1h | @fullstack | ✅ |
| | Environment variables setup | 0.5h | @fullstack | ✅ |
| | Sprint 1 testing & fixes | 2h | @fullstack | ✅ |
| | Documentation update | 0.5h | @fullstack | ✅ |

### Deliverables

- [x] Next.js 16 project running locally
- [x] Supabase database with schema
- [x] Auth flow (login/register/logout)
- [x] Basic layout with sidebar
- [x] Deployed to Vercel (staging)
- [x] README with setup instructions

### Exit Criteria

```
✅ pnpm dev runs without errors
✅ Can register & login
✅ Database tables created
✅ Vercel deployment working
✅ Mobile responsive shell
```

---

## 🏃 Sprint 2: Core Data & Tree (5 days) ✅

**Dates:** Mar 3-7, 2026
**Goal:** People CRUD + Family relationships + Basic tree
**Version:** v0.5.0-beta

### Tasks

| Day | Task | Hours | Owner | Status |
|-----|------|-------|-------|--------|
| **Day 1** | | | | |
| | Data layer (supabase-data.ts) | 2h | @fullstack | ✅ |
| | React Query setup | 1h | @fullstack | ✅ |
| | usePeople, useFamilies hooks | 2h | @fullstack | ✅ |
| **Day 2** | | | | |
| | People list page | 2h | @fullstack | ✅ |
| | Person card component | 1h | @fullstack | ✅ |
| | Search functionality | 1h | @fullstack | ✅ |
| | Filter by generation/chi | 1h | @fullstack | ✅ |
| **Day 3** | | | | |
| | Person detail page | 2h | @fullstack | ✅ |
| | Person edit form | 2h | @fullstack | ✅ |
| | Form validation (Zod) | 1h | @fullstack | ✅ |
| **Day 4** | | | | |
| | Family relationships UI | 2h | @fullstack | ✅ |
| | Parent selector (searchable) | 1h | @fullstack | ✅ |
| | Children management | 1h | @fullstack | ✅ |
| | Add new person flow | 1h | @fullstack | ✅ |
| **Day 5** | | | | |
| | Tree layout algorithm | 2h | @fullstack | ✅ |
| | Basic tree view component | 2h | @fullstack | ✅ |
| | Sprint 2 testing & fixes | 1h | @fullstack | ✅ |

### Deliverables

- [x] Full CRUD for people
- [x] Family relationships working
- [x] Search & filter functional
- [x] Basic tree renders correctly
- [x] Form validation

### Exit Criteria

```
✅ Can add/edit/delete people
✅ Can link parents/children
✅ Search finds people by name
✅ Tree shows family structure
✅ Data persists in Supabase
```

---

## 🏃 Sprint 3: Interactive Tree & MVP (5 days) ✅

**Dates:** Mar 10-14, 2026
**Goal:** Full interactive tree + Admin panel + MVP release
**Version:** v1.0.0-mvp

### Tasks

| Day | Task | Hours | Owner | Status |
|-----|------|-------|-------|--------|
| **Day 1** | | | | |
| | Tree zoom & pan | 2h | @fullstack | ✅ |
| | Tree node click → detail panel | 1h | @fullstack | ✅ |
| | Collapse/expand branches | 2h | @fullstack | ✅ |
| **Day 2** | | | | |
| | Ancestor view filter | 1.5h | @fullstack | ✅ |
| | Descendant view filter | 1.5h | @fullstack | ✅ |
| | Tree minimap | 1h | @fullstack | ✅ |
| | Tree controls (zoom buttons) | 1h | @fullstack | ✅ |
| **Day 3** | | | | |
| | Admin panel - dashboard | 2h | @fullstack | ✅ |
| | User management page | 2h | @fullstack | ✅ |
| | Role assignment (admin/editor/viewer) | 1h | @fullstack | ✅ |
| **Day 4** | | | | |
| | Homepage with stats | 2h | @fullstack | ✅ |
| | Feature cards (navigation) | 1h | @fullstack | ✅ |
| | Mobile tree view optimization | 2h | @fullstack | ✅ |
| **Day 5** | | | | |
| | Performance testing | 1h | @fullstack | ✅ |
| | Bug fixes | 2h | @fullstack | ✅ |
| | MVP documentation | 1h | @fullstack | ✅ |
| | Error boundaries | 1h | @fullstack | ✅ |

### Deliverables

- [x] Interactive tree with zoom/pan
- [x] Collapse/expand working
- [x] Ancestor/descendant views
- [x] Admin panel functional
- [x] Homepage with stats
- [x] Error boundaries for all routes

### Exit Criteria

```
✅ Tree is fully interactive
✅ Admin can manage users
✅ Mobile tree works
✅ MVP feature complete
```

---

## 🏃 Sprint 4: Enhanced Features (5 days) ✅

**Dates:** Mar 17-21, 2026
**Goal:** Directory + Memorial calendar + Contributions
**Version:** v1.1.0

### Tasks

| Day | Task | Hours | Owner | Status |
|-----|------|-------|-------|--------|
| **Day 1** | | | | |
| | Directory page (contact list) | 2h | @fullstack | ✅ |
| | Directory filters | 1h | @fullstack | ✅ |
| | Contact info display | 1h | @fullstack | ✅ |
| | Privacy controls | 1h | @fullstack | ✅ |
| **Day 2** | | | | |
| | Events table setup | 1h | @fullstack | ✅ |
| | Lunar calendar utility | 2h | @fullstack | ✅ |
| | Memorial calendar page | 2h | @fullstack | ✅ |
| **Day 3** | | | | |
| | Upcoming giỗ list | 1.5h | @fullstack | ✅ |
| | Calendar view component | 2h | @fullstack | ✅ |
| | Death lunar date input | 1.5h | @fullstack | ✅ |
| **Day 4** | | | | |
| | Contributions table | 1h | @fullstack | ✅ |
| | Contribution form (viewer) | 2h | @fullstack | ✅ |
| | Admin review page | 2h | @fullstack | ✅ |
| **Day 5** | | | | |
| | Approve/reject workflow | 1.5h | @fullstack | ✅ |
| | Contribution history | 1h | @fullstack | ✅ |
| | Sprint 4 testing & fixes | 2h | @fullstack | ✅ |
| | Documentation update | 0.5h | @fullstack | ✅ |

### Deliverables

- [x] Directory with contacts
- [x] Memorial calendar working
- [x] Lunar date support
- [x] Contribution workflow
- [x] Privacy settings

### Exit Criteria

```
✅ Directory shows contacts (with privacy)
✅ Memorial calendar displays giỗ dates
✅ Lunar dates convert correctly
✅ Viewers can submit contributions
✅ Admins can approve/reject
```

---

## 🏃 Sprint 5: Polish & Release (5 days) ✅

**Dates:** Mar 24-28, 2026
**Goal:** GEDCOM export + Book generator + Final polish
**Version:** v1.2.0-release

### Tasks

| Day | Task | Hours | Owner | Status |
|-----|------|-------|-------|--------|
| **Day 1** | | | | |
| | GEDCOM export utility | 2h | @fullstack | ✅ |
| | Export button & download | 1h | @fullstack | ✅ |
| | GEDCOM validation | 1h | @fullstack | ✅ |
| | Can Chi (zodiac) display | 1h | @fullstack | ✅ |
| **Day 2** | | | | |
| | Book generator utility | 2h | @fullstack | ✅ |
| | Book page (formatted view) | 2h | @fullstack | ✅ |
| | Print styles | 1h | @fullstack | ✅ |
| **Day 3** | | | | |
| | Media upload (photos) | 2h | @fullstack | ✅ |
| | Photo gallery component | 1.5h | @fullstack | ✅ |
| | Avatar upload | 1h | @fullstack | ✅ |
| | Supabase storage setup | 0.5h | @fullstack | ✅ |
| **Day 4** | | | | |
| | Performance optimization | 2h | @fullstack | ✅ |
| | SEO meta tags | 1h | @fullstack | ✅ |
| | Error boundaries | 1h | @fullstack | ✅ |
| | Loading states polish | 1h | @fullstack | ✅ |
| **Day 5** | | | | |
| | Final testing (all features) | 2h | @fullstack | ✅ |
| | Bug fixes | 1.5h | @fullstack | ✅ |
| | User documentation | 1h | @fullstack | ✅ |
| | Release notes | 0.5h | @fullstack | ✅ |

### Deliverables

- [x] GEDCOM export working
- [x] Book generator functional
- [x] Photo upload working
- [x] Performance optimized
- [x] Full documentation
- [x] v1.2.0 released

### Exit Criteria

```
✅ GEDCOM exports valid file
✅ Book view renders correctly
✅ Photos upload & display
✅ All features documented
✅ Production stable
```

---

## 🏃 Sprint 6: Culture & Community (5 days) ✅

**Dates:** Mar 31 - Apr 4, 2026
**Goal:** Achievement honors + Education fund + Family charter
**Version:** v1.3.0-culture

### Prerequisites (from Sprint 4-5)

> Sprint 6 has FK dependencies on `people` and `profiles` tables (Sprint 1-2) which are stable.
> Sprint 4-5 features are fully implemented.
>
> **Result:** Sprint 6 completed successfully on top of Sprint 4-5.

### Migration Strategy

> **DO NOT** modify `database-setup.sql` directly. Create a separate migration file:
> `frontend/supabase/sprint6-migration.sql` with all new tables, RLS policies, and indexes.
>
> **Data layer:** Split new functions into separate modules to avoid bloating `supabase-data.ts`:
> - `supabase-data-achievements.ts`
> - `supabase-data-fund.ts`
> - `supabase-data-charter.ts`

### Tasks

| Day | Task | Hours | Owner | Status |
|-----|------|-------|-------|--------|
| **Day 1: Database + Types + Data Layer** | | | | |
| | DB migration: CREATE tables (achievements, fund_transactions, scholarships, clan_articles) | 1.5h | @fullstack | ✅ |
| | DB migration: RLS policies for 4 new tables | 1h | @fullstack | ✅ |
| | DB migration: Indexes (person, category, status, date) | 0.5h | @fullstack | ✅ |
| | TypeScript types: Achievement, FundTransaction, Scholarship, ClanArticle + enums | 1h | @fullstack | ✅ |
| | Data layer: supabase-data-achievements.ts (~8 functions) | 1.5h | @fullstack | ✅ |
| | Data layer: supabase-data-fund.ts (~8 functions) | 1.5h | @fullstack | ✅ |
| **Day 2: Data Layer (cont.) + Achievement UI** | | | | |
| | Data layer: supabase-data-charter.ts (~8 functions) | 1h | @fullstack | ✅ |
| | React Query hooks: use-achievements.ts, use-fund.ts, use-clan-articles.ts | 1.5h | @fullstack | ✅ |
| | Achievement honors page (featured + list) | 2h | @fullstack | ✅ |
| | Achievement category filters (hoc_tap, su_nghiep, cong_hien) | 1h | @fullstack | ✅ |
| | Achievement detail card component | 1h | @fullstack | ✅ |
| **Day 3: Fund Dashboard + Scholarships** | | | | |
| | Education fund dashboard (balance, stats) | 2h | @fullstack | ✅ |
| | Scholarship list with tabs (hoc_bong, khen_thuong) | 1.5h | @fullstack | ✅ |
| | Donation history & contribution form | 1.5h | @fullstack | ✅ |
| | Admin: achievement management CRUD | 2h | @fullstack | ✅ |
| **Day 4: Charter + Admin Pages** | | | | |
| | Family charter page with tabs (gia_huan, quy_uoc, loi_dan) | 2h | @fullstack | ✅ |
| | Rich text article display component | 1h | @fullstack | ✅ |
| | Admin: fund & scholarship management | 2h | @fullstack | ✅ |
| | Admin: charter article management CRUD | 1.5h | @fullstack | ✅ |
| **Day 5: Integration + Testing** | | | | |
| | Sidebar navigation update (3 new sections) | 0.5h | @fullstack | ✅ |
| | Homepage integration (honors + fund summary + featured charter) | 1.5h | @fullstack | ✅ |
| | Annual report views (achievements + fund) | 1h | @fullstack | ✅ |
| | Sprint 6 testing & fixes | 2h | @fullstack | ✅ |
| | Documentation update | 0.5h | @fullstack | ✅ |

### Hour Summary

| Day | Total | Focus |
|-----|-------|-------|
| Day 1 | 7h | DB migration + Types + Data layer (achievements, fund) |
| Day 2 | 6.5h | Data layer (charter) + Hooks + Achievement UI |
| Day 3 | 7h | Fund dashboard + Scholarships + Admin achievements |
| Day 4 | 6.5h | Charter page + Admin fund & charter |
| Day 5 | 5.5h | Integration + Testing + Docs |
| **Total** | **32.5h** | |

### Deliverables

- [x] DB migration file with 4 tables, RLS policies, indexes
- [x] TypeScript types + enums for all Sprint 6 entities
- [x] Data layer modules (3 files) + React Query hooks (3 files)
- [x] Achievement honors page with category filters
- [x] Education fund dashboard with balance tracking
- [x] Scholarship & reward management
- [x] Family charter page with 3 article categories
- [x] Admin CRUD for all 3 features
- [x] Homepage integration (honors + fund + charter)

### Exit Criteria

```
✅ sprint6-migration.sql applies without errors
✅ Achievements display with category filters
✅ Fund dashboard shows balance and transactions
✅ Scholarships can be created, approved, and paid
✅ Charter articles display with category tabs
✅ Admin can manage all new content
✅ Sidebar shows 3 new navigation sections
✅ pnpm build passes without errors
```

---

## 📊 Sprint Summary

| Sprint | Focus | Key Deliverables | LOC Est. | Status |
|--------|-------|------------------|----------|--------|
| **Sprint 1** | Foundation | Project setup, DB, Auth, Layout | ~2,000 | ✅ |
| **Sprint 2** | Core Data | CRUD, Relationships, Basic Tree | ~3,000 | ✅ |
| **Sprint 3** | MVP | Interactive Tree, Admin, Deploy | ~2,500 | ✅ |
| **Sprint 4** | Enhanced | Directory, Calendar, Contributions | ~2,500 | ✅ |
| **Sprint 5** | Polish | GEDCOM, Book, Photos, Release | ~2,000 | ✅ |
| **Sprint 6** | Culture | Honors, Fund, Scholarships, Charter | ~3,000 | ✅ |
| **Total** | | | **~15,000** | **DONE** |

---

## 📋 Feature Completion Matrix

| Feature | S1 | S2 | S3 | S4 | S5 | S6 | Status |
|---------|:--:|:--:|:--:|:--:|:--:|:--:|:------:|
| Project Setup | ✅ | | | | | | DONE |
| Database Schema | ✅ | | | | | | DONE |
| Auth (Login/Register) | ✅ | | | | | | DONE |
| Layout & Navigation | ✅ | | | | | | DONE |
| People CRUD | | ✅ | | | | | DONE |
| Family Relationships | | ✅ | | | | | DONE |
| Search & Filter | | ✅ | | | | | DONE |
| Basic Tree View | | ✅ | | | | | DONE |
| Interactive Tree | | | ✅ | | | | DONE |
| Admin Panel | | | ✅ | | | | DONE |
| Homepage & Stats | | | ✅ | | | | DONE |
| Directory | | | | ✅ | | | DONE |
| Memorial Calendar | | | | ✅ | | | DONE |
| Lunar Calendar | | | | ✅ | | | DONE |
| Contributions | | | | ✅ | | | DONE |
| GEDCOM Export | | | | | ✅ | | DONE |
| Book Generator | | | | | ✅ | | DONE |
| Photo Upload | | | | | ✅ | | DONE |
| Error Boundaries | | | | | ✅ | | DONE |
| Achievement Honors | | | | | | ✅ | DONE |
| Education Fund | | | | | | ✅ | DONE |
| Scholarships & Rewards | | | | | | ✅ | DONE |
| Family Charter | | | | | | ✅ | DONE |

---

## 🎯 Success Metrics

### Per Sprint

| Sprint | Metric | Target | Result |
|--------|--------|--------|--------|
| S1 | Project runs | ✅ No errors | PASS |
| S1 | Deployment | ✅ Vercel live | PASS |
| S2 | Data operations | ✅ CRUD works | PASS |
| S2 | Tree renders | ✅ 5 generations | PASS |
| S3 | Interactive tree | ✅ Zoom/pan/collapse | PASS |
| S3 | User management | ✅ Roles work | PASS |
| S4 | Calendar | ✅ Lunar dates correct | PASS |
| S4 | Contributions | ✅ Workflow complete | PASS |
| S5 | GEDCOM | ✅ Valid export | PASS |
| S5 | Error boundaries | ✅ All routes covered | PASS |
| S6 | DB migration | ✅ sprint6-migration.sql applies cleanly | PASS |
| S6 | Achievements | ✅ Honors page with filters | PASS |
| S6 | Fund | ✅ Dashboard with balance | PASS |
| S6 | Charter | ✅ Articles with categories | PASS |
| S6 | Build | ✅ pnpm build passes | PASS |

### Final Release

| Metric | Target | Result |
|--------|--------|--------|
| **Features complete** | 100% of MVP + v1.3 | ✅ DONE |
| **Bugs** | 0 critical, <5 minor | ✅ 0 critical |
| **Mobile** | 100% responsive | ✅ DONE |
| **Build** | pnpm build + lint clean | ✅ PASS |

---

## 🔧 Technical Dependencies

### Sprint 1 Prerequisites
- Node.js 22+
- pnpm
- Supabase account
- Vercel account
- GitHub repository

### Key Libraries (Actual)

| Library | Version | Sprint | Notes |
|---------|---------|--------|-------|
| Next.js | 16.1.6 | S1 | |
| React | 19.2.3 | S1 | |
| TypeScript | 5.x | S1 | |
| Tailwind CSS | 4.x | S1 | |
| shadcn/ui | 3.8.5 | S1 | |
| @supabase/supabase-js | 2.97.0 | S1 | |
| @supabase/ssr | 0.8.0 | S1 | Server-side auth |
| React Query | 5.90.21 | S2 | |
| Zod | 4.3.6 | S2 | |
| react-hook-form | 7.71.2 | S2 | |
| Framer Motion | 12.34.3 | S3 | |
| Lucide React | 0.575.0 | S1 | Icons |

> **Note:** Zustand 5.0.11 is installed but not actively used. State management is handled via React Context (AuthProvider) + React Query cache.

---

**Status:** ✅ All 6 Sprints Complete (v1.3.0)

*Updated: 2026-02-25 — All sprint statuses updated to reflect completed implementation.*

*SDLC Framework 6.1.1 - Stage 04 Build*
