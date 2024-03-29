var options={
    tooltip:{theme:'custom'},
    actions:false
}

var Ratings_TR = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"Assets/Data/Real_R.csv"},
    background:"transparent",
    mark: 'bar',
    width:300,
    height:300,
    "selection": {
        "highlight": {"type": "single", "empty": "none", "on": "mouseover"},
        "select": {"type": "multi"}
    },
    "mark": {
        "type": "bar",
        "fill": "#ffa500",
        "cursor": "pointer"
    },
    title: {
        "text":"Rating & Real Reviews",
        "color": "#fff"
    },
    encoding: {
        x: {
            "bin": "false",
            "field": "ratings",
            "type": "ordinal",
            "orient": "right",
            "axis": {title: 'Review Rating',  "titleColor":"#fff","labelColor":"#fff"}
        },
        y: {
            "aggregate": "sum",
            "field": "ratings",
            "type": "quantitative",
            "axis": {title: 'Numbers of Real Recommand Reviews', "titleColor":"#fff","labelColor":"#fff"}
        },
        "tooltip": [{"aggregate": "sum","field": "ratings", "type": "quantitative"}],
        "color": {"value": "#ffa500"},
        "fillOpacity": {
            "condition": [
                {
                    "selection": "highlight", "value": 1
                }
            ],
            "value": 0.5
        },
    }
};
vegaEmbed('#Ratings_TR', Ratings_TR,options);


var Ratings_TD = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"Assets/Data/Real_D.csv"},
    background:"transparent",
    mark: 'bar',
    width:300,
    height:300,
    "selection": {
        "highlight": {"type": "single", "empty": "none", "on": "mouseover"},
        "select": {"type": "multi"}
    },
    "mark": {
        "type": "bar",
        "fill": "#ffa500",
        "cursor": "pointer"
    },
    title: {
        "text":"Rating & Real Reviews",
        "color": "#fff"
    },
    encoding: {
        x: {
            "bin": "false",
            "field": "ratings",
            "type": "ordinal",
            "orient": "right",
            "axis": {title: 'Review Rating', "titleColor":"#fff",labelColor:"#fff" }
        },
        y: {
            "aggregate": "sum",
            "field": "ratings",
            "type": "quantitative",
            "axis": {title: "Numbers of Real Don't Recommand Reviews", "titleColor":"#fff", labelColor:"#fff" }
        },
        "tooltip": [{"aggregate": "sum","field": "ratings", "type": "quantitative"}],
        "color": {"value": "#ffa500"},
        "fillOpacity": {
            "condition": [
                {
                    "selection": "highlight", "value": 1
                }
            ],
        "value": 0.5
        },
    }
};
vegaEmbed('#Ratings_TD', Ratings_TD, options);


var Ratings_FD = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"Assets/Data/Fake_D.csv"},
    background:"transparent",
    mark: 'bar',
    width:300,
    height:300,
    "selection": {
        "highlight": {"type": "single", "empty": "none", "on": "mouseover"},
        "select": {"type": "multi"}
    },
    "mark": {
        "type": "bar",
        "fill": "#ffa500",
        "cursor": "pointer"
    },
    title: {
        "text":"Rating & Fake Reviews",
        "color": "#fff"
    },
    encoding: {
        x: {
            "bin": "false",
            "field": "ratings",
            "type": "ordinal",
            "orient": "right",
            "axis": {title: 'Review Rating', "titleColor":"#fff",labelColor:"#fff" }
        },
        y: {
            "aggregate": "sum",
            "field": "ratings",
            "type": "quantitative",
            "axis": {title: "Numbers of Fake Don't Recommand Reviews", "titleColor":"#fff", labelColor:"#fff" }
        },
        "tooltip": [{"aggregate": "sum","field": "ratings", "type": "quantitative"}],
        "color": {"value": "#ffa500"},
        "fillOpacity": {
            "condition": [
                {
                    "selection": "highlight", "value": 1
                }
            ],
        "value": 0.5
        },
    }
};
vegaEmbed('#Ratings_FD', Ratings_FD, options);


var Ratings_FR = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"Assets/Data/Fake_R.csv"},
    background:"transparent",
    mark: 'bar',
    width:300,
    height:300,
    "selection": {
        "highlight": {"type": "single", "empty": "none", "on": "mouseover"},
        "select": {"type": "multi"}
    },
    "mark": {
        "type": "bar",
        "fill": "#ffa500",
        "cursor": "pointer"
    },
    title: {
        "text":"Rating & Fake Reviews",
        "color": "#fff"
    },
    encoding: {
        x: {
            "bin": "false",
            "field": "ratings",
            "type": "ordinal",
            "orient": "right",
            "axis": {title: 'Review Rating', "titleColor":"#fff",labelColor:"#fff" }
        },
        y: {
            "aggregate": "sum",
            "field": "ratings",
            "type": "quantitative",
            "axis": {title: "Numbers of Fake Recommand Reviews", "titleColor":"#fff", labelColor:"#fff" }
        },
        "tooltip": [{"aggregate": "sum","field": "ratings", "type": "quantitative"}],
        "color": {"value": "#ffa500"},
        "fillOpacity": {
            "condition": [
                {
                    "selection": "highlight", "value": 1
                }
            ],
            "value": 0.5
        },
    }
};
vegaEmbed('#Ratings_FR', Ratings_FR, options);
