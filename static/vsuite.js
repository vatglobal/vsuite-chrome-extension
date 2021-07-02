/* globals Tree */
'use strict';

var tree = new Tree(document.getElementById('tree'), {
  navigate: true
});


tree.on('select', e => {
    if(e.href) window.open(e.href)
});

const structure = [
{
    name: 'Admin',
    type: Tree.FOLDER,
    children: [
        {
            name: 'admin-dev',
            link: 'https://admin-dev.myvsuite.com/admin/',
        },
        {
            name: 'admin-test',
            link: 'https://admin-test.myvsuite.com/admin/',
        },
        {
            name: 'admin-staging',
            link: 'https://admin-staging.myvsuite.com/admin/',
        },
    ]
},
{
    name: 'circle-ci',
    link: 'https://app.circleci.com/pipelines/github/vatglobal/vsuite-frontend-new',
},
{
    name: 'Jira',
    link: 'https://vatglobal.atlassian.net/jira/your-work',
},
{
  name: 'Dev',
  type: Tree.FOLDER,
  children: [
      {
          name: 'app-dev',
          link: 'https://app-dev-new.myvsuite.com',
      }
  ]
},
{
  name: 'Test',
  type: Tree.FOLDER,
  children: [
      {
          name: 'app-test',
          link: 'https://app-test-new.myvsuite.com',
      }
  ]
},
{
  name: 'Staging',
  type: Tree.FOLDER,
  children: [
      {
          name: 'app-staging',
          link: 'https://app-dev-staging.myvsuite.com',
      }
  ]
},
{
  name: 'Live',
  type: Tree.FOLDER,
  children: [
      {
          name: 'app-live',
          link: 'https://app.myvsuite.com',
      }
  ]
}];

// keep track of the original node objects
tree.on('created', (e, node) => {
  e.node = node;
});

tree.json(structure);
