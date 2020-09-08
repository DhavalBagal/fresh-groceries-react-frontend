

class AboutUs extends React.Component{

    constructor(props){
        super(props);
        this.style ={
            
            container: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                alignItems: "flex-start",
                justifyContent: "center",
                backgroundColor: "white",
                borderBottom: "1px solid #E9E9E9"
            },

            respContainer: [
                {flexDirection: "column", justifyContent: "flex-start"},
                {flexDirection: "column", justifyContent: "flex-start"},
                {flexDirection: "row", justifyContent: "center"},
                {flexDirection: "row", justifyContent: "center"}
            ],

            innerContainer1: {
                display: "flex",
                width: "max-content",
                flexShrink: "0",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                margin: "0.5rem auto 1rem auto"
            },

            respInnerContainer1: [
                {margin: "0.5rem 0 1rem 3rem"},
                {margin: "0.5rem 0 1rem 3rem"},
                {margin: "0.5rem auto 1rem auto"},
                {margin: "0.5rem auto 1rem auto"}
            ],

            logo: {
                height: "3.9rem",
                width: "auto"
            },

            innerContainer1Text: {
                color: "#676871",
                fontFamily: "Poppins-Regular",
                fontSize: "1rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center",
                margin: "0.2rem 0 0.2rem 0",
                textDecoration: "none"
            },

            downloadLinkContainer: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
                marginLeft: "0.3rem"
            },
            
            appStore: {
                background: "url(../static/icons/app-store-dwnld-icon.png) no-repeat top left",
                backgroundSize: "7.3rem 2.5rem",
                width: "7.3rem",
                height: "2.5rem",
                marginRight: "0.5rem",
                
            },

            playStore: {
                background: "url(../static/icons/play-store-dwnld-icon.png) no-repeat top left",
                backgroundSize: "7.3rem 2.5rem",
                width: "7.3rem",
                height: "2.5rem",
                marginLeft: "0.5rem"
            },

            innerContainerHeading: {
                color: "#020313",
                fontFamily: "Poppins-Semi-Bold",
                fontSize: "1.2rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center",
                margin: "0.5rem 0 0.5rem 0"
            }

        }
    }

    componentDidMount(){
        addResponsiveStyle("#about-us-container", this.style.respContainer);
        addResponsiveStyle(".about-us-inner-container", this.style.respInnerContainer1);
    }

    render(){
        return(
            React.createElement("div",{id:"about-us-container", style: this.style.container}, 
                React.createElement("div", {className:"about-us-inner-container", style: this.style.innerContainer1}, 
                    React.createElement("img", {src: "../static/icons/footer-logo.png", style: this.style.logo}, null),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "Help Center"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "English International"),
                    React.createElement("div", {style: this.style.downloadLinkContainer},
                        React.createElement("a", {style: this.style.appStore}, null),
                        React.createElement("a", {style: this.style.playStore}, null),
                        
                    )
                ),
                React.createElement("div", {className:"about-us-inner-container", style: this.style.innerContainer1}, 
                    React.createElement("span", {style: this.style.innerContainerHeading}, "About us"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "My Account"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "Categories"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "Cities"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "Become a Partner"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "Blog"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "Careers")
                ),
                React.createElement("div", {className:"about-us-inner-container", style: this.style.innerContainer1}, 
                    React.createElement("span", {style: this.style.innerContainerHeading}, "Questions?"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "Frequently Asked Questions"),
                    React.createElement("a", {style: this.style.innerContainer1Text}, "Contact Us")
                )
            )
        )
    }
}
