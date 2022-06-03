import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import { Banner } from "src/components/Banner";
import { ListFacts } from "src/components/ListFacts";
import { TabsForm } from "src/components/TabsForm";
import { useFact } from "src/hooks/useFacts";
import { Header } from "../components/Header";

import lottieJson from "../../public/lurking-cat.json";

export default function Home() {
  const { facts, notFoundFacts } = useFact();
  return (
    <Container display={'flex'} flexDirection={"column"} alignItems={"center"} bg={""}>
      <Header />
      <Banner />
      <Text
        color="white"
        fontSize={'1.5rem'}
        fontWeight={'semibold'}
        textAlign={'center'}
        mb={'16px'}
      >
        Descubra mais fatos curiosos sobre os gatos
      </Text>
      <TabsForm />
      {notFoundFacts && (
        <Flex direction={'column'} alignItems={'center'} mt={'48px'}>
          <Text>Nenhum resultado encontrado</Text>
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 150, height: 150 }}
          />
        </Flex>
      )}
      {facts && facts.length > 0 && <ListFacts facts={facts} />}
    </Container>
  )
}
