// export default () => ({


// })


export default () => ({
   
    isLoading: true,
    entries: [{
      
        id: new Date().getTime()  + 1000,
        date: new Date().toDateString(),
        Text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        picture: null

    },

    {
      
        id: new Date().getTime() + 2000,
        date: new Date().toDateString(),
        Text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        picture: null

    },

    {
      
        id: new Date().getTime() + 3000,
        date: new Date().toDateString(),
        Text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        picture: null

    }
]

})