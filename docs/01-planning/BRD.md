---
project: AncestorTree
path: docs/01-planning/BRD.md
type: planning
version: 1.1.0
updated: 2026-02-25
owner: "@pm"
status: approved
---

# Business Requirements Document (BRD)

## 1. Document Control

| Version | Date       | Author | Changes                                            |
|---------|------------|--------|----------------------------------------------------|
| 1.0.0   | 2026-02-24 | @pm    | Initial draft                                      |
| 1.1.0   | 2026-02-25 | @pm    | Add Vinh danh, Quỹ khuyến học, Hương ước          |

---

## 2. Business Objectives

### 2.1 Primary Objectives

| ID | Objective | Priority | Success Criteria |
|----|-----------|----------|------------------|
| **BO-01** | Số hóa toàn bộ gia phả Chi tộc Đặng Đình | P0 | 100% dữ liệu được nhập |
| **BO-02** | Cung cấp công cụ tra cứu cho thành viên | P0 | >50% thành viên sử dụng |
| **BO-03** | Open source cho cộng đồng Việt Nam | P1 | MIT license, docs đầy đủ |

### 2.2 Business Drivers

| Driver | Description | Impact |
|--------|-------------|--------|
| **Bảo tồn văn hóa** | Lưu giữ thông tin qua thế hệ | Critical |
| **Kết nối dòng họ** | Tăng cường liên lạc trong tộc | High |
| **Hiện đại hóa** | Thu hút thế hệ trẻ | Medium |
| **Cộng đồng** | Chia sẻ cho các dòng họ khác | Medium |

---

## 3. Functional Requirements

> **Note:** Requirements derived from [Market Research](../00-foundation/market-research.md) analyzing 5 commercial platforms + 6 OSS solutions.

### 3.1 Epic: Quản lý Thành viên (People Management)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-101** | Thêm/sửa/xóa thông tin thành viên | P0 | CRUD hoạt động với validation |
| **FR-102** | Thông tin cơ bản: tên, giới tính, năm sinh/mất | P0 | Fields required/optional đúng |
| **FR-103** | Thông tin mở rộng: tiểu sử, ảnh, ghi chú | P1 | Support upload ảnh |
| **FR-104** | Thông tin liên lạc: SĐT, email, Zalo, Facebook | P1 | Links clickable |
| **FR-105** | Đời thứ mấy (generation) | P0 | Auto-calculate từ parent |
| **FR-106** | Chi/nhánh | P0 | Assignable by admin |
| **FR-107** | Trạng thái: còn sống/đã mất | P0 | Affects display (muted style) |

### 3.2 Epic: Quan hệ Gia đình (Family Relationships)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-201** | Liên kết cha-mẹ-con | P0 | Bidirectional relationship |
| **FR-202** | Liên kết vợ-chồng | P0 | Support multiple marriages |
| **FR-203** | Chính tộc (patrilineal) flag | P0 | Highlight in tree view |
| **FR-204** | Thứ tự con trong gia đình | P1 | Sortable, affects display order |

### 3.3 Epic: Cây Gia Phả (Family Tree)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-301** | Hiển thị cây gia phả toàn cảnh | P0 | Render all generations |
| **FR-302** | Zoom in/out, pan | P0 | Smooth interaction |
| **FR-303** | Thu gọn/mở rộng nhánh | P0 | Click to toggle |
| **FR-304** | Xem dòng tổ tiên (ancestors) | P1 | Filter from selected person |
| **FR-305** | Xem hậu duệ (descendants) | P1 | Filter from selected person |
| **FR-306** | Hiển thị số người khi thu gọn | P1 | "📦 X người" badge |
| **FR-307** | Đường kết nối orthogonal | P0 | Không có đường chéo |

