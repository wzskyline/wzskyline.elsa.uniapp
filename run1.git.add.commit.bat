set YYYYmmdd=%date:~5,2%%date:~8,2%
git add .
git commit -m %YYYYmmdd%
git push
timeout /T 10
