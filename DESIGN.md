---
name: Bryan Morrison Portfolio
description: A calm, dark console for a security engineer's work, lit by one phosphor-green signal.
colors:
  phosphor-signal: "#3cf06e"
  phosphor-signal-hover: "#6af590"
  phosphor-signal-dim: "#2bb553"
  signal-ink: "#06210f"
  console-ink: "#0b0f0c"
  console-ink-raised: "#111712"
  hairline: "#212b23"
  hairline-strong: "#2f3b31"
  text-primary: "#e6ece7"
  text-secondary: "#a9b5ac"
  text-tertiary: "#7f8d83"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  section-mobile: "80px"
  section-desktop: "112px"
  container: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.phosphor-signal}"
    textColor: "{colors.signal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.phosphor-signal-hover}"
    textColor: "{colors.signal-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  nav-link:
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  nav-link-hover:
    textColor: "{colors.text-primary}"
  tech-tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    typography: "{typography.mono}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
  project-row-hover:
    backgroundColor: "{colors.console-ink-raised}"
    rounded: "{rounded.md}"
    padding: "32px 16px"
---

# Design System: Bryan Morrison Portfolio

## Overview

**Creative North Star: "The Quiet Console"**

The site is a calm operator's screen at night: a near-black ground faintly tinted green, generous darkness, and text that settles into three clear levels of brightness. One phosphor-green signal is the only thing that glows, and it is reserved for what matters: the primary action, focus, a single highlighted word, and the bullets that mark a list. Everything else is restrained so that the signal reads as meaningful.

Structure comes from hairline rules and editorial columns, not boxes. Sections sit in a 1:2 grid with the heading on the left and the content on the right, and lists are separated by thin rules instead of cards. Density is low; whitespace does the work a border would otherwise do. Motion is limited to one authored moment, when the hero resolves into focus, and quiet state transitions after that.

