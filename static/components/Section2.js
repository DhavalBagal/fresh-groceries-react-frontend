

class Section2 extends React.Component{

    constructor(props){
        super(props);
        this.style ={
            
            container: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "white"
            },

            innerContainer1: {
                width: "50%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
            },

            respInnerContainer1: [
                {width: "100%"},
                {width: "100%"},
                {width: "50%"},
                {width: "50%"}
            ],

            hashTag: {
                color: "#B3B2B3",
                fontFamily: "Poppins-Regular",
                fontSize: "1rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                width: "70%",
                textAlign: "left",
                margin: "3rem 0 0.5rem 3rem"
            },

            hygenicallyPackedText: {
                fontFamily: "Poppins-Semi-Bold",
                textAlign: "left",
                color: "black",
                margin: "0 0 2.5rem 3rem",
                fontSize: "2.2rem"
            },

            learnMoreBtn: {
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
                margin: "1rem 0 3rem 3rem"
            },

            innerContainer2: {
                width: "50%",
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "flex-end"
            },

            respInnerContainer2: [
                {width: "100%"},
                {width: "100%"},
                {width: "50%"},
                {width: "50%"}
            ],

            image: {
                width: "70%",
                height: "70%"
            },

            innerContainer3: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "center"
            },

            respInnerContainer3: [
                {flexDirection: "column", alignItems: "flex-start"},
                {flexDirection: "column", alignItems: "flex-start"},
                {flexDirection: "row", alignItems: "center"},
                {flexDirection: "row", alignItems: "center"}
            ]
        }
    }

    componentDidMount(){
        addResponsiveStyle("#section2-inner-container1", this.style.respInnerContainer1);
        addResponsiveStyle("#section2-inner-container2", this.style.respInnerContainer2);
        addResponsiveStyle("#section3-inner-container3", this.style.respInnerContainer3);
    }

    render(){
        return(
            React.createElement("div",{id:"section2-container", style: this.style.container},
                React.createElement("div", {id: "section2-inner-container1", style: this.style.innerContainer1},
                    React.createElement("div", {style: this.style.hashTag}, "#GroceryDeliveredSafely"),
                    React.createElement("span", {style: this.style.hygenicallyPackedText}, "Hygenically Packed,"),
                    React.createElement("button", {style: this.style.learnMoreBtn}, "Learn More")
                ),
                React.createElement("div", {id: "section2-inner-container2", style: this.style.innerContainer2},
                    React.createElement("img",{id:"section", src: "../static/icons/illustration1.png", style: this.style.image}, null)
                ),

                React.createElement("div", {id: "section3-inner-container3", style: this.style.innerContainer3},
                    React.createElement(PrecautionaryMeasure, {imgSrc: "../static/icons/tick.png", textContent:"Zero touch delivery options"},null),
                    React.createElement(PrecautionaryMeasure, {imgSrc: "../static/icons/tick.png", textContent:"Regular cleaning of warehouses"},null),
                    React.createElement(PrecautionaryMeasure, {imgSrc: "../static/icons/tick.png", textContent:"Fever screening of all executives"},null)
                )
            )
        )
    }
    
}

class PrecautionaryMeasure extends React.Component{
    constructor(props){
        super(props);

        this.style = {
            container: {
                width: "25%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.5rem 1rem 0.5rem 1rem"
            },

            respContainer: [
                {width: "100%", alignItems: "flex-start"},
                {width: "100%", alignItems: "flex-start"},
                {width: "30%", alignItems: "center"},
                {width: "30%", alignItems: "center"}
            ],

            image: {
                width: "auto",
                height: "2rem",
                marginLeft: "0.5rem"
            },

            textContent: {
                color: "#020313",
                fontFamily: "Poppins-Regular",
                fontSize: "1rem",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                textAlign: "center",
                margin: "1rem 0 1rem 0"
            }
        }
    }

    componentDidMount(){
        addResponsiveStyle(".precautionary-measure-item", this.style.respContainer);
    }

    render(){
        return(
            React.createElement("div",{className:"precautionary-measure-item", style: this.style.container},
                React.createElement("img", {src: this.props.imgSrc, style: this.style.image}, null),
                React.createElement("span", {style: this.style.textContent}, this.props.textContent)
            )
        )
    }
}