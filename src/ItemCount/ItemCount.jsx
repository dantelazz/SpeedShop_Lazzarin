import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemStock, setItemStock] = useState (stock);
    const [itemInitial, setItemInitial] = useState (initial);
    const [itemAdd, setItemAdd] = useState (onAdd);

    const quitarItems = (valor) => {
        if (valor > 0) {
            setItemInitial(valor);
        }
    }
    
    const agregarItems = (valor) => {
        if (valor <= itemStock) {
            setItemInitial(valor);
        }
    }

    const agregarProducto = () =>{
        if (itemInitial <= itemStock) {
            setItemStock (itemStock - itemInitial);
            setItemAdd (itemAdd + itemInitial)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <p className="text-center">El Stock maximo es 5</p>
                    <div className="input-group">
                        <input className="btn btn-secondary" type="button" value="-" onClick={() =>
                        {quitarItems(itemInitial - 1)}} />
                        <input className="form-control " type="text" value={itemInitial} onChange={()=>{}} />
                        <input className="btn btn-secondary" type="button" value="+" onClick={() =>
                        {agregarItems(itemInitial + 1)}} />
                        
                    </div>
                    <div className="d-grid pt-3 gap-2">
                        <input className="btn btn-light" type="button" value="agregar" onClick={() =>
                        {agregarProducto()}}/>
                    </div>
                    <p>Productos seleccionados: {itemAdd}</p>
                </div>
            </div>
        </div>
    )
} 

export default ItemCount;