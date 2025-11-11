'use client';
import Navbar from "./componants/navbar";
import Footer from "./componants/footer";
import Hero from "./componants/hero";
import KurumModulleri from "./componants/kurum-modulleri";
import IkModulleri from "./componants/ik-modulleri";
import NasilCalisir from "./componants/nasil-calisir";
import IletisimAlani from "./componants/iletisim-alani";

export default function Home() {
    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={false}/>
            
            <main>
                <Hero />
                <KurumModulleri />
                <IkModulleri />
                <NasilCalisir />
                <IletisimAlani />
            </main>

            <Footer />
        </>
    );
}
