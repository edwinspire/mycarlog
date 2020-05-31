rmdir "mycarlog/opt/mycarlog/backend/dist" /s /q
xcopy "mycarlog/opt/mycarlog/frontend/output/dist" "mycarlog/opt/mycarlog/backend/dist" /s /e
rmdir "mycarlog/opt/mycarlog/frontend/output/dist" /s /q
git add .
git commit -am "Cambios para usar Store"
git push https://github.com/edwinspire/mycarlog.git

