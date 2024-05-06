import { useEffect } from "react";
import "./splash.css"
import { useHistory } from "react-router";

const Splash: React.FC = () => {

    const history = useHistory();
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
          history.push('/home'); // Redirect to the destination route after 5 seconds
        }, 5000); // 5000 milliseconds = 5 seconds
    
        // Clear the timer on component unmount to prevent memory leaks
        return () => clearTimeout(redirectTimer);
      }, [history]); // Dependency array ensures useEffect runs only once after initial render
    
    

return (
    <>
        <div className="pagebody">
        <div className="content">
            <h1>Ganpatiwalla</h1>
            {/* <p>This is some centered paragraph text.</p> */}
        </div>
        </div>
    </>
);
};

export default Splash;