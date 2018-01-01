all: index.html

Table.html: ../pokemon.json ../compile.js ../Table.hbs
	cd .. && node compile.js
	mv ../Table.html .

index.html: index.html.in Table.html
	sed -e '/##TABLE##/r Table.html' -e '/##TABLE##/d' $< > $@

clean:
	$(RM) index.html Table.html

test:
	php -S 0.0.0.0:3333

.PHONY: all clean test
