🌍 Wikipedia Multilingual Testing with Cypress  

=====================================================

📖 Project Overview  
-------------------  
This project demonstrates **multilingual UI testing** on [Wikipedia](https://www.wikipedia.org/) using **Cypress**.  
The goal is to ensure that Wikipedia correctly loads content in different languages (English, French, Spanish, Hindi, etc.).  

✅ Covers **localization testing**  
✅ Captures **screenshots in headless mode**  
✅ Organized test structure for **showcasing on GitHub**  

=====================================================

📂 Project Structure  
-------------------  

LOCALIZATIONTESTING/  
 ├── cypress/  
 │   ├── downloads/  
 │   ├── e2e/  
 │   │   └── wikipedia_localization.cy.js   # Cypress test cases  
 │   ├── fixtures/  
 │   ├── reports/  
 │   ├── screenshots/  
 │   │   └── wikipedia_localization.cy.js/  
 │   │       ├── Wikipedia-en-homepage.png  
 │   │       ├── Wikipedia-es-homepage.png  
 │   │       ├── Wikipedia-fr-homepage.png  
 │   │       └── Wikipedia-hi-homepage.png  
 │   └── support/  
 │       └── commands.js                   # Custom commands  
 ├── node_modules/  
 ├── reports/  
 ├── cypress.config.js                     # Cypress configuration  
 ├── package.json                          # Dependencies  
 ├── package-lock.json  
 └── README.txt (this file)  

=====================================================

⚙️ Setup Instructions  
-------------------  

1️⃣ Clone the Repository  
```bash
git clone https://github.com/<your-username>/cypress-wikipedia-multilang.git
cd cypress-wikipedia-multilang
```

2️⃣ Install Dependencies  
```bash
npm install
```

3️⃣ Run Tests (Headless)  
```bash
npx cypress run --spec "cypress/e2e/wikipedia_localization.cy.js" --browser chrome
```

Screenshots will be saved under:  
```
cypress/screenshots/wikipedia_localization.cy.js/
```

=====================================================

🌐 Supported Languages  
-------------------  

- 🇬🇧 English  
- 🇫🇷 French  
- 🇪🇸 Spanish  
- 🇮🇳 Hindi  

(You can extend this list by updating your test file and custom commands.)  

=====================================================

📊 Importance of Multi-language Testing  
---------------------------------------  

🌍 In today’s global world, websites must serve users in multiple languages.  
This project highlights how Cypress can be leveraged to validate:  

✔ Correct **language localization** per region  
✔ Consistency of **UI elements across languages**  
✔ Proper **rendering of localized content**  
✔ Ability to take **screenshots for validation and reporting**  

By showcasing this Wikipedia project, we emphasize the **importance of localization testing** in ensuring inclusivity and accessibility for a diverse global audience.  

=====================================================

🚀 Future Enhancements  
-------------------  
- Add more languages (Chinese, Japanese, Arabic)  
- Integrate with GitHub Actions for CI/CD pipeline  
- Compare visual diffs for UI changes across locales  

=====================================================

📜 License  
----------  
This project is licensed under the MIT License.  

=====================================================

✍️ Author  
----------  
**Saran Kumar**  

