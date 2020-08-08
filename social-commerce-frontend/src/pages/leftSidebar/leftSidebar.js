import React from 'react';

import classes from "./leftSidebar.css";

const leftSidebar = (props) => {

    return(
        <div className="leftSidebar-container">
            <fieldset className="leftSidebar">
                <h5>Tipul Produsului</h5>
                <div className="content-type">
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Accesorii
                    </a>
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Genti
                    </a>
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Bluze
                    </a>
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Pulovere
                    </a>
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Paltoane&Jachete
                    </a>
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Rochii
                    </a>
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Pantaloni
                    </a>
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Camasi&Topuri
                    </a>
                    <a className="content">
                        <input type="checkbox" name="product" value="accesories"/>
                        Incaltaminte
                    </a>
                </div>

                <div className="products-sizes">
                    <h5>Marime</h5>

                        <div>
                            <div className="product-size-clothing">
                                <h5>Imbracaminte dama</h5>
                                    <a className="content">
                                    <input type="checkbox" name="clothing-size" value="size"/>
                                        XS
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="clothing-size" value="size"/>
                                        S
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="clothing-size" value="size"/>
                                        M
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="clothing-size" value="size"/>
                                        L
                                    </a>
                                </div>

                                <div className="product-size-shoes">
                                <h5>Incaltaminte</h5>
                                    <a className="content">
                                    <input type="checkbox" name="shoes-size" value="size"/>
                                        36
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="shoes-size" value="size"/>
                                        37
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="shoes-size" value="size"/>
                                        38
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="shoes-size" value="size"/>
                                        39
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="shoes-size" value="size"/>
                                        40
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="shoes-size" value="size"/>
                                        41
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="shoes-size" value="size"/>
                                        42
                                    </a>
                                    <a className="content">
                                    <input type="checkbox" name="shoes-size" value="size"/>
                                        43
                                    </a>
                                </div>

                                <div className="product-accesories">
                                    <h5>Accesorii</h5>
                                        <a className="content">
                                        <input type="checkbox" name="accesories" value="size"/>
                                            S
                                        </a>
                                        <a className="content">
                                        <input type="checkbox" name="accesories" value="size"/>
                                            M
                                        </a>
                                        <a className="content">
                                        <input type="checkbox" name="accesories" value="size"/>
                                            One size
                                        </a>
                                </div>
                            </div>
                        </div>

                        <div className="slidecontainer">
                            <h3>Pret</h3>
                            <input type="range" min="1" max="200" value="100" className="slider" id="myRange"/>
                           
                        </div>

                        <div className="new-vintage">
                            <a className="content">
                                <input type="checkbox" name="life" value="life"/>
                                        Nou
                            </a>
                            <a className="content">
                                <input type="checkbox" name="life" value="life"/>
                                        Vintage
                            </a>
                        </div>

                        <div className="material">
                            <h5>Material</h5>
                            <a className="content">
                                <input type="checkbox" name="material" value="material"/>
                                    Piele
                            </a>
                            <a className="content">
                                <input type="checkbox" name="material" value="material"/>
                                    Lana
                            </a>
                            <a className="content">
                                <input type="checkbox" name="material" value="material"/>
                                    Bumbac
                            </a>
                            <a className="content">
                                <input type="checkbox" name="material" value="material"/>
                                    Denim
                            </a>
                            <a className="content">
                                <input type="checkbox" name="material" value="material"/>
                                    Poliester
                            </a>
                        </div>

                        <div className="product-colour">
                            <h5>Culoarea Produsului</h5>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Alb
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Albastru
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Crem
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Galben
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Mov
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Negru
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Portocaliu
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Rosu
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Roz
                            </a>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Verde
                            </a>
                        </div>

                        <div className="shop-local">
                            <h5>Cumpara local</h5>
                            <a className="content">
                                <input type="checkbox" name="colour" value="colour"/>
                                    Arata doar articole care se livreaza in Romania <a href="#">schimba</a>
                            </a>
                        </div>
            </fieldset>
        </div>
    );
};

export default leftSidebar;