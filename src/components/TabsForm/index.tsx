import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from "@chakra-ui/react";
import { useFact } from "../../hooks/useFacts";
import { ButtonPrimary } from "../ButtonPrimary";
import { Card } from "../Card";
import { InputDefault } from "../InputDefault";
import { ListFacts } from "../ListFacts";

export function TabsForm() {
    const {
        randomFact,
        facts,
        getFacts,
        getRandomFact,
        handleSetTypeList,
        isLoading,
        inputSizeFacts,
        inputAmountFacts,
    } = useFact();

    async function handleGetRandomFacts(e) {
        e.preventDefault();
        await getRandomFact();
    }

    async function handleGetFacts(e) {
        e.preventDefault();
        await getFacts();
    }

    return (
        <Tabs isFitted variant='enclosed' w={'100%'} maxW={'700px'}>
            <TabList gap={"8px"} borderColor={'gray.300'}>
                <Tab
                    onClick={handleSetTypeList}
                    fontSize={['.875rem', '1rem']}
                    _selected={{
                        border: '1px solid',
                        borderColor: 'gray.300',
                        borderBottomColor: 'background',
                    }}
                    _focus={{
                        boxShadow: 'none'
                    }}
                >
                    Fato aleatório
                </Tab>
                <Tab
                    onClick={handleSetTypeList}
                    fontSize={['.875rem', '1rem']}
                    _selected={{
                        border: '1px solid',
                        borderColor: 'gray.300',
                        borderBottomColor: 'background',
                    }}
                    _focus={{
                        boxShadow: 'none'
                    }}
                >
                    Lista de fatos
                </Tab>
            </TabList>
            <TabPanels mt={'16px'}>
                <TabPanel display={'flex'} flexDirection='column' alignItems={'center'}>
                    <VStack
                        as='form'
                        onSubmit={handleGetRandomFacts}
                        display={'flex'}
                        justifyContent={'center'}
                        gap={'24px'}
                        width={'100%'}
                    >
                        <InputDefault
                            label="Tamanho máximo do fato"
                            placeholder="Ex.: 248"
                            type="number"
                            id="maxLength"
                            {...inputSizeFacts}
                        />
                        <ButtonPrimary
                            type="submit"
                            title="Buscar"
                            isLoading={isLoading}
                        />
                    </VStack>
                    {randomFact?.fact &&
                        <Box mt={'1.5rem'} w={'100%'}>
                            <Card fact={randomFact.fact} />
                        </Box>
                    }
                </TabPanel>
                <TabPanel
                    display={'flex'}
                    flexDirection='column'
                    alignItems={'center'}
                >
                    <VStack
                        as='form'
                        onSubmit={handleGetFacts}
                        display={'flex'}
                        justifyContent={'center'}
                        gap={'24px'}
                        width={'100%'}
                    >
                        <InputDefault
                            label="Tamanho máximo do fato"
                            placeholder="Ex.: 248"
                            type="number"
                            id="maxLength"
                            {...inputSizeFacts}
                        />
                        <InputDefault
                            label="Quantidade de fatos"
                            placeholder="Ex.: 20"
                            type="number"
                            id="amountFacts"
                            {...inputAmountFacts}
                        />
                        <ButtonPrimary
                            type="submit"
                            title="Buscar"
                            isLoading={isLoading}
                        />
                    </VStack>
                    {facts && facts.length > 0 && <ListFacts facts={facts} />}
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}