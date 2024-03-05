import { useState } from "react";

const WeatherComponents = ({ weather, temp }) => {
    console.log(weather)
    const [isCelsius, setIsCelsius] = useState(false)
    const handleClick = () => {
        setIsCelsius(!isCelsius)
    }
    return (<div className=" w-[95vw] h-[60vh] xl:w-[30vw] lg:w-[50vw] md:w-[70vw]  flex flex-col justify-center items-center rounded-xl bg-[#f0f0f08a] shadow-zinc-600 shadow-2xl">
        <h2 className=" text-center font-bold text-2xl">Weather App</h2>
        <h2 className=" text-center font-semibold text-xl">{weather?.name}, {weather?.sys.country}</h2>
        <section className=" flex justify-center items-center px-3 md:gap-4">
            <header>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </header>

            <article className=" flex flex-col justify-center items-center">
                <h3 className=" text-xl font-semibold " >"{weather?.weather[0].description}"</h3>
                <div className=" flex flex-col justify-center items-center">
                    <li className=" w-[160px] list-none flex justify-between items-center"><span className=" font-medium">Wind speed</span> <span>{weather?.wind.speed} m/s</span></li>
                <li  className=" w-[160px] list-none flex justify-between items-center"> <span className=" font-medium">Clouds</span> <span>{weather?.clouds.all}%</span></li>
                <li className=" w-[160px] list-none flex justify-between items-center"><span className=" font-medium">Pressure</span> <span>{weather?.main.pressure} m/s</span></li>
                </div>
            </article>

        </section>
        <section className=" flex flex-col justify-center items-center gap-4">
            <h2 className=" text-xl font-semibold">{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`} </h2>
            <button className=" bg-[#f0f0f08a] rounded-xl p-2 text-xl font-semibold shadow-slate-500 shadow-2xl hover:bg-white" onClick={handleClick}>Change To °F/°C</button>
        </section>

    </div>);
}

export default WeatherComponents;