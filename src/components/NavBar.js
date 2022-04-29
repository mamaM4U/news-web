import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div id="navlist">
        <Link to={"/"}>Home</Link>
        <Link to={"/saved"}>Saved</Link>
          
        <div className="search">
              
            <form action="#">
                <input type="text"
                    placeholder=" Search Courses"
                    name="search"/>
                <button>
                    Cari
                </button>
            </form>
        </div>
    </div>
	);
};

export default Navbar;