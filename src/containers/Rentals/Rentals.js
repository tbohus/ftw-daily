import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  SectionMap,	
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './Rentals.module.css';

import RentalsList from './RentalsList.json'

 function JsonDataDisplay(){
	function DataToPrint(){}; 
    const DisplayDataBA=RentalsList
    .filter(info => info.Kraj === 'BA')
    .map(
        (info)=>{
            return(
                <div className={css.RentalsSingle}>
	        	<h3>{info.Title}</h3>
	        	<h4>Adresa</h4>
	        	<p>{info.Address}</p>
	        	<h4>Kontakt</h4>
	        	<p>
	        		{info.Phone}<br />
	        		<a href={info.Website}>Web</a>, <a href={info.Detail_URL}>Mapa</a>
	        		
	        	</p>
	        </div>

            )
        }
    )

	const DisplayDataTT=RentalsList
    .filter(info => info.Kraj === 'TT')
    .map(
        (info)=>{
            return(
                <div className={css.RentalsSingle}>
	        	<h3>{info.Title}</h3>
	        	<h4>Adresa</h4>
	        	<p>{info.Address}</p>
	        	<h4>Kontakt</h4>
	        	<p>
	        		{info.Phone}<br />
	        		<a href={info.Website}>Web</a>, <a href={info.Detail_URL}>Mapa</a>
	        		
	        	</p>
	        </div>

            )
        }
    )
    
    const DisplayDataNR	=RentalsList
    .filter(info => info.Kraj === 'NR')
    .map(
        (info)=>{
            return(
                <div className={css.RentalsSingle}>
	        	<h3>{info.Title}</h3>
	        	<h4>Adresa</h4>
	        	<p>{info.Address}</p>
	        	<h4>Kontakt</h4>
	        	<p>
	        		{info.Phone}<br />
	        		<a href={info.Website}>Web</a>, <a href={info.Detail_URL}>Mapa</a>
	        		
	        	</p>
	        </div>

            )
        }
    )

    
    const DisplayDataTN=RentalsList
    .filter(info => info.Kraj === 'TN')
    .map(
        (info)=>{
            return(
                <div className={css.RentalsSingle}>
	        	<h3>{info.Title}</h3>
	        	<h4>Adresa</h4>
	        	<p>{info.Address}</p>
	        	<h4>Kontakt</h4>
	        	<p>
	        		{info.Phone}<br />
	        		<a href={info.Website}>Web</a>, <a href={info.Detail_URL}>Mapa</a>
	        		
	        	</p>
	        </div>

            )
        }
    )
    
    const DisplayDataBB=RentalsList
    .filter(info => info.Kraj === 'BB')
    .map(
        (info)=>{
            return(
                <div className={css.RentalsSingle}>
	        	<h3>{info.Title}</h3>
	        	<h4>Adresa</h4>
	        	<p>{info.Address}</p>
	        	<h4>Kontakt</h4>
	        	<p>
	        		{info.Phone}<br />
	        		<a href={info.Website}>Web</a>, <a href={info.Detail_URL}>Mapa</a>
	        		
	        	</p>
	        </div>

            )
        }
    )
    
    const DisplayDataZA=RentalsList
    .filter(info => info.Kraj === 'ZA')
    .map(
        (info)=>{
            return(
                <div className={css.RentalsSingle}>
	        	<h3>{info.Title}</h3>
	        	<h4>Adresa</h4>
	        	<p>{info.Address}</p>
	        	<h4>Kontakt</h4>
	        	<p>
	        		{info.Phone}<br />
	        		<a href={info.Website}>Web</a>, <a href={info.Detail_URL}>Mapa</a>
	        		
	        	</p>
	        </div>

            )
        }
    )
    
    const DisplayDataPO=RentalsList
    .filter(info => info.Kraj === 'PO')
    .map(
        (info)=>{
            return(
                <div className={css.RentalsSingle}>
	        	<h3>{info.Title}</h3>
	        	<h4>Adresa</h4>
	        	<p>{info.Address}</p>
	        	<h4>Kontakt</h4>
	        	<p>
	        		{info.Phone}<br />
	        		<a href={info.Website}>Web</a>, <a href={info.Detail_URL}>Mapa</a>
	        		
	        	</p>
	        </div>

            )
        }
    )
    
    const DisplayDataKE=RentalsList
    .filter(info => info.Kraj === 'KE')
    .map(
        (info)=>{
            return(
                <div className={css.RentalsSingle}>
	        	<h3>{info.Title}</h3>
	        	<h4>Adresa</h4>
	        	<p>{info.Address}</p>
	        	<h4>Kontakt</h4>
	        	<p>
	        		{info.Phone}<br />
	        		<a href={info.Website}>Web</a>, <a href={info.Detail_URL}>Mapa</a>
	        		
	        	</p>
	        </div>

            )
        }
    )

 
    return(
	    <div>
		    <div>
			    <div className={css.RentalsListState}>
		        	<a className={css.offset} id="bratislavsky-kraj"></a>
		        	<h2>Požičovne v Bratislavskom kraji</h2>
		        </div> 
		        
		        <div className={css.RentalsList}>
		                         {DisplayDataBA}
		        </div>
	        </div>
	        
	        <div>
			    <div className={css.RentalsListState}>
			    	<a className={css.offset} id="trnavsky-kraj"></a>
		        	<h2>Požičovne v Trnavskom kraji</h2>
		        </div> 
		        
		        <div className={css.RentalsList}>
		                         {DisplayDataTT}
		        </div>
	        </div>
	        
	        <div>
			    <div className={css.RentalsListState}>
			    	<a className={css.offset} id="nitriansky-kraj"></a>
		        	<h2>Požičovne v Nitrianskom kraji</h2>
		        </div> 
		        
		        <div className={css.RentalsList}>
		                         {DisplayDataNR}
		        </div>
	        </div>
	        
	        <div>
			    <div className={css.RentalsListState}>
			    	<a className={css.offset} id="trenciansky-kraj"></a>
		        	<h2>Požičovne v Trenčianskom kraji</h2>
		        </div> 
		        
		        <div className={css.RentalsList}>
		                         {DisplayDataTN}
		        </div>
	        </div>
	        
	        <div>
			    <div className={css.RentalsListState}>
			    	<a className={css.offset} id="banskobystricky-kraj"></a>
		        	<h2>Požičovne v Banskobystrickom kraji</h2>
		        </div> 
		        
		        <div className={css.RentalsList}>
		                         {DisplayDataBB}
		        </div>
	        </div>
	        
	        <div>
			    <div className={css.RentalsListState}>
			    	<a className={css.offset} id="zilinsky-kraj"></a>
		        	<h2>Požičovne v Žilinskom kraji</h2>
		        </div> 
		        
		        <div className={css.RentalsList}>
		                         {DisplayDataZA}
		        </div>
	        </div>
	        
	        <div>
			    <div className={css.RentalsListState}>
			    	<a className={css.offset} id="presovsky-kraj"></a>
		        	<h2>Požičovne v Prešovskom kraji</h2>
		        </div> 
		        
		        <div className={css.RentalsList}>
		                         {DisplayDataPO}
		        </div>
	        </div>
	        
	        
	        <div>
			    <div className={css.RentalsListState}>
			    	<a className={css.offset} id="kosicky-kraj"></a>
		        	<h2>Požičovne v Košickom kraji</h2>
		        </div> 
		        
		        <div className={css.RentalsList}>
		                         {DisplayDataKE}
		        </div>
	        </div>
	    </div>
    )
    
 }
 




