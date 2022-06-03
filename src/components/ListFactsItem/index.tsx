import { ListItem } from "@chakra-ui/react";

interface FactsProps {
    fact: string;
    length: number;
}

export function ListFactsItem({ fact, length }: FactsProps) {

    return (
        <ListItem
            bg={'white'}
            color={'gray.700'}
            p={'24px'}
            textAlign={'center'}
            rounded='md'
        >
            {fact}
        </ListItem>
    )
}