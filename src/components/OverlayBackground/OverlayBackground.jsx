import "./OverlayBackground.css"

const OverlayBackground = ({isOpen,}) => {
      return ( 
            <div className={`overlay-bg ${isOpen ? "active" : ""}`}>
                  
            </div>
       );
}
 
export default OverlayBackground;