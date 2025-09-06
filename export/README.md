# Azure Workshop 2025 - Static Website

A modern, responsive website for the Azure Workshop 2025 event. This is a standalone version that can be hosted on any web server or GitHub Pages.

## Features

- **Modern Design**: Clean, professional design with Azure-inspired color scheme
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Animations**: Smooth scroll animations and hover effects
- **Interactive Elements**: Dynamic registration counter, smooth scrolling navigation
- **Accessibility**: Screen reader friendly with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lightweight vanilla JavaScript with throttled scroll events

## Sections

1. **Hero Section**: Eye-catching banner with call-to-action
2. **Sessions Section**: Information about the 4 workshop sessions with speaker details
3. **Sponsors Section**: Showcase of event partners and sponsors
4. **Registration Section**: Benefits overview and registration call-to-action
5. **Footer**: Quick navigation and contact information

## Deployment

### GitHub Pages
1. Upload all files to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Services
Simply upload the files to any web hosting service that supports static HTML files.

## File Structure

```
export/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality  
├── assets/             # Images and assets
│   ├── hero-bg.jpg
│   ├── speaker-1.jpg
│   ├── speaker-2.jpg  
│   ├── speaker-3.jpg
│   └── speaker-4.jpg
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (limited support)

## Customization

### Colors
Edit the CSS custom properties in `styles.css` under the `:root` selector to change the color scheme.

### Content
Update the HTML content in `index.html` to modify text, speakers, dates, etc.

### Functionality
Add or modify JavaScript functions in `script.js` for additional interactivity.

## Performance Notes

- All images are optimized for web
- CSS uses modern techniques like CSS Grid and Flexbox
- JavaScript is vanilla (no frameworks) for fast loading
- Animations use CSS transforms for smooth performance

## Analytics Integration

The code includes placeholder analytics tracking functions. To add real analytics:

1. Include your analytics script (Google Analytics, etc.) in the HTML
2. Update the `trackEvent` function in `script.js`

## Contact

For questions about this website, contact the Azure Workshop team at info@azureworkshop.com

---

Built with ❤️ for the cloud community