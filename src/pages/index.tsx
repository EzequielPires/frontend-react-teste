import { Container, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { NotFound } from "../components/NotFound";
import { TabsForm } from "../components/TabsForm";
import { useFact } from "../hooks/useFacts";
import { Header } from "../components/Header";



export default function Home() {
  const { notFoundFacts } = useFact();
  return (
    <Container className="_container" display={'flex'} flexDirection={"column"} alignItems={"center"} bg={""}>
      <Header />
      <Banner />
      <Text
        color="white"
        fontSize={['1rem', '1.5rem']}
        fontWeight={'semibold'}
        textAlign={'center'}
        mb={'16px'}
      >
        Descubra mais fatos curiosos sobre os gatos
      </Text>
      <TabsForm />
      {notFoundFacts && <NotFound />}
    </Container>
  )
}
