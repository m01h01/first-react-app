import { useState } from "react";
import Child from "./Component3"

 
function Header() {
    const [iD, setiD] = useState("");
    const mouseOver = () => {
        setiD("childid");
       
    };

    const mouseLeave = () => {
        setiD(""); // Set the id back to its original value or an empty string
      };

    return (
        <div >
            <h1 className="Header">Changing color app</h1>
            <h3>
                <Child id={iD} />
            </h3>
            <button onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Changing color</button>
        </div>
    );
}
 
export default Header;