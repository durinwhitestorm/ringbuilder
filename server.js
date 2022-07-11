const express = require('express')
const app = express()
const cors = require('cors')
const { response, request } = require('express')
const PORT = 8000

app.use(cors())

const wood = {
    'english walnut':{
        'image':'https://www.wood-database.com/wp-content/uploads/english-walnut-sealed-200x200.jpg'
    },
    'white oak':{
        'image':'https://www.wood-database.com/wp-content/uploads/quercus-alba-fs-1-225x450.jpg'
    },
    'black cherry':{
        'image':'https://www.wood-database.com/wp-content/uploads/prunus-serotina-225x450.jpg'
    },
    'white ash':{
        'image':'https://www.wood-database.com/wp-content/uploads/ash-sealed-200x200.jpg'
    },
    'hard maple':{
        'image':'https://www.wood-database.com/wp-content/uploads/acer-saccharum-225x450.jpg'
    },
}
const wire ={
    'silver':{
        'image':''
    },
    'gold':{
        'image':''
    },
    'white gold':{
        'image':''
    },
    'rose gold':{
        'image':''
    },
    'bronze':{
        'image':''
    },
    'brass':{
        'image':''
    },
    'copper':{
        'image':''
    }
}
const preciousStone = {
    'amethyst':{
        'image':''
    },
    'malachite':{
        'image':''
    },
    'rose quartz':{
        'image':''
    },
    'mather of pearl':{
        'image':''
    },
    'obsidian':{
        'image':''
    },
    'aquamarine':{
        'image':''
    }
}
const opal = {
    'blue':{
        'image':''
    },
    'yellow':{
        'image':''
    },
    'orange':{
        'image':''
    },
    'red':{
        'image':''
    },
    'green':{
        'image':''
    },
    'purple':{
        'image':''
    },
    'black':{
        'image':''
    },
    'white':{
        'image':''
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:woodType', (req, res) => {
    const woodTypes = req.params.woodType.toLowerCase()
    if(wood[woodTypes]){
        res.json(wood[woodTypes])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Cut it down')
})

