rm -rf "mycarlog/opt/mycarlog/backend/dist"
cp -rv "mycarlog/opt/mycarlog/frontend/output/dist" "mycarlog/opt/mycarlog/backend/dist" 
rm -rf "mycarlog/opt/mycarlog/frontend/output/dist"
git add .
git commit -am "Cambios para usar Store"
git push https://github.com/edwinspire/mycarlog.git

