
export const getAllDrinkDataByLiquorType = async (liquor_type) => {
    const url = `http://localhost:8180/api/mixeddrinkwith?filter=${liquor_type.substring(0, 1).toUpperCase() + liquor_type.substring(1).toLowerCase()}&dontwant=`
    console.log("Awaiting response...");
    const response = await fetch(url)
    return await response.json();
}



export const filterDrinksByIngredientsOR = async (filters, dontwants) => {

    const filterList = ""
    const dontWantList = ""

    for (let i = 0; i < filters.length; i++) {
        if (i === filters.length - 1) {
            filterList += filters[i]
        }
        else {
            filterList += filters[i] + '-'
        }
    }

    for (let i = 0; i < dontwants.length; i++) {
        if (i === filters.length - 1) {
            dontWantList += filters[i]
        }
        else {
            dontWantList += filters[i] + '-'
        }
    }
    const url = `http://localhost:8180/api/mixeddrinkwith?filter=${filterList}&dontwant=${dontWantList}`
    console.log("Awaiting response...");
    const response = await fetch(url)
    return await response.json();
}