### 3.4 Epic: Tìm kiếm & Lọc (Search & Filter)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-401** | Tìm theo tên | P0 | Instant search, highlight |
| **FR-402** | Lọc theo đời | P1 | Dropdown filter |
| **FR-403** | Lọc theo chi | P1 | Dropdown filter |
| **FR-404** | Lọc theo trạng thái (sống/mất) | P2 | Toggle filter |

### 3.5 Epic: Xác thực & Phân quyền (Auth & Authorization)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-501** | Đăng ký tài khoản | P0 | Email + password |
| **FR-502** | Đăng nhập/Đăng xuất | P0 | Session management |
| **FR-503** | Quên mật khẩu | P1 | Email reset link |
| **FR-504** | Role: Admin | P0 | Full CRUD access |
| **FR-505** | Role: Viewer | P0 | Read-only access |
| **FR-506** | Admin Panel | P0 | Manage users, roles |

### 3.6 Epic: Đóng góp & Kiểm duyệt (Contributions)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-601** | Viewer gửi đề xuất chỉnh sửa | P1 | Create contribution |
| **FR-602** | Admin review đề xuất | P1 | Approve/Reject workflow |
| **FR-603** | Notification cho admin | P2 | Email or in-app |
| **FR-604** | Lịch sử đóng góp | P2 | Audit trail |

### 3.7 Epic: Sách Gia Phả (Genealogy Book)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-701** | Generate nội dung sách từ dữ liệu | P1 | Formatted output |
| **FR-702** | Theo thế hệ, chi tiết từng nhánh | P1 | Structured content |
| **FR-703** | Export PDF (v2.0) | P2 | Printable format |

### 3.8 Epic: Danh bạ (Directory)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-801** | Danh sách thành viên với liên lạc | P1 | Table view |
| **FR-802** | Filter theo đời | P1 | Dropdown |
| **FR-803** | Search theo tên | P1 | Instant search |

### 3.9 Epic: Vietnamese Cultural Features (v1.2+)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-901** | Âm lịch (Lunar calendar) support | P1 | Convert solar ↔ lunar dates |
| **FR-902** | Ngày giỗ (Memorial day) tracking | P1 | Store & display lunar death dates |
| **FR-903** | Lịch cúng lễ (Memorial calendar) | P1 | Calendar view of giỗ dates |
| **FR-904** | Memorial reminders | P2 | Notification before giỗ |
| **FR-905** | Can Chi (Zodiac year) display | P2 | Auto-calculate from birth year |
| **FR-906** | Tên húy / Tên tự support | P2 | Additional name fields |

### 3.10 Epic: Data Exchange (GEDCOM)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-1001** | GEDCOM 5.5.1 export | P1 | Valid GEDCOM file output |
| **FR-1002** | GEDCOM 5.5.1 import | P2 | Parse and load GEDCOM file |
| **FR-1003** | GEDCOM 7.0 support | P3 | Future standard compliance |

### 3.11 Epic: Vinh danh Thành tích (Achievement Honors)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-1201** | Bảng vinh danh con cháu có thành tích | P1 | Trang hiển thị danh sách vinh danh |
| **FR-1202** | Phân loại thành tích (học tập, sự nghiệp, cống hiến) | P1 | Lọc theo danh mục |
| **FR-1203** | Gắn thành tích với thành viên (person_id) | P1 | Link từ vinh danh tới trang cá nhân |
| **FR-1204** | Admin quản lý thành tích (CRUD) | P1 | Thêm/sửa/xóa thành tích |
| **FR-1205** | Hiển thị thành tích trên trang cá nhân | P2 | Badge/section trên person detail |
| **FR-1206** | Thành tích theo năm | P2 | Lọc theo năm, xem theo mốc thời gian |

