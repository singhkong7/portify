# 🚀 Portify

Portify is a modern Resume & Portfolio Builder built using Next.js, TypeScript, Tailwind CSS, and Zustand.

The application allows users to choose from multiple resume templates, enter their personal and professional details, preview their resume in real time, and eventually download it as a PDF.

---

## ✨ Features

### Current Features

- Landing Page
- Template Selection
- Dynamic Template Routing
- Resume Editor
- Live Resume Preview
- Skills Management
- Experience Management
- Education Management
- Zustand State Management
- Responsive UI using Tailwind CSS

---

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── page.tsx
│   ├── templates/
│   │   └── page.tsx
│   │
│   ├── editor/
│   │   └── [templateId]/
│   │       └── page.tsx
│   │
│   ├── preview/
│   │   └── page.tsx
│   │
│   └── profile/
│       └── page.tsx
│
├── components/
│   │
│   ├── templates/
│   │   └── TemplateCard.tsx
│   │
│   ├── editor/
│   │   ├── ResumeForm.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── EducationSection.tsx
│   │
│   └── preview/
│       └── ResumePreview.tsx
│
├── data/
│   └── templates.ts
│
├── store/
│   └── resume-store.ts
│
└── types/
    └── resume.ts
```

---

## 🛠️ Technology Stack

### Frontend

- Next.js 15
- TypeScript
- Tailwind CSS

### State Management

- Zustand

### Styling

- Tailwind CSS

### Routing

- Next.js App Router

---

## 📄 Application Flow

### 1. Landing Page

Users land on the home page and can start building their resume.

Route:

```text
/
```

---

### 2. Template Selection

Users can choose a resume template.

Route:

```text
/templates
```

Templates currently include:

- Professional
- Modern
- Minimal
- Executive
- Creative
- Elegant
- Corporate
- Startup
- Tech
- Designer
- Developer
- Compact
- Timeline
- Portfolio
- Premium

---

### 3. Resume Editor

Users fill in:

- Personal Information
- Skills
- Experience
- Education

Route:

```text
/editor/[templateId]
```

Example:

```text
/editor/1
/editor/2
```

---

### 4. Live Preview

As users enter information, the preview updates automatically.

Managed using Zustand global state.

---

### 5. Profile

Displays user-created resumes.

Route:

```text
/profile
```

---

## 📦 Zustand Store

The application uses Zustand to manage resume state globally.

Current Store Data:

```ts
{
  personalInfo: {},
  summary: "",
  skills: [],
  experience: [],
  education: []
}
```

---

## 🎨 Templates

Template metadata is stored in:

```text
src/data/templates.ts
```

Example:

```ts
{
  id: 1,
  name: "Professional",
  image: "...",
  category: "Professional"
}
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔮 Future Enhancements

### Authentication

- Google Sign In
- Firebase Authentication

### Resume Management

- Save Resume
- Edit Resume
- Delete Resume

### PDF

- Generate PDF
- Download PDF

### Storage

- Local Storage
- MongoDB
- PostgreSQL

### Advanced Features

- Drag & Drop Sections
- Multiple Resume Themes
- AI Resume Summary Generation
- Portfolio Website Generation
- Public Shareable Links

---

## 📋 Development Roadmap

### Phase 1 (Current)

- Landing Page
- Templates Page
- Resume Editor
- Preview
- Zustand Store

### Phase 2

- Template Filtering
- Profile Dashboard
- Resume Persistence

### Phase 3

- PDF Generation
- Authentication

### Phase 4

- Backend Integration (NestJS)

### Phase 5

- AI Features
- Portfolio Hosting

---

## 👨‍💻 Author

Priyansh Singh

Software Engineer | Runner | Boxer

Built with ❤️ using Next.js and Tailwind CSS.