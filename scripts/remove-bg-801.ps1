Add-Type -AssemblyName System.Drawing
$inputPath = "c:\Users\MSI\gamepage\public\logo-brush-801.png"
$outputPath = "c:\Users\MSI\gamepage\public\logo-brush-801-final.png"

$i = [System.Drawing.Bitmap]::FromFile($inputPath)
$o = New-Object System.Drawing.Bitmap($i.Width, $i.Height)

for($x=0; $x -lt $i.Width; $x++){
    for($y=0; $y -lt $i.Height; $y++){
        $c = $i.GetPixel($x, $y)
        $brightness = [Math]::Max($c.R, [Math]::Max($c.G, $c.B))
        if ($brightness -gt 50) {
            $o.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($brightness, 255, 255, 255))
        } else {
            $o.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$i.Dispose()
$o.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$o.Dispose()
Move-Item -Force $outputPath $inputPath
Write-Host "Success! STUDIO 801 logo background removed."
