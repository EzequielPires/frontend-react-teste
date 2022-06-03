import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
            justifyContent={'center'}
            w={[200, 200, 500]}
            my={"64px"}
            position="relative"
        >
            <Image
                src='/banner.svg'
                alt='Banner Cat'
            />
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={['8px', '8px', '24px']}
                position="absolute"
                top={['48px', '48px', "16px"]}
                left={['-56px', '-56px', "0"]}
            >
                <Text
                    fontSize={['.875rem', '.875rem', '1rem']}
                    color='white'
                >
                    São limpos.
                </Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={['8px', '8px', '24px']}
                position="absolute"
                top={['-8px', '-8px', "-32px"]}
                left={['-48px', '-48px', "188px"]}
            >
                <Text
                    fontSize={['.875rem', '.875rem', '1rem']}
                    color='white'
                >
                    São familiares.
                </Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={['8px', '8px', '24px']}
                position="absolute"
                top={['132px', '132px', '56px']}
                left={['-56px', '-56px', '277px']}
            >
                <Text
                    fontSize={['.875rem', '.875rem', '1rem']}
                    color='white'
                >
                    São independentes.
                </Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={['8px', '8px', '24px']}
                position="absolute"
                top={['132px', '132px', '256px']}
                left={['124px', '124px', '266px']}
            >
                <Text
                    fontSize={['.875rem', '.875rem', '1rem']}
                    color='white'
                >
                    São inteligentes.
                </Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={['8px', '8px', '24px']}
                position="absolute"
                top={['48px', '48px', '263px']}
                left={['120px', '120px', '52px']}
            >
                <Text
                    fontSize={['.875rem', '.875rem', '1rem']}
                    color='white'
                >
                    São sentimentais.
                </Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={['8px', '8px', '24px']}
                position="absolute"
                top={["-16px", "-16px", "167px"]}
                left={["80px", "80px", "-100px"]}
            >
                <Text
                    fontSize={['.875rem', '.875rem', '1rem']}
                    color='white'
                >
                    São hábeis e curiosos.
                </Text>
            </Box>
        </Flex>
    )
}