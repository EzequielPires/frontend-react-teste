import Error from "next/error";
import { createContext, useContext, useState } from "react";
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
    notFoundFacts: boolean;
    inputSizeFacts: Input;
    inputAmountFacts: Input;
    getFacts: () => Promise<void>;
    moreFacts: () => Promise<void>;
}

const FactContext = createContext({} as FactContextProps);

function FactProvider({ children }) {
    const inputSizeFacts = useForm();
    const inputAmountFacts = useForm();
    const [notFoundFacts, setNotFoundFacts] = useState(false);
    const [nextPage, setNextPage] = useState(2);
    const [lastPage, setLastPage] = useState(0);
    const [facts, setFacts] = useState<FactsProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    function buildLink(nextPage?: number) {
        let link = '/facts?';
        { inputSizeFacts.value != '' ? link = link + `max_length=${inputSizeFacts.value}` : null }
        { inputAmountFacts.value != '' ? link = link + `&limit=${inputAmountFacts.value}` : null }
        {nextPage ? link = link + `&page=${nextPage}` : null}
        return link;
    }

    async function getFacts() {
        setIsLoading(true);
        await api.get(buildLink())
            .then(res => {
                setFacts(res.data.data);
                setLastPage(res.data.last_page)
                setIsLoading(false);
                {res.data.data.length === 0 ? setNotFoundFacts(true) : setNotFoundFacts(false)}
            })
            .catch(error => {
                setIsLoading(false);
                throw new Error(error);
            });
    }

    async function moreFacts() {
        if (nextPage < lastPage) {
            setIsLoading(true);
            await api.get(buildLink(nextPage))
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
            notFoundFacts,
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
