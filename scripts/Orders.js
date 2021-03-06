import { getOrders, getMetals, getStyles, getSizes } from "./database.js"


const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()



const buildOrderListItem = (order) => {
    
    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
         return metal.id === order.metalId
        }
    )

    const foundStyles = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const foundSizes = sizes.find (
        (size) => {
            return size.id === order.sizeId
        }
    )

    const totalCost = foundMetal.price + foundStyles.price + foundSizes.price
        
    const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        return `<li>
            Order #${order.id} cost ${costString}
            </li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(orderList => {return buildOrderListItem(orderList)})

    html += listItems.join("")
    html += "</ul>"

    return html
}

