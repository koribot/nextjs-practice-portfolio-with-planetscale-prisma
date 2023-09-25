
import getRandomShape from './getRandomShape';
import getRandomColors from './getRandomColors';
import getRandomPosition from './getRandomPosition';
import React from 'react'

const generateElement = (length, typeOfElement, shape, vw, vh, excludeWhite, maxBrightness) => {
    // Create an array of elements
    const elements = [];
    for (let index = 0; index < length; index++) {
        const position = getRandomPosition(vh, vw)
        const color = getRandomColors(excludeWhite, maxBrightness)
        const newElement = React.createElement(typeOfElement, {
            key: index,
            className: `${shape === 'random' ? getRandomShape() : shape} cursor-pointer`, style: { left: position.left, top: position.top, borderColor: color },

        })
        elements.push(newElement);

    }

    // Update state with the generated elements

    return elements
}
export default generateElement