import appointmentPage from "../pages/appointmentPage";
import common from "../pages/common";

describe ('POM implementation',()=>{
    

    it.only ('Validate initial load', ()=>{

        common.screenResize()
        common.urlNavigation()
        common.assertHeaderText()

    })
    
})
