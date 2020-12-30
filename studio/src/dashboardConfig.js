export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fecb399693d3c0109927149',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-frkrg3mb',
                  apiId: 'bd167a7c-ea1d-4ead-a906-5a725674bbbd'
                },
                {
                  buildHookId: '5fecb399ff7e69008baabec6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yyvqhees',
                  apiId: '09d4b7b8-9f93-4d66-85b0-ad3978bbc1a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enzoshort/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yyvqhees.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
