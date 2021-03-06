import React, { useEffect, useState  } from 'react'
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer';
import MenuContainer from './MenuContainer';
import { useStateValue } from '../context/StateProvider';

const MainContainer = () => {
   const [{foodItems},  dispatch ] = useStateValue();
   const [scrollValue, setScrollValue] = useState(0)

 useEffect(() =>{}, [scrollValue] )
  return (
    <div className="w-full h-auto flex flex-col  smooth-smooth items-center justify-center  ">
      <HomeContainer/>
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
          ease-in-out duration-100">
            Fruits frais & sain
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{
              scale: 0.75}}
              className=" w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center ">
                <MdChevronLeft  className="text-lg text-white"
                onClick={() => setScrollValue(-200)}/>
                  
              </motion.div>
            <motion.div whileTap={{
              scale: 0.75}}className=" w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shal flex items-center justify-center ">
                <MdChevronRight className="text-lg text-white" 
                onClick={() => setScrollValue(200)}/>

              </motion.div>
          </div>
        </div>
        <RowContainer    
        scrollValue = {scrollValue}
        flag={true}
        data={foodItems?.filter((n) => n.category === "Fruits")}/>
      </section>
      <MenuContainer/>
    
    </div>
  )
}


export default MainContainer