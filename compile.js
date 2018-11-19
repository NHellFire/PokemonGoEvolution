var handlebars = require('handlebars');
var fs = require('fs');

handlebars.registerHelper("icon", function(p) {
	p = p.toLowerCase();

	switch (p) {
		case "nidoran (female)":
			return "nidoran-f";
		case "nidoran (male)":
			return "nidoran-m";
		case "deoxys":
			return p + "-normal";
		case "wormadam":
			return p + "-plant";
		case "rotom":
			return p + "-normal";
		case "ralts (male)":
			return "ralts";
		case "kirlia (male)":
			return "kirlia";
		case "gallade (male)":
			return "gallade";
		case "giratina":
			return p + "-altered";
		case "shaymin":
			return p + "-land";
		case "darmanitan":
			return p + "-standard";
		case "meloetta":
			return p + "-aria";
		case "flabébé":
			return "flabebe";
		case "aegislash":
			return p + "-blade";
		case "meowstic":
			return p + "-male";
		case "hoopa":
			return p + "-confined";
		default:
			return p.replace(".", "").replace(" ", "-").replace("'", "");;
	}
});

handlebars.registerHelper("url", function(p) {
	p = p.toLowerCase();

	switch (p) {
		case "flabébé":
			return "flabebe";
		case "ralts (male)":
			return "ralts";
		case "kirlia (male)":
			return "kirlia";
		case "gallade (male)":
			return "gallade";
		default:
			return p.replace(".", "").replace(" ", "-").replace("'", "");
	}
});

handlebars.registerHelper("generation", function(p) {
	if (p <= 151) return 1;
	if (p <= 251) return 2;
	if (p <= 386) return 3;
	if (p <= 493) return 4;
	if (p <= 649) return 5;
	if (p <= 721) return 6;
	if (p <= 809) return 7;
});

handlebars.registerHelper("ifRequiresBuddy", function(str, options) {
	if (str.endsWith("km")) return options.fn(this);
	return options.inverse(this);
});

fs.readFile('Table.hbs', 'utf8', function (err, Table) {
  if (err) {
    return console.log(err);
  }
  fs.readFile('pokemon.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var template = handlebars.compile(Table);
    var result = template(JSON.parse(data));

    fs.writeFile('Table.html', result, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  });
});


