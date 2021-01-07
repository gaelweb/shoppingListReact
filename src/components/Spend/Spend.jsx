import React from 'react';

export default function Spend() {
    const [spend, setSpend] = React.useState([]);
    const [articleName, setArticleName] = React.useState("");
    const [articlePrice, setArticlePrice] = React.useState(0);

    function addSpend(e) {
        e.preventDefault();
        setSpend([
            ...spend,
            {
                id: spend.length,
                name: articleName,
                price: articlePrice
            }
        ])
    }

    function saveSpend() {
        //
    }

    return (
        <section className="spend-section">
            {/* TESTING */}
            <ul>{spend.map((item, index) => {
                return (
                    <li key={index}>{item.name} - {item.price} €</li>
                )
                })}
            </ul>
            {/* END OF TESTING */}
            

            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#spendModal">
            Ajouter une dépense
            </button>
            {/* Modal comprenant une card form d'une nouvelle dépense */}
            <div id="spendModal" className="modal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Ajouter une dépense</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={addSpend}>
                                <div className="form-group col-auto">
                                    <label>Nom de l'article :</label><br/>
                                    <input  name="name"
                                        type="text"
                                        value={articleName}
                                        onChange={(e) => setArticleName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-auto">
                                    <label>Prix :</label><br/>
                                    <input  name="price"
                                            type="number"
                                            value={articlePrice}
                                            onChange={(e) => setArticlePrice(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-primary" onClick={saveSpend}>Enregister</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
