import React,{useState} from 'react'
import './Accordian.scss';
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const AccordianSection = ({section, isActiveSection, setActiveIndex, sectionIndex })=>{
    const toggleSection =()=>{
        const nextIndex = isActiveSection ? null :sectionIndex;
        setActiveIndex(nextIndex)
    }
    return(
          <div className='accordian-section'  onClick={toggleSection}>
             <div className='accordian-section-title'>
             <h1><FaInfoCircle/> {section.title}</h1>
             {isActiveSection ? <MdClose /> : <FaPlus />}
             </div>
             {isActiveSection && <p>{section.content}</p>}
         </div>
    )
}

const Accordian = ({sections}) => {
    const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div>
        {sections.map((section:string, index:number)=>{
            return(
                <AccordianSection 
                section={section} 
                key={index} 
                isActiveSection={index === activeIndex}
                setActiveIndex={setActiveIndex}
                sectionIndex = {index}
                />
            )
        })}
    </div>
  )
}

export default Accordian