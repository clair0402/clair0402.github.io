var options={
    tooltip:{theme:'custom'},
    actions:false
}

var Length_RD = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"Assets/Data/L_Real_D.csv"},
    background:"transparent",
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
        "text":"Review Length & Fake Review",
        "color": "#fff"
    },
    encoding: {
        x: {
            "bin": "false",
            "field": "review_length",
            "type": "ordinal",
            "sort": "x",
            "orient": "right",
            "axis": {title: 'Review Length', "titleColor":"#fff", "labelColor":"#fff"}
        },
        y: {
            "aggregate": "count",
            "field": "review_length",
            "type": "quantitative",
            "axis": {title: "Count of Real Don't Recommend Reviews", "titleColor":"#fff", "labelColor":"#fff" }
        },
        "tooltip": [{"aggregate": "count","field": "review_length", "type": "quantitative"}],
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
vegaEmbed('#Length_RD', Length_RD, options);

var Length_RR = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"Assets/Data/L_Real_R.csv"},
    background:"transparent",
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
        "text":"Emotion Polarity & Real Review",
        "color": "#fff"
    },
    encoding: {
        x: {
            "bin": "false",
            "field": "review_length",
            "type": "ordinal",
            "sort": "x",
            "orient": "right",
            "axis": {title: 'Review Length', "titleColor":"#fff", "labelColor":"#fff"}
        },
        y: {
            "aggregate": "count",
            "field": "review_length",
            "type": "quantitative",
            "axis": {title: "Count of Real Recommend Reviews", "titleColor":"#fff", "labelColor":"#fff"}
        },
        "tooltip": [{"aggregate": "count","field": "review_length", "type": "quantitative"}],
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
vegaEmbed('#Length_RR', Length_RR, options);


var Length_FR = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"Assets/Data/L_Fake_R.csv"},
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
        "text":"Emotion Polarity & Fake Review",
        "color": "#fff"
    },
    encoding: {
        x: {
            "bin": "false",
            "field": "review_length",
            "type": "ordinal",
            "sort": "x",
            "orient": "right",
            "axis": {title: 'Review Length', "titleColor":"#fff", "labelColor":"#fff"}
        },
        y: {
            "aggregate": "count",
            "field": "review_length",
            "type": "quantitative",
            "axis": {title: "Count of Fake Recommend Reviews", "titleColor":"#fff", "labelColor":"#fff"}
        },
        "tooltip": [{"aggregate": "count","field": "review_length", "type": "quantitative"}],
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
vegaEmbed('#Length_FR', Length_FR, options);


var Length_FD = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"Assets/Data/L_Fake_D.csv"},
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
        "text":"Emotion Polarity & Fake Review",
        "color": "#fff"
    },
    encoding: {
        x: {
            "bin": "false",
            "field": "review_length",
            "type": "ordinal",
            "sort": "x",
            "orient": "right",
            "axis": {title: 'Review Length', "titleColor":"#fff", "labelColor":"#fff"}
        },
        y: {
            "aggregate": "count",
            "field": "review_length",
            "type": "quantitative",
            "axis": {title: "Count of Fake Don't Recommend Reviews", "titleColor":"#fff", "labelColor":"#fff"}
        },
        "tooltip": [{"aggregate": "count","field": "review_length", "type": "quantitative"}],
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
vegaEmbed('#Length_FD', Length_FD, options);

