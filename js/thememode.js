export class ThemeHandler {
    constructor(light_mode, night_mode) {
        this.light = light_mode;
        this.night = night_mode;
        this.control_mode = window.matchMedia && window
            .matchMedia(
                '(prefers-color-scheme: dark)'
            )
            .matches;

        this.theme_mode = 'white';
        this.detectTheme();
        

    }

    //백그라운드 컬러 변경
    Background = (dom, color) => {
        let dom_arr = document.querySelectorAll(dom);
        dom_arr.forEach((elem) => {
            elem.style.backgroundColor = color
        })
    }

    //폰트 컬러 변경
    FontColor = (dom, color) => {
        let dom_arr = document.querySelectorAll(dom);
        dom_arr.forEach((elem) => {
            elem.style.color = color
        })
    }
    
    themeHandler = (bg_handler, ft_handler) => {
        //배경화면 변경
        bg_handler.map((mode) => {
            `${this.Background(mode.elem, mode.color)}`
        });
        //폰트 변경
        ft_handler.map((mode) => {
            `${this.FontColor(mode.elem, mode.color)}`
        });
    }
    
    //리로딩시 테마 감지
    detectTheme = ()=>{
        if (this.control_mode === true) {
            this.themeHandler(this.night.background, this.night.font);
            this.theme_mode = "white";
        } else {
            this.themeHandler(this.light.background, this.light.font);
            this.theme_mode = "black";

        }
    }
    
    //실시간으로 테마를 감지 후 변경
    autoDetect= ()=>{
        window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
            
            this.control_mode = window.matchMedia && window
        .matchMedia('(prefers-color-scheme: dark)')
        .matches;
    
           if(this.control_mode === true){
            this.themeHandler(this.night.background, this.night.font);
            this.theme_mode;
            
           }else{
            this.themeHandler(this.light.background, this.light.font);
            this.theme_mode;
           
           }
        })
    }

  
}
