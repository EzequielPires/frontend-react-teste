import { Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Banner } from "src/components/Banner";
import { ListFacts } from "src/components/ListFacts";
import { TabsForm } from "src/components/TabsForm";
import { useFact } from "src/hooks/useFacts";
import { Header } from "../components/Header";

export default function Home() {
  const { facts } = useFact();
  return (
    <Flex direction={"column"} alignItems={"center"} bg={""}>
      <Header />
      <Banner />
      <Text
        color="white"
        fontSize={'1.5rem'}
        fontWeight={'semibold'}
        mb={'16px'}
      >
        Descubra mais fatos curiosos sobre os gatos
      </Text>
      <TabsForm />
      {facts && facts.length > 0 && <ListFacts facts={facts} />}
    </Flex>
  )
}
