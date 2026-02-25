
  # Luxury Shisha Lounge Website

A modern, elegant website for a premium shisha lounge experience. Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- **Modern Design**: Sleek, luxury aesthetic with gradient accents and animations
- **Responsive Layout**: Mobile-first approach with full responsiveness
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Interactive Menu**: Tabbed menu system for shisha, drinks, and food
- **Smoke Effects**: Dynamic ambient smoke animation in the hero section
- **Booking System**: Reservation form for customers
- **Gallery**: Image showcase with scroll expand media
- **Contact Section**: Get in touch with the lounge

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.12
- **Build Tool**: Vite 6.3.5
- **Animation**: Motion/Framer Motion 12.23.24
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd "Luxury Shisha Longue Website"
```

2. Install dependencies
```bash
npm install
```

## Development

Start the development server with hot reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building

Build for production:
```bash
npm run build
```

The optimized build will be output to the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Main app component
│   ├── assets/                 # Static images and media
│   └── components/             # Reusable components
│       ├── Hero.tsx           # Hero section with smoke effects
│       ├── Navigation.tsx      # Navigation bar
│       ├── Menu.tsx           # Menu system
│       ├── Gallery.tsx        # Gallery section
│       ├── Events.tsx         # Events section
│       ├── Reservations.tsx   # Booking form
│       ├── Contact.tsx        # Contact section
│       ├── About.tsx          # About section
│       ├── Footer.tsx         # Footer
│       └── ui/                # UI component library
├── styles/                     # Global styles
│   ├── index.css
│   ├── tailwind.css
│   ├── theme.css
│   └── fonts.css
└── main.tsx                   # Application entry point
```

## Key Components

- **Hero**: Stunning hero section with background image and animated smoke effects
- **Navigation**: Sticky navigation with smooth scroll to sections
- **Menu**: Multi-tab menu showcasing shisha flavors, drinks, and food
- **Reservations**: Easy-to-use booking form
- **Gallery**: Responsive image gallery
- **Contact**: Contact information and inquiry form

## Customization

### Colors & Theme
Edit `src/styles/theme.css` and Tailwind color classes in components to customize the branding.

### Menu Items
Update the menu data in `src/app/components/Menu.tsx` to reflect your actual offerings.

### Content
Modify component content in `src/app/components/` to customize text, images, and sections.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for third-party licenses and attributions.

## Contributing

Feel free to submit issues and enhancement requests!
  