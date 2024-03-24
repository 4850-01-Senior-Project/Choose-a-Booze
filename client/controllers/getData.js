
export const getAllDrinkData= async () => {
    const url = `http://127.0.0.1:8081/api/alldrinks`
    console.log("Awaiting response...");
    const response = await fetch(url)
    return await response.json();
}



export const filterDrinksByIngredientsOR = async (filters, dontwants) => {
console.log(filters)
    let filterList =  ""
    let dontWantList =  ""

    for (let i = 0; i < filters.length; i++) {
        if (i === filters.length - 1) {
            filterList += filters[i] !== "undefined"? filters[i] : ""
        }
        else {
            filterList += `${filters[i] !== "undefined"? filters[i] : ""},`
        }
    }

    for (let i = 0; i < dontwants.length; i++) {
        if (i === dontwants.length - 1) {
            dontWantList += dontwants[i] === "undefined"? dontwants[i] : ""
        }
        else {
            dontWantList += `${dontwants[i] === "undefined"? dontwants[i] : ""},`
        }
    }
    const url = `http://127.0.0.1:8081/api/mixeddrinkwith?filter=${filterList}&dontwant=${dontWantList}`
    console.log("Awaiting response...");
    const response = await fetch(url)
    return await response.json();
}


export const getTags = async () => {
    const url = `http://127.0.0.1:8081/api/alltags`
    console.log("Awaiting response...");
    const response = await fetch(url)
    const list = await response.json()
    const formattedTagList = list.map((item) => { return { name: item.tag.Name, tagid: item.id } })
   
    return formattedTagList;
}

export const getTagsWithDrinks = async () => {
    const url = `http://127.0.0.1:8081/api/tagswithdrinks`
    console.log("Awaiting response...");
    const response = await fetch(url)
    const list = await response.json()
    let count = 0;
    const formattedTagIDList = list.map((item) => { return { tagid : item.Tag, drinkids: item.Drinks } })
   
    return formattedTagIDList;
}