import { createContext, useContext, useState } from "react";

const CustomisationContext = createContext({});

export const chairColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#1a5e1a",
        name:"Green"
    },
    {
        color:"#659994",
        name:"Blue"
    },
    {
        color:"#896599",
        name:"Mauve"
    },
    {
        color:"#ffa500",
        name:"Orange"
    },
    {
        color:"#59555b",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#ececec",
        name:"White"
    }
];

export const cushionColors = [
    {
        color:"#683434",
        name:"Brown"
    },
    {
        color:"#1a5e1a",
        name:"Green"
    },
    {
        color:"#659994",
        name:"Blue"
    },
    {
        color:"#896599",
        name:"Mauve"
    },
    {
        color:"#ffa500",
        name:"Orange"
    },
    {
        color:"#59555b",
        name:"Grey"
    },
    {
        color:"#222222",
        name:"Black"
    },
    {
        color:"#ececec",
        name:"White"
    }
];


export const CustomisationProvider = (props)=>{
    const [material,setMaterial] = useState('leather');
    const [legs,setLegs] = useState(1);
    const [chairColor, setchairColor] = useState(chairColors[4].color);
    const [cushionColor, setcushionColor] = useState(cushionColors[5].color);
    return (<CustomisationContext.Provider value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setchairColor,
        cushionColor,
        setcushionColor
    }}>
        {props.children}
    </CustomisationContext.Provider>
    );
};

export const useCustomisation = ()=>{
    const context = useContext(CustomisationContext);
    return context;
};