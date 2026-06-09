# Ruuts - Project Requirements

## Overview
- **Type:** Website, Mobile First
- **Frontend:** Vue (Nuxt 4)
- **Backend/CMS:** Sanity.io
- **Package Manager:** pnpm
- **Theme/Aesthetics:** Elegant and premium feel (inspired by https://www.elliotonstage.com/)
- **Brand/Topic:** "Ruuts" - about tea and premium group experiences around tea.

## Structure & Sections

The website will consist of 4 main sections, structured as follows:

1. **About / Index Page** (Route `/`)
   - **First Part (About)**:
     - **Our Story**: The journey of reconnecting with roots through Chinese tea, rediscovering tea culture across provinces (Guangdong, Yunnan, Fujian, Anhui, Zhejiang, Jiangsu), and the belief that mastery is born of time and dedication.
     - **Founder**: Ophélie's profile: Franco-Chinese, Master's in Supply Chain Management, moved to Shanghai in 2018, transition to tea in 2021, created Chabutu (茶不土) WeChat page in 2022, Chinese tea tasting certification in Hangzhou (2024).
     - **Our Mission**: Create a community for tea exploration, celebrate intercultural connections, collect emotions/laughter, and connect with tea farmers and their land. (Key quote: "Taking one’s time is the best way for not wasting it." - Nicolas Bouvier).
   - **Second Part (Contact Us)**:
     - Contact details: Email (`contact@theruuts.com`), Phone (`+86 18217180655`), WeChat Official Account (`RUUTS 丝络嘉木`), and Rednote (`Feifei ou thé`).
     - Display WeChat and Rednote QR codes for scanning.

2. **Our Experiences** (Route `/experiences`)
   - Premium group experiences around tea (e.g. Discovery, Signature, Body Ritual, as outlined in the PDF).
   - **Subsections:**
     - Customers (B2C)
     - Professionals (B2B)

3. **Insights** (Route `/insights`)
   - A blog/media section featuring different types of posts (Photo, Video, Article).
   - **Filtering:** Top navbar to filter by "All", "Photo", "Video", or "Articles".
   - **Detail Pages:** Route `/insights/[slug]` for each post.

## Navigation & UI Behavior
- **Mobile Screens:** Burger menu button in the top right corner that opens a premium-feel fullscreen overlay.
- **Desktop/Bigger Screens:** Elegant sticky/glassmorphic top navigation bar.

## Tech Stack & Data Constraints
- **Sanity.io:** Initialize and setup Sanity, but do not connect it to the Nuxt frontend for dynamic data rendering yet (use static/mock data for now).

## Design System (Branding & Colors)

### Typography
- **Heading Font:** Playfair Display (Google Fonts)
- **Body Font:** Montserrat (Google Fonts)

### Color Palette
- **Primary Background:** `Xuan Paper Cream` (A slightly warmer, textured off-white. Evokes traditional Chinese calligraphy paper, softening the background to make reading comfortable and luxurious. E.g., `#FAF6F0` or `#F7F4EB`)
- **Primary Brand Color:** `Deep Jade Green` (Deep rich dark jade. References lush, terraced tea fields of Zhejiang and Yunnan and the historical prestige of Chinese jade. E.g., `#0B3C33` or `#08332A`)
- **Primary Accent:** `Antique Brass / Matte Gold` (Replaces standard black borders/accents. Reflects historical 1930 Cité Bourgogne architecture and Guzheng/Pipa wood tones. E.g., `#C5A059` or `#D4AF37`)
- **Text & High Contrast:** `Roasted Oolong` (Dark Charcoal with warm brown undertones. Mimics oxidized tea leaves, softer and more refined than harsh black. E.g., `#241E1A`)
- **Secondary Accent:** `Muted Cinnabar Red` (Traditional cinnabar tone. E.g., `#B33C26`)
