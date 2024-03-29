
export const getAllDrinkData = async () => {
    const url = `http://127.0.0.1:8081/api/alldrinks`
    console.log("Awaiting response...");
    const response = await fetch(url)
    return await response.json();
}

// --------------------------------------------------

export const filterDrinksByIngredientsOR = async (filters, dontwants) => {
    console.log(filters)
    const filterList = format(filters)
    const dontWantList = format(dontwants)

    const url = `http://127.0.0.1:8081/api/mixeddrinkwith?filter=${filterList}&dontwant=${dontWantList}`
    console.log("Awaiting response...");
    const response = await fetch(url)
    return await response.json();
}

// --------------------------------------------------

const format = (filter) => {
    console.log(filter);
    let result = ""
    for (let i = 0; i < filter.length; i++) {
        if (i === filter.length - 1) {
            result += `${filter[i] !== "undefined" || filter[i] ? filter[i] : ""}`
        }
        else {
            result += `${filter[i] !== "undefined" || filter[i] ? filter[i] : ""},`
        }
        return result
    }
}

    // --------------------------------------------------

    export const getTags = async () => {
        const url = `http://127.0.0.1:8081/api/alltags`
        console.log("Awaiting response...");
        const response = await fetch(url)
        const list = await response.json()
        const formattedTagList = list.map((item) => { return { name: item.tag.Name, tagid: item.id } })

        return formattedTagList;
    }

    // --------------------------------------------------

    export const getTagsWithDrinks = async () => {
        const url = `http://127.0.0.1:8081/api/tagswithdrinks`
        console.log("Awaiting response...");
        const response = await fetch(url)
        const list = await response.json()
        let count = 0;
        const formattedTagIDList = list.map((item) => { return { tagid: item.Tag, drinkids: item.Drinks } })

        return formattedTagIDList;
    }