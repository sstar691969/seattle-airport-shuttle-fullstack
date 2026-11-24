
// Tourist Mens XL t-shirt:   "id": "price_1RlPk2EygEOJAlLzbGXfkXsZ",
// Tourist Mens L t-shirt: "id": "price_1RlPofEygEOJAlLz6saqmyUh",
// Tourist Mens meduim t-shirt: "id": "price_1RlPvmEygEOJAlLzipOdxQPG",
// Tourist Womens Large t-shirt:  "id": "price_1RlPxrEygEOJAlLzbBXdbszD",
// Tourist Womens Meduim t-shirts:  "id": "price_1RlQ0FEygEOJAlLzCHut0Ct9",
// 12 passenger sprinter:  "price_1RThE3EygEOJAlLzsA92vdhx",
// 35 passenger tour bus: price_1RThP3EygEOJAlLzDsyaizvQ
// 6 passenger suv: price_1RZRf1EygEOJAlLz3RG9WHPj
// 15 passenger sprinter: price_1RZRpcEygEOJAlLzqIVnG9Ia


const productsArray = [
    {
        id:  "price_1RThE3EygEOJAlLzsA92vdhx",
        title: "12 passenger shuttle Sprinter",
        price: 25.00



    },

    {
        id: "price_1RZRf1EygEOJAlLz3RG9WHPj",
        title: "6 passenger shuttle Ford flex",
        price: 25.00



    },

    {
        id: "price_1RZRpcEygEOJAlLzqIVnG9Ia",
        title: "15 passenger shuttle Sprinter",
        price: 25.00



    },

    {
        id: "price_1RThP3EygEOJAlLzDsyaizvQ",
        title: "35 - 40 passenger shuttle Tour bus",
        price: 25.00



    },
//--- test below code for tourist t-shirt
    {
        id: "price_1RlPk2EygEOJAlLzbGXfkXsZ",
        title: "Tourist Mens XL t-shirts",
        price: 25.00



    },

    {
        id: "price_1RlPofEygEOJAlLz6saqmyUh",
        title: "Tourist Mens Large t-shirts",
        price: 25.00



    },

    {
        id: "price_1RlPvmEygEOJAlLzipOdxQPG",
        title: "Tourist Mens medium t-shirts",
        price: 25.00



    },

    {
        id: "price_1RlPxrEygEOJAlLzbBXdbszD",
        title: "Tourist Womens Large t-shirts",
        price: 25.00



    },

    {
        id: "price_1RlQ0FEygEOJAlLzCHut0Ct9",
        title: "Tourist Womens Meduim t-shirts",
        price: 25.00



    },

   /*
   add with:  id: "price_1RlQ0FEygEOJAlLzCHut0Ct9",
{
    id: "10",
    title: "Tourist Womens small t-shirts",
    price: 25.00
},
{
    id: "11",
    title: "Tourist boys L t-shirts",
    price: 25.00
},
{
    id: "12",
    title: "Tourist girls L t-shirts",
    price: 25.00
}
*/



];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
    
    if (productData === undefined) {

        console.log("Product data does exist for ID: " + id);
        return undefined;
    }
    return productData;

}


    export {productsArray, getProductData };






