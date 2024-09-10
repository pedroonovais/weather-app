import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { searchMock } from "../../mocks/SearchMock";

export default function Search() {
    const [cityName, setCityName] = useState<string>()
    const [hasSearch, setHasSearch] = useState<boolean>(false)
    const [cityList, setCityList] = useState(searchMock)
    const [noResult, setNoResult] = useState<boolean>(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setHasSearch(false)
        }

        setCityName(event.target.value)
    }

    const LoadCities = async () => {
        try {
            const response = await fetch(`https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`)
            const data = await response.json()
            console.log(data);

            setCityList(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {
        LoadCities()
    }

    const handleClear = () => {
        setCityName('')
        setHasSearch(false)
        setNoResult(false)
    }

    return (
        <Layout>
            <h1>Busca</h1>
            <form>
                <label htmlFor="search">Buscar cidade</label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={cityName}
                />
                <button onClick={handleClick} type="button">Buscar</button>
            </form>

            {hasSearch
                ? (<div>
                    <p>Busca pela cidade: {cityName}</p>
                    <button onClick={handleClear}>Limpar busca</button>
                    {noResult ? (<p>Nenhuma cidade encontrada!</p>)
                        :
                        <ul>
                            {
                                cityList.map((city) => (
                                    <li key={city.id}>
                                        {city.nome} - {city.estado}
                                    </li>
                                ))
                            }
                        </ul>}
                </div>
                ) : null
            }

        </Layout>
    );
}