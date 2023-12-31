
import getRandomShape from './getRandomShape';
import getRandomColors from './getRandomColors';
import getRandomPosition from './getRandomPosition';
import React from 'react'

const generateElement = (length, typeOfElement, shape, vw, vh, maxBrightness, opacity) => {
    // Create an array of elements
    const elements = [];
    const randomShape = getRandomShape()
    for (let index = 0; index < length; index++) {
        const position = getRandomPosition(vh, vw)
        const color = getRandomColors(maxBrightness)
        const newElement = React.createElement(typeOfElement, {
            key: index,
            className: `${shape === 'random' ? randomShape : shape}`,
            style: {
                left: position.left,
                top: position.top,
                borderColor: color,
                opacity: `${opacity}%`
            },

        })
        elements.push(newElement);

    }

    // Update state with the generated elements

    return elements
}
export default generateElement