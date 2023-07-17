import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

interface Props {
  label?: string
  value?: string | any
  setValue: React.Dispatch<React.SetStateAction<any>>
}

const FormInput: React.FC<Props> = ({ label, value, setValue }) => {
  return (
    <FormControl>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Input
        type={label !== 'Password' ? 'text' : 'password'}
        value={value}
        onChange={e => setValue(e.target.value)}
        _focus={{
          borderColor: 'pink.500'
        }}
      />
    </FormControl>
  )
}

export default FormInput
