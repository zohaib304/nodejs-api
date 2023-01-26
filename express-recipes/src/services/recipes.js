const fs = require("fs").promises
const path = require("path")

const recipesFilePath = path.join(__dirname, '../../db/recipes.json')

const getAll = async () => JSON.parse(await fs.readFile(recipesFilePath));


const get = async (id) => {
    const recipes = await getAll();
    return recipes.find((recipe) => recipe.id === parseInt(id));
}

const save = async (recipe) => {

    const recipes = await getAll()

    recipe.id = recipes.length + 1
    recipes.push(recipe)

    await fs.writeFile(recipesFilePath, JSON.stringify(recipes))

    return recipe;

}

const update = async (id, updated) => {

    const recipes = await getAll();
    updated.id = parseInt(id)

    const updatedRecipe = recipes.map((recipe) => {
        return recipe.id === parseInt(id) ? updated : recipe;
    })

    await fs.writeFile(recipesFilePath, JSON.stringify(updatedRecipe))

    return updated;

}

const remove = async (id) => {
    const recipes = await getAll()

    const nreRecipes = recipes.map((recipe) => {
        return recipe.id === parseInt(id) ? null : recipe
    }).filter((recipe) => recipe !== null);

    await fs.writeFile(recipesFilePath, JSON.stringify(nreRecipes))
}

module.exports = {
    getAll,
    get,
    save,
    update,
    remove,
}