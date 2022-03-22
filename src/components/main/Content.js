import qrcode from '../Imgs/qr-code.png'
import './contentStyle.css'
import FormGroup from '../form/FormGroup'
import Right from '../Container-QrCode/Right'
import Header from '../header/Header'
export default function Content() {
    return (
        <div className="container">
            <div className="left">
                <Header />
                <FormGroup />
                <div className="cadast">
                    <p>Precisando De Uma Conta <span><a href="/" target="_blank">Registre-se</a></span></p>
                </div>
            </div>
            <Right />
        </div>
    )
}