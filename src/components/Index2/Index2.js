import React from "react";
import "../Stock1/Stock1.scss";
import DataTable from "react-data-table-component";
import { Fade } from "react-awesome-reveal";

function Index2({  }) {

  return (
    <>
 
 <section className="index-card">

 <h1 className="index-card__name"> S&P 500</h1> 
 <p className="index-card__text">
    The S&P 500 Index, or Standard & Poor's 500 Index, is a market-capitalization-weighted index of 500 leading publicly traded companies in the U.S. 

It is not an exact list of the top 500 U.S. companies by market cap because there are other criteria that the index includes. Still, the S&P 500 index is regarded as one of the best gauges of prominent American equities' performance, and by extension, that of the stock market overall. </p>

<h4 className="index-card__subheader" >Key takeaways </h4>

<ul className="index-card__bullet-points">
<li>The S&P 500 Index features 500 leading U.S. publicly traded companies, with a primary emphasis on market capitalization.</li>
<li>The S&P 500 Index was launched in 1957 by the credit rating agency Standard and Poor's.</li>
<li>Because of its depth and diversity, the S&P 500 is widely considered one of the best gauges of large U.S. stocks, and even the entire equities market.</li>

</ul>
</section>

      </>
      );
}

      export default Index2;

