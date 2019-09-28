var mb = {
    data: {
        colors: [["#ffebee", "#ffcdd2", "#ef9a9a", "#e57373", "#ef5350", "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c"],
            ["#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f"],
            ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
            ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
            ["#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e"],
            ["#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1"],
            ["#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b"],
            ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"],
            ["#e0f2f1", "#b2dfdb", "#80cbc4", "#4db6ac", "#26a69a", "#009688", "#00897b", "#00796b", "#00695c", "#004d40"],
            ["#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
            ["#f1f8e9", "#dcedc8", "#c5e1a5", "#aed581", "#9ccc65", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e"],
            ["#f9fbe7", "#f0f4c3", "#e6ee9c", "#dce775", "#d4e157", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717"],
            ["#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17"],
            ["#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00"],
            ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
            ["#fbe9e7", "#ffccbc", "#ffab91", "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c"],
            ["#efebe9", "#d7ccc8", "#bcaaa4", "#a1887f", "#8d6e63", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723"],
            ["#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121"],
            ["#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238"]],
        current: {
            elemCounter: 0,
            primary: 0,
            secondary: 0,
            darkness: 2,
            maxElem: 4,
            bgIsLight: 0,
            globalSkew: 0,
            allowSkewDif: 0
        },
        generated: ""
    },
    init: function (elem) {
        mb.data.elem = document.getElementById(elem);
        mb.data.current.primary = Math.floor((Math.random() * mb.data.colors.length));

        if (mb.data.current.primary === mb.data.colors.length + 1) {
            alert("working");
        }

        mb.data.current.secondary = Math.floor((Math.random() * mb.data.colors.length));
        mb.data.current.darkness = Math.floor((Math.random() * 5) + 2);
        mb.data.current.maxElem = Math.floor((Math.random() * 5) + 4);
        mb.data.current.bgIsLight = Math.round((Math.random() * 1));
        mb.data.current.allowSkewDif = Math.round((Math.random() * 1));
        mb.data.current.globalSkew = Math.floor((Math.random() * 20) + 0);
        mb.data.elem.style.backgroundColor = mb.data.colors[mb.data.current.primary][mb.data.current.darkness];

        mb.genLoop();
    },
    genLoop: function () {
        var loopComplete = false;

        switch (mb.data.current.elemCounter) {
            case 0:
                var secondaryTrue = Math.round((Math.random() * 1));
                if (secondaryTrue === 1) {
                    mb.genObj(0);
                }
                loopComplete = true;
                break;
            case mb.data.current.maxElem - 1:
                mb.genObj(1);
                loopComplete = true;
                break;
        }

        if (!loopComplete) {
            var nextElement = Math.floor((Math.random() * 2) + 2);
            mb.genObj(nextElement);
        }

        mb.data.current.elemCounter++;
        if (mb.data.current.elemCounter < mb.data.current.maxElem) {
            mb.genLoop();
        } else {
            mb.data.elem.innerHTML = mb.data.generated;
        }
    },
    genObj: function (obj) {
        var zindex = mb.data.current.elemCounter;
        var skewDifferent = 0;
        if (mb.data.current.allowSkewDif) {
            skewDifferent = Math.floor((Math.random() * 20) + -20)
        }

        switch (obj) {
            case 0:
                //generate the parallelogram secondary background.
                var width = Math.floor((Math.random() * 60) + 30);
                var x = Math.floor((Math.random() * 40) + -30);
                var color = mb.data.colors[mb.data.current.secondary][mb.data.current.darkness + 1];
                var skew = Math.floor((Math.random() * 20) + 10);
                mb.data.generated += "<div class='mb-parallelogram' style='right: " + x + "%; z-index: " + (zindex + 1) + "; width: " + width + "%;background-color: " + color + "; transform: skewX(" + skew + skewDifferent + "deg);'></div>";
                break;
            case 1:
                //generate the background circle.
                var size = Math.floor((Math.random() * 400) + 200);
                var color = mb.data.colors[mb.data.current.secondary][mb.data.current.darkness + 3];
                var x = Math.floor((Math.random() * 100) + 1);
                var y = Math.floor((Math.random() * 100) + 1);
                mb.data.generated += "<div class='mb-circle' style='left: " + x + "%; top: " + y + "%; z-index: " + zindex + "; width: " + size + "px; height: " + size + "px; background-color: " + color + "'></div>";
                break;
            case 2:
                //generate a horizontal background stripe.
                var height = Math.floor((Math.random() * 140) + 80);
                var rndDarkness = Math.floor((Math.random() * 3) + 1);
                var color = mb.data.colors[mb.data.current.primary][mb.data.current.darkness - rndDarkness + 1];
                if (mb.data.current.bgIsLight === 1) {
                    var color = mb.data.colors[mb.data.current.primary][mb.data.current.darkness + rndDarkness];
                }
                var y = Math.floor((Math.random() * 100) + 1);
                mb.data.generated += "<div class='mb-horizontal-stripe' style='top: " + y + "%; z-index: 0; height: " + height + "px; background-color: " + color + "; transform: skewY(" + mb.data.current.globalSkew + "deg);''></div>";
                break;
            case 3:
                //generate a horizontal background stripe.
                var height = Math.floor((Math.random() * 140) + 80);
                var rndDarkness = Math.floor((Math.random() * 3) + 1);
                var color = mb.data.colors[mb.data.current.primary][mb.data.current.darkness - rndDarkness + 1];
                if (mb.data.current.bgIsLight === 1) {
                    var color = mb.data.colors[mb.data.current.primary][mb.data.current.darkness + rndDarkness];
                }
                var y = Math.floor((Math.random() * 100) + 1);
                mb.data.generated += "<div class='mb-horizontal-stripe' style='top: " + y + "%; z-index: " + zindex + "; height: " + height + "px; background-color: " + color + "; transform: skewY(" + mb.data.current.globalSkew + skewDifferent + "deg);''></div>";
                break;
        }
    }
}
