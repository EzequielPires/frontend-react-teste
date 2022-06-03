import { useEffect, useRef } from "react";
import Lottie from 'react-lottie-player';
import { Box, Flex, List, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useFact } from "../../hooks/useFacts";
import { ListFactsItem } from "../ListFactsItem";

interface FactsProps {
    fact: string;
    length: number;
}
interface Props {
    facts: FactsProps[];
}

export function ListFacts({ facts }: Props) {
    const { isLoading, moreFacts } = useFact();
    const elementRef = useRef(null);

    async function handleMoreFacts(entries) {
        { entries.some(entry => entry.isIntersecting) && await moreFacts() }
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
                    <ListFactsItem
                        key={index}
                        fact={item.fact}
                        length={item.length}
                    />
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