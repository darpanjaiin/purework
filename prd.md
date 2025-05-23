Product Requirements Document: PureWork Portfolio Website Builder
1. Introduction
1.1 Purpose
This PRD defines the requirements for PureWork, a SaaS platform that enables job seekers and personal brand creators to build professional portfolio websites. Built using Cursor for a user with no coding experience, it focuses on minimalistic, rich design to enhance job prospects.
1.2 Target Audience

Primary Users: Job seekers (e.g., recent graduates, freelancers, career switchers) and individuals building a personal online presence.
Secondary Users: None for the MVP.

1.3 Problem Statement
Data indicates that a personal website increases job prospects, yet many job seekers lack the skills or tools to create a professional, visually appealing site. Existing solutions are either too complex or lack design polish. PureWork offers an intuitive editor with real-time previews, premium design templates, and automatic subdomain hosting.
2. Goals

Enable users to create a portfolio website with inputs for education, skills, work experience, and bio.
Deliver a minimalistic, rich design that stands out to recruiters.
Simplify development using Cursor’s AI and no-code/low-code tools.
Launch an MVP within 2 months, including payment and subdomain features.

3. Functional Requirements
3.1 Landing Page

Showcase value proposition: “Build a professional portfolio in minutes.”
Include a prominent “Create Website” button leading to login/signup.

3.2 User Authentication

Sign-up/login via email/password or Google OAuth using Supabase.
Secure user data with encryption.

3.3 Website Editor

Layout: Split-screen editor (30% left: input fields; 70% right: real-time website preview).
Inputs: Fields for bio, education, skills, work experience, and optional profile photo.
Design Options: Predefined minimalistic templates (e.g., clean layouts, bold typography, subtle animations).
Real-Time Preview: Updates instantly as users input data or select design options.

3.4 Subdomain Creation

Users enter a desired subdomain (e.g., username.purework.com) in a text box.
Subdomain is reserved but not active until payment is completed.

3.5 Payment Integration

“Publish” button redirects to a payment page.
Stripe integration for one-time or subscription-based payment (to be finalized).
Post-payment, subdomain is activated, and website goes live.

3.6 Post-Payment Experience

Redirect to a “Congratulations” page with the live subdomain link and “Go to Website” button.

4. Non-Functional Requirements

Performance: Editor and preview load in under 2 seconds.
Scalability: Support 1,000 users on Supabase and Vercel free tiers.
Security: Encrypt user data; secure payment processing via Stripe.
Usability: Intuitive for non-technical users; mobile-responsive design.
Design: Minimalistic (clean layouts, whitespace) and rich (premium fonts, subtle animations).

5. Technical Requirements
5.1 Tech Stack

Frontend: Next.js (React framework, Cursor-generated for simplicity).
Backend: Supabase (no-code database for user data, authentication).
Styling: Tailwind CSS (utility-first for rapid, professional design).
Payment: to be disclosed soon (beginner-friendly payment gateway).
Deployment: Vercel (handles Next.js and subdomain routing, e.g., *.purework.com).
Development Tool: Cursor (AI generates code from prompts like “Create a split-screen editor”).

5.2 Development Approach

Use Cursor to generate Next.js components (e.g., “Build a split-screen editor with input forms and real-time preview”).
Set up Supabase via its dashboard for database and authentication.
Configure Stripe via its dashboard; use Cursor to integrate payment flows.
Leverage Vercel’s subdomain routing for dynamic subdomains.
Test iteratively to ensure editor and payment functionality.

6. Assumptions and Constraints

Assumptions: Users have basic internet access; domain (purework.com) is pre-purchased.
Constraints: MVP is web-only; free-tier tools limit scale; payment plans TBD.

7. Milestones

Week 1: Set up Cursor, Next.js, Supabase, and domain.
Week 2–3: Build landing page and authentication.
Week 4–5: Develop website editor with real-time preview.
Week 6: Implement subdomain input and Stripe payment flow.
Week 7: Create congratulations page and test subdomain routing.
Week 8: Finalize design, test, and deploy on Vercel.

8. Future Considerations

Add more templates or customization (e.g., color pickers).
Integrate analytics for website traffic.
Offer premium features (e.g., custom domains, advanced SEO).

