import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

interface Props {
    label: string;
    placeholder: string;
    type: string;
    id: string;
    value: string;
    onChange: (e) => void;
}

export function InputDefault({ label, value, onChange, placeholder, id }: Props) {
    return (
        <FormControl>
            <FormLabel htmlFor='first-name' fontSize={['.875rem', '1rem']}>{label}</FormLabel>
            <Input
                id={id}
                borderColor={'gray.300'}
                _focus={{borderColor: 'white'}}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </FormControl>
    )
}