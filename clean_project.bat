@echo off
echo ==============================
echo Cleaning node_modules and cache
echo ==============================

:: Delete node_modules folder
if exist node_modules (
    echo Deleting node_modules...
    rmdir /s /q node_modules
) else (
    echo node_modules folder not found
)

:: Delete package-lock.json
if exist package-lock.json (
    echo Deleting package-lock.json...
    del /f package-lock.json
) else (
    echo package-lock.json not found
)

:: Clear npm cache
echo Clearing npm cache...
npm cache clean --force

echo ==============================
echo Done! Now run "npm install"
echo ==============================
pause
