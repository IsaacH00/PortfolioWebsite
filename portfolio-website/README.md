# Isaac Hernandez Portfolio Website

#### Video Demo: <URL HERE>

## Description

This project is a comprehensive personal portfolio website designed to showcase my skills, projects, and professional experience as a front-end developer and aspiring designer. Built using modern web technologies and following contemporary design principles, this portfolio serves as both a demonstration of my technical abilities and a platform for personal branding, today and in the future.

The website features a minimalist, clean aesthetic with subtle animations and interactive elements that enhance the user experience without compromising performance or accessibility. The design philosophy balances simplicity with personality, utilizing a monochromatic color scheme with strategic accent colors to create visual interest and hierarchy.

## Project Structure and File Overview

### Core Pages

- **Home.jsx**: The landing page that introduces visitors to my personal brand with an animated home section featuring my name, tagline, and a brief overview of my dual identity as a coder and designer. It includes project previews and a call-to-action section to encourage contact.

- **About.jsx**: A detailed page about my background, featuring my professional profile, skills distribution visualized with a pie chart, personal facts, and my professional journey. This page also includes a downloadable CV functionality.

- **Projects.jsx**: A showcase of my portfolio work with a grid of project cards, including my current projects and placeholders for future work. Each project card links to a detailed project page with comprehensive information.

- **Skills.jsx**: A detailed breakdown of my technical skills organized by category (frontend, database, design, etc.) with visual representations using custom skill cards. This page also displays certificates and educational achievements.

- **Contact.jsx**: A page with contact information and a form for potential clients or employers to reach out.

- **PortfolioProjectPage.jsx**: A detailed case study page for my portfolio website project, featuring an in-depth analysis of the design process, development journey, tools used, challenges faced, and lessons learned. This page uses a tabbed interface for better content organization.

### Key Components

- **Navbar.jsx**: A responsive navigation bar with sleek animations and an Apple-inspired dropdown menu for projects. It includes my logo and navigation links to all main sections of the site.

- **Hero.jsx**: The main landing component that introduces my personal brand with animated elements and a clean, modern layout.

- **ProjectCard.jsx**: Reusable card components that display project information with hover effects, image previews, and status indicators for upcoming projects.

- **SkillCard.jsx**: Visual representations of technical skills with icons and hover animations.

- **Footer.jsx**: A consistent footer component with contact information and social media links.

- **PieChart.jsx**: A visual representation of my skill distribution between coding and design.

- **PageTransition.jsx**: A component that handles smooth transitions between pages using Framer Motion animations.

## Technologies Used

- **React**: For building the component-based UI
- **React Router**: For handling navigation and routing
- **Framer Motion**: For creating fluid, physics-based animations
- **Tailwind CSS**: For utility-first styling with responsive design
- **JavaScript (ES6+)**: For dynamic functionality and interactivity
- **HTML5/CSS3**: For structure and additional styling

## Design Choices

### Typography

I chose a combination of DM Mono for headings and Bellota Text for body content to create a balance between technical precision and approachable personality. The monospace font (DM Mono) gives a coding/technical feel that represents my developer side, while the rounded, friendly Bellota Text represents my design sensibilities.

### Color Scheme

The website uses a primarily monochromatic color scheme with strategic accent colors for important elements. This decision was made to:
1. Create a clean, distraction-free environment that puts the focus on the content
2. Demonstrate restraint and intentionality in design
3. Allow the work samples and projects to stand out without competing color elements

### Animation Philosophy

Animations throughout the site are intentionally subtle and purpose-driven. Rather than using animations for their own sake, each animated element serves to:
1. Guide user attention to important content
2. Provide feedback on interactions
3. Create a sense of polish and attention to detail
4. Enhance the narrative of the content being presented

The decision to use Framer Motion instead of CSS animations was based on the library's ability to create more natural, physics-based movements and the ease of coordinating complex animation sequences.

### Component Structure

The project follows a modular component structure to maximize reusability and maintain clean, maintainable code. This approach allowed me to:
1. Create consistent design patterns across the site
2. Easily update elements that appear multiple times
3. Test and debug components in isolation
4. Potentially expand the site with new pages using existing components

### Responsive Design Approach

I implemented a mobile-first design strategy using Tailwind's responsive utility classes, ensuring the website performs well across all device sizes. Key considerations included:
1. Flexible layouts that adapt to different screen widths
2. Appropriately sized text and touch targets for mobile devices
3. Simplified navigation for smaller screens
4. Performance optimizations for mobile networks

## Development Challenges and Solutions

Throughout the development process, I encountered several challenges that influenced the final design:

### Challenge 1: Balancing Visual Appeal with Performance

To address this, I:
- Optimized images and assets
- Used code splitting to load only necessary components
- Implemented lazy loading for images and components
- Carefully considered animation performance impact

### Challenge 2: Creating Consistent Navigation Experience

This was solved by:
- Implementing a dedicated routing system with React Router
- Creating custom transition animations between pages
- Ensuring navigation state is properly preserved
- Fixing routing issues with direct URL access

### Challenge 3: Ensuring Cross-Browser Compatibility

I addressed this by:
- Testing across multiple browsers
- Using Grid with appropriate fallbacks
- Implementing polyfills where necessary
- Choosing well-supported animation properties

## Future Enhancements

As I continue to grow as a developer and designer, I plan to enhance this portfolio with:
1. More project case studies with detailed process documentation
2. Expanded skill visualizations with real-time data connections
3. Dark mode toggle for improved accessibility and user preference

## Setup and Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Build for production with `npm run build`

## Conclusion

This portfolio website represents not just a showcase of my skills, but a journey of growth in both design and development. It embodies my approach to web development: clean, thoughtful, and user-focused. Throughout the project, I've reinforced my passion for bridging creativity and coding while gaining valuable insights into creating engaging, accessible, and performant web experiences.

The process of creating this portfolio has highlighted the importance of attention to detail in all aspects of web development, from design decisions to code structure to user experience considerations. As I continue to evolve as a developer, this portfolio will grow alongside my skills, serving as both a documentation of my journey and a platform for future opportunities.

CS50 has had an incredible impact on my growth, both as a learner and as a person. Taking the course was a big leap—I had no idea what challenges lay ahead, but I was determined to see it through. From the start, I knew I wanted to build a Portfolio Website to bring my design ideas to life, combining everything I learned both inside and outside of CS50.
This journey has taken months, far beyond just the six weeks of active development for this project alone. It started the moment I began brainstorming what my website should include, how it should look, and how it should function. While my code may not be perfect, I’m incredibly proud of what I’ve accomplished over these past few months.