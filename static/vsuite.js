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
  name: 'Test'
},
{
  name: 'Staging',
  open: false,
  type: Tree.FOLDER,
  selected: true,
  children: [{
    name: 'file 1/1'
  }, {
    name: 'file 1/2'
  }, {
    name: 'folder 1/1',
    type: Tree.FOLDER,
    children: [{
      name: 'folder 1/1/1',
      type: Tree.FOLDER,
      children: [{
        name: 'folder 1/1/1/1',
        type: Tree.FOLDER,
        children: [{
          name: 'file 1/1/1/1/1'
        }, {
          name: 'file 1/1/1/1/2'
        }]
      }]
    }]
  }]
}, 
{
  name: 'Live',
  type: Tree.FOLDER,
}];

// keep track of the original node objects
tree.on('created', (e, node) => {
  e.node = node;
});

tree.json(structure);
