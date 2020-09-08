

class Section6 extends React.Component{

    constructor(props){
        super(props);
        this.style ={
            
            container: {
                width: "100%",
                height: "20rem",
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                textAlign: "center"
            },
            
            respContainer: [
                {height: "35rem"},
                {height: "35rem"},
                {height: "20rem"},
                {height: "20rem"}
            ],

            innerContainer: {
                width: "100%",
                height: "100%",
                position: "relative",
                backgroundColor: "white"
            },

            innerContainer1: {
                width: "100%",
                height: "50%",
                backgroundColor: "#FEFAF2",
                position: "absolute",
                top: "0",
                left: "0"
            },

            innerContainer2: {
                width: "100%",
                height: "50%",
                backgroundColor: "white",
                position: "absolute",
                bottom: "0",
                left: "0"
            },

            innerContainer3: {
                width: "80%",
                height: "80%",
                position: "absolute",
                top: "10%",
                left: "10%",
                backgroundColor: "#FFE1A1",
                borderRadius: "1rem",
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                justifyContent: "center",
                alignItems: "flex-start"
            },

            innerContainer4: {
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "50%",
                height: "auto"
            },

            respInnerContainer: [
                {width: "100%", marginTop: "45%"},
                {width: "100%", marginTop: "45%"},
                {width: "50%",  marginTop: "0"},
                {width: "50%",  marginTop: "0"}
            ],
            
            becomePartnerText: {
                fontFamily: "Poppins-Semi-Bold",
                color: "#020313",
                fontSize: "1.6rem",
                textAlign: "left",
                margin: "0.5rem 0.8rem 0.5rem 2rem"
            },

            youCanLoginText: {
                fontFamily: "Poppins-Medium",
                color: "#020313",
                fontSize: "1rem",
                textAlign: "center",
                margin: "0.5rem 0.8rem 0.5rem 2rem",
                textAlign: "left"
            },

            becomePartnerBtn: {
                fontFamily: "Poppins-Medium",
                height: "1.8rem",
                fontSize: "1rem",
                color: "#FFFFFF",
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3DC28F",
                marginLeft: "1rem",
                marginRight: "1rem",
                padding: "0.2rem 1rem 0.2rem 1rem",
                borderRadius: "0.3rem",
                border: "none",
                outline: "none",
                userSelect: "none",
                margin: "1rem 0 0.5rem 2rem"
            },

            employeePics: {
                width: "auto",
                height: "90%",
                position: "absolute"
            },

            respEmployeePics: [
                {height: "40%", width: "auto", margin: "auto", right: "0", left:"0", top:"7%"},
                {height: "40%", width: "auto", margin: "auto", right: "0", left:"0", top:"7%"},
                {height: "90%", width: "auto", right: "12%", margin: "0", left: "auto", top:"5%"},
                {height: "90%", width: "auto", right: "12%", margin: "0", left: "auto", top:"5%"}
            ]
        }
    }

    componentDidMount(){
        addResponsiveStyle("#section6-inner-container5", this.style.respInnerContainer);
        addResponsiveStyle("#section6-container", this.style.respContainer);
        addResponsiveStyle("#employee-pics", this.style.respEmployeePics);
    }

    render(){
        return(
            React.createElement("div", {id:"section6-container", style: this.style.container},
                React.createElement("div", {id: "section6-inner-container", style: this.style.innerContainer},
                    React.createElement("div", {style: this.style.innerContainer1}, null),
                    React.createElement("div", {style: this.style.innerContainer2}, null),
                    React.createElement("div", {style: this.style.innerContainer3}, 
                        React.createElement("div", {id: "section6-inner-container5", style: this.style.innerContainer4},
                            React.createElement("span", {style: this.style.becomePartnerText}, "Become a Partner and start earning!"),
                            React.createElement("span", {style: this.style.youCanLoginText}, "You can login and logout whenever you want! No mandatory timings!"),
                            React.createElement("button", {style: this.style.becomePartnerBtn}, "Become a Partner")
                        )
                    ),
                    React.createElement("img", {id:"employee-pics", style:this.style.employeePics, src: "../static/icons/employee-pics.png"}, null)
                )
                
            )
        )
    }
}

