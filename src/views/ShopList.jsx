import ShoppingList from '../components/ShoppingList/ShoppingList.jsx';


function ShopList() {
    console.log('coucou shoplist')
    return(
        <div>
            <h1>Créer une liste de course</h1>
            <ShoppingList />
        </div>
    )
}

export default ShopList