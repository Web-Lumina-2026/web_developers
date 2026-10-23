@echo off
title DCE CampusPulse
echo Starting DCE CampusPulse - Dronacharya College of Engineering...
cd /d "%~dp0"
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    start "" python server.py
) else (
    start "" "%~dp0index.html"
)
exit
