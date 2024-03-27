
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

const format = (array) => {
  let result = ""
  for (let i = 0; i < array.length - 1; i++) {
    result += `${array[i] !== "undefined" || array[i] ? array[i] : ""},`
  }
  result += `${array[array.length - 1] !== "undefined" || array[array.length - 1] ? array[array.length - 1] : ""}`
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