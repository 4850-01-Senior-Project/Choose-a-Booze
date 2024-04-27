export const findRandomDrink = (results) => {

    let num = Math.floor(Math.random()* results.length)

    return results[num]
}

export const formatIngredients = (drink) => {
    console.log("drink ", drink);
    const keys = Object.keys(drink);
    const values = Object.values(drink);
    console.log("keys ", keys);
    const ingredients = []
    const measurements = []

    keys.forEach((key, index) => {
        if (key.toLowerCase().includes('ingredient')) {
            ingredients.push(values[index]);
        } else if (key.toLowerCase().includes('measure')) {
            measurements.push(values[index]);
        }
    });

    return measurements.map((measure, index) => { return `${measure} ${ingredients[index]}` })
}