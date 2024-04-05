
import styles from "./page.module.css";
import Nav from "./Components/Nav/Nav";
import Cards from "./Components/Cards/Cards";
import Main from "./Components/Main/Main";
import Image from "next/image";
import Link from "next/link";




export default function Home() {
  return (
    <>
    <Main/>
    <Nav/>

    <br/>

    <div className={styles.main}>
    <Cards text="Gaming accessories"
      image={<Image src="/headset.jpg" height={170} width={140} alt="eror"/>}
       image1={<Image src="/keyboard.jpg" height={170} width={150} alt="eror"/>} 
       image2={<Image src="/mouse.jpg" height={150} width={140} alt="eror"/>} 
       image3={<Image src="/chairs.jpg" height={150} width={150} alt="eror"/>}   
       />

    <Cards text="Deals in PCs" image={<Image src="/pc.jpg" height={300} width={320} alt="eror"/>}/>
    <Cards text="Refresh your space" 
    image={<Image src="/dining.jpg" height={170} width={140} alt="eror"/>}
      image1={<Image src="/home.jpg" height={170} width={150} alt="eror"/>}
      image2={<Image src="/kitchen.jpg" height={150} width={140} alt="eror"/>}
      image3={<Image src="/health.jpg" height={150} width={150} alt="eror"/>}
    />
    <Cards text="Amazon Gadget Store" 
    image={<Image src="/smartphones.jpg" height={170} width={310} alt="eror"/>}
    image2={<Image src="/tablets.jpg" height={110} width={110} alt="eror"/>}
    image3={<Image src="/laptops.jpg" height={110} width={110} alt="eror"/>}
    image4={<Image src="/tv.jpg" height={110} width={100} alt="eror"/>}

    />
    </div>
    <div className={styles.main}>
    <Cards text="Shop deals in Fashion"
     image={<Image src="/jeans.jpg" height={140} width={140} alt="eror"/>}
     image1={<Image src="/tops.jpg" height={140} width={140} alt="eror"/>}
     image2={<Image src="/dress.jpg" height={140} width={140} alt="eror"/>}
     image3={<Image src="/shoes.jpg" height={140} width={140} alt="eror"/>} />
    <Cards text="Home décor under $50"
     image={<Image src="/box.jpg" height={310} width={300} alt="eror"/>}
    />
    <Cards text="Toys under $25"
     image={<Image src="/bear.jpg" height={310} width={300} alt="eror"/>}
     />
    <Cards text="Easy updates for elevated spaces"
     image={<Image src="/beuty.jpg" height={280} width={300} alt="eror"/>}
     />
    </div>


  

    
    </>
    
  );
}
