import { Parallax } from "react-parallax"
import backY from "../assets/images/backY.png";
import promo from "../assets/images/promo.png";
export const HomeParallax = () => {
    return (
        <section className="home-parallax w-[100%] relative">
            <Parallax strength={400} bgImage={backY} bgStyle={{'backgroundColor' : '#191f2b'}} bgImageStyle={{'left':'100px','width':'auto','height':'100vh','bottom':'-60%'}} style={{'backgroundColor' : '#191f2b', 'width' : '100%', 'height' : 'auto'}}>
                <div className="flex justify-center w-[92%] sm:w-[80%] mx-auto">
                <Parallax strength={400} bgImage={promo}  style={{'width' : '100%', 'height' : '400px'}} bgImageStyle={{'width':'auto','height':'350px','bottom':'-10%'}}></Parallax>
                </div>
            </Parallax>
        </section>
    )
}