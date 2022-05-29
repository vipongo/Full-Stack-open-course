import React from 'react'

const Country = ( props ) => {
  console.log(props.countriesToShow.length);

  if (props.countriesToShow.length>10){
    return (
      <div>
        <br></br>
        Too many countries to show! Please narrow down your search

      </div>
    )
  }
  else if(props.countriesToShow.length<=10 && props.countriesToShow.length>1){
    return (
      <div>
        <h2>Countries</h2>
        <br />
      <ul>
          {props.countriesToShow.map(country =>
            <div>
              {country.name.common}
            </div>
          )}
      </ul>
      </div>
    )
  }
  else if (props.countriesToShow.length===1) {
    const country = props.countriesToShow[0]
    console.log(country.languages);
    var languagesList = []
    for (var prop in country.languages) {
      languagesList.push(country.languages[prop])
    }
    console.log(country.flag)
    return (
      <div>
        <h1>{country.name.common}</h1>
        
        Capital : {country.capital}
        <br />
        Area : {country.area}
        <br />
        <br />

        <b>Language(s):</b>
      	<ul>
          {languagesList.map(lang =>
            <li>
              {lang}
            </li>
          )}
        </ul>
        <h2>Flag</h2>

          <div>
            <img alt={"Country Flag"} width={"200px"} src={country.flags["png"]}></img>
          </div>
        
      </div>
    )
  }
  else{
    return (
      <div>
        <br></br>
        No country matches your search 
      </div>
    )
  }

  
}

export default Country