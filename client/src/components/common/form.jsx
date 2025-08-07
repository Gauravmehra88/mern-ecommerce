const { Label } = require("@radix-ui/react-label");

function CommonForm(formControls) {
    
    function renderInputsByComponentsType(getcontrolItem){
        let element=null;
        switch (getcontrolItem.componentType) {
            case value:
                
                break;
        
            default:
                break;
        }
    return(
        <form >
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem=> <div className="grid w-full gap-1.5" key ={controlItem.name}>
                        <label className="mb-1">{controlItem.label}</label>
                        {
                            renderInputsByComponentsType(controlItem)
                        }
                    </div>
                    )

                }
  </div>
        </form>
    );
}
export default CommonForm;