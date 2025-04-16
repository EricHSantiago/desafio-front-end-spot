'use client'

import Calendar from "@/components/Calendar/calendar"
import UserPanel from "@/components/User Panel/user-panel"


const CardItems = [
    { title: 'Total de campanhas ativas', value: '12' },
    { title: 'Taxa de conversão média', value: '17.5%' },
    { title: 'Orçamento utilizado', value: 'R$ 2.379,53' },
    { title: 'ROI estimado', value: '12' },
]

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CardItems.map((item) => (
                    <div
                        key={item.title}
                        className="w-full bg-white rounded-xl p-4 shadow-md"
                    >
                        <h3 className="text-sm font-semibold text-gray-600">{item.title}</h3>
                        <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                    </div>
                ))}
            </div>

            <Calendar />
            <UserPanel />
        </div>
    )
}
