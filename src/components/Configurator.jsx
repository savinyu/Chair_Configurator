import { chairColors, cushionColors, useCustomisation } from "../contexts/Customisation"

export default function Configurator(){
    const {material,setMaterial,legs,setLegs,chairColor,setchairColor,cushionColor,setcushionColor} = useCustomisation();
    
    return<>
        <div className="configurator">
            <div className="configurator_section">
                <div className="configurator_section_title">
                    <b>Chair Material</b>
                </div>
                <div className="configurator_section_values">
                    <div className={`item ${ material=="leather" ? "item-active" : "" }`} onClick={()=>setMaterial('leather')}>
                        <div className="item_label">Leather</div>
                    </div>
                    <div className={`item ${ material=="fabric" ? "item-active" : "" }`} onClick={()=>setMaterial('fabric')}>
                        <div className="item_label">Fabric</div> 
                    </div>
                    <div className={`item ${ material=="wood" ? "item-active" : "" }`} onClick={()=>setMaterial('wood')}>
                        <div className="item_label">Wood</div> 
                    </div>
                </div>
            </div>
            
            <div className="configurator_section">
                <div className="configurator_section_title"><b>Chair Color</b></div>
                <div className="configurator_section_values">
                    { chairColors.map((value,index)=>(
                        <div 
                        key={index} className={`item ${ value.color == chairColor ? "item-active" : "" }`} onClick={()=>setchairColor(value.color)}>
                            <div className="item_dot" style={{
                                backgroundColor: value.color,
                            }
                            }/>
                            <div className="item_label">{value.name}</div>
                        </div>
                    ))
                    
                }
                </div>
            </div>

            <div className="configurator_section">
                <div className="configurator_section_title"><b>Cushion Color</b></div>
                <div className="configurator_section_values">
                    { cushionColors.map((value,index)=>(
                        <div 
                        key={index} className={`item ${ value.color == cushionColor ? "item-active" : "" }`} onClick={()=>setcushionColor(value.color)}>
                            <div className="item_dot" style={{
                                backgroundColor: value.color,
                            }
                            }/>
                            <div className="item_label">{value.name}</div>
                        </div>
                    ))
                    
                }
                </div>
            </div>

            <div className="configurator_section">
                <div className="configurator_section_title">
                    <b>Legs</b>
                </div>
                <div className="configurator_section_values">
                    <div className={`item ${ legs==1 ? "item-active" : "" }`} onClick={()=>setLegs(1)}>
                        <div className="item_label">Modern</div>
                    </div>
                    <div className={`item ${ legs==2 ? "item-active" : "" }`} onClick={()=>setLegs(2)}>
                        <div className="item_label">Classic</div> 
                    </div>
                </div>
            </div>
        </div>
        </>
};