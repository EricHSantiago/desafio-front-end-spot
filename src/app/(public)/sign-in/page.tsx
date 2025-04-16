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
        <div className="w-screen h-screen bg-white">
            <div className="flex flex-row justify-center items-center">
                <div className="
                    w-full
                    h-screen
                    flex
                    flex-col
                    gap-[56px]
                    items-center
                    justify-center 
                    text-black"
                >
                    <div>
                        <h1 className="text-center text-black text-[25px] font-bold leading-[44px] font-['Zen_Kaku_Gothic_Antique']">Login da conta</h1>
                        <p className="text-center text-[#616161] text-[12.8px] tracking-wide font-['Zen_Kaku_Gothic_Antique']">FAÇA LOGIN PARA ENTRAR NA SUA CONTA</p>
                    </div>
                    <form
                        onSubmit={handleSignIn}
                        className="w-[484px] flex flex-col gap-[16px]"
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
                <div className="max-w-[390px] bg-cover text-black">
                    <Image className='bg-cover' src="/assets/img-page-sign-in.jpg" alt="Imagem da tela de Login" width={390} height={900} />
                </div>
            </div>
        </div>
    )
}
