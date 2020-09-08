

class Header extends React.Component{

    constructor(props){
        super(props);
        this.style ={
            
            navBarContainer: {
                width: "100%",
                height: "3.9rem",
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "flex-start"
            },

            respNavBarContainer: [
                {backgroundColor: "white", height: "3.9rem"},
                {backgroundColor: "#FFE1A1", height: "3.8rem"},
                {backgroundColor: "#FFE1A1", height: "3.8rem"},
                {backgroundColor: "#FFE1A1", height: "3.7rem"}
            ],

            headerLogo: {
                height: "100%",
                margin: "0",
                width: "auto"
            },

            respHeaderLogo: [
                {height: "3.5rem"},
                {height: "3.2rem"},
                {height: "3.2rem"},
                {height: "3.2rem"}
            ],

            loginText: {
                fontFamily: "Poppins-Medium",
                color: "#3DC28F",
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto"
            },

            signupText: {
                fontFamily: "Poppins-Medium",
                color: "#FFFFFF",
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3DC28F",
                marginLeft: "1rem",
                marginRight: "1rem",
                padding: "0.2rem 1rem 0.2rem 1rem",
                borderRadius: "0.5rem"
            },

            respLoginSignupBtns: [
                {display: "none", fontSize: "1.3rem"},
                {display: "flex", fontSize: "1.2rem"},
                {display: "flex", fontSize: "1.2rem"},
                {display: "flex", fontSize: "1.1rem"}
            ],

            smallNavIcon: {
                marginLeft: "auto",
                marginRight: "1rem",
                display: "flex",
                flexShrink: "0",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },

            respSmallNavIcon: [
                {height: "3.1rem", width: "3.1rem", display: "flex"},
                {height: "3rem", width: "3rem", display: "none"},
                {height: "3rem", width: "3rem", display: "none"},
                {height: "2.8rem", width: "2.8rem", display: "none"}
            ],

            navIconLine: {
                width: "70%",
                height: "0.2rem",
                backgroundColor: "#3DC28F",
                marginTop: "0.2rem",
                marginBottom: "0.2rem"
            },

        }
    }

    componentDidMount(){
        addResponsiveStyle("#navbar-container", this.style.respNavBarContainer);
        addResponsiveStyle("#header-logo", this.style.respHeaderLogo);
        addResponsiveStyle("#small-nav-icon", this.style.respSmallNavIcon);
        addResponsiveStyle(".login-signup-btns", this.style.respLoginSignupBtns);
    }

    render(){
        return(
            React.createElement("div",{id:"navbar-container", style: this.style.navBarContainer}, 
                React.createElement("img", {id:"header-logo", style: this.style.headerLogo, src:"../static/icons/header-logo.png", style: {marginLeft: "0.6rem"}}, null),
                React.createElement("span", {style: this.style.loginText, className: "login-signup-btns"}, "Login"),
                React.createElement("span", {style: this.style.signupText, className: "login-signup-btns"}, "Sign Up"),
                React.createElement("div", {id:"small-nav-icon", style: this.style.smallNavIcon}, 
                    React.createElement("div", {id:"nav-icon-top-line", style:this.style.navIconLine}, null),
                    React.createElement("div", {id:"nav-icon-mid-line", style:this.style.navIconLine}, null),
                    React.createElement("div", {id:"nav-icon-bottom-line", style:this.style.navIconLine}, null)
                )
            )
            
        )
    }
}