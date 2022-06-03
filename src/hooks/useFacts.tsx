import Error from "next/error";
import { createContext, MutableRefObject, useContext, useRef, useState } from "react";
import { api } from "src/services/axios";
import { useForm } from "./useForm";

interface FactsProps {
    fact: string;
    length: number;
}

interface Input {
    value: string;
    onChange: (e) => void;
}

interface FactContextProps {
    facts: FactsProps[];
    isLoading: boolean;
    inputSizeFacts: Input;
    inputAmountFacts: Input;
    getFacts: () => Promise<void>;
    moreFacts: () => Promise<void>;
}

const FactContext = createContext({} as FactContextProps);

function FactProvider({ children }) {
    const inputSizeFacts = useForm();
    const inputAmountFacts = useForm();
    const [nextPage, setNextPage] = useState(2);
    const [facts, setFacts] = useState<FactsProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    function buildLink() {
        let link = '/facts';
        { inputSizeFacts.value != '' ? link = link + `?max_length=${inputSizeFacts.value}` : null }
        { inputAmountFacts.value != '' ? link = link + `&limit=${inputAmountFacts.value}` : null }
        return link;
    }

    async function getFacts() {
        setIsLoading(true);
        await api.get(buildLink())
            .then(res => {
                setFacts(res.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                throw new Error(error);
            });
    }

    async function moreFacts() {
        if (inputAmountFacts.value != '' && facts.length < parseInt(inputAmountFacts.value) || inputAmountFacts.value === '') {
            setIsLoading(true);
            await api.get(`/facts?page=${nextPage}`)
                .then(res => {
                    setFacts([...facts, ...res.data.data]);
                    setIsLoading(false);
                    setNextPage(nextPage + 1);
                })
                .catch(error => {
                    setIsLoading(false);
                    throw new Error(error);
                });
        }
    }

    return (
        <FactContext.Provider value={{
            facts,
            isLoading,
            inputSizeFacts,
            inputAmountFacts,
            getFacts,
            moreFacts
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
