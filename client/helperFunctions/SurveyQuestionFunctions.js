export function filterDrinksByTagForSurveyResults(chosenTags, tags, tagsDrinks) {
    const tagIds = [];
    chosenTags.forEach(tag => {
        //console.log("tag ", tag);
        tags.forEach(tagName => {
            //console.log("tagList name:", tagName);
            if (String(tag).toLowerCase() === String(tagName.name).toLowerCase()) {
                //console.log(tagName.tagid);
                tagIds.push(tagName.tagid)
            }
        });
    });

    let drinkIDs = [];
    tagIds.forEach(id => {
        tagsDrinks.forEach(tagid => {
            // console.log(tagid, tagIds);
            if (id === tagid.tagid) {
                drinkIDs.push(tagid.drinkids);
            }
        });
    });
    //console.log(drinkIDs);
    return drinkIDs;
}

export function filterDrinkList(drinks, drinkIDs) {
    let drinkNames = [];

    drinkIDs.forEach(drinkID => {
        const drinkList = drinkID.split(",")
       console.log(drinkList, drinks);
        drinkList.forEach((id) => {
            drinks.forEach(drink => {
                if (Number(drink.id.trim()) === Number(id)) {
                    drinkNames.push(drink.drink);
                }
            });
        })
    
    });
    console.log(drinkNames);
    return drinkNames;
}