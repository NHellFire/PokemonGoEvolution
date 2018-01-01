all: index.html

Table.html: ../pokemon.json
	cd .. && node compile.js
	mv ../Table.html .

index.html: index.html.in Table.html
	sed -e '/##TABLE##/r Table.html' -e '/##TABLE##/d' $< > $@

clean:
	$(RM) index.html Table.html

.PHONY: all
