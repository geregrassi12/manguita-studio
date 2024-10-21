const games = [
    {
        id: "manguita-studio",
        tittle: "Top Down - 01",
        description: "tank tank tank tank tank tank",
        img: "../img/topdown-gamelist.png"
    }
]


export const getGames = new Promise((resolve) => {
    setTimeout(() => {
        resolve(games)
    }, 2000)
})

export const getGame = (id) => {
    return products.find((game) => prod.id == id)
}
