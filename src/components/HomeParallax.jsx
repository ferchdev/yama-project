import { Parallax } from "react-parallax"
import backY from "../assets/images/backY.png";
import promo from "../assets/images/promo.png";
export const HomeParallax = () => {
    return (
        <section className="home-parallax w-[100%] relative">
            <Parallax strength={300} bgImage={backY} bgStyle={{'backgroundColor' : '#191f2b'}} bgImageStyle={{'left':'100px','width':'auto','height':'100vh','bottom':'-60%'}} style={{'backgroundColor' : '#191f2b', 'width' : '100%', 'height' : 'auto'}}>
                {/* <div className="w-full pt-[50px] sm:pt-[70px] flex items-end" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
                <img src={promo} alt="imagen de banner promocional" className="mx-auto  w-[80%] sm:w-[70%] h-[auto]"></img>
                </div> */}
                <div className="flex justify-center w-[92%] sm:w-[80%] mx-auto">
                <Parallax strength={300} bgImage={promo}  style={{'width' : '100%', 'height' : '400px'}} bgImageStyle={{'width':'auto','height':'350px','bottom':'-10%'}}></Parallax>
                </div>
            </Parallax>
        </section>
    )
}