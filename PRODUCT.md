# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, weighted roughly equally:

- **Recruiters and hiring managers** evaluating Bryan for a security engineering role. Recruiters skim quickly and need credibility (experience, certifications, real work) within seconds.
- **Prospective consulting clients** deciding whether Bryan can solve a specific security or data problem.
- **Peers and the security community** who arrive through GitHub or projects and want to see what Bryan builds.

## Product Purpose

A single-page personal portfolio for Bryan Morrison, a cybersecurity professional based in Virginia, USA. It establishes credibility and turns that into one of two equally valued actions: **emailing Bryan** or **exploring Bryan's GitHub projects**.

## Positioning

**Breadth across the security stack, combined with a builder mindset.** Bryan covers SIEM (Splunk), cloud security, container and Kubernetes security, CI/CD security, data engineering, and AI agent development in one person, and builds working tooling and automation (SOAR, data pipelines, a homelab, AI agents, MCP integrations, agent skills) rather than only operating products. Security-aware AI work, such as proving MCP tool calls respect Splunk RBAC, sits where both halves meet.

## Operating Context

- Visitors usually come from a résumé, LinkedIn, GitHub, or a direct link, often on a phone.
- Next steps happen outside the site: email (`bryanmorrison017@gmail.com`) or GitHub (`github.com/bmorri13`).
- Primary domain: `https://www.bryanmorrison.tech`.

## Capabilities and Constraints

- Next.js (App Router) with Tailwind CSS and shadcn/ui primitives, statically exported (`out/`) and deployed to GitHub Pages by `.github/workflows/nextjs.yml` on every push to `main`.
- Static only: no server, database, or contact-form backend. Contact is a `mailto:` link.
- Google Analytics is loaded site-wide.
- Content lives as data arrays in `src/app/page.tsx`.

## Brand Commitments

- Name: **Bryan Morrison**. GitHub handle: **bmorri13**.
- Voice: first person, plain and professional, specific about technologies rather than buzzwords.

## Evidence on Hand

- **Experience:** 12+ years in cybersecurity (Splunk, cloud security, container security, CI/CD security scanning), working for Fortune 500 companies and government agencies.
- **Certifications** (badge images in `public/certs/`): Splunk Enterprise Certified Architect, Splunk Enterprise Security Certified Admin, Splunk Enterprise Certified Admin, AWS Certified Solutions Architect – Associate, Microsoft Certified: Azure Fundamentals, Cribl Certified User, Tines Core Certification.
- **Projects shown on the site** (public GitHub repos): Daily News App (live at https://news.bmosan.com/), Splunk MCP RBAC Test Environment, Homelab, AWS Data Lake, Vector: Splunk HEC to S3.
- **Further AI work** (public repos, not all shown on the site):
  - `bmorri13/youtube_summarizer_agent_core`: agent on the Claude Agent SDK, deployed on AWS Bedrock AgentCore and Lambda.
  - `bmorri13/splunk_mcp_bots_demo`, `bmorri13/docker_mcp_gateway`: Splunk MCP server with VS Code Copilot, and a self-hosted MCP gateway.
  - `bmorri13/bmosan-skills`: Claude Code plugin marketplace of agent skills.
  - `cointhieves/opencode-graph`, `cointhieves/opencode-memory`, `cointhieves/skill-builder`, `cointhieves/opencode-rules`: multi-agent orchestration, persistent agent memory, a skill for authoring skills, and coding-agent rules. The `cointhieves` organization is Bryan's own work.
- **Image:** `public/portfolio_image.webp`, an isometric server illustration and not a photo of Bryan.
- **Absent, so never fabricate:** testimonials, named employers or clients, metrics or outcomes from past roles, a blog or writing, speaking engagements, a résumé download.

## Product Principles

1. **Credibility in seconds.** Experience, certifications, and real projects must be findable immediately by a skimming recruiter.
2. **Show the work.** Prefer concrete projects and the technologies they use over self-description.
3. **Two doors, both obvious.** Email and GitHub are always one click away.
4. **Only true claims.** Every statement traces to real experience, a certification, or a public repo.
5. **Range without dilution.** Present breadth across the stack while keeping each area specific.

## Accessibility & Inclusion

No product-specific standard was set. Keep to WCAG 2.1 AA: keyboard access, visible focus, reduced-motion support, and sufficient contrast. These are already in place.
