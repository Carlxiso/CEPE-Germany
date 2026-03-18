## First Structure

--/src
---/app
----layout.js
----page.js
---/components
---/layout
----Navbar.js
----Footer.js
---/sections
----Hero.js
----News.js
----About.js
----Features.js
----SplitSection.js
----Services.js
CTA.js
Testimonials.js
Banner.js
Contact.js
/components/ui
Button.js
Card.js
Container.js
/data
news.js
testimonials.js
/styles
globals.css
layout.css
sections.css
components.css
/public

## Design System

│
├─ Foundations
│ ├─ Colors
│ ├─ Typography
│ └─ Spacing
│
├─ UI
│ ├─ Button
│ ├─ Input
│ ├─ Card
│ └─ Badge
│
├─ Navigation
│ ├─ Navbar
│ └─ Mobile Menu
│
└─ Layout
├─ Container
├─ Grid
└─ Section

## Section

components
├─ layout
│ ├─ Section
│ │ ├─ Section.jsx
│ │ ├─ Section.module.css
│ │ └─ Section.stories.jsx

## Form

components
####-- ContactForm
######-- ContactForm.jsx
######-- ContactForm.module.css

hooks
####-- useContactForm.js

app/api
####-- contact
######-- route.js

1 - Proteção anti-spam (honeypot)
2 - UX - states claros
3 - Arquitetura - hook reutilizável
4 - Segurança - API route

**Generated:** 18/03/2026, 14:30:18

```
├── 📁 _components
│   ├── 📁 Layout
│   │   ├── 📁 Container
│   │   │   ├── 📄 Container.js
│   │   │   ├── 📄 Container.stories.jsx
│   │   │   └── 🎨 container.module.css
│   │   ├── 📁 DiagnosticTest
│   │   │   ├── 📄 DiagnosticTest.js
│   │   │   ├── 🎨 DiagnosticTest.module.css
│   │   │   └── 📄 DiagnosticTest.stories.jsx
│   │   ├── 📁 Footer
│   │   │   ├── 📄 Footer.js
│   │   │   ├── 🎨 Footer.module.css
│   │   │   └── 📄 Footer.stories.jsx
│   │   ├── 📁 Form
│   │   │   ├── 📁 FormField
│   │   │   │   ├── 📄 FormField.js
│   │   │   │   ├── 🎨 FormField.module.css
│   │   │   │   └── 📄 FormField.stories.jsx
│   │   │   ├── 📁 Input
│   │   │   │   ├── 📄 Input.js
│   │   │   │   └── 🎨 Input.module.css
│   │   │   ├── 📁 Textarea
│   │   │   │   ├── 📄 Textarea.js
│   │   │   │   └── 🎨 Textarea.module.css
│   │   │   ├── 📄 Form.js
│   │   │   └── 🎨 Form.module.css
│   │   ├── 📁 Header
│   │   │   ├── 📄 Header.js
│   │   │   ├── 📄 Header.stories.jsx
│   │   │   └── 🎨 header.module.css
│   │   ├── 📁 Hero
│   │   │   ├── 📄 Hero.js
│   │   │   ├── 🎨 Hero.module.css
│   │   │   └── 📄 Hero.stories.jsx
│   │   ├── 📁 Institutions
│   │   │   ├── 📄 Institutions.js
│   │   │   ├── 🎨 Institutions.module.css
│   │   │   └── 📄 Institutions.stories.jsx
│   │   ├── 📁 Logo
│   │   │   ├── 📄 Logo.js
│   │   │   ├── 📄 Logo.stories.jsx
│   │   │   └── 🎨 logo.module.css
│   │   ├── 📁 Navigation
│   │   │   ├── 📄 Navigation.js
│   │   │   ├── 📄 Navigation.stories.jsx
│   │   │   └── 🎨 navigation.module.css
│   │   ├── 📁 NewsSection
│   │   │   ├── 📄 NewsSection.js
│   │   │   ├── 🎨 NewsSection.module.css
│   │   │   └── 📄 NewsSection.stories.jsx
│   │   ├── 📁 Section
│   │   │   ├── 📄 Section.js
│   │   │   ├── 🎨 Section.module.css
│   │   │   └── 📄 Section.stories.jsx
│   │   ├── 📁 SplitAbout
│   │   │   ├── 📄 SplitAbout.js
│   │   │   └── 🎨 SplitAbout.module.css
│   │   ├── 📁 SplitSection
│   │   │   ├── 📄 SplitSection.js
│   │   │   ├── 🎨 SplitSection.module.css
│   │   │   └── 📄 SplitSection.stories.jsx
│   │   ├── 📁 SplitSectionGrid
│   │   │   ├── 📄 SplitSectionGrid.js
│   │   │   ├── 🎨 SplitSectionGrid.module.css
│   │   │   └── 📄 SplitSectionGrid.stories.jsx
│   │   └── 📁 StatsSection
│   │       ├── 📄 StatsSection.js
│   │       └── 🎨 StatsSection.module.css
│   ├── 📁 Message
│   │   ├── 📄 Message.js
│   │   └── 🎨 Message.module.css
│   ├── 📁 Testimonials
│   │   ├── 📄 Testimonials.js
│   │   └── 🎨 Testimonials.module.css
│   ├── 📁 UI
│   │   ├── 📁 Button
│   │   │   ├── 📄 Button.js
│   │   │   ├── 🎨 Button.module.css
│   │   │   └── 📄 Button.stories.jsx
│   │   ├── 📁 CTASection
│   │   │   ├── 📄 CTASection.js
│   │   │   ├── 🎨 CTASection.module.css
│   │   │   └── 📄 CTASection.stories.jsx
│   │   ├── 📁 Card
│   │   │   ├── 📄 Card.js
│   │   │   ├── 🎨 Card.module.css
│   │   │   └── 📄 Card.stories.jsx
│   │   └── 📁 Heading
│   │       ├── 📄 Heading.js
│   │       └── 🎨 Heading.module.css
│   └── 📄 CitiesCourses.js
├── 📁 _lib
│   ├── 📄 data-institutions.js
│   ├── 📄 data-service.js
│   └── 📄 data-testimonials.js
├── 📁 _styles
│   └── 🎨 globals.css
├── 📁 about
│   └── 📄 page.js
├── 📁 api
├── 📁 blog
│   └── 📄 page.js
├── 📁 contactos
│   └── 📄 page.js
├── 📁 cursos
│   └── 📄 page.js
├── 📁 faq
│   └── 📄 page.js
├── 🎨 global.css
├── 🖼️ icon.png
├── 📄 layout.js
├── 📄 not-found.js
└── 📄 page.js
```

---

_Generated by FileTree Pro Extension_
