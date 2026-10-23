@echo off
title Push to GitHub - DCE CampusPulse
echo =======================================================
echo Pushing DCE CampusPulse to GitHub
echo Repo: https://github.com/Web-Lumina-2026/web_developers.git
echo =======================================================
cd /d "%~dp0"
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"
git branch -M main
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo =======================================================
    echo SUCCESS: Project pushed to GitHub main branch!
    echo =======================================================
) else (
    echo.
    echo If authentication was requested, sign in with your GitHub account.
)
pause