const Rentals = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Mapa cyklopožičovní na Slovensku"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'Mapa cyklopožičovní na Slovensku',
        name: 'Mapa cyklopožičovní na Slovensku',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
         <h1>Požičovne bicyklov na Slovensku</h1>
         
         <div className={css.RentalsListIntro}>
			
			<p>Aj keď sa to zdá byť ľahké, nájsť tú najbližšiu požičovňu bicyklov môže byť celkom náročná úloha. Preto sme ti pozbierali všetky miesta na Slovensku kde si môžeš požičať bicykel alebo elektrobicykel. Tento zoznam slúži iba informačne, preto doporučujeme overiť dostupnosť bicyklov vopred, pred návštevou obchodu.</p>
			
        </div>
        
        <div className={css.LocationsList}>
        	
        	<div className={css.LocationsSingle}>
        		<a href="#bratislavsky-kraj"><h3>Bratislavský kraj</h3></a>
        	</div>
        	
        	
        	<div className={css.LocationsSingle}>
        		<a href="#trnavsky-kraj"><h3>Trnavský kraj</h3></a>
        	</div>
        	
        	<div className={css.LocationsSingle}>
        		<a href="#nitriansky-kraj"><h3>Nitriansky kraj</h3></a>
        	</div>
        	
        	<div className={css.LocationsSingle}>
        		<a href="#trenciansky-kraj"><h3>Trenčiansky kraj</h3></a>
        	</div>
        	
        	
        	<div className={css.LocationsSingle}>
        		<a href="#banskobystricky-kraj"><h3>Banskobystrický kraj</h3></a>
        	</div>
        	
        	<div className={css.LocationsSingle}>
        		<a href="#zilinsky-kraj"><h3>Žilinský kraj</h3></a>
        	</div>
        	
        	<div className={css.LocationsSingle}>
        		<a href="#presovsky-kraj"><h3>Prešovský kraj</h3></a>
        	</div>
        	
        	<div className={css.LocationsSingle}>
        		<a href="#kosicky-kraj"><h3>Košický kraj</h3></a>
        	</div>
        	
        
        </div>
          
		<SectionMap />
		
		
		
				
		 
        
        <div className={css.ListWrapper}>
              	<JsonDataDisplay/>
        </div>
        
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default Rentals;
