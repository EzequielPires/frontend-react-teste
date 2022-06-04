import { useEffect, useRef } from "react";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { useFact } from "../../hooks/useFacts";
import { Card } from "../Card";

interface FactsProps {
    fact: string;
    length: number;
}
interface Props {
    facts: FactsProps[];
}

export function ListFacts({ facts }: Props) {
    const { moreFacts } = useFact();
    const elementRef = useRef<any>(null);

    async function handleMoreFacts(entries: any) {
        { entries.some((entry:any) => entry.isIntersecting) && await moreFacts() }
    }

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => handleMoreFacts(entries));
        intersectionObserver.observe(elementRef.current);
        return () => intersectionObserver.disconnect();
    })
    return (
        <Flex
            direction={'column'}
            alignItems={'center'}
            mt={'48px'}
            mx={'auto'}
            w={'100%'}
            maxWidth={'700'}
        >
            <Text color={'white'} fontSize={'1.5rem'} fontWeight={'semibold'}>Lista de Fatos</Text>
            <List
                spacing={3}
                mt={'24px'}
                w={'100%'}
            >
                {facts?.map((item, index) => (
                    <ListItem key={index}>
                        <Card fact={item.fact} />
                    </ListItem>
                ))}
            </List>
            <Box
                ref={elementRef}
                w={'100%'}
                h={'24px'}
            />
        </Flex>
    )
}