## Proje kurulumu aşamaları

1.  npx create-next-app@latest nextjs-data-control
2.  cd nextjs-data-control
3.  npm i
4.  npm run dev

            /my-nextjs-project
             /app
               /about
                page.js   ← `/about` sayfası
             /users
                page.js   ← `/users` sayfası
               layout.js   ← Bütün site için ortak layout (header/footer vs.)
               page.js     ← Anasayfa (`/`)
             /components
               Layout.jsx  ← (Eğer ekstra component yaparsan)
             public/
             styles/
             package.json

npm install sass
sass --watch style.scss:style.css
# nextjs-data-control