### 3.12 Epic: Quỹ Khuyến học (Education Encouragement Fund)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-1301** | Dashboard quỹ khuyến học (số dư, thu/chi) | P1 | Hiển thị tổng quan tài chính quỹ |
| **FR-1302** | Ghi nhận đóng góp quỹ (tên, số tiền, ngày) | P1 | CRUD giao dịch đóng góp |
| **FR-1303** | Cấp học bổng cho con em nghèo khó khăn | P1 | Workflow đề cử → duyệt → cấp |
| **FR-1304** | Thưởng cho con em có thành tích học tập tốt | P1 | Workflow đề cử → duyệt → thưởng |
| **FR-1305** | Phân loại: học bổng (khó khăn) vs khen thưởng (thành tích) | P1 | 2 loại rõ ràng, filter được |
| **FR-1306** | Lịch sử cấp phát (ai nhận, bao nhiêu, khi nào) | P1 | Bảng lịch sử đầy đủ |
| **FR-1307** | Báo cáo tổng kết năm (thu/chi/số suất) | P2 | Export hoặc view báo cáo |
| **FR-1308** | Quy chế quỹ (điều kiện nhận, mức thưởng) | P2 | Trang hiển thị quy chế |

### 3.13 Epic: Hương ước Dòng họ (Family Charter & Clan Rules)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-1401** | Trang hiển thị Hương ước / Gia huấn | P1 | Trang đọc nội dung có format |
| **FR-1402** | Phân mục: Gia huấn, Quy ước, Lời dặn con cháu | P1 | Tabs hoặc sections rõ ràng |
| **FR-1403** | Admin quản lý nội dung (CRUD bài viết) | P1 | Rich text editor, thêm/sửa/xóa |
| **FR-1404** | Thứ tự hiển thị bài viết (sort_order) | P2 | Kéo thả hoặc nhập số thứ tự |
| **FR-1405** | Lịch sử chỉnh sửa (ai sửa, khi nào) | P2 | Audit trail cho nội dung |
| **FR-1406** | Hiển thị nổi bật trên trang chủ | P2 | Trích dẫn hoặc card gia huấn |

---

## 4. Non-Functional Requirements

### 4.1 Performance

| ID | Requirement | Target | Measurement |
|----|-------------|--------|-------------|
| **NFR-01** | Page load time | <3 seconds | Lighthouse |
| **NFR-02** | Tree render (500 nodes) | <2 seconds | Manual test |
| **NFR-03** | Search response | <500ms | Manual test |

### 4.2 Scalability

| ID | Requirement | Target | Notes |
|----|-------------|--------|-------|
| **NFR-04** | Support members | 5,000+ | Per family |
| **NFR-05** | Concurrent users | 100+ | Peak |
| **NFR-06** | Database size | 500MB | Supabase free tier |

### 4.3 Security

| ID | Requirement | Target | Implementation |
|----|-------------|--------|----------------|
| **NFR-07** | Authentication | Supabase Auth | Email/password |
| **NFR-08** | Authorization | Row-Level Security | PostgreSQL RLS |
| **NFR-09** | Data encryption | HTTPS | Vercel default |
| **NFR-10** | Privacy settings | Per-person | Hide contact info |

### 4.4 Usability

| ID | Requirement | Target | Notes |
|----|-------------|--------|-------|
| **NFR-11** | Mobile responsive | 100% | All screens |
| **NFR-12** | Lighthouse Accessibility | >90 | WCAG compliance |
| **NFR-13** | Language | Vietnamese | 100% UI |
| **NFR-14** | Elderly-friendly | Yes | Large fonts option |

### 4.5 Availability

| ID | Requirement | Target | Provider |
|----|-------------|--------|----------|
| **NFR-15** | Uptime | >99% | Vercel SLA |
| **NFR-16** | Backup | Daily | Supabase |
| **NFR-17** | Recovery | <4 hours | Manual restore |

---

## 5. Data Requirements

### 5.1 Data Entities

