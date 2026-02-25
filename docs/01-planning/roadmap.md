---
project: AncestorTree
path: docs/01-planning/roadmap.md
type: planning
version: 1.1.0
updated: 2026-02-25
owner: "@pm"
status: approved
---

# Project Roadmap

## 1. Release Overview

```
 2026
 ─────────────────────────────────────────────────────────────────────────
 Feb                    Mar                    Apr
 ├─────────────────────┼─────────────────────┼────
 │                     │                     │
 │  ┌─────────────┐    │  ┌─────────────┐    │  ┌─────────────┐
 │  │   v0.1.0    │    │  │   v1.0.0    │    │  │   v1.3.0    │
 │  │   Alpha     │    │  │    MVP      │    │  │   Culture   │
 │  │  (Sprint 1) │    │  │ (Sprint 2-3)│    │  │  (Sprint 6) │
 │  └─────────────┘    │  └─────────────┘    │  └─────────────┘
 │                     │                     │
 │               ┌─────────────┐  ┌─────────────┐
 │               │   v1.1.0    │  │   v1.2.0    │
 │               │  Enhanced   │  │   Release   │
 │               │ (Sprint 4)  │  │  (Sprint 5) │
 │               └─────────────┘  └─────────────┘
 │                     │                     │
 └─────────────────────┴─────────────────────┴────
```

---

## 2. Version Milestones

### v0.1.0 - Alpha (Sprint 1)

**Target:** Week 1-2 (Late Feb 2026)
**Goal:** Core infrastructure + basic tree view

| Epic | Stories | Priority |
|------|---------|----------|
| **Infrastructure** | Setup Next.js, Supabase, Vercel | P0 |
| **Data Model** | Create tables, seed data | P0 |
| **Tree View** | Basic tree rendering | P0 |
| **Auth** | Login/Register | P0 |

**Exit Criteria:**
- [ ] Project scaffolding complete
- [ ] Database schema created
- [ ] Basic tree renders with mock data
- [ ] Auth flow works

---

### v1.0.0 - MVP (Sprint 2-3)

**Target:** Week 3-4 (Early Mar 2026)
**Goal:** Production-ready for Chi tộc Đặng Đình

| Epic | Stories | Priority |
|------|---------|----------|
| **People Management** | CRUD operations | P0 |
| **Family Relationships** | Link parents/children | P0 |
| **Tree View** | Zoom, pan, collapse | P0 |
| **Search** | Find by name | P0 |
| **Admin Panel** | User management | P0 |
| **Mobile** | Responsive design | P0 |
| **Deploy** | Production on Vercel | P0 |

**Exit Criteria:**
- [ ] Full CRUD for people and families
- [ ] Interactive tree with 5+ generations
- [ ] Admin can manage users
- [ ] Mobile responsive
- [ ] Production deployed
- [ ] Documentation complete

---

### v1.1.0 - Enhanced (Sprint 4)

**Target:** Week 4 (Mar 17-21, 2026)
**Goal:** Directory + Memorial calendar + Contributions

| Epic | Stories | Priority |
|------|---------|----------|
| **Directory** | Contact list with privacy controls | P1 |
| **Memorial Calendar** | Âm lịch, ngày giỗ tracking | P1 |
| **Lunar Calendar** | Solar-lunar conversion utility | P1 |
| **Contributions** | Viewer suggest edits, admin review | P1 |

**Exit Criteria:**
- [ ] Directory shows contacts with privacy settings
- [ ] Memorial calendar displays giỗ dates
- [ ] Lunar dates convert correctly
- [ ] Contribution approve/reject workflow works

---

### v1.2.0 - Release (Sprint 5)

**Target:** Week 5 (Mar 24-28, 2026)
**Goal:** GEDCOM export + Book generator + Final polish

| Epic | Stories | Priority |
|------|---------|----------|
| **GEDCOM Export** | Export valid GEDCOM file | P1 |
| **Book Generator** | Formatted genealogy book view | P1 |
| **Photo Upload** | Media upload & gallery | P1 |
| **Performance** | Lighthouse >90, SEO, polish | P1 |

**Exit Criteria:**
- [ ] GEDCOM exports valid file
- [ ] Book view renders correctly
- [ ] Photos upload & display
- [ ] Lighthouse >90 all categories

---

### v1.3.0 - Culture & Community (Sprint 6)

**Target:** Week 6 (Mar 31 - Apr 4, 2026)
**Goal:** Achievement honors + Education fund + Family charter

| Epic | Stories | Priority |
|------|---------|----------|
| **Achievement Honors** | Vinh danh thành tích (FR-1201~1206) | P1 |
| **Education Fund** | Quỹ khuyến học, học bổng (FR-1301~1308) | P1 |
| **Family Charter** | Hương ước gia tộc (FR-1401~1406) | P1 |

**Exit Criteria:**
- [ ] Achievements display with category filters
- [ ] Fund dashboard shows balance and transactions
- [ ] Scholarships can be created, approved, and paid
- [ ] Charter articles display with category tabs
- [ ] Admin can manage all new content

> **Note:** Detailed Sprint 4-6 task breakdown available in [SPRINT-PLAN.md](../04-build/SPRINT-PLAN.md)

---

### v2.0.0 - Community (Future)

**Target:** Q2 2026+
**Goal:** Features for broader community

