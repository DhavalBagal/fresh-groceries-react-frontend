

class Section4 extends React.Component{

    constructor(props){
        super(props);
        this.style ={
            
            container: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white"
            },

            innerContainer1: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            },

            getDeliveredText: {
                color: "#B3B2B3",
                fontFamily: "Poppins-Regular",
                fontSize: "1rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                width: "70%",
                textAlign: "center",
                margin: "3rem 0 0.5rem 0"
            },

            howItWorksText: {
                fontFamily: "Poppins-Semi-Bold",
                textAlign: "left",
                color: "black",
                margin: "0 0 2.5rem 0",
                fontSize: "2.2rem"
            },

            illustration: {
                height: "auto",
                width: "40%"
            },

            respIllustration:[
                {width: "90%"},
                {width: "90%"},
                {width: "40%"},
                {width: "40%"}
            ],

            downloadLinkContainer: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
                marginBottom: "1rem"
            },
            
            appStore: {
                background: "url(../static/icons/app-store-dwnld-icon.png) no-repeat top left",
                backgroundSize: "8.7rem 3rem",
                width: "8.7rem",
                height: "3rem",
                marginRight: "0.5rem",
                
            },

            playStore: {
                background: "url(../static/icons/play-store-dwnld-icon.png) no-repeat top left",
                backgroundSize: "8.7rem 3rem",
                width: "8.7rem",
                height: "3rem",
                marginLeft: "0.5rem"
            },

            innerContainer2: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: "5rem 0 0 0"
            },

            respInnerContainer2: [
                {flexDirection: "column"},
                {flexDirection: "column"},
                {flexDirection: "row"},
                {flexDirection: "row"}
            ],

            respIllustration2:[
                {width: "90%", order: "1"},
                {width: "90%", order: "1"},
                {width: "40%", order: "2"},
                {width: "40%", order: "2"}
            ],
        }
    }

    componentDidMount(){
        addResponsiveStyle(".section4-illustration", this.style.respIllustration);
        addResponsiveStyle(".section4-illustration2", this.style.respIllustration2);
        addResponsiveStyle(".section4-inner-container2", this.style.respInnerContainer2);
        
    }

    render(){
        return(
            React.createElement("div", {id:"section4-container", style: this.style.container},
                React.createElement("div", {id: "section4-inner-container1", style: this.style.innerContainer1},
                    React.createElement("div", {style: this.style.getDeliveredText}, "Get delivered in 3 easy steps"),
                    React.createElement("span", {style: this.style.howItWorksText}, "Here's how it works"),
                    React.createElement("img",{className: "section4-illustration", style: this.style.illustration, src: "../static/icons/illustration2.png"},null),
                    React.createElement(Step, {order: "2", stepNum: "1", stepText: "Request in the app", stepDescription: "Set your delivery location, Choose your groceries from a wide range of 5000+ products."},null),
                    React.createElement("div", {style: this.style.downloadLinkContainer},
                        React.createElement("a", {style: this.style.appStore}, null),
                        React.createElement("a", {style: this.style.playStore}, null)
                    )
                ),

                React.createElement("div", {className: "section4-inner-container2", style: this.style.innerContainer2}, 
                    React.createElement(Step, {order: "1", stepNum: "2", stepText: "Schedule and Pay", stepDescription: "Schedule the delivery at your convenient time and pay digitally"},null),
                    React.createElement("img",{className: "section4-illustration2", style: this.style.illustration, src: "../static/icons/illustration3.png"},null)
                ),

                React.createElement("div", {className: "section4-inner-container2", style: this.style.innerContainer2}, 
                    React.createElement("img",{className: "section4-illustration", style: this.style.illustration, src: "../static/icons/illustration4.png"},null),
                    React.createElement(Step, {order: "2", stepNum: "3", stepText: "It’s delivered and Rate us", stepDescription: "Collect groceries at your doorstep and tell us about our service"},null)
                )
            )
        )
    }
}


class Step extends React.Component{
    constructor(props){
        super(props);

        this.style = {
            container: {
                width: "50%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "2rem 1rem 0.5rem 1rem"
            },

            respContainer:[
                {order: "2", width: "100%"},
                {order: "2", width: "100%"},
                {order: this.props.order, width: "50%"},
                {order: this.props.order, width: "50%"}
            ],

            stepTextContainer: {
                width: "auto",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "row"
            },

            respStepTextContainer: [
                {flexDirection: "column", justifyContent: "flex-start", alignItems: "center"},
                {flexDirection: "column", justifyContent: "flex-start", alignItems: "center"},
                {flexDirection: "row", alignItems: "flex-start", justifyContent: "center"},
                {flexDirection: "row", alignItems: "flex-start", justifyContent: "center"},
            ],

            stepNum: {
                background: "url(../static/icons/bullet-circle.png) no-repeat top left",
                backgroundSize: "2.5rem 2.5rem",
                fontFamily: "Poppins-Semi-Bold",
                color: "white",
                fontSize: "1.6rem",
                margin: "0.5rem 0.8rem 0.5rem 0.5rem",
                width: "2.5rem",
                height: "2.5rem",
                textAlign: "center",
                
            },

            stepText: {
                fontFamily: "Poppins-Semi-Bold",
                color: "#020313",
                fontSize: "1.6rem",
                textAlign: "left",
                margin: "0.5rem 0.8rem 0.5rem 0.5rem"
            },

            stepDescription: {
                fontFamily: "Poppins-Medium",
                color: "#020313",
                width: "70%",
                fontSize: "1rem",
                textAlign: "center",
                margin: "0.5rem 0.8rem 0.5rem 0.5rem"
            }
        }
    }

    componentDidMount(){
        addResponsiveStyle(".step-text-container", this.style.respStepTextContainer);
        addResponsiveStyle(".step-container", this.style.respContainer);
    }

    render(){
        return(
            React.createElement("div", {className: "step-container", style: this.style.container},
                React.createElement("div",{className: "step-text-container", style: this.style.stepTextContainer},
                    React.createElement("span", {style: this.style.stepNum}, this.props.stepNum),
                    React.createElement("span", {style: this.style.stepText}, this.props.stepText)
                ),
                React.createElement("span",{style:this.style.stepDescription}, this.props.stepDescription)
            )
            
        )
    }
}
