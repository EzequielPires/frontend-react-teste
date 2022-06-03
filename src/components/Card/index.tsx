import { Box, Text } from "@chakra-ui/react";

interface FactsProps {
    fact: string;
    length: number;
}

export function Card({ fact, length }: FactsProps) {

    return (
        <Box
            bg={'white'}
            w={'100%'}
            p={'24px'}
            boxShadow="md"
            rounded='lg'
        >
            <Text
                fontWeight={'semibold'}
                color={'gray.700'}
                textAlign={'center'}
            >
                " {fact} "
            </Text>
        </Box>
    )
}