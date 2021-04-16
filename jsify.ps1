Get-ChildItem books -Recurse -File | ForEach-Object{ 
    $jsfile=$($_.fullname).Replace("json","js")
    mkdir -Force $(split-path -parent $jsfile)
    "var text = $(Get-Content $_.fullname)" > $jsf