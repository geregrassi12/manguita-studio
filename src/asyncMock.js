import topdownImage from '../img/topdown-gamelist.png';


const games = [
    {
        id: "last-game",
        tittle: "Top Down - 01",
        description: "tank tank tank  ",
        img: `${topdownImage}`
    },
    // {
    //     id: "manguita-studio",
    //     tittle: "Top Down - 01",
    //     description: "tank tank tank tank tank tank",
    //     img: `${topdownImage}`
    // },
    // {
    //     id: "manguita-sstudio",
    //     tittle: "Top Down - 01",
    //     description: "tank tank tank tank tank tank",
    //     img: `${topdownImage}`
    // },
    
]


export const getGames = new Promise((resolve) => {
    setTimeout(() => {
        resolve(games)
    }, 2000)
})

export const getGame = (id) => {
    return products.find((game) => prod.id == id)
}
