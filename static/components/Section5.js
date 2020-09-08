

class Section5 extends React.Component{

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
                backgroundColor: "#FEFAF2",
                marginTop: "2rem"
            },

            whyChooseText: {
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

            becauseWeText: {
                fontFamily: "Poppins-Semi-Bold",
                textAlign: "center",
                color: "black",
                margin: "0 0 2.5rem 0",
                fontSize: "2.2rem"
            },

            featureItemContainer: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                justifyContent: "center",
                alignItems: "center"
            },

            respFeatureItemContainer: [
                {flexDirection: "column"},
                {flexDirection: "column"},
                {flexDirection: "row"},
                {flexDirection: "row"}
            ]
        }
    }

    componentDidMount(){
        addResponsiveStyle("#feature-item-container", this.style.respFeatureItemContainer);
    }

    render(){
        return(
            React.createElement("div",{id:"section5-container", style: this.style.container}, 
                React.createElement("span", {style: this.style.whyChooseText}, "Why Choose Fresh Grocery"),
                React.createElement("span", {style: this.style.becauseWeText}, "Because we are in it together"),
                React.createElement("div", {id: "feature-item-container", style: this.style.featureItemContainer},
                    React.createElement(Feature, {imgSrc: "../static/icons/feature-1.png", textContent: "No Minimum Order", descriptionText: "No order value restrictions, Order for yourself or your group"}, null),
                    React.createElement(Feature, {imgSrc: "../static/icons/feature-2.png", textContent: "Live Order Tracking", descriptionText: "Track your order anytime from the store to your doorstep"}, null),
                    React.createElement(Feature, {imgSrc: "../static/icons/feature-3.png", textContent: "24 x 7 delivery", descriptionText: "Order anytime, anywhere. We will get you delivered"}, null),
                )
            )
        )
    }
}

class Feature extends React.Component{
    constructor(props){
        super(props);

        this.style = {
            container: {
                width: "30%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.5rem 1.5rem 0.5rem 1.5rem"
            },

            respContainer: [
                {width: "100%"},
                {width: "100%"},
                {width: "30%"},
                {width: "30%"}
            ],

            image: {
                width: "auto",
                height: "4rem"
            },

            textContent: {
                color: "#020313",
                fontFamily: "Poppins-Semi-Bold",
                fontSize: "1rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center",
                margin: "1rem 0 0.2rem 0"
            },

            descriptionText: {
                color: "#020313",
                fontFamily: "Poppins-Regular",
                fontSize: "1rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center",
                margin: "0.2rem 0 1rem 0"
            },

            respDescriptionText: [
                {width: "80%"},
                {width: "80%"},
                {width: "100%"},
                {width: "100%"}
            ]
        }
    }

    componentDidMount(){
        addResponsiveStyle(".feature-item", this.style.respContainer);
        addResponsiveStyle("#feature-description-text", this.style.respDescriptionText)
    }

    render(){
        return(
            React.createElement("div",{className:"feature-item", style: this.style.container},
                React.createElement("img", {src: this.props.imgSrc, style: this.style.image}, null),
                React.createElement("span", {style: this.style.textContent}, this.props.textContent),
                React.createElement("span", {id: "feature-description-text", style: this.style.descriptionText}, this.props.descriptionText)
            )
        )
    }
}