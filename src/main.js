import "./style/main.scss";
import "./animations/parallax";
import "./animations/header-typed";
import "./animations/menu-animations";
import "./animations/goto-animations";
import "./animations/scroll-reveal";


import rellax from "rellax";
import mailSender from "./mail-sender";

// initialize rellax effects
rellax(".rellax");


mailSender(succes => console.log(succes));


