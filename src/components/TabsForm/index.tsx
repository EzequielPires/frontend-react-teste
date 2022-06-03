import { Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useFact } from "src/hooks/useFacts";
import { ButtonPrimary } from "../ButtonPrimary";
import { InputDefault } from "../InputDefault";

export function TabsForm() {
    const {
        getFacts,
        isLoading,
        inputSizeFacts,
        inputAmountFacts
    } = useFact();

    async function handleGetFacts() {
        await getFacts()
    }

    return (
        <Tabs isFitted variant='enclosed' w={'100%'} maxW={'700px'}>
            <TabList gap={"8px"}>
                <Tab
                fontSize={['.875rem', '1rem']}
                    _selected={{
                        border: '1px solid',
                        borderBottomColor: 'background',
                    }}
                    _focus={{
                        boxShadow: 'none'
                    }}
                >
                    Busca simples
                </Tab>
                <Tab
                    fontSize={['.875rem', '1rem']}
                    _selected={{
                        border: '1px solid',
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
                    <InputDefault
                        label="Tamanho máximo do fato"
                        placeholder="Ex.: 248"
                        type="number"
                        {...inputSizeFacts}
                    />
                    <ButtonPrimary
                        title="Buscar"
                        isLoading={isLoading}
                        onClick={handleGetFacts}
                    />
                </TabPanel>
                <TabPanel display={'flex'} flexDirection='column' alignItems={'center'}>
                    <Flex justifyContent={'center'} gap={'24px'}>
                        <InputDefault
                            label="Tamanho máximo do fato"
                            placeholder="Ex.: 248"
                            type="number"
                            {...inputSizeFacts}
                        />
                        <InputDefault
                            label="Quantidade de fatos"
                            placeholder="Ex.: 20"
                            type="number"
                            {...inputAmountFacts}
                        />
                    </Flex>
                    <ButtonPrimary
                        title="Buscar"
                        isLoading={isLoading}
                        onClick={handleGetFacts}
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}