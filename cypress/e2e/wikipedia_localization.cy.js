describe('Wikipedia Localization Tests', () => {
  const locales = ['en', 'fr', 'es', 'hi'];

  locales.forEach((locale) => {
    it(`should open Wikipedia homepage in ${locale.toUpperCase()}`, () => {
      cy.visitWikipedia(locale);
    });
  });
});
