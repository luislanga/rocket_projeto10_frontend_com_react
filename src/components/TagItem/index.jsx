import { TagContainer } from "./styles"
import { FiPlus, FiX } from 'react-icons/fi'


export function TagItem({value, isNew, onClick}){
    return(
    <TagContainer isNew={isNew}>
        <input
        type="text"
        value={value}
        readOnly = {!isNew}
        />
        
        <button
        onClick={onClick}
        type="button">
        {isNew ? <FiPlus/> : <FiX/>}
        </button>
    </TagContainer>
    )
}