import React from 'react';
import "../Modal/Modal.scss"
import closeIcon from "../../assets/Images/close.svg"

//Used to display the accounting ratios when someone clicks on the "What are these numbers" button in the stocks section
function Modal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    function handleModalClose() {
        onClose();
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img
                    className="close-image"
                    src={closeIcon}
                    alt="Close"
                    onClick={handleModalClose}
                />
                <h1 className='modal__title'>Accounting Ratios</h1>

                <div className="results__table">
                    <table className="modal-table">
                        <tr>

                            <th>
                                <div className="modal__table--weight1">Index/Info</div>
                                <div className="modal__table--weight2">Formula</div>
                                <div className="modal__table--weight">What Does It Tell Us?</div>

                            </th>
                        </tr>
                        <tr>

                            <td className="modal__table--lines">
                                <div className="modal__table--weight1">  Sales growth </div>
                                <div className="modal__table--weight2"> (Current period sales - Previous period sales) / Previous period sales </div>
                                <div className="modal__table--weight">Measures the ability of your sales team to increase revenue over a fixed period of time </div>
                            </td>

                            <td className="modal__table--lines">
                                <div className="modal__table--weight1">  Gross Margin </div>
                                <div className="modal__table--weight2"> Gross profit / Sales</div>
                                <div className="modal__table--weight"> Provides the proportion of money left over from revenues after accounting for the cost of goods sold (COGS).</div>
                            </td>

                            <td className="modal__table--lines">
                                <div className="modal__table--weight1">  Ebitda Margin </div>
                                <div className="modal__table--weight2"> Ebitda / Sales</div>
                                <div className="modal__table--weight">  Provides investors with a snapshot of short-term operational efficiency.</div>
                            </td>


                            <td className="modal__table--lines">
                                <div className="modal__table--weight1">    Net Margin</div>
                                <div className="modal__table--weight2"> Net profit / Sales</div>
                                <div className="modal__table--weight">  Illustrates how much of each dollar in revenue collected by a company translates into profit</div>
                            </td>

                            <td className="modal__table--lines">
                                <div className="modal__table--weight1">    Current Ratio</div>
                                <div className="modal__table--weight2"> Current assets / Current liabilities</div>
                                <div className="modal__table--weight">Measures a company's ability to pay current, or short-term, liabilities (debt and payables) with its current, or short-term, assets (cash, inventory, and receivables)</div>
                            </td>

                            <td className="modal__table--lines">
                                <div className="modal__table--weight1">  Leverage Ratio </div>
                                <div className="modal__table--weight2"> Financial debt / Capital invested</div>
                                <div className="modal__table--weight">% of the capital invested in the business that comes from debt</div>
                            </td>
                        </tr>
                    </table>
                </div>
                <button className="modal__button" onClick={handleModalClose}>Close</button>
            </div>
        </div>
        
    );
}

export default Modal;