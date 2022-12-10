export function generateRandomPrice() {
    var min = 1;
    var max = 999;
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
export function generateRandomRating() {
    var min = 1;
    var max = 5;
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

export function generateRandomCategory() {
    var categories = [
        "Coats",
        "Dresses",
        "Sets",
        "Jackets",
        "T-shirts",
        "Sweaters",
        "Watches",
        "Shoes",
        "Jeans",
        "Bags",
        "Tops",
        "Pants",
    ];
    const randomNumber = Math.floor(Math.random() * categories.length);
    return categories[randomNumber];
}

export function generateRandomName() {
    var categories = [
        "Black coat",
        "Black dress",
        "Brown watch",
        "Stiletto shoes",
        "Winter boots",
        "Red dress",
        "Black top & pants set",
        "White top & black pants set",
        "Blue hoody & pants",
        "Jeans jacket & pants",
        "Jeans dress",
        "Blue jacket",
        "Purple handbag",
        "Red handbag",
        "Blue t-shirt",
        "Gray t-shirt",
        "Multicolor t-shirt",
        "Striped top",
        "Brown sweater",
        "Olive sweater",
        "White seater",
        "Striped pink pants",
    ];
    const randomNumber = Math.floor(Math.random() * categories.length);
    return categories[randomNumber];
}
export function generateRandomDescription() {
    var categories = [
        "Black",
        "Blue",
        "Green",
        "Red",
        "Yellow",
        "Purple",
        "White",
        "Grey",
        "Pink",
        "Gold",
        "Silver",
        "Copper",
        "Silk",
        "Thick",
        "Thinn",
    ];
    const randomNumber = Math.floor(Math.random() * categories.length);
    return categories[randomNumber];
}