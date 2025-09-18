Cypress.Commands.add('visitWikipedia', (locale) => {
  const wikiConfig = {
    en: {
      url: 'https://en.wikipedia.org/wiki/Main_Page',
      expectedTitle: 'Wikipedia'
    },
    fr: {
      url: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
      expectedTitle: 'Wikipédia'
    },
    es: {
      url: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
      expectedTitle: 'Wikipedia'
    },
    hi: {
      url: 'https://hi.wikipedia.org/wiki/%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A4%AA%E0%A5%83%E0%A4%B7%E0%A5%8D%E0%A4%A0',
      expectedTitle: 'विकिपीडिया'
    }
  };

  const config = wikiConfig[locale];
  if (!config) {
    throw new Error(`Locale ${locale} is not supported`);
  }

  // Use encodeURI for Hindi to avoid unescaped chars issue
  cy.visit(encodeURI(config.url), { timeout: 60000, failOnStatusCode: false });
  cy.get('body', { timeout: 10000 }).should('be.visible');
  cy.title().should('include', config.expectedTitle);

  // ✅ Now locale is defined (from parameter)
  cy.screenshot(`Wikipedia-${locale}-homepage`, {
    capture: 'viewport',
    overwrite: true
  });
});
