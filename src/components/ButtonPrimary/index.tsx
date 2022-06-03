import { Button } from "@chakra-ui/react";

interface Props {
    type?: "button" | "submit" | "reset";
    title: string;
    isLoading: boolean;
    onClick?: () => void;
}

export function ButtonPrimary({ type, title, isLoading, onClick }: Props) {
    return (
        <Button
            _hover={{ bg: 'primary.200' }}
            _focus={{ bg: 'primary.200' }}
            _active={{ bg: 'primary.200' }}
            width={'100%'}
            maxW={'348px'}
            h={'48px'}
            bg={'primary.100'}
            mt={'24px'}
            isLoading={isLoading}
            spinnerPlacement='start'
            onClick={onClick}
            type={type}
        >
            {title}
        </Button>
    )
}