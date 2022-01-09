// import preloader from "../../../assets/image/Preloader";
import preloader from "../../../assets/image/preloader.svg";
let Preloader = (props)=>{
    return (
        <div style={{textAlign: "center" , width: "100%",}}>
            <img src={preloader} alt="preloaderSvg" style={{display: 'block', margin: "0 auto"}}/>
        </div>
    );
}

export default Preloader;