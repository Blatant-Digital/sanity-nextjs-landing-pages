export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d7ee6f962b63c5fb9fc358',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-guvn9ijy',
                  apiId: 'f1edc16b-6ae1-49c3-a0f8-0137dd50eecc'
                },
                {
                  buildHookId: '61d7ee703d8941adcbe2cdb5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2v3fw3kx',
                  apiId: '1a6b2691-7015-4a21-9d09-bee0c17a920d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Blatant-Digital/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2v3fw3kx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
