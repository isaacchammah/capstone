import React from "react";
import "../Stock1/Stock1.scss";
import DataTable from "react-data-table-component";


function Stock1({ profile1, logo1, incomestatement1, balancesheet1, m1, s1, v1, m2, s2, v2, fullArray2 }) {




  return (
    <>

      <h1>{profile1.name}</h1>
      <img src={logo1} />

      <div className="description">{profile1.description}</div>


      <div >


      <div className="index_income-date">
          {incomestatement1.map((date) => (
            <div>{date.fiscal_date}</div>
          ))}
                  <p>Dateincome_statement</p>
        </div>


        <div className="index_sales-growth">
          {incomestatement1.map((sales, index) => (
            index > 0 && (
              <div>{(((incomestatement1[index - 1].sales / sales.sales) - 1) * 100).toFixed(2)}% </div>
            )
          ))}
                    <p>Sales Growth</p>
        </div>

        <p>Gross Margin</p>
        <div>
          {incomestatement1.map((grossmargin) => (
            <div>{((grossmargin.gross_profit / grossmargin.sales) * 100).toFixed(2)} % </div>
          ))}
        </div>

        <p>Ebitda Margin</p>
        <div>
          {incomestatement1.map((ebitdamargin) => (
            <div>{((ebitdamargin.ebitda / ebitdamargin.sales) * 100).toFixed(2)} % </div>
          ))}
        </div>

        <p>Net Margin</p>
        <div>
          {incomestatement1.map((netmargin) => (
            <div>{((netmargin.net_income / netmargin.sales) * 100).toFixed(2)} % </div>
          ))}
        </div>

        <p>Date balance_sheet</p>
        <div>
          {balancesheet1.map((date1) => (
            <div>{date1.fiscal_date}  </div>
          ))}
        </div>

        <p>Current ratio</p>
        <div>
          {balancesheet1.map((currentratio) => (
            <div>{((currentratio.assets.current_assets.total_current_assets / currentratio.liabilities.current_liabilities.total_current_liabilities)).toFixed(1)}  </div>
          ))}
        </div>

        <p>Leverage ratio</p>
        <div>
          {balancesheet1.map((leverageratio) => (
            <div>{((leverageratio.liabilities.current_liabilities.short_term_debt + leverageratio.liabilities.non_current_liabilities.long_term_debt) / (leverageratio.liabilities.current_liabilities.short_term_debt + leverageratio.liabilities.non_current_liabilities.long_term_debt + leverageratio.assets.total_assets - leverageratio.liabilities.total_liabilities) * 100).toFixed(1)}%  </div>
          ))}
        </div>


        <p>ROE</p>
        {incomestatement1.map((income, index) => {
          const netincome = income.net_income;
          const equity = balancesheet1[index].assets.total_assets - balancesheet1[index].liabilities.total_liabilities;
          const roe = netincome / equity;
          return <div key={index}> {roe.toFixed(2) * 100}%</div>;
        })}

        <p>ROA</p>
        {incomestatement1.map((income, index) => {
          const netincome = income.net_income;
          const equity = balancesheet1[index].assets.total_assets;
          const roa = netincome / equity;
          return <div key={index}> {roa.toFixed(2) * 100}%</div>;
        })}

      </div>


      <p>{m1}
      </p>
      <p>{s1}</p>

      <p>{v1}</p>

      <p>{m2}
      </p>
      <p>{s2}</p>

      <p>{v2}</p>



    </>
  );
}

export default Stock1;
