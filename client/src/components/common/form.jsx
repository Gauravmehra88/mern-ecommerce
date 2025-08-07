import { SelectContent, SelectItem, SelectValue } from "@radix-ui/react-select";

const { Label } = require("@radix-ui/react-label");
const { Input } = require("postcss");

function CommonForm({ formControls, formData , setFormData ,onSubmit , buttonText }) {
    
    function renderInputsByComponentsType(getcontrolItem){
        let element=null;
        switch (getcontrolItem.componentType) {
            case 'input':
                element = (
                <Input
               name={getcontrolItem.name}
               placeholder={getcontrolItem.placeholder}
               id={getcontrolItem.name}
               type={getcontrolItem.type}
                />
        );
                break;
                     case 'select':
                element = (
               <select>
                <selectTrigger className="w-full ">
                    <SelectValue placeholder={getcontrolItem.placeholder}/>

                </selectTrigger>
                <SelectContent>
                    {
                        getcontrolItem.options && 
                        getcontrolItem.options.length > 0 ?
                        getcontrolItem.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                    }
                </SelectContent>
               </select>
        );
                break;
                     case 'textarea':
                element = (
               <Textarea
               name={getcontrolItem.name}
               placeholder={getcontrolItem.placeholder}
               id={getcontrolItem.id}
               />
        );
                break;
                
        
            default:
                 element = (
                <Input
               name={getcontrolItem.name}
               placeholder={getcontrolItem.placeholder}
               id={getcontrolItem.name}
               type={getcontrolItem.type}
                />
        );
      break;
        } 
        return element
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