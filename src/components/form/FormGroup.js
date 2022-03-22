import './styledForm.css'
export default function FormGroup(){
    return(
        <>
             <form className="form">
                    <label htmlFor="email">Email Ou Telefone</label>
                    <input type="text" className="input" />

                    <label htmlFor="password">Senha</label>
                    <input type="password" className="input" />
                    <a href="/" target="_blank">Esqueceu Sua Senha?</a>
                    <button>Entrar</button>
                </form>
        </>
    )
}