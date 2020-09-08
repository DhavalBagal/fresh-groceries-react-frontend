

class Section1 extends React.Component{

    constructor(props){
        super(props);
        this.style ={
            
            container: {
                width: "100%",
                height: "max-content",
                display: "flex",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFE1A1"
            },

            textArea: {
                height: "fit-content",
                display: "flex",
                flexShrink: "0",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "1rem 0 1rem 0"
            },

            respTextArea: [
                {width: "100%"},
                {width: "90%"},
                {width: "60%"},
                {width: "60%"}
            ],

            stayHomeText: {
                fontFamily: "Poppins-Bold",
                textAlign: "center",
                color: "black",
                margin: "0",
                fontSize: "2.6rem"
            },

            getYourText: {
                fontFamily: "Poppins-Regular",
                textAlign: "center",
                color: "black",
                margin: "0.5rem 0 0 0",
                fontSize: "1.5rem"
            },

            respGetYourText: [
                {width: "70%"},
                {width: "80%"},
                {width: "80%"},
                {width: "90%"}
            ],
            
            searchBar: {
                backgroundColor: "white",
                borderRadius: "0.5rem",
                marginTop: "1.5rem",
                display: "flex",
                flexShrink: "0",
                justifyContent: "center",
                alignItems: "center",
                width: "90%"
            },

            respSearchBar: [
                {height: "3rem"},
                {height: "2.8rem"},
                {height: "2.8rem"},
                {height: "2.6rem"}
            ],

            locationIcon: {
                width: "auto",
                height: "1rem",
                marginLeft: "0.5rem"
            },

            searchLocationInput: {
                fontFamily: "Poppins-Regular",
                fontSize: "0.7rem",
                color: "#807F81",
                border: "none",
                outline: "none",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                width: "70%"
            },

            searchLocBtn: {
                fontFamily: "Poppins-Medium",
                fontSize: "0.7rem",
                color: "#FFFFFF",
                backgroundColor: "#3DC28F",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                padding: "0.2rem 1rem 0.2rem 1rem",
                borderRadius: "0.3rem",
                border: "none",
                outline: "none"
            },

            placesContainer: {
                display: "flex",
                flexShrink: "0",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem"
            },

            respPlacesContainer: [
                {width: "60%"},
                {width: "80%"},
                {width: "100%"},
                {width: "100%"},
            ],

            placesLink: {
                fontFamily: "Poppins-Regular",
                fontSize: "0.7rem",
                color: "#675A46",
                textDecoration: "none",
                margin: "0.5rem 0.5rem 1rem 0.5rem"
            },

            illustration: {
                width: "20%",
                height: "auto",
                display:"flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "0 2rem 0 2rem"
            },

            respIllustration: [
                {display: "none"},
                {display: "none"},
                {display: "none"},
                {display: "flex", width: "20%"}
            ],

            illustrationImg1: { height: "2rem", width: "2rem", alignSelf: "flex-start", margin: "0.5rem 0 0.5rem 0"},

            illustrationImg2: { height: "2rem", width: "2rem", alignSelf: "flex-end", margin: "0.5rem 0 0.5rem 0"},

            illustrationImg3: { height: "2rem", width: "2rem", alignSelf: "center", margin: "0.5rem 0 0.5rem 0"},

            illustrationImg4: { height: "2rem", width: "2rem", alignSelf: "flex-end", margin: "0.5rem 0 0.5rem 0"},

            illustrationImg5: { height: "2rem", width: "2rem", alignSelf: "flex-start", margin: "0.5rem 0 0.5rem 0"},

            illustrationImg6: { height: "2rem", width: "2rem", alignSelf: "center", margin: "0.5rem 0 0.5rem 0"}
        }
    }

    componentDidMount(){
        viewportWidth = $(window).width();
        if (viewportWidth>=200 && viewportWidth<600){
            var text = "Stay Home\nWe'll Deliver"
            $("#stay-home-text").text(text)
        }
        else $("#stay-home-text").text("Stay Home - We'll Deliver")

        addResponsiveStyle("#section1-text-area", this.style.respTextArea);
        addResponsiveStyle("#get-your-text", this.style.respGetYourText);
        addResponsiveStyle("#search-bar", this.style.respSearchBar);
        addResponsiveStyle("#places-container", this.style.respPlacesContainer);
        addResponsiveStyle(".illustration", this.style.respIllustration);
    }

    render(){
        return(
            React.createElement("div",{id:"section1-container", style: this.style.container}, 
                React.createElement("div", {className: "illustration", style: this.style.illustration},
                    React.createElement("img", {style: this.style.illustrationImg1, src: "../static/icons/spice.png"}),
                    React.createElement("img", {style: this.style.illustrationImg2, src: "../static/icons/watermelon.png"}),
                    React.createElement("img", {style: this.style.illustrationImg3, src: "../static/icons/pie.png"}),
                    React.createElement("img", {style: this.style.illustrationImg4, src: "../static/icons/barley.png"}),
                    React.createElement("img", {style: this.style.illustrationImg5, src: "../static/icons/nut.png"}),
                    React.createElement("img", {style: this.style.illustrationImg6, src: "../static/icons/soap1.png"})
                ),

                React.createElement("div", {id:"section1-text-area", style: this.style.textArea},
                    React.createElement("pre",{id: "stay-home-text", style:this.style.stayHomeText},"Stay Home - We’ll Deliver"),
                    React.createElement("span",{id: "get-your-text", style:this.style.getYourText},"Get your groceries delivered in less than an hour"),
                    React.createElement("div", {id: "search-bar", style: this.style.searchBar}, 
                        React.createElement("img", {className: "location-icon", style: this.style.locationIcon, src: "../static/icons/location-icon.png"}),
                        React.createElement("input", {id:"search-location-input", placeholder: "Search for a location", style: this.style.searchLocationInput}, null),
                        React.createElement("img", {className: "location-icon",  style: this.style.locationIcon, src: "../static/icons/gps-icon.png"}),
                        React.createElement("button", {id:"search-loc-btn", style: this.style.searchLocBtn}, "Search")
                    ),
                    React.createElement("div", {id:"places-container", style:this.style.placesContainer},
                        React.createElement("a", {style: this.style.placesLink}, "NEW YORK"),
                        React.createElement("a", {style: this.style.placesLink}, "LOS ANGELES"),
                        React.createElement("a", {style: this.style.placesLink}, "CHICAGO"),
                        React.createElement("a", {style: this.style.placesLink}, "HOUSTON"),
                        React.createElement("a", {style: this.style.placesLink}, "PHOENIX"),
                        React.createElement("a", {style: this.style.placesLink}, "PHILADELPHIA"),
                        React.createElement("a", {style: this.style.placesLink}, "SAN ANTONIO"),
                    )    
                ),

                React.createElement("div", {className: "illustration", style: this.style.illustration},
                    React.createElement("img", {style: this.style.illustrationImg1, src: "../static/icons/tissue.png"}),
                    React.createElement("img", {style: this.style.illustrationImg2, src: "../static/icons/bread.png"}),
                    React.createElement("img", {style: this.style.illustrationImg3, src: "../static/icons/carrot.png"}),
                    React.createElement("img", {style: this.style.illustrationImg4, src: "../static/icons/pumpkin.png"}),
                    React.createElement("img", {style: this.style.illustrationImg5, src: "../static/icons/tea.png"}),
                    React.createElement("img", {style: this.style.illustrationImg6, src: "../static/icons/soap.png"})
                )
            )
            
        )
    }
}