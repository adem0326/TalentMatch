# Project Master Context Specification

## 1. Project Overview & Goals

### Project Name
TalentMatch

### Target Platform
Web application built with React + Vite for a modern HR management dashboard experience.

### Domain
HR management platform focused on:
- Candidate pipeline tracking
- Job listings management
- Recruitment analytics
- Job posting workflows

### Core Purpose
Provide a polished, modular, and future-ready recruiter workspace where HR teams can:
- review candidates across hiring stages,
- manage job postings,
- monitor hiring performance,
- and scale toward real backend integration without rewriting the UI architecture.

### Core Philosophy
- Modular architecture with feature-based organization
- Dynamic state management through custom hooks and mock API layers
- Future backend readiness: avoid hardcoded static UI patterns and keep data access isolated behind API modules
- Reusable design primitives for rapid expansion

---

## 2. Directory Structure & Conventions

### Root Project Structure
```text
frontend/
  index.html
  package.json
  vite.config.js
  public/
  src/
    App.jsx
    main.jsx
    assets/
    components/
      ui/
        Button.jsx
        GlassCard.jsx
        index.js
      layout/
        HrSidebar.jsx
    features/
      landing/
        components/
        pages/
        index.js
      hr-dashboard/
        api/
          candidateApi.js
        hooks/
          usePipeline.js
        components/
          CandidateCard.jsx
          PipelineBoard.jsx
        pages/
          HRPipelinePage.jsx
        index.js
      job-listings/
        api/
          jobsApi.js
        hooks/
          useJobs.js
        components/
          FilterBar.jsx
          JobRow.jsx
          JobTable.jsx
        pages/
          JobListingsPage.jsx
        index.js
      post-job/
        api/
          postJobApi.js
        hooks/
          usePostJob.js
        components/
        pages/
          PostJobPage.jsx
        index.js
      hr-analytics/
        api/
          analyticsApi.js
        hooks/
          useAnalytics.js
        components/
          KpiCard.jsx
          SourcesTable.jsx
          FunnelChart.jsx
          TrendChart.jsx
        pages/
          AnalyticsPage.jsx
        index.js
    styles/
      index.css
```

### Architectural Conventions

1. Feature-Based Organization
- Each major domain lives in its own folder under `src/features/`.
- The feature folder should encapsulate UI, hooks, API, and page components.

2. Component Extraction Rules
- Reusable primitives belong in `src/components/ui/`.
- Page-specific components should remain inside the relevant feature folder.
- Shared layout components may live in `src/components/layout/`.

3. Custom Hooks for Logic
- Business logic and state transitions should be isolated in hooks such as:
  - `usePipeline`
  - `useJobs`
  - `usePostJob`
  - `useAnalytics`
- Hooks should own local state, loading/error handling, and interaction handlers.

4. API Abstraction Layer
- All network-like operations should be abstracted into feature-local API modules.
- Use files such as `candidateApi.js`, `jobsApi.js`, `postJobApi.js`, and `analyticsApi.js`.
- Mock APIs should use `Promise` + `setTimeout` to simulate async backend behavior.

5. Root Barrels
- Each feature should expose its public surface via a root `index.js` file.
- This keeps imports consistent and simplifies future scaling.

---

## 3. Design System & Visual Tokens (Glassmorphism)

### Core Color Tokens
Defined in `src/styles/index.css`:
```css
:root {
  --bg: #ffffff;
  --panel: rgba(255, 255, 255, 0.7);
  --fg: #1a1a2e;
  --muted: #6b6964;
  --border: rgba(255, 45, 45, 0.15);
  --accent: #ff2d2d;
  --accent-glow: rgba(255, 45, 45, 0.15);
  --accent-light: rgba(255,85,85,0.12);
}
```

### Visual Style Principles
- Soft glassmorphism surfaces with blur and translucent panels
- Red-accented highlights for interactive elements and CTAs
- Rounded corners and subtle depth via shadow treatments
- Light gradient backgrounds to create an airy dashboard feel

### Typography
- UI uses system-safe font stacks:
  - `--font-display`
  - `--font-body`
  - `--font-mono`

