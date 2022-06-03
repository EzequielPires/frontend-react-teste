import { Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    label: string;
    placeholder: string;
    type: string;
}

export function InputDefault({ label, ...rest }: Props) {
    return (
        <Flex direction={'column'} alignItems={'center'}>
            <Text mb='8px'>{label}</Text>
            <Input
                width={'220px'}
                height={'48px'}
                bg={'white'}
                color={'gray.700'}
                maxLength={4}
                {...rest}
            />
        </Flex>
    )
}