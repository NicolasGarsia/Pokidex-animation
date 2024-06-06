import {motion} from 'framer-motion'
import Pokedex from './Pokedex'

export default function Conteudo (visivel){
    return(
        <motion.div
        initial={{opacity: -50, y:0}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
        >
        
        {visivel && <Pokedex/>}
       
        </motion.div>
    )
}
