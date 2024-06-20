export default {
    name: 'sofa',
    title: 'Sofa',
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
            name: 'dimensions',
            title: 'Dimensions',
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
        {
            name: 'seatingCapacity',
            title: 'Seating Capacity',
            type: 'number',
        },
        {
            name: 'style',
            title: 'Style',
            type: 'string',
        },
    ],
};  