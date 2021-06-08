const getImage = (selectionItem) => {
    const element = document.querySelector(selectionItem);
    if (element) return element;
    throw new Error('Element not found');
}

export default getImage;