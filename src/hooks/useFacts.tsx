import Error from "next/error";
import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/axios";
import { useForm } from "./useForm";

interface FactsProvideProps {
    children: ReactNode;
}

interface FactsProps {
    fact: string;
    length: number;
}

interface Input {
    value: string;
    onChange: (e: any) => void;
}

interface FactContextProps {
    randomFact: FactsProps;
    facts: FactsProps[];
    isLoading: boolean;
    notFoundFacts: boolean;
    inputSizeFacts: Input;
    inputAmountFacts: Input;
    getFacts: () => Promise<void>;
    getRandomFact: () => Promise<void>;
    moreFacts: () => Promise<void>;
    handleSetTypeList: () => void;
}

const FactContext = createContext({} as FactContextProps);

function FactProvider({ children }: FactsProvideProps) {
    const inputSizeFacts = useForm();
    const inputAmountFacts = useForm();

    const [notFoundFacts, setNotFoundFacts] = useState(false);
    const [nextPage, setNextPage] = useState(2);
    const [lastPage, setLastPage] = useState(0);

    const [randomFact, setRandomFact] = useState<FactsProps>({} as FactsProps);
    const [facts, setFacts] = useState<FactsProps[]>([]);

    const [isLoading, setIsLoading] = useState(false);

    function handleSetTypeList() {
        setFacts([]);
        setRandomFact({} as FactsProps);
        setNotFoundFacts(false);
        setNextPage(2);
        setLastPage(0);
        inputSizeFacts.setValue('');
        inputAmountFacts.setValue('');
    }

    async function getRandomFact() {
        setIsLoading(true);
        const { data } = await api.get(`/fact?max_length=${inputSizeFacts.value}`)
        { !data.fact ? setNotFoundFacts(true) : setNotFoundFacts(false) }
        setRandomFact(data);
        setIsLoading(false);
    }

    async function getFacts() {
        setIsLoading(true);
        const { data } = await api.get(`/facts?max_length=${inputSizeFacts.value}&limit=${inputAmountFacts.value}`)
        { data.data.length === 0 ? setNotFoundFacts(true) : setNotFoundFacts(false) }
        setFacts(data.data);
        setLastPage(data.last_page);
        setIsLoading(false);
    }

    async function moreFacts() {
        if (nextPage < lastPage && inputAmountFacts.value === '') {
            setIsLoading(true);
            const { data } = await api.get(`/facts?max_length=${inputSizeFacts.value}&page=${nextPage}`);
            setFacts([...facts, ...data.data]);
            setNextPage(nextPage + 1);
            setIsLoading(false);
        }
    }

    return (
        <FactContext.Provider value={{
            randomFact,
            facts,
            isLoading,
            notFoundFacts,
            inputSizeFacts,
            inputAmountFacts,
            getFacts,
            getRandomFact,
            moreFacts,
            handleSetTypeList
        }}>
            {children}
        </FactContext.Provider>
    );
}

function useFact() {
    const context = useContext(FactContext);

    return context;
}

export { FactProvider, useFact }