```
┌─────────────────────────────────────────────────────────────┐
│                         people                               │
├─────────────────────────────────────────────────────────────┤
│ • handle (PK) - unique identifier                           │
│ • display_name - full name                                   │
│ • gender - 1: Male, 2: Female                               │
│ • generation - đời thứ mấy                                  │
│ • chi - chi/nhánh                                           │
│ • birth_year, death_year                                    │
│ • is_living, is_patrilineal                                 │
│ • phone, email, zalo, facebook                              │
│ • biography, notes                                          │
│ • families[] - FK to families (as parent)                   │
│ • parent_families[] - FK to families (as child)             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        families                              │
├─────────────────────────────────────────────────────────────┤
│ • handle (PK)                                               │
│ • father_handle - FK to people                              │
│ • mother_handle - FK to people                              │
│ • children[] - array of people handles                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        profiles                              │
├─────────────────────────────────────────────────────────────┤
│ • id (PK)                                                   │
│ • user_id - FK to Supabase auth.users                       │
│ • role - 'admin' | 'viewer'                                 │
│ • linked_person_handle - FK to people (optional)            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     contributions                            │
├─────────────────────────────────────────────────────────────┤
│ • id (PK)                                                   │
│ • author_id - FK to profiles                                │
│ • target_handle - FK to people                              │
│ • changes - JSON diff                                       │
│ • status - 'pending' | 'approved' | 'rejected'              │
│ • reviewed_by, reviewed_at                                  │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Data Migration

| Source | Records (Est.) | Priority |
|--------|----------------|----------|
| **Excel gia phả hiện có** | 200-500 | P0 |
| **Ảnh thành viên** | 50-100 | P1 |
| **Tiểu sử** | 20-30 | P2 |

---

## 6. Integration Requirements

### 6.1 External Systems

| System | Integration | Priority |
|--------|-------------|----------|
| **Supabase** | Auth, Database | P0 |
| **Vercel** | Hosting | P0 |
| **GEDCOM** | Import/Export (v2.0) | P2 |

### 6.2 APIs

| API | Purpose | Priority |
|-----|---------|----------|
| **Supabase REST** | CRUD operations | P0 |
| **Supabase Auth** | User management | P0 |

---

## 7. Constraints & Assumptions

### 7.1 Constraints

| ID | Constraint | Impact |
|----|------------|--------|
| **C-01** | Zero budget | Must use free tiers |
| **C-02** | Web-only (v1.0) | No native app |
| **C-03** | Vietnamese only | No i18n |
| **C-04** | 4-6 week timeline | Scope limit |

### 7.2 Assumptions

| ID | Assumption | Risk if False |
|----|------------|---------------|
| **A-01** | HĐGT provides data | Project blocked |
| **A-02** | Free tier sufficient | Need upgrade |
| **A-03** | Users have smartphone | Low adoption |
| **A-04** | Internet available | Offline not supported |

---

## 8. Acceptance Criteria (MVP)

### 8.1 MVP Definition

| Feature | Included | Notes |
|---------|----------|-------|
| ✅ People CRUD | Yes | Core |
| ✅ Family relationships | Yes | Core |
| ✅ Tree view (basic) | Yes | Core |
| ✅ Search | Yes | Core |
| ✅ Auth (Admin/Viewer) | Yes | Core |
| ⏳ Contributions | No | Post-MVP |
| ⏳ Book generator | No | Post-MVP |
| ⏳ Directory | No | Post-MVP |

### 8.2 MVP Acceptance

- [ ] 100 people records can be managed
- [ ] Tree renders correctly for 5 generations
- [ ] Admin can CRUD all data
- [ ] Viewer can browse and search
- [ ] Mobile responsive works
- [ ] Deploy to production (Vercel)

---

## 9. Competitive Analysis (gen3.vn)

> **Source:** gen3.vn research (2026-02-24)
> **Purpose:** Feature benchmark for roadmap planning

### 9.1 Feature Comparison

| Feature | AncestorTree | gen3.vn | Gap |
|---------|:------------:|:-------:|:---:|
| **Core** | | | |
| Quản lý thành viên (CRUD) | ✅ Sprint 2 | ✅ | - |
| Cây gia phả interactive | ✅ Sprint 3 | ✅ | - |
| Tìm kiếm, lọc đời/chi/tên | ✅ Sprint 2 | ✅ | - |
| Auth (Admin/Viewer) | ✅ Sprint 1 | ✅ | - |
| Mobile responsive | ✅ Sprint 3 | ✅ | - |
| Song lịch Âm-Dương | ✅ Sprint 4 | ✅ | - |
| Thông báo ngày giỗ | ✅ Sprint 4 | ✅ | - |
| **Extended** | | | |
| Quản lý tin tức, sự kiện | ⬜ Backlog | ✅ | **New** |
| Thông báo qua social/messaging | ⬜ Backlog | ✅ | **New** |
| Subscription Management | ⬜ N/A | ✅ | N/A (OSS) |
| Custom domain (clan.gen3.vn) | ⬜ N/A | ✅ | N/A (OSS) |
| **Upcoming (gen3.vn Mar 2026)** | | | |
| BOT/Crawler nhập liệu | ⬜ Backlog | 🔄 In progress | **New** |
| Import từ nền tảng khác | ⬜ P2 (GEDCOM) | 🔄 In progress | Partial |
| **Future (gen3.vn May-Jun 2026)** | | | |
| Quản lý quỹ họ | ⬜ Backlog | 📌 Planned | **New** |
| Sách gia phả/Export/In ấn | ⬜ Sprint 5 | 📌 Planned | - |
| Virtual Tour (nhà thờ, lăng mộ) | ⬜ Backlog | 📌 Planned | **New** |
| Native mobile app | ⬜ Backlog | 📌 Planned | **New** |
| Cross-clan connection | ⬜ Backlog | 📌 Planned | **New** |

### 9.2 New Features to Consider (Post-MVP)

| ID | Feature | Priority | Notes |
|----|---------|----------|-------|
| **FR-1101** | Quản lý tin tức/sự kiện dòng họ | P2 | News, announcements, events |
| **FR-1102** | Thông báo qua Zalo/Telegram/Email | P2 | Integration với messaging platforms |
| **FR-1103** | ~~Quản lý quỹ họ~~ → Quỹ khuyến học | **P1** | **Moved to FR-1301~1308 (v1.1)** |
| **FR-1104** | BOT hỗ trợ nhập liệu | P3 | AI-assisted data entry |
| **FR-1105** | Virtual Tour 360° | P3 | Nhà thờ, lăng mộ, địa điểm lịch sử |
| **FR-1106** | Native mobile apps | P3 | iOS/Android native apps |
| **FR-1107** | Cross-clan connection | P3 | Liên kết giữa các dòng họ |
| **FR-1201~06** | **Vinh danh thành tích** | **P1** | **New in v1.1 - Achievement honors** |
| **FR-1301~08** | **Quỹ khuyến học & học bổng** | **P1** | **New in v1.1 - Education fund** |
| **FR-1401~06** | **Hương ước dòng họ** | **P1** | **New in v1.1 - Family charter** |

### 9.3 Differentiation Strategy

| Aspect | gen3.vn | AncestorTree |
|--------|---------|--------------|
| **Model** | SaaS (subscription) | Open Source (MIT) |
| **Target** | Commercial | Community/Self-hosted |
| **Hosting** | Managed | Self-hosted or Vercel |
| **Customization** | Limited | Full source access |
| **Cost** | Paid tiers | Free (infra costs only) |

---

## 10. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Sponsor | Chủ tịch HĐGT | | ⏳ Pending |
| PM | @pm | 2026-02-24 | ✅ Approved |
| Tech Lead | @dev | | ⏳ Pending |

---

**Previous:** [00-foundation/business-case.md](../00-foundation/business-case.md)
**Next:** [roadmap.md](./roadmap.md)

*SDLC Framework 6.1.1 - Stage 01 Planning*
