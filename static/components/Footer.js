

class Footer extends React.Component{

    constructor(props){
        super(props);
        this.style ={
            
            container: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                marginBottom: "1rem"
            },

            respContainer: [
                {flexDirection: "column", alignItems: "flex-start", justifyContent: "center"},
                {flexDirection: "column", alignItems: "flex-start", justifyContent: "center"},
                {flexDirection: "row", alignItems: "center", justifyContent: "flex-start"},
                {flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}
            ],

            copyright: {
                color: "#A5A4A6",
                fontFamily: "Poppins-Regular",
                fontSize: "0.7rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center"
            },

            respCopyright: [
                {margin: "1rem 0 0.2rem 3rem"},
                {margin: "1rem 0 0.2rem 3rem"},
                {margin: "0.2rem 0 0.2rem 1rem"},
                {margin: "0.2rem 0 0.2rem 1rem"},
            ],

            privacy: {
                color: "#A5A4A6",
                fontFamily: "Poppins-Regular",
                fontSize: "0.7rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center",
                margin: "0.2rem 0 0.2rem auto",
                textDecoration: "none"
            },

            respPrivacy: [
                {margin: "0.2rem 0 0.2rem 3rem"},
                {margin: "0.2rem 0 0.2rem 3rem"},
                {margin: "0.2rem 0 0.2rem auto"},
                {margin: "0.2rem 0 0.2rem auto"}
            ],
            
            accessibility: {
                color: "#A5A4A6",
                fontFamily: "Poppins-Regular",
                fontSize: "0.7rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center",
                margin: "0.2rem 0.5rem 0.2rem 0.5rem",
                textDecoration: "none"
            },

            respAccessibility: [
                {margin: "0.2rem 0 0.2rem 3rem"},
                {margin: "0.2rem 0 0.2rem 3rem"},
                {margin: "0.2rem 0.5rem 0.2rem 0.5rem"},
                {margin: "0.2rem 0.5rem 0.2rem 0.5rem"}
            ],

            terms: {
                color: "#A5A4A6",
                fontFamily: "Poppins-Regular",
                fontSize: "0.7rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center",
                margin: "0.2rem auto 0.2rem 0",
                textDecoration: "none"
            },

            respAccessibility: [
                {margin: "0.2rem 0 0.2rem 3rem"},
                {margin: "0.2rem 0 0.2rem 3rem"},
                {margin: "0.2rem auto 0.2rem 0"},
                {margin: "0.2rem auto 0.2rem 0"}
            ],

            socialMediaIconContainer: {
                display: "flex",
                flexShrink: "0",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "auto"
            },

            respSocialMediaContainer: [
                {margin: "0.5rem 0 0.2rem 3rem"},
                {margin: "0.5rem 0 0.2rem 3rem"},
                {margin: "0.5rem 1rem 0.2rem auto"},
                {margin: "0.5rem 1rem 0.2rem auto"}
            ],

            socialMediaIcon: {
                height: "1.5rem",
                width: "1.5rem",
                margin: "0 0.7rem 0 0.3rem"
            }
        }
    }

    componentDidMount(){
        addResponsiveStyle("#footer-container", this.style.respContainer);
        addResponsiveStyle("#footer-copyright", this.style.respCopyright);
        addResponsiveStyle("#footer-privacy", this.style.respPrivacy);
        addResponsiveStyle("#footer-accessibility", this.style.respPrivacy);
        addResponsiveStyle("#footer-terms", this.style.respPrivacy);
        addResponsiveStyle('#footer-social-media-icon-container', this.style.respSocialMediaContainer);
    }

    render(){
        return(
            React.createElement("div",{id:"footer-container", style: this.style.container}, 
                React.createElement("span", {id: "footer-copyright", style: this.style.copyright}, "© 2020 Appening Infotech Pvt Ltd"),
                React.createElement("span", {id: "footer-privacy", style: this.style.privacy}, "Privacy"),
                React.createElement("span", {id: "footer-accessibility", style: this.style.accessibility}, "Accesibility"),
                React.createElement("span", {id: "footer-terms", style: this.style.terms}, "Terms"),
                React.createElement("div", {id: "footer-social-media-icon-container", style: this.style.socialMediaIconContainer}, 
                    React.createElement("img", {src: "../static/icons/instagram.png", style:this.style.socialMediaIcon}, null),
                    React.createElement("img", {src: "../static/icons/fb.png", style:this.style.socialMediaIcon}, null),
                    React.createElement("img", {src: "../static/icons/twitter.png", style:this.style.socialMediaIcon}, null),
                    React.createElement("img", {src: "../static/icons/youtube.png", style:this.style.socialMediaIcon}, null)
                )
            )
            
        )
    }
}