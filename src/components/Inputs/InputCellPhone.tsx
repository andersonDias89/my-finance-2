import { FieldValues, UseFormRegister, Controller, Control } from "react-hook-form"
import InputMask from 'react-input-mask'

type InputProps = {
    type?: string
    name: string
    control: Control<FieldValues>
    
} & React.InputHTMLAttributes<HTMLInputElement>

export const InputCellPhone = ({ type = "text", name, control, ...rest }: InputProps) => {
    return (
        <Controller name={name} control={control} render={({field: {onChange, value}}) => (
            <InputMask mask='(99) 99999-9999' onChange={onChange} value={value}>
                <input type={type} className='w-full'  {...rest} />
            </InputMask>
        )} />
          
    )
}