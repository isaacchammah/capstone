import React from "react";
import "../Stock1/Stock1.scss";
import DataTable from "react-data-table-component";


function Stock1({ profile1, logo1, incomestatement1, balancesheet1, m1, s1, v1, m2, s2, v2, fullArray2 }) {

  return (
    <>

      <h1>{profile1.name}</h1>
      <h3>{profile1.industry}</h3>
      <h6><a href={profile1.website}>{profile1.website}</a></h6>


      <img src={logo1} />

      <div className="description">{profile1.description}</div>


      <div >

        <div className="index__income-date">
          <p>Dateincome_statement</p>

          {incomestatement1.map((date) => (
            <div>{date.fiscal_date}</div>
          ))}
        </div>
{/* 
        <div className="index__sales-growth">
          <p>Sales Growth</p>
          {income.map((sales, index) => (
            index > 0 && (
              <div>{(((incomestatement1[index - 1].sales / sales.sales) - 1) * 100).toFixed(2)}% </div>
            )
          ))}
        </div> */}
        {/* /////////////// */}



        <div className="index__sales-growth">
          <p>Current year sales</p>
          {incomestatement1.slice(1).map((sales) => (
             (
              <div>{(((sales.sales))).toFixed(2)} </div>
            )
          ))}
        </div>

        <div className="index__sales-growth">
          <p>Last year sales</p>
          {incomestatement1.map((sales, index) => (
            index < incomestatement1.length -1 &&  (
              <div>{incomestatement1[index+1].sales /sales.sales.toFixed(2)  } </div>
            )
          ))}
        </div>

 




        {/* <div className="index__sales-growth">
          <p>Sales Growth</p>
          {incomestatement1.slice(0).reverse().map((sales, index) => (
            index > 0 && (
              <div>{(((incomestatement1[index - 1].sales / sales.sales) - 1) * 100).toFixed(2)}% </div>
            )
          ))}
        </div> */}




        <div className="index__gross-margin">
          <p>Gross Margin</p>
          {incomestatement1.slice(0).reverse().map((grossmargin) => (
            <div>{((grossmargin.gross_profit / grossmargin.sales) * 100).toFixed(2)} % </div>
          ))}
        </div>

        <div className="index__ebitda-margin">
          <p>Ebitda Margin</p>
          {incomestatement1.slice(0).reverse().map((ebitdamargin) => (
            <div>{((ebitdamargin.ebitda / ebitdamargin.sales) * 100).toFixed(2)} % </div>
          ))}
        </div>

        <div className="index__net-margin">
          <p>Net Margin</p>
          {incomestatement1.slice(0).reverse().map((netmargin) => (
            <div>{((netmargin.net_income / netmargin.sales) * 100).toFixed(2)} % </div>
          ))}
        </div>

        {/* <div className="index__balance-dates">
          <p>Date balance_sheet</p>
          {balancesheet1.slice(0).reverse().map((date1) => (
            <div>{date1.fiscal_date}  </div>
          ))}
        </div> */}

        <div className="index__current-ratio">
          <p>Current ratio</p>
          {balancesheet1.slice(0).reverse().map((currentratio) => (
            <div>{((currentratio.assets.current_assets.total_current_assets / currentratio.liabilities.current_liabilities.total_current_liabilities)).toFixed(1)}  </div>
          ))}
        </div>

        <div className="index__leverage-ratio">
          <p>Leverage ratio</p>
          {balancesheet1.slice(0).reverse().map((leverageratio) => (
            <div>{((leverageratio.liabilities.current_liabilities.short_term_debt + leverageratio.liabilities.non_current_liabilities.long_term_debt) / (leverageratio.liabilities.current_liabilities.short_term_debt + leverageratio.liabilities.non_current_liabilities.long_term_debt + leverageratio.assets.total_assets - leverageratio.liabilities.total_liabilities) * 100).toFixed(1)}%  </div>
          ))}
        </div>

        <div className="index__roe">
          <p>ROE</p>
          {incomestatement1.map((income, index) => {
            const netincome = income.net_income;
            const equity = balancesheet1[index].assets.total_assets - balancesheet1[index].liabilities.total_liabilities;
            const roe = netincome / equity;
            return <div key={index}> {roe.toFixed(2) * 100}%</div>;
          })}
        </div>


        <div className="index__roa">
          <p>ROA</p>
          {incomestatement1.map((income, index) => {
            const netincome = income.net_income;
            const equity = balancesheet1[index].assets.total_assets;
            const roa = netincome / equity;
            return <div key={index}> {roa.toFixed(2) * 100}%</div>;
          })}
        </div>

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
