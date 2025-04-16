'use client'

import { useState } from 'react'
import { FiCalendar, FiClipboard, FiGrid, FiMenu, FiPieChart, FiSettings } from 'react-icons/fi'

const navItems = [
    { label: 'Dashboard', icon: <FiGrid /> },
    { label: 'Campanhas', icon: <FiPieChart /> },
    { label: 'Calendário', icon: <FiCalendar /> },
    { label: 'Demandas', icon: <FiClipboard /> },
    { label: 'Configurações', icon: <FiSettings /> },
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="md:hidden p-4 bg-white shadow-sm w-full flex justify-between items-center">
                <h2 className="text-lg font-bold text-black">Spot</h2>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <FiMenu size={24} className="text-black" />
                </button>
            </div>

            <aside className={`
                fixed md:static top-0 left-0 z-40 md:z-auto
                h-full md:h-auto w-64 md:w-64 bg-white border-r shadow-md px-4 py-6 transition-transform
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
            `}>
                <h2 className="text-lg font-bold mb-8 text-black hidden md:block">Desafio Agência Spot</h2>

                <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            className="flex items-center gap-4 bg-[#1447E6] px-4 py-4 rounded hover:opacity-80 text-sm text-white text-left"
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    )
}
