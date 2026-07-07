import { useState } from 'react';

function useToggle(initialValue=false) {
    const [value, setValue] = useState(initialValue);

    function toggle() {
        // value == false -> true
        // value == true  -> false
        setValue((prev) => !prev); 
    }

    return [value, toggle]; // value 값이고, toggle 함수 
}

export default useToggle;