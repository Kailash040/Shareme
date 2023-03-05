export default {
    name: 'comment',
    type: 'document',
      title: 'Comment',
    fields: [
      {
        name: 'posetedBy',
        type: 'postedBy',
        title: 'PostedBy'
      }
     ,
     {
        name: 'comment',
        type: 'string',
        title: 'Comment'
      }
    ]
  }