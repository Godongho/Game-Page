param(
    [Parameter(Mandatory=$true)]
    [string]$inputPath,
    [Parameter(Mandatory=$true)]
    [string]$outputPath
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $inputPath)) {
    Write-Error "Input file not found: $inputPath"
    exit 1
}

$img = [System.Drawing.Image]::FromFile($inputPath)
$bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, 0, 0)

for ($x=0; $x -lt $bmp.Width; $x++) {
    for ($y=0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        $brightness = [Math]::Max($p.R, [Math]::Max($p.G, $p.B))
        
        # Threshold for alpha mapping
        if ($brightness -lt 50) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } else {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($brightness, 255, 255, 255))
        }
    }
}

$img.Dispose()
if (Test-Path $outputPath) { Remove-Item $outputPath -Force }
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Success! Background removed and saved to $outputPath"
