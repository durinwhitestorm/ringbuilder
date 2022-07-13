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
const metal ={
    'silver':{
        'image':'',
        'flake image':''
    },
    'gold':{
        'image':'',
        'flake image':''
    },
    'white gold':{
        'image':'',
        'flake image':''
    },
    'rose gold':{
        'image':'',
        'flake image':''
    },
    'bronze':{
        'image':'',
        'flake image':''
    },
    'brass':{
        'image':'',
        'flake image':''
    },
    'copper':{
        'image':'',
        'flake image':''
    }
}
const precStone = {
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
app.get('/api/:metalType', (req, res) => {
    const metalTypes = req.params.metalType.toLowerCase()
    if(metal[metalTypes]){
        res.json(metal[metalTypes])
    }
})
app.get('/api/:precStoneType', (req, res) => {
    const precStoneTypes = req.params.precStoneType.toLowerCase()
    if(precStone[precStoneTypes]){
        res.json(precStone[precStoneTypes])
    }
})
app.get('/api/:opalType', (req, res) => {
    const opalTypes = req.params.opalType.toLowerCase()
    if(opal[opalTypes]){
        res.json(opal[opalTypes])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Cut it down')
})

