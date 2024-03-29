export function filterDrinksByTagForSurveyResults(chosenTags, tags, tagsDrinks) {
    const tagIds = [];
    console.log(chosenTags, tags, tagsDrinks);
    chosenTags.forEach(tag => {
        console.log(tag);
        tags.forEach(tagName => {
            console.log(tagName);
            if (tag === tagName.name) {
                tagIds.push(tagName.tagid)
              
            }
        });
    });
    console.log(tagsDrinks);
    let drinkIDs = [];
    tagIds.forEach(id => {
        tagsDrinks.forEach(tagid => {
            if (id === tagid.Tags) {
                drinkIDs.push(tagid.Drinks);
            }
        });
    });
    
    return drinkIDs;
}

export function filterDrinkList(drinks, drinkIDs) {
    let drinkNames = [];
    drinkIDs.forEach(drinkID => {
        drinks.forEach(drink => {
            if (drink.id === drinkID) {
                drinkNames.push(drink.drink);
            }
        });
    });
    return drinkNames;
}
