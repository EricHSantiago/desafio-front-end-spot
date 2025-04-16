'use client'

export default function UserPanel() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-md font-semibold text-[#1447E6] mb-2">Notificações Recentes</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>🔔 Novo feedback do cliente</li>
                    <li>🔔 Demanda aprovada</li>
                    <li>🔔 Relatório disponível</li>
                </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-md font-semibold text-[#1447E6] mb-2">Histórico de Ações</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ Campanha Instagram finalizada</li>
                    <li>✅ Proposta enviada</li>
                    <li>✅ Briefing aprovado</li>
                </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-md font-semibold text-[#1447E6] mb-2">Dados do Usuário</h3>
                <p className="text-sm text-gray-700"><strong>Nome:</strong> Clara Lima</p>
                <p className="text-sm text-gray-700"><strong>Email:</strong> clara@cliente.com</p>
                <p className="text-sm text-gray-700"><strong>Plano:</strong> Premium</p>
            </div>
        </div>
    )
}
