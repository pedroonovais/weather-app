import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
//import { cityMock } from "../../mocks/CityMock";

export default async function Home() {
    const [city, setCity] = useState([])

    const LoadCities = async () => {
        // GET
        // fetch('https://brasilapi.com.br/api/cptec/v1/cidade')
        //     .then( response => {
        //         return response.json()
        //     })
        //     .then( data => {
        //         console.log(data)
        //         setCity(data)
        //     })

        try {
            const response = await fetch('https://brasilapi.com.br/api/cptec/v1/cidade')
            const data = await response.json()
            setCity(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // setCity(cityMock)
        // if (!city.lenght) {
        //     return
        // }
        LoadCities()
    }, [city])

    return (
        <Layout>
            <h1>Home</h1>
            {city.map((item: any) => {
                <p key={item.id}>{item?.nome} / {item?.estado}</p>
            })}


        </Layout>
    );
}