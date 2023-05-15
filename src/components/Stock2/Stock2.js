import "../Stock2/Stock2.scss"
import React from "react";


function Stock2({ profile2, logo2, incomestatement2, balancesheet2, showTable2 }) {

  return (
    <>
    <div >
      <h1 >{profile2.name}</h1>

      <div className="stock__image-container"><img className="stock__image" src={logo2} onError={(e) => e.target.src = 'path/to/blank/image'} /></div>
      <p className="stock__industry">{showTable2 && ("Industry:")} {profile2.industry}</p>
      <p className="stock__website">{showTable2 && ("Website:")}  <a href={profile2.website}>{profile2.website}</a></p>
      <p className="stock__description">{profile2.description}</p>
      <input className="stock__input" type="checkbox"></input>

      <div className="stock__data">
        {showTable2 && (<table>
          <tr className="stock__table">

            <th>
              <div className="stock__wights"> Index/Date </div>
              {incomestatement2.map((date) => (
                <div className="stock__wight">{date.fiscal_date}</div>
              ))}</th>
          </tr>
          <tr>

            <td>
              <div className="stock__wights"> Sales growth </div>
              {[<div className="stock__wight">n/a</div>].concat(incomestatement2.map((sales, index) => (
                index < incomestatement2.length - 1 && (
                  <div className="stock__wight">{(((incomestatement2[index + 1].sales / sales.sales) - 1) * 100).toFixed(2)}% </div>
                )
              )))}
            </td>

            <td >
              <div className="stock__wights"> Gross Margin</div>
              {incomestatement2.map((grossmargin) => (
                <div className="stock__wight">{((grossmargin.gross_profit / grossmargin.sales) * 100).toFixed(2)} % </div>
              ))}
            </td>

            <td>
              <div className="stock__wights"> Ebitda Margin</div>
              {incomestatement2.map((ebitdamargin) => (
                <div className="stock__wight">{((ebitdamargin.ebitda / ebitdamargin.sales) * 100).toFixed(2)} % </div>
              ))}
            </td>

            <td>
              <div className="stock__wights"> Net Margin </div>
              {incomestatement2.map((netmargin) => (
                <div className="stock__wights">{((netmargin.net_income / netmargin.sales) * 100).toFixed(2)} % </div>
              ))}
            </td>

            <td>
              <div className="stock__wights"> Current Ratio  </div>
              {balancesheet2.slice(1).map((currentratio) => (
                <div className="stock__wight">{((currentratio.assets.current_assets.total_current_assets / currentratio.liabilities.current_liabilities.total_current_liabilities)).toFixed(1)}  </div>
              ))}
            </td>

            <td>
              <div className="stock__wights"> Leverage Ratio </div>
              {balancesheet2.slice(1).map((leverageratio) => (
                <div className="stock__wight">{((leverageratio.liabilities.current_liabilities.short_term_debt + leverageratio.liabilities.non_current_liabilities.long_term_debt) / (leverageratio.liabilities.current_liabilities.short_term_debt + leverageratio.liabilities.non_current_liabilities.long_term_debt + leverageratio.assets.total_assets - leverageratio.liabilities.total_liabilities) * 100).toFixed(1)}%  </div>
              ))}
            </td>

          </tr>
        </table>)}

      </div>

    </div>
  </>
  );
}

export default Stock2;
