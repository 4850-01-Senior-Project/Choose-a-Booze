
def filterDataDontInclude(drink, filters):
    isInDrink = False
    for ingredient in drink:
        for filter in filters:
            if (str(ingredient).lower() == filter.lower()):
                isInDrink = True
                break
        if isInDrink==True:
            break 
    if isInDrink==False:
        return True
    return False
    
def filterDataInclude(drink, filters):
    if len(filters) == 0 or filters[0]=="":
        return True
    isInDrink = False
    for ingredient in drink:
        for filter in filters:
            if (str(ingredient).lower() == filter.lower()):
                isInDrink = True
                break
    if isInDrink==True:
        return True
    return False    