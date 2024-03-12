
export const getAllDrinkDataByLiquorType = async (liquor_type) => {
    const url = `http://localhost:8180/api/mixeddrinkwith?filter=${liquor_type.substring(0,1).toUpperCase()+liquor_type.substring(1).toLowerCase()}&dontwant=` 
    console.log("Awaiting response...");
    const response = await fetch(url);
    const trial = await response.json();
    
    return await trial;
}
