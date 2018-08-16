import {
    NavbarBrand
} from 'reactstrap'
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'

const Brand = ({ router }) => 
    <NavbarBrand className="pointer" onClick={() => router.push('/')}>
        <VisibilitySensor>
            <Img src="/static/images/dosenjaga.png" height={"32px"} className="rounded"/>
        </VisibilitySensor>
    </NavbarBrand>

export default Brand