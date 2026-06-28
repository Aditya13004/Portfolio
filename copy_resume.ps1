$src = "C:\Users\ADITYA\Downloads\Aditya_Wakalkar_New_Resume.pdf"
$dest1 = "c:\Users\ADITYA\.gemini\antigravity-ide\scratch\portfolio\public\Aditya_Wakalkar_Resume.pdf"
$dest2 = "c:\Users\ADITYA\.gemini\antigravity-ide\scratch\portfolio\public\resume.pdf"

if (Test-Path $src) {
    Copy-Item $src $dest1 -Force
    Copy-Item $src $dest2 -Force
    Write-Host "Resume copied successfully to public directory."
} else {
    Write-Host "Source resume file not found at $src"
}
