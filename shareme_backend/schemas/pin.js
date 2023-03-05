export default{
    name: 'pin',
    type: 'document',
      title: 'Pin',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Tittle'
      },
      {
        name: 'about',
        type: 'string',
        title: 'About'
      }
      ,
      {
        name: 'destination',
        type: 'url',
        title: 'Destination'
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        option:{
            hotspot:true
        }
      }
      ,
      {
        name: 'UserID',
        type: 'string',
        title: 'UserID'
      },
     
      {
        name: 'postedBy',
        type: 'postedBy',
        title: 'PostedBy'
      },
      {
        name: 'save',
        type: 'array',
        of:[{type:"save"}],
        title: 'Save'
      },
      {
        name: 'commments',
        type: 'array',
        of:[{type:"comment"}],
        title: 'Comments'
      }
    ]
}