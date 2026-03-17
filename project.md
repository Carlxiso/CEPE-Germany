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
