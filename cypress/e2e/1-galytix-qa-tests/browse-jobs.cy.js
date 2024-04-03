describe('Browse Jobs Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200'); // Visit the Angular app
  });

  it('should display correct headings', () => {
    cy.get('h1').should('contain', 'Browse Jobs');
    cy.get('h2').should('contain', 'Technology');
  });

  const jobAssertions = [
    {
      title: 'Sr. Software Developer',
      location: 'Gurgaon, India',
      datePosted: '2020-07-20'
    },
    {
      title: 'Testing Engineer',
      location: 'Gurgaon, India',
      datePosted: '2020-07-20'
    },
    {
      title: 'Sr. Web Designer',
      location: 'London, UK',
      datePosted: '2020-07-20'
    },
    {
      title: 'Sr. Software Developer',
      location: 'London, UK',
      datePosted: '2020-07-20'
    },
    {
      title: 'Testing Engineer',
      location: 'London, UK',
      datePosted: '2020-07-20'
    },
    {
      title: 'Sr. Web Designer',
      location: 'Gurgaon, India',
      datePosted: '2020-07-20'
    }
  ];

  jobAssertions.forEach(job => {
    it(`should contain ${job.title} job with correct details`, () => {
      cy.get('.title').contains(job.title).should('exist');
      cy.get('.location').contains(`Location: ${job.location}`).should('exist');
      cy.get('.date').contains(`Date posted: ${job.datePosted}`).should('exist');
    });
  });

  // Additional test cases can be added here if needed
});
