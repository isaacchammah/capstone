import React from "react";
import "../Stock1/Stock1.scss";
import DataTable from "react-data-table-component";
import { Fade } from "react-awesome-reveal";

function Index3({  }) {

  return (
    <>
 
 <section className="index-card">

 <h1 className="index-card__name"> NASDAQ</h1> 
 <p className="index-card__text">
 Nasdaq is a global electronic marketplace for buying and selling securities. Its name was originally an acronym for "National Association of Securities Dealers Automated Quotations"—Nasdaq started as a subsidiary of the National Association of Securities Dealers (NASD), now known as the Financial Industry Regulatory Authority (FINRA). Nasdaq was launched after the Securities and Exchange Commission (SEC) urged NASD to automate the market for securities not listed on an exchange. The result was the first electronic trading system. Nasdaq opened for business on Feb. 8, 1971.
 </p>

<h4 className="index-card__subheader" >Key takeaways </h4>

<ul className="index-card__bullet-points">
<li>Nasdaq is an online global marketplace for buying and trading securities—the world's first electronic exchange.
.</li>
<li>It operates 29 markets, one clearinghouse, and five central securities depositories in the United States and Europe.</li>
<li>Most of the world's technology giants are listed on the Nasdaq.</li>

</ul>
</section>

      </>
      );
}

      export default Index3;

