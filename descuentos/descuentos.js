// const PrecioTotal = 120;
// const Descuento = 18;

function CalcularPrecioConDescuento(precio, descuento) {
    const PorcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * PorcentajePrecioConDescuento) / 100;

    return PrecioConDescuento;
};

function PriceDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const Pricevalue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const Discountvalue = InputDiscount.value;

    const PrecioConDescuento = CalcularPrecioConDescuento(Pricevalue,Discountvalue);

    const ResultP = document.getElementById("ResultP");

    ResultP.innerText = "El precio con descuento son $" + PrecioConDescuento;
}

// console.log({
//     PrecioTotal,
//     Descuento,
//     PorcentajePrecioConDescuento,
//     PrecioConDescuento
// })