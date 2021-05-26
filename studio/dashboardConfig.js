export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '60ae269e036696c2c884b5a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-7y41ripo',
                  apiId: '296e0d19-380a-4012-933c-a583fdde2208'
                },
                {
                  buildHookId: '60ae269f7bfd1bc020a7a9e4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-975dh47s',
                  apiId: 'a33d4bcf-370b-4c0d-90bd-4a74711a7c94'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fahadsaleem164/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-975dh47s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
