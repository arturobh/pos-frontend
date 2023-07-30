import React, { useState } from "react";

function OrderFooterCopy({ orderItems }) {

    let total=0;

    orderItems.forEach(item => {
      total+=item.subTotal;
    });

    let iva = Math.round(total*0.19);
    let neto = total-iva;
  
    return (
      <div className="order-footer">

          <div className="order-footer-totals">
            <div className="footer-col">
              <h1 className="h2">TOTAL</h1>
              <h1 className="h2">{total}</h1>
            </div>
            <div className="footer-col">
              <h3 className="h4">IVA</h3>
              <h3 className="h4">{iva}</h3>
            </div>
            <div className="footer-col">
              <h3 className="h4">NETO</h3>
              <h3 className="h4">{neto}</h3>
             </div>
        </div>
      </div>
    );
  }
  
  export default OrderFooterCopy;