import React, {useRef} from "react";
import { motion, useCycle } from "framer-motion";
import  MenuToggle  from "./MenuToggle";
import  Navigation  from "./Navigation";

import styled from 'styled-components'

const sidebar = {
  open: () => ({
    clipPath: `circle(${1000 * 2 + 200}px at 260px 40px)`,

    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    }
  }),
  closed: {
   
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
};

const Container = styled.div`
position: absolute;
  height: 100%;
  z-index: 9;
`

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 999;

`

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
	right: 0;
	bottom: 0;
  width: 300px;
  background: #fff;
  opacity: 0.4;
  transition: 4s all ease;

    &:hover {
      trigger: Container;
      opacity: 0.8;
    }
  
    @media screen and (max-width: 700px) {
      transition: 1.5s all ease;
      opacity: 0.7;
    }
`

const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const BackgroundToggle = useRef(null)
  return (
    <>
    <Container  onClick={() => isOpen ? toggleOpen() : null}></Container>
    <Nav
   
   initial={false}
   animate={isOpen ? "open" : "closed"}>
   <Background ref={BackgroundToggle} variants={sidebar} />
   <Navigation  />
   <MenuToggle toggle={() => toggleOpen()} />
 </Nav>
  </>

   
  );
};

export default Example