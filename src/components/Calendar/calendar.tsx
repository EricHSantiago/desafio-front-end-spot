'use client'

export default function Calendar() {
    return (
        <div className="bg-white rounded-xl p-4 shadow-md w-full">
            <h3 className="text-lg font-semibold text-[#1447E6] mb-4">Calendário de Ações</h3>
            <div className="grid grid-cols-7 gap-2 text-sm text-center">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                    <div key={index} className="text-gray-500 font-semibold">{day}</div>
                ))}

                {Array.from({ length: 30 }, (_, i) => (
                    <div
                        key={i}
                        className="h-10 flex items-center justify-center rounded-md hover:bg-[#1447E6]/10 cursor-pointer text-gray-700 font-medium"
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    )
}
