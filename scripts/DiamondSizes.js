import { getSizes, setSize} from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)



export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // different method from for of loop, but generates the same data
    // generates individual html strings
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })
// the .join("") generates one long string with all list items
    html += listItems.join("")
    html += "</ul>"

    return html
}

// the map() method iterates the array just like a for...of loop. 
//but it invokes the function that you define  -- below

// (size) => {
//     return `<li>
//         <input type="radio" name="size" value="${size.id}" /> ${size.carets}
//     </li>`
// }

// the function is the 1st and only argument that the .map()method
// will accept 
//as it iterates the array, it takes the object at the current location
//and passes it as an argument to your function 
// the function defines the size parameter
// an object comes into your function and a string is returned
// the string goes into a new array