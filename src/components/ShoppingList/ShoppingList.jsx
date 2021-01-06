import React from 'react';
import './ShoppingList.scss';

function ShoppingList() {
    const [shopList, setShopList] = React.useState([]);
    const [articleName, setArticleName] = React.useState("");
    const [articlePrice, setArticlePrice] = React.useState(0);
    const [listName, setListName] = React.useState("");


    const localShoppingList = localStorage.getItem('shoppingList');

    // On réinitialise le formulaire lors d'ajout de nouveaux articles
    React.useEffect(() => {
        setArticleName("")
        setArticlePrice(0)
    }, [shopList])

    // Ajout d'une nouvelle liste de course
    function addNewArticle(event) {
        event.preventDefault();
        setShopList([
            ...shopList,
            {
                id: shopList.length,
                listName: listName,
                name: articleName,
                price: articlePrice
            }
        ])
    }

    function createNewShoppingList(event) {
        event.preventDefault() // TODO TO DELETE
        if (shopList.length > 0) {
            setShopList(shopList)
            localStorage.setItem('shoppingList', JSON.stringify(shopList));
        }
    }

    function removeArticle(article) {
        article.id > -1 && setShopList(shopList.filter((item, i) => i !== article.id))
    }

    return (
        <div className="shopping-list">
            <div>{localShoppingList}</div>
            <ul>
                {
                    shopList.map(article => (
                            <li key={article.id}>{article.name} - {article.price} 
                                &nbsp;<button onClick={() => removeArticle(article)}>Supprimer</button>
                            </li>
                        )
                    )
                }
            </ul>
            <form onSubmit={createNewShoppingList}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Nom de l'article :</label>
                        <input  id="articleName"
                                type="text" 
                                value={articleName}
                                onChange={(e) => setArticleName(e.target.value)}
                            />
                    </div>
                    <div className="form-group col-md-4">
                        <label>Prix : </label>
                        <input  name="articlePrice"
                                type="number" 
                                value={articlePrice}
                                onChange={(e) => setArticlePrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <button disabled={articleName === "" || articlePrice === 0} 
                                onClick={addNewArticle}
                                className="btn"
                                >
                                Ajouter
                        </button>
                    </div> 
                </div>
                
                <label>
                    Nom de la liste :
                    <input  name="listName"
                            type="text" 
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                    />
                </label>
                <br />
                <button disabled={shopList.length === 0 && listName === ""}>Créer la liste</button>
            </form>
        </div>
    )
}

export default ShoppingList;