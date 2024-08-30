import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { cityMock } from "../../mocks/CityMock";

export default function Home() {
    const [city, setCity] = useState()
    
    useEffect(() => {
        setCity(cityMock)
    }, [])

    return (
        <Layout>
            <h1>Home</h1>

            <p>{city?.cidade} / {city?.estado}</p>
        </Layout>
    );
}