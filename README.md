# SenseGrid by SLTMobitel

A modern, responsive web application built with React and deployed using Docker, Nginx, and Traefik. This is the corporate website for SenseGrid, showcasing products, services, case studies, pricing, and documentation.

**Live Site**: [https://sensegrid.sltdigitallab.lk](https://sensegrid.sltdigitallab.lk)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Docker Deployment](#docker-deployment)
- [Project Structure Details](#project-structure-details)
- [Key Features](#key-features)
- [Contributing](#contributing)

---

## 🎯 Overview

SenseGrid is a modern web application that serves as the primary digital presence for SLTMobitel. It provides comprehensive information about products, services, and solutions with an engaging user interface built with React and modern web technologies.

**Key Characteristics:**
- Single Page Application (SPA) with client-side routing
- Responsive design with Tailwind CSS
- Dark mode support
- Smooth animations with Framer Motion
- 3D visualization capabilities with Three.js
- Email integration for contact forms
- Blog functionality with article routing
- Documentation pages
- WhatsApp integration for quick messaging

---

## 🛠 Technology Stack

### Frontend
- **React** (v18.3.1) - UI library
- **React Router DOM** (v7.8.2) - Client-side routing
- **Vite** (v7.1.2) - Build tool and dev server
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework
- **Framer Motion** (v12.23.26) - Animation library
- **Three.js** (@react-three/fiber, @react-three/drei) - 3D graphics

### UI Components & Libraries
- **Lucide React** (v0.344.0) - Icon library
- **Swiper** (v11.2.10) - Carousel/slider component
- **React PDF** (v10.2.0) - PDF viewing
- **React PageFlip** (v2.0.3) - Page flip effect

### Forms & Communication
- **@emailjs/browser** (v4.4.1) - Email service integration
- **@formspree/react** (v3.0.0) - Form handling service

### Development Tools
- **ESLint** (v9.9.1) - Code linting
- **TypeScript ESLint** (v8.3.0) - TypeScript support
- **PostCSS** (v8.4.35) - CSS processing with Autoprefixer
- **gh-pages** (v6.3.0) - GitHub Pages deployment

### Infrastructure
- **Docker** - Container orchestration
- **Nginx** (Alpine) - Web server
- **Traefik** (v3.1) - Reverse proxy and load balancer
- **Let's Encrypt** - SSL/TLS certificates

---

## 📁 Project Structure

```
SenseGrid/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── AwardsBar.jsx
│   │   ├── BlogSlider.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FAQSection.jsx
│   │   ├── Footer.jsx
│   │   ├── LogoBar.jsx
│   │   ├── Navigation.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── TestimonialSlider.jsx
│   │   └── WhatsAppIcon.jsx
│   ├── pages/              # Page components for routing
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── BlogListing.jsx
│   │   ├── BlogArticle.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   ├── Docs.jsx
│   │   └── Docsold.jsx
│   ├── contexts/           # React Context for state management
│   │   └── ThemeContext.jsx (Dark mode toggle)
│   ├── data/              # Static data files
│   │   └── blogData.js
│   ├── utils/             # Utility functions
│   ├── styles/            # Additional CSS stylesheets
│   │   └── About.css
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── public/                # Static assets
│   ├── _redirects         # Redirect rules for Vercel
│   └── assets/
│       ├── docs/
│       ├── images/
│       │   ├── authors/
│       │   ├── awards/
│       │   ├── blog/
│       │   ├── logos/
│       │   └── presentation/
│       └── videos/
├── nginx/                 # Nginx configuration
│   ├── nginx.conf
│   ├── web.conf           # Web server config
│   └── conf.d/
│       └── default.conf
├── traefik/              # Traefik reverse proxy config
│   ├── traefik.yml
│   └── certs/            # SSL certificates
├── Dockerfile            # Production Docker build
├── Dockerfile.preview    # Preview environment Docker build
├── docker-compose.yml    # Production compose file
├── docker-compose.preview.yml # Preview compose file
├── vite.config.js        # Vite build configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
├── vercel.json           # Vercel deployment config
├── package.json          # Dependencies and scripts
├── package-lock.json     # Locked versions
└── README.md             # This file
```

---

## 💻 Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Docker** & **Docker Compose** (for containerized deployment)

### Step 1: Clone the Repository
```bash
git clone https://github.com/isurumdasanayake/SenseGridN.git
cd SenseGridN
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Configuration
Create a `.env` file in the root directory with necessary environment variables (if required for email services):
```bash
# EmailJS Configuration (if needed)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
The application will run on `http://localhost:5173`

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and style issues.

### Preview Production Build
```bash
npm run preview
```
Builds and previews the production bundle locally.

---

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Deploys the built application to GitHub Pages.

---

## 🐳 Docker Deployment

### Production Deployment

#### Using Docker Compose with Traefik

```bash
docker-compose up -d
```

This will:
1. Start the Traefik reverse proxy on ports 80, 443, and 8080
2. Build and serve the application via Nginx
3. Automatically handle SSL/TLS certificates via Let's Encrypt
4. Configure basic authentication for the Traefik dashboard

**Access Points:**
- Main Site: `https://sensegrid.sltdigitallab.lk`
- Traefik Dashboard: `https://sensegrid.sltdigitallab.lk/dashboard` (requires auth)

#### Docker Compose Configuration Details

**docker-compose.yml:**
- **Traefik Service**: Reverse proxy with SSL termination
  - Listens on ports 80 (HTTP), 443 (HTTPS), and 8080 (Dashboard)
  - Configured with basic authentication for dashboard access
  - Uses Let's Encrypt for automatic SSL certificate generation
  - Persists ACME certificate data in `traefik/acme.json`

**docker-compose.preview.yml:**
- **Preview Service**: For staging/preview builds
  - Serves on port 9000
  - Uses `Dockerfile.preview` for build
  - Connected to external `web` network

### Preview Deployment

```bash
docker-compose -f docker-compose.preview.yml up -d
```

Runs the preview environment on `http://localhost:9000`

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

---

## 🎨 Key Features

### 1. **Multi-Page Application**
- Home page with hero section and featured content
- About page with company information
- Products & Services showcase pages
- Case Studies with real-world examples
- Blog system with individual article pages
- Pricing page with subscription tiers
- Contact page with integrated contact form
- Documentation pages

### 2. **Dark Mode Support**
- Theme context for global state management
- Persisted user preferences
- Smooth transitions between light and dark modes

### 3. **Interactive Components**
- **BlogSlider** - Featured blog posts carousel
- **TestimonialSlider** - Customer testimonials
- **AwardsBar** - Awards and achievements showcase
- **FAQSection** - Expandable FAQ items
- **ContactForm** - Email integrated contact form
- **WhatsAppIcon** - Quick WhatsApp messaging button

### 4. **Performance Optimizations**
- Vite for fast development and optimized builds
- Code splitting and lazy loading
- Image optimization in public assets
- CSS minification with Tailwind
- Tree-shaking of unused dependencies

### 5. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Fully responsive layouts
- Touch-friendly navigation
- Optimized for all device sizes

### 6. **3D Capabilities**
- Three.js integration for 3D visualizations
- React Three Fiber for component-based 3D scenes
- Drei utilities for common 3D elements

### 7. **Email Integration**
- EmailJS for contact form submissions
- Formspree as alternative form service

---

## 🔐 Security Notes

### Traefik Dashboard
- Protected with basic authentication
- Default user: `admin`
- Access requires HTTPS (enforced by Traefik)

### SSL/TLS Certificates
- Automatically provisioned via Let's Encrypt
- Auto-renewal enabled
- Certificate data stored in `traefik/acme.json`

### Content Security
- Nginx configuration includes security headers
- SPA routing handled safely with `try_files` directive

---

## 📊 Nginx Configuration

The application uses Nginx as the web server with the following key configuration:

**File**: `nginx/web.conf`
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This configuration enables client-side routing for React Router by serving `index.html` for all non-file requests.

---

## 🚀 Deployment Platforms

### Current Deployments
1. **Production**: Docker + Traefik on dedicated server
   - Domain: sensegrid.sltdigitallab.lk
2. **GitHub Pages**: For static preview builds
   - Homepage: https://isurumdasanayake.github.io/SenseGridN/
3. **Vercel**: Alternative deployment target
   - Configuration in `vercel.json`

---

## 📝 Environment-Specific Builds

### Production Build
- Optimized for performance
- Minified CSS and JavaScript
- Tree-shaken dependencies

### Preview Build
- Includes source maps for debugging
- Development-friendly configurations
- Used for staging and testing

---

## 🔄 Development Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Make changes and test**

4. **Lint before committing**
   ```bash
   npm run lint
   ```

5. **Build and test production build**
   ```bash
   npm run build
   npm run preview
   ```

6. **Commit and push**
   ```bash
   git commit -m "feat: describe your changes"
   git push origin feature/your-feature
   ```

7. **Create pull request**

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (npm run build && npm run preview)
5. Run linter (npm run lint)
6. Commit with clear messages
7. Push and create a pull request

---

## 📞 Contact & Support

- **Email**: info@sltdigitallab.lk
- **Website**: https://sensegrid.sltdigitallab.lk
- **WhatsApp**: Available via website chat widget

---

## 📄 License

This project is private. All rights reserved to SLTMobitel/SLT Digital Lab.

---

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com)
- [Docker Documentation](https://docs.docker.com)
- [Traefik Documentation](https://doc.traefik.io)

---

**Last Updated**: December 29, 2025
