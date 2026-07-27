@echo off
echo Committing local updates...
git add .
git commit -m "feat: add MessFinder project and update CV"
echo.
echo Syncing latest changes from GitHub repository...
git pull origin main --no-rebase --no-edit
echo.
echo Pushing updates to GitHub repository Aditya13004/Portfolio...
git push origin main
echo.
echo Successfully synced and pushed all updates to GitHub!
pause
