import { Flex, Text } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../public/lurking-cat.json";

export function NotFound() {
    return (
        <Flex direction={'column'} alignItems={'center'} mt={'24px'}>
          <Text>Nenhum resultado encontrado</Text>
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 150, height: 150 }}
          />
        </Flex>
    )
}