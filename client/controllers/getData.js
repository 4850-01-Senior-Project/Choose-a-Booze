
export const getAllDrinkDataByLiquorType = async (liquor_type) => {
  const url = `http://localhost:8180/api/mixeddrinkwith?filter=${liquor_type.substring(0, 1).toUpperCase() + liquor_type.substring(1).toLowerCase()}&dontwant=`
  console.log("Awaiting response...");
  const response = await fetch(url)
  return await response.json();
}

// --------------------------------------------------

export const filterDrinksByIngredientsOR = async (filters, dontwants) => {
  const filterList = format(filters)
  const dontWantList = format(dontwants)

  const url = `http://localhost:8081/api/mixeddrinkwith?filter=${filterList}&dontwant=${dontWantList}`
  console.log("Awaiting response...");
  const response = await fetch(url)
  return await response.json();
}

// --------------------------------------------------

const format = (array) => {
  result = ""
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      result += array[i]
    }
    else {
      result += filters[i] + '-'
    }
  }
  return result
}

// --------------------------------------------------

export const getTags = async () => {
  const url = `http://127.0.0.1:8081/api/alltags`
  console.log("Awaiting response...");
  const response = await fetch(url)
  const list = await response.json()
  let count = 0;
  const formattedTagList = list.map((item) => { return { name: item.tag.Name, id: ++count, tagid: item.id } })

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