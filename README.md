# 🌿 Plantex - Plants Website Design

A modern, responsive plant e-commerce website design featuring smooth animations, dark mode toggle, and an elegant user interface.

## 📋 Overview

Plantex is a beautiful landing page for a plant shop that showcases various plant products with an intuitive user experience. The website includes sections for home, about, products, FAQs, and contact information.

## ✨ Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Night Mode** - Toggle between light and dark themes
- **Smooth Animations** - ScrollReveal and Animate.css animations throughout
- **Interactive Navigation** - Smooth scrolling navigation with active state indicators
- **Product Showcase** - Display plant products with pricing and cart functionality
- **Scroll to Top Button** - Easy navigation back to the top of the page
- **Modern UI** - Clean and modern user interface with Bootstrap 5

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3/SCSS** - Custom styling with Sass preprocessor
- **JavaScript** - Interactive functionality
- **Bootstrap 5.1.3** - Responsive framework
- **jQuery 3.6.0** - DOM manipulation
- **Animate.css 4.1.1** - CSS animations
- **ScrollReveal 4.0.9** - Scroll animations
- **Waypoints 4.0.1** - Scroll-triggered events
- **Remix Icons** - Icon library

## Screenshots

### Home
<img width="1440" height="779" alt="Screenshot 2025-12-19 at 2 24 16 PM" src="https://github.com/user-attachments/assets/bfa056d0-e6df-4455-bae1-003db73c6546" />

### About
<img width="1440" height="779" alt="Screenshot 2025-12-19 at 2 25 20 PM" src="https://github.com/user-attachments/assets/a3250d5c-03ff-44de-a7ce-a152b6905112" />

### Products
<img width="1440" height="778" alt="Screenshot 2025-12-19 at 2 27 15 PM" src="https://github.com/user-attachments/assets/5f5a4562-d393-4737-8911-b33c56523a82" />

### FAQ
<img width="1440" height="778" alt="Screenshot 2025-12-19 at 2 30 58 PM" src="https://github.com/user-attachments/assets/0dc5b788-9f88-4e85-a651-95567785d375" />

### Contact Us
<img width="1439" height="776" alt="Screenshot 2025-12-19 at 2 31 21 PM" src="https://github.com/user-attachments/assets/51dd5bbe-2154-4daa-b7a7-9f1494f83bcd" />



## 📁 Project Structure

```
Plants-Website-Design/
├── index.html          # Main HTML file
├── package.json        # Project dependencies
├── css/
│   ├── app.css        # Compiled main styles
│   ├── app.scss       # Main Sass source
│   ├── night-mood.css # Compiled dark mode styles
│   └── night-mood.scss # Dark mode Sass source
├── js/
│   └── app.js         # Main JavaScript file
└── img/               # Image assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Plants-Website-Design
```

2. Install dependencies:
```bash
npm install
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

4. Visit `http://localhost:8000` in your browser

## 📱 Sections

- **Home** - Hero section with main call-to-action
- **About** - Information about the business and its benefits
- **Steps** - Guide on how to order plants
- **Products** - Showcase of available plants with prices
- **FAQ** - Frequently asked questions
- **Contact** - Contact form and information

## 🎨 Customization

### Colors

Edit the color variables in the SCSS files to customize the color scheme:
- `css/app.scss` - Main theme colors
- `css/night-mood.scss` - Dark mode colors

### Content

Modify `index.html` to update:
- Text content
- Images (located in `img/` folder)
- Product information and pricing
- Contact details

## 🌙 Dark Mode

The website includes a theme toggle button in the navigation that switches between light and dark modes. The theme preference can be enhanced to persist in local storage.

## 👤 Author

Phone Myat Pyae Sone

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Remix Icons for the beautiful icons
- ScrollReveal for smooth scroll animations
