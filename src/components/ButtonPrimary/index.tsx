import { Button } from "@chakra-ui/react";

interface Props {
    title: string;
    isLoading: boolean;
    onClick: () => void;
}

export function ButtonPrimary({ title, isLoading, onClick }: Props) {
    return (
        <Button
            _hover={{ bg: 'primary.200' }}
            _focus={{ bg: 'primary.200' }}
            _active={{ bg: 'primary.200' }}
            width={'348px'}
            h={'48px'}
            bg={'primary.100'}
            mt={'24px'}
            isLoading={isLoading}
            spinnerPlacement='start'
            onClick={onClick}
        >
            {title}
        </Button>
    )
}