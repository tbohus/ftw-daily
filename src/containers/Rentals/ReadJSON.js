import RentalsList from './RentalsList_BA.json'

 function JsonDataDisplay(){
    const DisplayData=RentalsList.map(
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
        <div className={css.RentalsList}>
                         {DisplayData}
        </div>
    )
 }
 