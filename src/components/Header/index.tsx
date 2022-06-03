import { Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex direction={"column"} alignItems={"center"} mt={"32px"}>
            <Heading color="white" fontWeight="700" fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}>
                Fatos sobre Gatos
            </Heading>
        </Flex>
    )
}