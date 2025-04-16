'use client'

import * as Avatar from '@radix-ui/react-avatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useRouter } from 'next/navigation'
import { FiBell, FiLogOut, FiUser } from 'react-icons/fi'

export default function Header() {
    const router = useRouter()

    const handleLogout = () => {
        document.cookie = "token=; Max-Age=0; path=/"

        router.push('/login')
    }

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
            <h1 className="text-xl font-semibold text-black">Painel do Cliente</h1>

            <div className="flex items-center gap-4">
                <button className="text-[#1447e6] hover:text-gray-800">
                    <FiBell size={20} />
                </button>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <button className="outline-none">
                            <Avatar.Root className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                <Avatar.Image src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
                                <Avatar.Fallback className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium text-white bg-[#1447e6] hover:opacity-85">
                                    CL
                                </Avatar.Fallback>
                            </Avatar.Root>
                        </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Content className="bg-white border rounded-md shadow-md p-2">
                        <DropdownMenu.Item className="flex items-center gap-2 px-2 py-1 cursor-pointer text-[#1447e6] hover:bg-gray-100">
                            <FiUser color='#1447e6' size={16} />
                            Perfil
                        </DropdownMenu.Item>

                        <DropdownMenu.Item
                            onSelect={handleLogout}
                            className="flex items-center gap-2 px-2 py-1 cursor-pointer text-[#1447e6] hover:bg-gray-100"
                        >
                            <FiLogOut color='#1447e6' size={16} />
                            Sair
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
        </header>
    )
}
