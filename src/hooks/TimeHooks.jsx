import { useEffect, useState } from "react";

const TimeHooks = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])
    const time = date.toLocaleTimeString();
    return time;

}
export default TimeHooks;