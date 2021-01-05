import { render } from '@testing-library/react';
import React, { Component } from 'react';

function ShoppingList() {
    const [shopList, setShopList] = React.useState([]);
    const [articleName, setArticleName] = React.useState("");
    const [articlePrice, setArticlePrice] = React.useState(0);

    // Ajout d'une nouvelle liste de course
    function addNewArticle(event){
        event.preventDefault();
        setShopList([
            ...shopList,
            {
                id: shopList.length,
                name: articleName,
                price: articlePrice
            }
        ])
    }

    function createNewShoppingList(event) {
        event.preventDefault(); // TODO TO DELETE
        setShopList(shopList)
        console.log('new shopping list : ', shopList)
    }

    function removeArticle(article) {
        article.id > -1 && setShopList(shopList.filter((item,i) => i !== article.id))
    }

    return(
        <div>
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
                <label>
                    Nom de l'article :
                    <input  name="articleName"
                            type="text" 
                            value={articleName}
                            onChange={(e) => setArticleName(e.target.value)}
                    />
                </label>
                <label>
                    Prix :
                    <input  name="articlePrice"
                            type="number" 
                            value={articlePrice}
                            onChange={(e) => setArticlePrice(e.target.value)}
                    />
                </label>
                <button disabled={articleName === "" || articlePrice === 0} 
                        onClick={addNewArticle}
                        >
                        Ajouter
                </button>
                <br/>
                <button>Ajouter la liste</button>
            </form>
        </div>
    )
}

export default ShoppingList;