// Some functions for fun...


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

export function generateRandomTag() {
    var tags = [
        "featured",
        "rankingthree",
        "rankingtwo",
        "rankingone",
        "flashone",
        "flashtwo"
    ];
    const randomNumber = Math.floor(Math.random() * tags.length);
    return tags[randomNumber];
}

export function generateRandomImageName() {
    var ImageNames = [
        "https://win22imgstorage.blob.core.windows.net/images/black-coat.png",
        "https://win22imgstorage.blob.core.windows.net/images/black-dress.png",
        "https://win22imgstorage.blob.core.windows.net/images/black-set.png",
        "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png",
        "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png",
        "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png",
        "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png",
        "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png",
        "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png",
        "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png",
        "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png",
        "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png",
        "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png",
        "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png",
        "https://win22imgstorage.blob.core.windows.net/images/red-bag.png",
        "https://win22imgstorage.blob.core.windows.net/images/red-dress.png",
        "https://win22imgstorage.blob.core.windows.net/images/striped-top.png",
        "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png",
        "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png",
        "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png",
        "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png"
    ];
    const randomNumber = Math.floor(Math.random() * ImageNames.length);
    return ImageNames[randomNumber];
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