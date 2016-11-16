const COLORS = [
  "#4C00FF",
  "#0042FF",
  "#0088FF",
  "#0400FF",
  "#01CEFF",
  "#00FFF8",
  "#00FF62",
  "#00FF17",
  "#00FFAD",
  "#40FF01",
  "#9DFF00",
  "#FFE600",
  "#FFCB00",
  "#F9FF00",
  "#FFB101",
  "#FF9900",
  "#FF4E00",
  "#FF2700",
  "#FF7400",
  "#FF0101",
  "#FF0060",
  "#C500FF",
  "#7D00FF",
  "#FF00E4",
  "#FF00BB"
];

class Color {
  static randomColor() {
    return COLORS[Math.floor(Math.random()*25)];
  }

  static bubbleColor(idx) {
    console.log(idx);
    return COLORS[idx];
  }

  static parseHexColor(c) {
    var j = {};

    j.red = parseInt(c.slice(1,3), 16);
    j.green = parseInt(c.slice(3,5), 16);
    j.blue = parseInt(c.slice(5,7), 16);

    return j;
  }

  static colorDifference(user, bubble) {

    let userColor = this.parseHexColor(user.color);
    let bubColor = this.parseHexColor(bubble.color);

    if(typeof(userColor) != 'undefined' && typeof(bubColor) != 'undefined') {
      return ("#" + this.weighColors(user, bubble, userColor.red, bubColor.red) +
        this.weighColors(user, bubble, userColor.green, bubColor.green) +
        this.weighColors(user, bubble, userColor.blue, bubColor.blue));
    }
  }

  static weighColors(b1, b2, c1, c2) {
    let m1 = Math.PI * Math.pow(b1.radius,2);
    let m2 = Math.PI * Math.pow(b2.radius,2);

    return Math.abs(Math.floor((c1*m1 + c2*m2) / (m1 + m2))).toString(16);
  }
}

module.exports = Color;
