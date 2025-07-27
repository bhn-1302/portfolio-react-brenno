import { motion } from "framer-motion";

const BotaoAnimado = () => {
    return (
        <motion.button
            whileHover={{scale: 1.1, backgroundColor: "#00BFFF"}}
            whileTape={{scale: 0.95}}
            transition={{type: 'spring', stiffness: 200, damping: 10, mass: 1}}
            style={
                {
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#ffffff0d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeigth: 'bold'
                }
            }
           > Acessar conteúdos
        </motion.button>
    )
}

export {BotaoAnimado}