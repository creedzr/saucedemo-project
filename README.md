📦 SauceDemo – Cypress Automation
End-to-end test suite untuk demo e-commerce saucedemo.com menggunakan Cypress + Mochawesome.
✅ Fitur yang Diuji
| Modul        | Skenario yang tercover                       |
| ------------ | -------------------------------------------- |
| **Login**    | Login valid, locked user, invalid credential |
| **Product**  | Sort, add to cart, remove, detail page       |
| **Cart**     | Persistensi item, remove, checkout flow      |
| **Checkout** | Form validasi, overview, finish order        |


🚀 Cara Menjalankan
Node.js ≥ 16 & yarn sudah ter-install
## 1. Clone repo
git clone https://github.com/creedzr/saucedemo-project.git
cd saucedemo-project

## 2. Install dependensi (yarn)
yarn install

## 3. Mode interaktif
yarn cy:open

## 4. Mode headless + laporan
npm test
## Hasil:
##   - HTML  : cypress/results/html/index.html
📊 Laporan Test
Setelah yarn test selesai akan muncul:
- Laporan gabungan HTML di cypress/results/html/index.html
📁 Struktur Folder
saucedemo-project/
├── cypress/
│   ├── e2e/                  # test cases (*.cy.js)
│   ├── fixtures/             # data test
│   ├── support/
│   │   ├── pageObjects/      # page-object classes
│   │   └── commands.js       # custom commands
├── cypress/results/          # akan dibuat otomatis setelah run
├── cypress.config.js
├── package.json
└── README.md
