export default {
    name: 'curtain',
    title: 'Curtain',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
        },
        {
            name: 'material',
            title: 'Material',
            type: 'string',
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
        },
        {
            name: 'availability',
            title: 'Availability',
            type: 'boolean',
        },
    ],
};