var Ratings_TR = {
        $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
        description: 'A simple bar chart with embedded data.',
        data: {url:"Real_R.csv"},
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
            "text":"Review Rating & True Recommand",
            "color": "#fff"
        },
        encoding: {
          x: {
            "bin": "false",
            "field": "ratings",
            "type": "nominal",
            "sort": "-y",
            "orient": "right",
            "axis": {title: 'Review Rating',  "titleColor":"#fff"}
          },
          y: {
            "aggregate": "sum",
            "field": "ratings",
            "type": "quantitative",
            "axis": {title: 'Numbers of True Recommand Reviews', "titleColor":"#fff"}
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
      vegaEmbed('#Ratings_TR', Ratings_TR);

