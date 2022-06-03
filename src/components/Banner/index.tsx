import { Box, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Box
            boxSize='sm'
            mt={"96px"}
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
                px={"24px"}
                position="absolute"
                top={"16px"}
                left={"-56px"}
            >
                <Text color='white'>São limpos.</Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={"24px"}
                position="absolute"
                top={"-32px"}
                left={"188px"}
            >
                <Text>São familiares.</Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={"24px"}
                position="absolute"
                top={"56px"}
                left={"277px"}
            >
                <Text>São independentes.</Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={"24px"}
                position="absolute"
                top={"256px"}
                left={"266px"}
            >
                <Text>São inteligentes.</Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={"24px"}
                position="absolute"
                top={"263px"}
                left={"-52px"}
            >
                <Text>São sentimentais.</Text>
            </Box>
            <Box
                w={'fit-content'}
                bg={'backdrop'}
                rounded='md'
                backdropFilter='auto'
                backdropBlur='24px'
                py={"8px"}
                px={"24px"}
                position="absolute"
                top={"167px"}
                left={"-147px"}
            >
                <Text>São hábeis e curiosos.</Text>
            </Box>
        </Box>
    )
}