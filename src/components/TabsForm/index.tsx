import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from "@chakra-ui/react";
import { useFact } from "src/hooks/useFacts";
import { ButtonPrimary } from "../ButtonPrimary";
import { InputDefault } from "../InputDefault";

export function TabsForm() {
    const {
        getFacts,
        handleSetTypeList,
        isLoading,
        inputSizeFacts,
        inputAmountFacts,
    } = useFact();

    async function handleGetFacts(e) {
        e.preventDefault();
        await getFacts()
    }

    return (
        <Tabs isFitted variant='enclosed' w={'100%'} maxW={'700px'}>
            <TabList gap={"8px"} borderColor={'gray.300'}>
                <Tab
                    onClick={() => handleSetTypeList('simple')}
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
                    Busca simples
                </Tab>
                <Tab
                    onClick={() => handleSetTypeList('advanced')}
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
                    Busca avançada
                </Tab>
            </TabList>
            <TabPanels mt={'16px'}>
                <TabPanel display={'flex'} flexDirection='column' alignItems={'center'}>
                    <VStack as='form' onSubmit={handleGetFacts} display={'flex'} justifyContent={'center'} gap={'24px'} width={'100%'}>
                        <InputDefault
                            label="Tamanho máximo do fato"
                            placeholder="Ex.: 248"
                            type="number"
                            id="inputSizeFacts"
                            {...inputSizeFacts}
                        />
                        <ButtonPrimary
                            type="submit"
                            title="Buscar"
                            isLoading={isLoading}
                        />
                    </VStack>
                </TabPanel>
                <TabPanel display={'flex'} flexDirection='column' alignItems={'center'}>
                    <VStack as='form' onSubmit={handleGetFacts} display={'flex'} justifyContent={'center'} gap={'24px'} width={'100%'}>
                        <InputDefault
                            label="Tamanho máximo do fato"
                            placeholder="Ex.: 248"
                            type="number"
                            id="inputSizeFacts"
                            {...inputSizeFacts}
                        />
                        <InputDefault
                            label="Quantidade de fatos"
                            placeholder="Ex.: 20"
                            type="number"
                            id="inputAmountFacts"
                            {...inputAmountFacts}
                        />
                        <ButtonPrimary
                            type="submit"
                            title="Buscar"
                            isLoading={isLoading}
                        />
                    </VStack>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}