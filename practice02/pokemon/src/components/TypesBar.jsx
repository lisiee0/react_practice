import { useEffect, useState } from "react";
import { getTypeIconSrc } from "../utils/pokemon-helper";

const TypesBar = ({ toggleType }) => {
    const [types, setTypes] = useState([]);
    const fetchTypes = async () => {
        const API_END_POINT = `https://pokeapi.co/api/v2/type/`;
        const response = await fetch(API_END_POINT);
        const data = await response.json();
    
        setTypes(
            data.results.filter((item) =>
                item.name !== "unknown" &&
                item.name !== "shadow" &&
                item.name !== "stellar"
            )
        );
    };

    useEffect(() => {
        fetchTypes();
    }, []);

    return (
        <nav className="types-bar">
            {types.map(({ name }) => {
                const typeImg = getTypeIconSrc(name);
    
                return (
                    <a key={name} className={name} onClick={() => toggleType(name)}>
                        <img src={typeImg} alt={name} />
                    </a>
                );
            })}
        </nav>
    );
};

export default TypesBar;