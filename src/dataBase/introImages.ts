interface IntroImgType {
  id: number | string;
  imageSrc: string;
  imgAlt: string;
  title: string;
}
    
export const introImages: IntroImgType[] = [{
  id: "iI1",
  imageSrc: "/intro-image01.jpg",
  imgAlt: "",
  title: "All Your cards",
}, {
  id: "iI2",
  imageSrc: "/intro-image02.jpg",
  imgAlt: "",
  title: "In one place",
}, {
  id: "iI3",
  imageSrc: "/intro-image03.jpg",
  imgAlt: "",
  title: "In one click",
}]