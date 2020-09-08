

class Section3 extends React.Component{

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
                backgroundColor: "#FEFAF2"
            },

            heresWhatText: {
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

            quickSearchesText: {
                fontFamily: "Poppins-Semi-Bold",
                textAlign: "center",
                color: "black",
                margin: "0 0 2.5rem 0",
                fontSize: "2.2rem"
            },

            quickSearchesItemContainer: {
                width: "100%",
                height: "auto",
                display: "flex",
                flexShrink: "0",
                justifyContent: "center",
                alignItems: "center"
            },

            respQuickSearchItemContainer: [
                {flexDirection: "column"},
                {flexDirection: "column"},
                {flexDirection: "row"},
                {flexDirection: "row"}
            ],

            exploreMoreBtn: {
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
                margin: "1rem 0 3rem 0"
            }
        }
    }

    componentDidMount(){
        addResponsiveStyle("#quick-searches-item-container", this.style.respQuickSearchItemContainer);
    }

    render(){
        return(
            React.createElement("div",{id:"section3-container", style: this.style.container}, 
                React.createElement("span", {style: this.style.heresWhatText}, "Here's what you need"),
                React.createElement("span", {style: this.style.quickSearchesText}, "Quick Searches"),
                React.createElement("div", {id: "quick-searches-item-container", style: this.style.quickSearchesItemContainer},
                    React.createElement(QuickSearchItem, {imgSrc: "../static/icons/quick-search-1.png", textContent: "Grocery & Staples"}, null),
                    React.createElement(QuickSearchItem, {imgSrc: "../static/icons/quick-search-2.png", textContent: "Vegetables & Fruits"}, null),
                    React.createElement(QuickSearchItem, {imgSrc: "../static/icons/quick-search-3.png", textContent: "Personal Care"}, null),
                    React.createElement(QuickSearchItem, {imgSrc: "../static/icons/quick-search-4.png", textContent: "Home & Kitchen"}, null),
                    React.createElement(QuickSearchItem, {imgSrc: "../static/icons/quick-search-5.png", textContent: "Beverages"}, null)
                ),
                React.createElement("button", {style: this.style.exploreMoreBtn}, "Explore More")
            )
        )
    }
}

class QuickSearchItem extends React.Component{
    constructor(props){
        super(props);

        this.style = {
            container: {
                width: "15%",
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
                {width: "15%"},
                {width: "15%"}
            ],

            image: {
                width: "auto",
                height: "4rem"
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
        addResponsiveStyle(".quick-searches-item", this.style.respContainer);
    }

    render(){
        return(
            React.createElement("div",{className:"quick-searches-item", style: this.style.container},
                React.createElement("img", {src: this.props.imgSrc, style: this.style.image}, null),
                React.createElement("span", {style: this.style.textContent}, this.props.textContent)
            )
        )
    }
}