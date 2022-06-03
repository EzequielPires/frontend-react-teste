import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    label: string;
    placeholder: string;
    type: string;
    id: string;
}

export function InputDefault({ label, ...rest }: Props) {
    return (
        <FormControl isRequired>
            <FormLabel htmlFor='first-name' fontSize={['.875rem', '1rem']}>{label}</FormLabel>
            <Input
                borderColor={'gray.300'}
                _focus={{borderColor: 'white'}}
                id='first-name'
                {...rest}
            />
        </FormControl>
    )
}