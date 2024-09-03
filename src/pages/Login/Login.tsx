import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Layout } from "../../components/Layout/Layout";

export default function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleClick = () => {
        const params = { login, password }
        console.log(params);
    }

    return (
        <Layout>
            <h1>Login</h1>
            <form>
                <Input type="text" name="login" id="login" onChange={handleLogin} label="Login:" />
                <Input
                    type="text"
                    name="password"
                    id="password"
                    onChange={handlePassword}
                    label="Senha:"
                    placeholder="Digite sua senha"
                />

                <Button type="button" onClick={handleClick}>Login</Button>
            </form>
        </Layout>
    )
}