The old look this system replaced (boxed hero, pulsing green halo, pure #00FF00 text, same-size card grids) is the confirmed anti-reference.

**Key Characteristics:**
- Dark, green-tinted ink ground with three text tiers
- One phosphor-green accent, used on well under 10% of any screen
- Hairline-ruled lists and editorial two-column sections instead of cards
- Flat by default; depth only on the hero image and on hover
- A single load-time animation; nothing loops

## Colors

A restrained palette: tinted neutrals carry the page and one saturated green carries meaning.

### Primary
- **Phosphor Signal** (`phosphor-signal`): The primary button fill, focus rings, text selection, the caret, the single highlighted word in the hero line, list bullets, and the hover state of project titles and arrows.
- **Phosphor Signal, lifted** (`phosphor-signal-hover`): Primary button hover only.
- **Phosphor Signal, dimmed** (`phosphor-signal-dim`): Small decorative bullets on the hero's focus-area list, where full signal would compete with the button.
- **Signal Ink** (`signal-ink`): Text and icons placed on Phosphor Signal, such as the primary button label and selected text.

### Neutral
- **Console Ink** (`console-ink`): The page ground everywhere, and the browser theme color.
- **Console Ink, raised** (`console-ink-raised`): Raised surfaces: the hero image frame and the project-row hover fill.
- **Hairline** (`hairline`): Section dividers, list rules, and tech-tag outlines.
- **Hairline, strong** (`hairline-strong`): Borders around interactive outlines (secondary button, Contact link, image frame) and the scrollbar thumb.
- **Text, primary** (`text-primary`): Headings, list item names, and emphasized phrases inside body copy.
- **Text, secondary** (`text-secondary`): Body paragraphs, project one-liners, and nav links at rest.
- **Text, tertiary** (`text-tertiary`): Supporting copy such as project body text, section intros, issuer labels and the footer. It still meets 4.5:1 on Console Ink.

### Named Rules
**The One Signal Rule.** Phosphor Signal marks action, focus, or a single point of emphasis. It never fills a large area, never colors whole paragraphs, and never glows.

**The No Pure Green Rule.** Never use `#00FF00` or untinted grays. Every neutral carries the faint green tint of Console Ink.

## Typography

**Display Font:** Geist (with system-ui, sans-serif)
**Body Font:** Geist (with system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (with ui-monospace, monospace)

**Character:** A single neo-grotesque family does all the work. Hierarchy comes from size, weight, and tight negative tracking at display sizes, not from mixing typefaces. Mono appears only for real technical data.

### Hierarchy
- **Display** (`typography.display`): The name in the hero, and nowhere else.
- **Headline** (`typography.headline`): The closing contact question.
- **Title** (`typography.title`): Section headings (About, Projects, Certifications). They are 30px on mobile and grow to the token size from the `md` breakpoint.
- **Subtitle** (`typography.subtitle`): Project names. They are 20px on mobile and grow to the token size from `sm`.
- **Body** (`typography.body`): Paragraphs, which measure 58–65ch at most. Supporting copy steps down to 16px in Text, tertiary.
- **Label** (`typography.label`): Buttons, nav, small group labels, and the hero meta line, set in sentence case.
- **Mono** (`typography.mono`): Tech-stack tags only.

### Named Rules
**The No Eyebrow Rule.** Headings stand alone. No kicker or eyebrow label sits above a heading, and no section is numbered.

**The Honest Mono Rule.** Monospace is for technology names and other literal technical strings, never as a "hacker" costume for prose or headings.

## Layout

- **Container:** a single centered column, `spacing.container` wide, with side gutters of `spacing.gutter-mobile` that widen to `spacing.gutter-desktop` from 640px.
- **Section rhythm:** every section runs full width, separated by a Hairline bottom rule, with vertical padding of `spacing.section-mobile`, widening to `spacing.section-desktop` from 768px.
- **Editorial grid:** from 768px, content sections use a `1fr 2fr` grid with a 40px gap. The heading and a short intro sit on the left, and the content on the right.
- **Hero:** a `1.35fr 1fr` split, with the copy on the left and the framed image on the right. It stacks on mobile with the image after the buttons.
- **Header:** sticky, 64px tall, on Console Ink at 65–80% opacity with a backdrop blur. Section links collapse to the Contact link alone below 640px.
- **Line lengths:** body copy stays between 52ch and 65ch, and headings use `text-wrap: balance`.

## Elevation & Depth

The system is flat at rest, and depth is conveyed by tonal layering: Console Ink, then Console Ink raised, then hairlines. There is one true shadow, under the hero image frame, which is soft and offset downward like a real object. Hover states lift with a tonal fill, not a shadow.

### Shadow Vocabulary
- **Hero lift** (`0 30px 60px -20px rgba(0,0,0,0.7), 0 12px 24px -12px rgba(0,0,0,0.5)`): The hero image frame only.

### Named Rules
**The No Halo Rule.** Never use zero-offset colored glows or pulsing box-shadows. Shadows are offset, soft, and black.

## Shapes

Corners are gently rounded and rarely seen, because most structure is open and ruled rather than boxed:
- 4px (`rounded.xs`) on tech tags
- 6px (`rounded.sm`) on buttons, nav links and the skip link
- 8px (`rounded.md`) on project-row hover fills
- 16px (`rounded.lg`) on the hero image frame only
- Fully round (`rounded.full`) on list-bullet dots

Borders are 1px hairlines throughout. Colored borders thicker than 1px and accent side-stripes are not part of the system.

## Components

### Buttons
Precise and restrained: compact, sentence-case labels with a leading icon.
- **Shape:** gently rounded (6px).
- **Primary:** a Phosphor Signal fill with a Signal Ink label, semibold 14px, 12px × 20px padding. Use one per view; it is the email action.
- **Hover / Focus:** hover shifts the fill to Phosphor Signal, lifted. Focus shows a 2px Phosphor Signal ring offset 2px from Console Ink.
- **Secondary:** transparent with a 1px Hairline, strong border and a Text, primary label. On hover the border brightens to Text, tertiary.

### Navigation
- **Style:** 14px links in Text, secondary that brighten to Text, primary on hover, with 8px × 12px padding.
- **Contact link:** an outlined link with a Hairline, strong border. On hover the border and text turn Phosphor Signal.
- **Mobile:** only the wordmark and the Contact link remain.

### Ruled List
The system's replacement for cards, used for skills, projects, and certification groups.
- **Structure:** a Hairline top border on the list and a Hairline bottom border on each item. No background, radius or shadow.
- **Markers:** a 6px Phosphor Signal dot for skills, and a 48px badge image for certifications.

### Project Row
- **Content:** a project name with a one-line summary, a muted body paragraph, then mono tech tags.
- **Interaction:** the whole row is one link. On hover it fills with Console Ink, raised at 8px radius, the title turns Phosphor Signal, and the arrow nudges up and right over 300ms.

### Tech Tag
- **Style:** a 1px Hairline outline at 4px radius, with 12px Geist Mono text in Text, secondary and 2px × 8px padding. Tags are static labels and never interactive.

### Hero Image Frame
- **Style:** a 16px-radius frame with a Hairline, strong border on Console Ink, raised, carrying the Hero lift shadow.
- **Motion:** on load, one scan line in Phosphor Signal at 35% sweeps top to bottom over 1.6s and fades. It never repeats.

### Browser Surfaces
- **Theming:** text selection uses Phosphor Signal with Signal Ink text. The caret is Phosphor Signal. Scrollbars use a Hairline, strong thumb on a Console Ink track. Link underlines are 1px with a 0.25em offset.

## Do's and Don'ts

### Do:
- **Do** keep Phosphor Signal to one primary button per view, plus focus, selection and a single emphasized word.
- **Do** separate content with 1px Hairline rules and whitespace before reaching for a container.
- **Do** keep display text at `-0.04em` tracking and 0.95–1 line height, and body text at 1.625 line height within 65ch.
- **Do** limit motion to the hero resolve (0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`) and short state transitions, and honor `prefers-reduced-motion`.
- **Do** theme every browser surface (selection, caret, scrollbar, focus ring) from the palette.

### Don't:
- **Don't** use `#00FF00`, untinted grays, or green text for whole paragraphs.
- **Don't** add pulsing glows, zero-offset colored shadows, or looping animations.
- **Don't** build sections out of same-size cards, or nest cards.
- **Don't** add decorative grid-line backgrounds, gradient text, or eyebrow labels above headings.
- **Don't** set prose or headings in monospace.
