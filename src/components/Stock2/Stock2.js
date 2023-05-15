import "../Stock2/Stock2.scss"
import React from "react";


function Stock2({ profile2, logo2, incomestatement2, balancesheet2, showTable2 }) {

  return (
    <>

      <h1 className="stock-name">{profile2.name}</h1>
 

       
      <div className="float">  <img src={logo2} /> </div>
      <p className="industry">{showTable2 &&("Industry:")} {profile2.industry}</p>
      <p className="website">{showTable2 && ("Website:")}  <a href={profile2.website}>{profile2.website}</a></p>
        <p className="description">{profile2.description}</p>
        <input className="expand-btn" type="checkbox"></input>

      <div className="App">
        {showTable2 && (<table>
          <tr className="table">

            <th>
            <div className="wights"> Index/Date </div>
               {incomestatement2.map((date) => (
              <div className="wight">{date.fiscal_date}</div>
            ))}</th>
          </tr>
          <tr>

            <td>
            <div className="wights"> Sales growth </div>
              {[<div className="wight">n/a</div>].concat(incomestatement2.map((sales, index) => (
                index < incomestatement2.length - 1 && (
                  <div className="wight">{(((incomestatement2[index + 1].sales / sales.sales) - 1) * 100).toFixed(2)}% </div>
                )
              )))}
            </td>

            <td >
            <div className="wights"> Gross Margin</div>
              {incomestatement2.map((grossmargin) => (
                <div className="wight">{((grossmargin.gross_profit / grossmargin.sales) * 100).toFixed(2)} % </div>
              ))}
            </td>


            <td>
            <div className="wights"> Ebitda Margin</div>
              {incomestatement2.map((ebitdamargin) => (
                <div className="wight">{((ebitdamargin.ebitda / ebitdamargin.sales) * 100).toFixed(2)} % </div>
              ))}
            </td>

            <td>
                <div className="wights"> Net Margin </div>
              {incomestatement2.map((netmargin) => (
                <div className="wight">{((netmargin.net_income / netmargin.sales) * 100).toFixed(2)} % </div>
              ))}
            </td>


            <td>
            <div className="wights"> Current Ratio  </div>
              {balancesheet2.slice(1).map((currentratio) => (
                <div className="wight">{((currentratio.assets.current_assets.total_current_assets / currentratio.liabilities.current_liabilities.total_current_liabilities)).toFixed(1)}  </div>
              ))}
            </td>


            <td>
            <div className="wights"> Leverage Ratio </div>
              {balancesheet2.slice(1).map((leverageratio) => (
                <div className="wight">{((leverageratio.liabilities.current_liabilities.short_term_debt + leverageratio.liabilities.non_current_liabilities.long_term_debt) / (leverageratio.liabilities.current_liabilities.short_term_debt + leverageratio.liabilities.non_current_liabilities.long_term_debt + leverageratio.assets.total_assets - leverageratio.liabilities.total_liabilities) * 100).toFixed(1)}%  </div>
              ))}
            </td>


          </tr>
        </table>)}
      </div>



      {/* <div className="index__roe">
          <p>ROE</p>
          {incomestatement1.map((income, index) => {
            const netincome = income.net_income;
            const equity = balancesheet1[index].assets.total_assets - balancesheet1[index].liabilities.total_liabilities;
            const roe = netincome / equity;
            return <div key={index}> {roe.toFixed(2) * 100}%</div>;
          })}
        </div> */}


      {/* <div className="index__roa">
          <p>ROA</p>
          {incomestatement1.map((income) => {
            const netincome = income.net_income;
            const assets = balancesheet1.slice(1).assets.total_assets;
            const roa = netincome / assets;
            return <div> {roa.toFixed(2) * 100}%</div>;
          })}
        </div> */}


      {/* 
        <div className="index__current-ratio">
          <p>Net income</p>
          {incomestatement1.map((roa) => (
            <div>{((roa.net_income)).toFixed(1)}  </div>
          ))}
        </div>

        <div className="index__current-ratio">
          <p>total assets</p>
          {balancesheet1.slice(1).map((roa) => (
            <div>{(roa.assets.total_assets).toFixed(1)}  </div>
          ))}
        </div> */}

      {/* <div className="index__balance-dates">
          <p>Date balance_sheet</p>
          {balancesheet1.slice(0).reverse().map((date1) => (
            <div>{date1.fiscal_date}  </div>
          ))}
        </div> */}






    </>
  );
}

export default Stock2;
