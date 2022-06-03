import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    label: string;
    placeholder: string;
    type: string;
}

export function InputDefault({ label, ...rest }: Props) {
    return (
        <FormControl isRequired>
            <FormLabel htmlFor='first-name'>{label}</FormLabel>
            <Input
                _focus={{borderColor: 'primary'}}
                id='first-name'
                {...rest}
            />
        </FormControl>
    )
}