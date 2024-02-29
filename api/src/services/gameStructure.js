
const createGameStructure = (game) => {
    return {
        id: game.id,
        api_name: game.slug,
        name: game.name,
        released: game.released,
        background_image: game.background_image,
        rating_top: game.rating_top,
        playtime: game.playtime,
        platforms: game.platforms.map((p)=> ({
            name: p.platform.name,
            id: p.platform.id,
        })),
        screenshots: game.short_screenshots.map((s)=>({
            image: s.image
        })),
        esrb_rating: game.esrb_rating?.name ?? null,
        genres: game.genres.map((g)=>({
            id: g.id,
            name: g.name,
            image:g.image_background
        })),
        tags: game.tags.map((t)=>({
            id: t.id,
            name: t.name,
            image: t.image_background
        }))
    }
}

module.exports = (game) => {

    if (Array.isArray(game)) {
        return game.map(createGameStructure);
    }

    return createGameStructure(game)
}