### Border Radius & Spacing
- Cards and panels: rounded corners with generous padding
- Buttons use compact rounded pill/capsule shapes for modern dashboard styling

### Background Treatment
- Main body uses a soft white-to-slate gradient background
- Sidebar and header surfaces use translucent white backgrounds with blur

### Hover & Transition Rules
- Buttons and cards should animate with subtle translate/scale transitions
- Hover states should preserve the glass aesthetic while emphasizing the accent color

### Base UI Primitives

#### `GlassCard`
A reusable layout wrapper that applies:
- translucent background,
- blur backdrop,
- border outline,
- rounded corners,
- soft hover elevations.

#### `Button`
A flexible button primitive supporting:
- `primary` / `red` / `secondary` variants,
- optional `as` prop for rendering as a link or other element,
- consistent spacing and rounded appearance.

---

## 4. Implemented Features & Architecture

### Current Implemented Areas

#### HR Candidate Pipeline
A feature-rich pipeline view for managing candidates across hiring stages.

Implemented workflow stages:
- Applied
- Reviewing
- Interview
- Offer

Current behavior:
- Candidate cards are displayed per stage
- Drag-and-drop or interaction-driven movement is supported via custom pipeline logic
- The feature uses a dedicated hook and API abstraction layer

#### Job Listings Management
A dashboard-style listings page for:
- viewing active, draft, and closed positions,
- filtering by status,
- viewing applicant counts,
- navigating to posting workflow.

#### Post New Job Workflow
A form-driven job posting experience with:
- job metadata input,
- validation and submission logic,
- success feedback and navigation handoff back to job listings.

#### HR Analytics Dashboard
A mock analytics experience that exposes:
- KPI cards for hiring metrics,
- trend chart visuals,
- source breakdown table,
- funnel-style conversion chart.

### Mock API Pattern
The project uses mock async APIs to simulate backend behavior without requiring real services.

Pattern:
```js
export function fetchJobs() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockJobs), 300)
  })
}
```

Common patterns include:
- `fetch*` functions returning arrays or objects after a delay
- `update*` / `patch*` operations simulating state changes
- `create*` operations appending new records to mock storage

This approach keeps UI behavior realistic while preserving flexibility for later backend integration.

### State Pattern
- UI state lives in hooks where appropriate
- Business mutation logic is kept inside hooks rather than embedded in component markup
- Components stay focused on rendering, while hooks coordinate async data and updates

---

## 5. Roadmap & Remaining Features

### Near-Term Roadmap
- Improve analytics visuals to better match a polished dashboard reference
- Add richer chart components and stronger data-driven visualizations
- Refine responsive behavior across tablet and mobile widths
- Add stronger empty/loading/error states for all feature pages

### Medium-Term Features
- Add real authentication and role-based visibility for HR users
- Connect mock APIs to a real backend or REST service
- Introduce persistent storage (database or local persistence layer)
- Add candidate detail views and profile modals
- Add richer filtering, search, and sort controls for listings and pipeline data

### Future Enhancements
- Notifications and workflow reminders
- Interview scheduling integration
- Candidate scoring and matching engine
- CRM-style recruiter workflow modules
- Admin panels for company-wide hiring insights

---

## 6. AI Session Initialization Guidance

When initializing a fresh AI session for this project, follow these rules:

- Preserve the feature-based architecture and avoid scattering UI code into unrelated folders.
- Prefer creating reusable UI primitives before introducing page-specific implementation details.
- Keep business logic inside hooks and API modules, not directly in components.
- Use the existing glassmorphism system and design tokens rather than introducing conflicting visual styles.
- Favor incremental, modular updates over large rewrites.
- If introducing new features, add a feature folder with `api/`, `hooks/`, `components/`, `pages/`, and `index.js` unless the change is clearly a shared primitive.

---

## 7. Working Notes for Future Development

- The app is already structured around HR operations, but it should remain adaptable to additional recruiting workflows.
- Current data is mock-driven and should be treated as a temporary backend replacement layer.
- Keep the UI visually polished, consistent, and prepared for future API-backed state.
