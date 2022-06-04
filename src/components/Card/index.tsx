import { Box, Text } from "@chakra-ui/react";

interface FactsProps {
    fact: string;
}

export function Card({ fact }: FactsProps) {

    return (
        <Box
            bg={'white'}
            w={'100%'}
            p={'24px'}
            boxShadow="md"
            rounded='lg'
        >
            <Text
                className="_card_text"
                fontWeight={'semibold'}
                color={'gray.700'}
                textAlign={'center'}
            >
                {fact}
            </Text>
        </Box>
    )
}