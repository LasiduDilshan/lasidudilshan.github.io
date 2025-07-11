Here’s a step-by-step guide for setting up your portfolio site using React in your existing repository:

---

## 1. Initialize React in Your Repo

**Option 1: Create React App (recommended for beginners)**
1. Open a terminal in your repo folder (or clone it if not local).
2. Run:
   ```bash
   npx create-react-app .
   ```
   This will set up React in your current directory.

**Option 2: Manual React Setup**
If you want a custom setup, let me know!

---

## 2. Update `package.json` for GitHub Pages Deployment

Add these lines in your `package.json`:

```json
"homepage": "https://LasiduDilshan.github.io",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

You’ll need to install `gh-pages`:
```bash
npm install --save gh-pages
```

---

## 3. Build Your Portfolio in React

Here’s a simple portfolio structure:

```plaintext
src/
  App.js
  components/
    Header.js
    About.js
    Projects.js
    Contact.js
  assets/
    (images, etc.)
  App.css
```

---

## 4. Sample React Portfolio Code

### `src/App.js`
```javascript name=src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
```

### `src/components/Header.js`
```javascript name=src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Lasidu Dilshan</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
```

### `src/components/About.js`
```javascript name=src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hi! I'm Lasidu Dilshan, a passionate developer. <br />
        Welcome to my portfolio!
      </p>
    </section>
  );
}

export default About;
```

### `src/components/Projects.js`
```javascript name=src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Project 1:</strong> Description here.
        </li>
        <li>
          <strong>Project 2:</strong> Description here.
        </li>
      </ul>
    </section>
  );
}

export default Projects;
```

### `src/components/Contact.js`
```javascript name=src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: your@email.com</p>
      <p>
        <a href="https://github.com/LasiduDilshan">GitHub</a>
      </p>
    </section>
  );
}

export default Contact;
```

### `src/App.css`
```css name=src/App.css
body {
  font-family: Arial, sans-serif;
  background: #f7f7f7;
  margin: 0;
  padding: 0;
}

header {
  background: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
}

nav a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}

section {
  margin: 40px auto;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
}
```

---

## 5. Deploy to GitHub Pages

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Set up React portfolio"
   git push
   ```
2. Deploy:
   ```bash
   npm run deploy
   ```

Your portfolio will be live at:  
**https://LasiduDilshan.github.io**

---

## Need More Customization?
- Let me know what sections, colors, features, or styles you want!
- I can generate more advanced code (e.g., project cards, animations, blog, etc.).

Ready to start?  
If you want, I can generate all the files for you to copy-paste, or help you automate everything step by step. Just tell me your preference!

**You need to change the source branch for GitHub Pages:**

1. **Go to your repo on GitHub:**  
   [https://github.com/LasiduDilshan/lasidudilshan.github.io](https://github.com/LasiduDilshan/lasidudilshan.github.io)

2. **Click on “Settings”** (top right or in the tab bar).

3. **Scroll down to “Pages”** in the left sidebar.

4. **Under “Build and deployment” > “Source”:**
   - Change it from `main` to `gh-pages`.
   - For the folder, select `/ (root)`.

5. **Click “Save”.**

---

### What happens next?

- After saving, GitHub Pages will deploy your site from the contents of the `gh-pages` branch.
- Wait a few minutes, then visit [https://lasidudilshan.github.io](https://lasidudilshan.github.io) and **hard refresh** (Ctrl+F5).

---

We can do changes in main branch and then "npm run deploy" in main branch. This will update gh-pages branch (which contains static files) and re-deploy. 