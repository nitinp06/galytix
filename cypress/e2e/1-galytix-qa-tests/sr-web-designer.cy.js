describe('Job Application Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/job/5')
    })
  
    it('should display job details', () => {
      cy.get('h1').should('contain', 'Sr. Web Designer')
      cy.get('p').should('contain', 'London, UK')
      cy.get('button').should('contain', 'APPLY NOW').click()
      cy.url().should('include', '/application-form')
    })
  
    it('should display and fill the application form', () => {
      cy.get('button').contains('APPLY NOW').click()
  
      // Assert form elements
      cy.get('.form-container').should('exist')
      cy.get('input[name="name"]').should('exist')
      cy.get('input[name="email"]').should('exist')
      cy.get('input[name="resume"]').should('exist')
  
      // Submit form without filling required fields
      cy.get('button[type="submit"]').click()
  
      // Assert error messages for required fields
      cy.get('.error-msz').should('contain', 'Name is required.')
      cy.get('.error-msz').should('contain', 'Email is required.')
      cy.get('.error-msz').should('contain', 'Resume is required.')
  
      // Fill form
      cy.get('input[name="name"]').type('Jane Doe')
      cy.get('input[name="email"]').type('jane.doe@example.com')
  
      // Attach resume
      cy.fixture('resume.pdf').then(fileContent => {
        cy.get('input[name="resume"]').then(subject => {
          const file = new File([fileContent], 'resume.pdf', { type: 'application/pdf' })
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(file)
          subject[0].files = dataTransfer.files
          cy.wrap(subject).trigger('change', { force: true })
        })
      })
  
      // Submit form
      cy.get('button[type="submit"]').click()
  
      // Assert success message
      cy.get('.success').should('contain', 'Application submitted')
    })
  
    context('displays detailed role description and desired skills', () => {
      const sections = [
        {
          title: 'DETAILED ROLE DESCRIPTION:',
          items: [
            'Design, development and testing of new features in the applications using C#.',
            'Responsible for regular communication with others involved in the development process.',
            'Implement, test, and bug-fix functionality.',
            'Participate as a team member in our agile development process (team meetings, code reviews.',
            'Provide support to end users.'
          ]
        },
        {
          title: 'DESIRED SKILLS:',
          items: [
            '5+ years of software development experience in C#.',
            '.Net Core 2.2 or higher experience.',
            'Solid knowledge and experience in SQL, EF, ADO.NET, Stored procedures, queryoptimisation.',
            'Good knowledge of NoSQL technology (MongoDB).',
            'WEB API (REST, GraphQL).',
            'BS degree in Computer Science or Engineering.',
            'Experience developing data intense applications and/or ETL processes.',
            'Strong in Object Oriented Programming, Design patterns and SOLID principles.'
          ]
        },
        {
          title: 'WHY YOU DO NOT WANT TO MISS THIS CAREER OPPORTUNITY?',
          items: [
            'Work for a Company that will revolutionise the Risk industry.',
            'Work closely with senior leaders who have individually served a number of CEOs at Fortune 100 companies globally.',
            'Capitalise on an unparalleled career progression opportunity.',
            'Build technical development skills in an industry with a significant growth potential (both in India and globally).',
            'Learn structured problem-solving and pyramid-based communication skills.'
          ]
        }
      ]
  
      sections.forEach(section => {
        it(`displays ${section.title}`, () => {
          cy.contains(section.title).next('ul').within(() => {
            section.items.forEach(item => {
              cy.contains(item)
            })
          })
        })
      })
    })
  
    it('should log error message and capture screenshot after attaching resume if "Resume is required"', () => {
      cy.get('button').contains('APPLY NOW').click()
  
      // Attach resume
      cy.fixture('resume.pdf').then(fileContent => {
        cy.get('input[name="resume"]').then(subject => {
          const file = new File([fileContent], 'resume.pdf', { type: 'application/pdf' })
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(file)
          subject[0].files = dataTransfer.files
          cy.wrap(subject).trigger('change', { force: true })
        })
      })
  
      // Submit form
      cy.get('button[type="submit"]').click()
  
      // Check if error message "Resume is required" is displayed
      cy.get('.error-msz').should('contain', 'Resume is required.')
  
      // Log error message
      cy.log('Error: Resume is required.')
  
      // Capture screenshot
      cy.screenshot('resume_required_error')
    })
  })
  