export function getFilteredData(searchText,originalRestaurantData) {
    return originalRestaurantData.filter((items) => {
        return items?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
    })
}