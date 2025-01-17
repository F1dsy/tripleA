// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  templates: {
    BlogPost: "/posts/:id"
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'BlogPost',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'static/gallery.yaml',
        typeName: 'Gallery',
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
    }
  ]
}
