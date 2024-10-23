import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const CommonForm  = ({formControls, formData, setFormData, onSubmit, buttonText}) => {

    const renderInputsByComponentType = (controlItem) => {
        let element = null;
        const value = formData[controlItem.name] || ''
        switch (controlItem.componentType) {
            case 'input':
                element = <Input 
                name = {controlItem.name}
                placeholder = {controlItem.placeholder}
                id = {controlItem.name}
                type = {controlItem.type}
                value = {value}
                onChange = { event => setFormData({
                    ...formData,
                    [controlItem.name]: event.target.value
                })}
                />
                break;

            case 'select':
                element = <Select value={value}
                            onValueChange={(value) => {
                                setFormData({
                                    ...formData,
                                    [controlItem.name]: value
                                })
                            }}  
                >
                    <SelectTrigger className ='w-full ' >
                        <SelectValue placeholder = {controlItem.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                         {
                            controlItem.options &&
                            controlItem.options.length > 0 ?
                            controlItem.options.map(optionItem => <SelectItem key={optionItem.id} value={optionItem.id} >{optionItem.lable}</SelectItem>)
                            : null
                         }
                    </SelectContent>
                </Select>
                break;

            case 'textarea':
                element = <Textarea 
                name = {controlItem.name}
                placeholder = {controlItem.placeholder}
                id = {controlItem.id}
                value = {value}
                onChange = { event => setFormData({
                    ...formData,
                    [controlItem.name]: event.target.value
                })}
                />
                break;
        
            default:
                element = <Input 
                name = {controlItem.name}
                placeholder = {controlItem.placeholder}
                id = {controlItem.name}
                type = {controlItem.type}
                value = {value}
                onChange = { event => setFormData({
                    ...formData,
                    [controlItem.name]: event.target.value
                })}
                />
                break;
        }

        return element;
    }

  return (
    <form onSubmit = {onSubmit}>
        <div className='flex flex-col gap-3'>
            {
                formControls.map(controlItem => <div className='grid w-full gap-1.5' key={controlItem.name}>
                    <Label className='mb-1' >{controlItem.Label}</Label>
                    {
                        renderInputsByComponentType(controlItem)
                    }
                </div> )
            }
        </div>
        <div>
            <Button type='submit' className='mt-2 w-full' >{buttonText || 'Submit'}</Button>
        </div>
    </form>
  )
}

export default CommonForm 