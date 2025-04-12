export default function About() {
    return (

        <form
            className="w-[709px]"
        >
            <div>
                <h1 className="justify-start text-[#1c1c1c] text-[120px] font-bold font-['Smooch_Sans']">Bem Vindo</h1>
            </div>

            <div>
                <label className="block mb-1 font-medium text-sm">Usuário</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block mb-1 font-medium text-sm">Senha</label>
                <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
            >
                Entrar
            </button>
        </form>
    );
}