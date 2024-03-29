import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowersPrice = 15
    return (<div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monsteraPrice} €</li>
            <li>Lierre : {ivyPrice} €</li>
            <li>Bouquet de fleurs : {flowersPrice} €</li>
        </ul>
        Total : {monsteraPrice + ivyPrice + flowersPrice} €
    </div>)
}

export default Cart