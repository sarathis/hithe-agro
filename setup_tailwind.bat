@echo off
echo ====================================
echo Installing TailwindCSS for React App
echo ====================================

:: Install Tailwind, PostCSS, Autoprefixer
npm install -D tailwindcss postcss autoprefixer

:: Initialize Tailwind config
npx tailwindcss init -p

echo ====================================
echo ✅ TailwindCSS setup complete!
echo ====================================
echo 1. Open tailwind.config.js and make sure content looks like this:
echo    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
echo.
echo 2. Open src/index.css (or App.css) and add:
echo    @tailwind base;
echo    @tailwind components;
echo    @tailwind utilities;
echo.
echo 3. Restart your dev server:
echo    npm run dev   (Vite)
echo    npm start     (CRA)
echo ====================================
pause
