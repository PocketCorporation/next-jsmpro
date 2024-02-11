const schema = {
    name: 'newList',
    title: 'New List',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any)=>Rule.required()
        },
    ]
}

export default schema