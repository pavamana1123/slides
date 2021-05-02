Get-ChildItem "books/json/sb" -Recurse -File | ForEach-Object{ 
    $jsfile=$($_.fullname).Replace("json","js")
    mkdir -Force $(split-path -parent $jsfile)
    "var text = $(Get-Content -Raw $_.fullname)" > $jsfile
}