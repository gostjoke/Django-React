import { useState, useEffect } from "react";

export default function TimeClock() {
    const [nowdate, setNowDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNowDate(new Date()); // 更新当前时间
        }, 1000); // 每隔1秒更新一次

        return () => clearInterval(timer); // 清理定时器，防止内存泄漏
    }, []);

    return (
        <div>

            <p>{nowdate.toLocaleDateString()} {nowdate.toLocaleTimeString()}</p>
        </div>
    );
}
