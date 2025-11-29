# Tasko — Smart Task Manager

Tasko is a lightweight, privacy-conscious task and todo manager built with React and TypeScript. It emphasizes fast task capture, offline-first reliability, and optional cloud sync to help individuals and small teams stay organized and productive.

## Project Name

- **Tasko — Smart Task Manager**

## Overview / Context

- **Summary:** Tasko provides a fast, minimal interface for creating, organizing, and completing tasks. It is designed as a Progressive Web App (PWA) with offline support and optional cloud synchronization.
- **Why it exists:** To offer a focused alternative to complex or connectivity-dependent task apps — prioritizing quick capture, dependable offline behavior, and extensibility.
- **Audience:** Power users, freelancers, students, and small teams that value speed, simplicity, and portability.

## Problem Statement

- **Core issue:** Many task managers are either feature-bloated or too simplistic, often requiring constant connectivity or locking users into heavy ecosystems.
- **Why it matters:** Poor tooling causes missed deadlines, fragmented workflows, and productivity loss. Tasko reduces friction and helps users keep work and responsibilities under control.

## Key Features

- **Quick Capture:** Instant task creation with title, notes, due date, priority, and tags.
- **Organized Views:** All, Today, Upcoming, Completed, tag filters, and search.
- **Subtasks & Checklists:** Break tasks into smaller actionable steps.
- **Notifications & Reminders:** Local and push notifications with click handling to open specific tasks.
- **Offline-first PWA:** Service worker caching, local persistence, and queued sync when online.
- **Optional Cloud Sync:** Firebase-ready sync implementation (replaceable with other backends).
- **Predictable State Management:** Reducer/store pattern (`src/redux`) and middleware for robust updates.
- **Accessibility & Theming:** Dark/light mode and keyboard navigation support.
- **Export/Import:** JSON/CSV export and import for portability and backups.

## How It Works (User Workflow)

1. **Onboard:** Open the web app or install the PWA. Optionally sign in to enable cloud sync. Cached data loads immediately.
2. **Capture:** Use the Add control to create a task with optional fields (notes, tags, due date). Tasks appear instantly.
3. **Organize:** Filter by Today, Tags, Priority, or search. Mark tasks complete or add subtasks.
4. **Remind & Notify:** Schedule reminders. Notifications open the app to the related task on click.
5. **Offline:** Actions persist locally when offline and sync to the backend when connectivity returns. Conflicts are resolved with a simple, user-friendly strategy.

## Technology / Architecture

- **Frontend:** React + TypeScript, built with Vite (`vite.config.ts`).
- **Styling:** Tailwind CSS (`tailwind.config.js`) and `index.css`.
- **State Management:** Reducer-style store in `src/redux` with middleware (`todoMiddleware.ts`).
- **Backend / Sync:** Optional Firebase integration (`src/firebase.ts`), designed to be replaceable.
- **PWA & Offline:** Service worker (`sw.js`) and `manifest.webmanifest` enable installable, offline-capable behavior.
- **Notifications:** Push and local notifications, plus click handling (`push.js`, `notificationonclickEvent.json`).

## Target Users

- **Primary:** Individuals needing a fast, reliable personal task manager.
- **Secondary:** Freelancers and small teams seeking simple shared lists without heavy PM tooling.
- **Tertiary:** Educators, students, and developers who want an extendable open frontend.

## Benefits / Value

- **Reliability:** Offline-first design protects user data and availability.
- **Speed:** Fast capture workflow reduces friction and context switching.
- **Continuity:** Optional cloud sync keeps tasks consistent across devices.
- **Privacy-friendly:** Sync is optional — users can keep data local.
- **Extensible:** Modular codebase makes it easy to add integrations and features.

## Future Scope

- **Collaboration:** Shared lists, task assignment, and comments.
- **Advanced Reminders:** Natural-language date parsing, recurring tasks, and smart snooze.
- **Calendar Integrations:** Two-way sync with Google and Outlook calendars.
- **Analytics & Insights:** Completion streaks, time tracking, and productivity dashboards.
- **AI Enhancements:** Smart suggestions, auto-tagging, and note summarization.
- **End-to-end Encryption:** Optional encrypted sync for privacy-sensitive users.

---

If you’d like, I can also:

- Add developer setup and contributor instructions to this `README.md`.
- Create a short product elevator pitch or marketing blurb.
- Add a `CONTRIBUTING.md` or `.github` workflow templates.

Tell me which you'd like next.