| Epic | Stories | Priority |
|------|---------|----------|
| **Nhà thờ họ** | Ancestral hall info (map, ảnh 360°) | P2 |
| **Notifications** | Thông báo ngày giỗ (push) | P2 |
| **Cross-clan** | Kết nối liên dòng họ | P2 |
| **Multi-tenant** | Multiple families | P2 |
| **Native Apps** | iOS/Android | P2 |

---

## 3. Sprint Plan

### Sprint 1: Foundation (5 days)

**Dates:** Feb 24 - Feb 28, 2026
**Goal:** Project setup + core data layer

| Day | Tasks | Owner |
|-----|-------|-------|
| **Day 1** | Project scaffolding (Next.js, TypeScript, Tailwind) | @dev |
| **Day 2** | Supabase setup (tables, RLS, seed data) | @dev |
| **Day 3** | Auth flow (login, register, roles) | @dev |
| **Day 4** | Tree layout algorithm | @dev |
| **Day 5** | Basic tree component | @dev |

**Sprint 1 Deliverables:**
- [ ] Next.js 15 project with TypeScript
- [ ] Supabase project with schema
- [ ] Auth working (admin/viewer)
- [ ] Basic tree renders

---

### Sprint 2: Core Features (5 days)

**Dates:** Mar 3 - Mar 7, 2026
**Goal:** People CRUD + Interactive tree

| Day | Tasks | Owner |
|-----|-------|-------|
| **Day 1** | People list page | @dev |
| **Day 2** | People detail/edit page | @dev |
| **Day 3** | Family relationships UI | @dev |
| **Day 4** | Tree interactivity (zoom, pan, collapse) | @dev |
| **Day 5** | Search functionality | @dev |

**Sprint 2 Deliverables:**
- [ ] CRUD for people
- [ ] Family relationship management
- [ ] Interactive tree view
- [ ] Search by name

---

### Sprint 3: Polish & Deploy (5 days)

**Dates:** Mar 10 - Mar 14, 2026
**Goal:** Production-ready MVP

| Day | Tasks | Owner |
|-----|-------|-------|
| **Day 1** | Admin panel (user management) | @dev |
| **Day 2** | Mobile responsive | @dev |
| **Day 3** | Performance optimization | @dev |
| **Day 4** | Documentation + README | @pm |
| **Day 5** | Deploy to production | @dev |

**Sprint 3 Deliverables:**
- [ ] Admin panel complete
- [ ] Mobile tested
- [ ] Performance optimized
- [ ] Documentation complete
- [ ] Production live

---

## 4. Resource Allocation

### Team

| Role | Allocation | Responsibilities |
|------|------------|------------------|
| **@pm** | 20% | Planning, documentation, review |
| **@dev** | 70% | Implementation |
| **@researcher** | 10% | Research, analysis |

### Infrastructure

| Resource | Provider | Cost |
|----------|----------|------|
| **Database** | Supabase Free | $0 |
| **Hosting** | Vercel Hobby | $0 |
| **Domain** | Optional | ~$10/year |
| **Total** | | **~$0/month** |

---

## 5. Dependencies & Risks

### Dependencies

| ID | Dependency | Impact | Status |
|----|------------|--------|--------|
| **D-01** | Supabase account | Blocking | ⏳ Pending |
| **D-02** | Vercel account | Blocking | ⏳ Pending |
| **D-03** | Initial data (gia phả) | Blocking | ⏳ Pending |
| **D-04** | Domain (optional) | Non-blocking | ⏳ Pending |

### Risks

| ID | Risk | Mitigation |
|----|------|------------|
| **R-01** | Data not ready | Start with sample data |
| **R-02** | Scope creep | Strict MVP definition |
| **R-03** | Free tier limits | Monitor usage |

---

## 6. Success Metrics

### Sprint 1

| Metric | Target |
|--------|--------|
| Setup complete | 100% |
| Basic tree renders | Yes |
| Auth works | Yes |

### Sprint 2

| Metric | Target |
|--------|--------|
| CRUD functional | 100% |
| Tree interactive | Yes |
| Search works | Yes |

### Sprint 3

| Metric | Target |
|--------|--------|
| Mobile responsive | 100% |
| Lighthouse score | >90 |
| Production deployed | Yes |
| Documentation | Complete |

### Sprint 4-6

| Metric | Target |
|--------|--------|
| Lunar dates correct | Yes |
| Contribution workflow | Complete |
| GEDCOM exports valid | Yes |
| Achievements with filters | Yes |
| Fund dashboard with balance | Yes |
| Charter articles with tabs | Yes |
| pnpm build passes | Yes |

---

## 7. Communication Plan

### Meetings

| Meeting | Frequency | Participants |
|---------|-----------|--------------|
| **Sprint Planning** | Per sprint | @pm, @dev |
| **Daily Standup** | Daily | @pm, @dev |
| **Sprint Review** | Per sprint | @pm, @dev, Sponsor |

### Reporting

| Report | Frequency | Audience |
|--------|-----------|----------|
| **Sprint Status** | Weekly | Sponsor |
| **Progress Update** | Daily | Team |

---

## 8. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Sponsor | Chủ tịch HĐGT | | ⏳ Pending |
| PM | @pm | 2026-02-24 | ✅ Approved |

---

**Previous:** [BRD.md](./BRD.md)
**Next:** [02-design/technical-design.md](../02-design/technical-design.md)

*SDLC Framework 6.1.1 - Stage 01 Planning*
