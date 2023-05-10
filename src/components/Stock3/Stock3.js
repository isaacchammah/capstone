import "../Stock3/Stock3.scss"

import React from "react";
import "../Stock1/Stock1.scss";
import DataTable from "react-data-table-component";
import { Fade } from "react-awesome-reveal";



function Stock3({ profile3, logo3, incomestatement3, balancesheet3, showTable3 }) {


    const assets = balancesheet3.slice(1).map((roa) => { (roa.assets.total_assets).toFixed(1) })


    // const roa = assets/netincome





    return (
        <>
            <div className="stock">
                <h1 className="stock-name">{profile3.name}</h1>


                <div className="float">  <img src={logo3} /> </div>
                <p className="description">{profile3.description}</p>
                <h3>{profile3.industry}</h3>
                <h6><a href={profile3.website}>{profile3.website}</a></h6>

                <div className="App">
                    {showTable3 && (<table>
                        <tr className="table">

                            <th> Index/Date {incomestatement3.map((date) => (
                                <div>{date.fiscal_date}</div>
                            ))}</th>
                        </tr>
                        <tr>

                            <td>
                                Sales growth
                                {[<div className="wight">n/a</div>].concat(incomestatement3.map((sales, index) => (
                                    index < incomestatement3.length - 1 && (
                                        <div className="wight">{(((incomestatement3[index + 1].sales / sales.sales) - 1) * 100).toFixed(2)}% </div>
                                    )
                                )))}
                            </td>

                            <td >
                                Gross Margin
                                {incomestatement3.map((grossmargin) => (
                                    <div className="wight">{((grossmargin.gross_profit / grossmargin.sales) * 100).toFixed(2)} % </div>
                                ))}
                            </td>


                            <td>
                                Ebitda Margin
                                {incomestatement3.map((ebitdamargin) => (
                                    <div className="wight">{((ebitdamargin.ebitda / ebitdamargin.sales) * 100).toFixed(2)} % </div>
                                ))}
                            </td>

                            <td>
                                Net Margin
                                {incomestatement3.map((netmargin) => (
                                    <div className="wight2">{((netmargin.net_income / netmargin.sales) * 100).toFixed(2)} % </div>
                                ))}
                            </td>


                            <td>
                                Current Ratio
                                {balancesheet3.slice(1).map((currentratio) => (
                                    <div className="wight">{((currentratio.assets.current_assets.total_current_assets / currentratio.liabilities.current_liabilities.total_current_liabilities)).toFixed(1)}  </div>
                                ))}
                            </td>


                            <td>
                                Leverage Ratio
                                {balancesheet3.slice(1).map((leverageratio) => (
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



                {/* <div className="index__current-ratio">
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




                {/* 
      <p>{m1}
      </p>
      <p>{s1}</p>

      <p>{v1}</p>

      <p>{m2}
      </p>
      <p>{s2}</p>

      <p>{v2}</p> */}


            </div>
        </>
    );
}

export default Stock3;
