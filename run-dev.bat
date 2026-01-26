@echo off
cd /d "%~dp0"
echo Installing dependencies...
call npm install --legacy-peer-deps
if errorlevel 1 (
    echo Failed to install dependencies
    pause
    exit /b 1
)
echo.
echo Starting development server...
echo.
echo The website will be available at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
pause
call npm run dev
pause
