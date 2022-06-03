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
        <Tabs variant='unstyled'>
            <TabList gap={"8px"}>
                <Tab
                    w={'348px'}
                    rounded='md'
                    border="1px"
                    borderColor='secondary'
                    _selected={{ color: 'white', bg: 'secondary' }}
                >
                    Busca simples
                </Tab>
                <Tab
                    w={'348px'}
                    rounded='md'
                    border="1px"
                    borderColor='secondary'
                    _selected={{ color: 'white', bg: 'secondary' }}
                >
                    Busca avançada
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel display={'flex'} flexDirection='column' alignItems={'center'}>
                    <InputDefault
                        label="Tamanho do fato"
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
                            label="Tamanho do fato"
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