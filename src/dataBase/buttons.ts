interface ButtonsType {
  id: string | number | bigint;
  imgSrc: string;
  buttonText: string;
}
  
export const buttons: ButtonsType[] = [{
  id: "bt1",
  imgSrc: "/buttonsIcons/welcome-icon.png",
  buttonText: "Welcome",
}, {
  id: "bt2",
  imgSrc: "/buttonsIcons/team-icon.png",
  buttonText: "Our Team",
}, {
  id: "bt3",
  imgSrc: "/buttonsIcons/work-icon.png",
  buttonText: "Our Work",
}, {
  id: "bt4",
  imgSrc: "/buttonsIcons/contact-icon.png",
  buttonText: "Contact", 
}];