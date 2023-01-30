import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

function CountriesList(props) {
    const { country, setCountry } = props;
    const countryArrayCopy = [...country];
    console.log(countryArrayCopy)
    return (
        <div >
            {countryArrayCopy.map((country) => {
                return <div>
                    <img width={100} alt="" src={"https://flagsapi.com/" + country.alpha2Code + "/flat/64.png"} />
                    <Link value={country.alpha3Code} to={`/${country.alpha3Code}`}> {country.name.common}</Link>
                </div>
            })}

        </div>
    )
}

export default CountriesList    