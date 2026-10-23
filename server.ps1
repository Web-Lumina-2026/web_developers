$port = 8080
$path = $PSScriptRoot

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "⚡ CampusPulse Local Server" -ForegroundColor Green
Write-Host "Directory: $path" -ForegroundColor Gray
Write-Host "Starting on http://localhost:$port" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan

Start-Process "http://localhost:$port"
python -m http.server $port --directory $path
