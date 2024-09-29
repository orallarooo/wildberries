import "./OverlayBackground.css"

const OverlayBackground = ({isOpen, modalRef}) => {
      return ( 
            <div ref={modalRef} className={`overlay-bg ${isOpen ? "active" : ""}`}>
                  
            </div>
       );
}
 
export default OverlayBackground;