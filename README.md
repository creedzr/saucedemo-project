# 🛒 SauceDemo – Cypress Automation  

End-to-end test suite untuk demo e-commerce **[SauceDemo](https://www.saucedemo.com)** menggunakan **Cypress**.

---

## ✅ Fitur yang Diuji  
| Modul             | Skenario yang tercover |
|-------------------|------------------------|
| Login             | Valid,  invalid credential |
| Product           | Sort, add-to-cart, remove, detail page |
| Cart              | Persistensi item, remove, checkout flow |
| Checkout          | Form validasi, overview, finish order |

---

## 🚀 Cara Menjalankan  
> Node.js ≥ 16 & yarn sudah ter-install  

```bash
# 1. Clone repo
git clone https://github.com/creedzr/saucedemo-project.git
cd saucedemo-project

# 2. Install dependensi
yarn install

# 3. Mode interaktif
yarn cy:open

# 4. Mode headless + laporan
npm test             # jalankan test & generate laporan
```

Laporan Test  
Hasil test otomatis tersedia di:  
🔗 `cypress/results/html/index.html`

---

## 📁 Struktur Folder  
```
saucedemo-project/
├── cypress/
│   ├── e2e/                  # test cases (*.cy.js)
│   ├── fixtures/             # data test
│   └── support/
│       ├── pageObjects/      # page-object classes
│       └── commands.js       # custom commands
├── cypress/results/          #  HTML reports
├── cypress.config.js
├── package.json
└── README.md
```
