import React from 'react';
import styles from './Styles';
import { AiFillSetting, AiTwotoneHome } from "react-icons/ai";


const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <a href="#home">
        <AiTwotoneHome color='#FFF' size={30} />
      </a>
      <a href="#settings">
        <AiFillSetting color='#FFF' size={30} />
      </a>
    </nav>
  );
}

export default Navbar