export default {
    name: 'painting',
    title: 'Painting',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Painting name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Product slug url',
        type: 'slug',
        options: {
            source: 'name',
        }
      },
      {
        name: 'imageMain',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'image'}],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'createdAt',
        title: 'Date created',
        type: 'number',
      },
      {
        name: 'dimensions',
        title: 'Dimensions',
        type: 'string',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
      },
      {
        name: 'medium',
        title: 'Medium',
        type: 'string',
      },
      {
        name: 'support',
        title: 'Support',
        type: 'string',
      },
      {
        title: 'size',
        name: 'Size',
        type: 'string',
        options: {
          list: [
            { "title": "Petit", "value": "petit"},
            { "title": "Moyen", "value": "moyen"},
            { "title": "Grand", "value": "grand"},
          ],
          layout: 'dropdown'
        }
      },
    ]
  }