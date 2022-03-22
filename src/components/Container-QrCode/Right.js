import qrcode from '../Imgs/qr-code.png'
import './rightStyled.css'
export default function Right(){
    return(
        <>
            <div className="right">
                <img src={qrcode}/>
                <h2>Entrar Com o Código QR</h2>
                <p><strong>Escaneie isso com o app movel do discord</strong> para fazer login imediatamente</p>
             </div>

        
        
        </>
    )
}