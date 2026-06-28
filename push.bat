@echo off
echo Committing local updates...
git add .
git commit -m "feat: integrate resume PDF and refine navigation UI"
echo.
echo Syncing latest changes from GitHub repository...
git pull origin main --no-rebase
echo.
echo Pushing updates to GitHub repository Aditya13004/Portfolio...
git push origin main
echo.
echo Successfully synced and pushed all updates to GitHub!
pause
