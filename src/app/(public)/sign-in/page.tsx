'use client'

import Button from '@/components/Buttons/ButtonForm/button-form'
import InputView from '@/components/input/input'
import InputPasswordView from '@/components/Password/input'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
    const router = useRouter()
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault()

        if (user === "spotmkt" && pass === "123") {
            document.cookie = "token=validtoken; path=/"
            router.push("/")
        } else {
            setError("Credenciais inválidas")
        }
    }

    return (
        <div className="w-screen h-screen bg-white flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col justify-center items-center gap-14 px-4 md:px-0">
                <div>
                    <h1 className="text-center text-black text-2xl md:text-3xl font-bold font-['Zen_Kaku_Gothic_Antique']">
                        Login da conta
                    </h1>
                    <p className="text-center text-[#616161] text-sm md:text-base tracking-wide font-['Zen_Kaku_Gothic_Antique']">
                        FAÇA LOGIN PARA ENTRAR NA SUA CONTA
                    </p>
                </div>
                <form
                    onSubmit={handleSignIn}
                    className="w-full max-w-md flex flex-col gap-4 text-black"
                >
                    <InputView
                        label="Usuário"
                        placeholder="Digite seu usuário"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />

                    <InputPasswordView
                        label="Senha"
                        placeholder="Digite sua senha"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button>
                        Entrar
                    </Button>
                </form>
            </div>

            <div className="hidden md:block max-w-sm">
                <Image
                    className="h-full w-full object-cover"
                    src="/assets/img-page-sign-in.jpg"
                    alt="Imagem da tela de Login"
                    width={390}
                    height={900}
                />
            </div>
        </div>
    )
}
