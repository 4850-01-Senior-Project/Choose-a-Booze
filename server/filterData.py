
def filterData(drink, filters):
    isInDrink = False
    for ingredient in drink:
        for filter in filters:
            if (str(ingredient).lower() == filter.lower()):
                print("This worked")
                isInDrink = True
                break
        if isInDrink==True:
            break 
    if isInDrink==False:
        return True
    return False