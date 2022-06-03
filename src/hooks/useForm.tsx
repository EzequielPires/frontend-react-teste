import { useState } from "react";

export function useForm() {
    const [value, setValue] = useState('');

    function onChange({target}) {
        setValue(target.value)
    }

    return {
        value,
        onChange
    }
}