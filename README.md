Þetta verkefni var búið til með Create React APP. Þetta verkefni er dæmi um hvernig er hægt að nota Geolocation API í React forriti til að sækja og birta staðsetningu notanda.

Eiginleikar: 

Geolocation API innleitt á síðuna. Með því að nota API vafrans um staðsetingu er hægt að birta hvar notandinn er (með leyfi notandans).

Sýnir raunverulega staðsetingu á flottan og skiljalegan hátt með því að birta bæði lengdar- og breiddargráðu á síðuna.

Bitar úr kóða:

CurrentLocation.js: Þetta ber ábyrgð á því að ná í og birta staðsetningu notanda.

Notast er við "useState" til að stýra ástandi staðsetningar.

useEffect er notað til að keyra Geolocation API kall eftir að allir "components" eru settir inn í DOM.

Staðsetning sótt með 'navigator.geolocation.getCurrentPosition'

Staðsetning er birt eða villu skilaðboð ef ekki tekst að sækja staðsetningu

App.js:

Aðal hluti forritsins sem birtir "CurrentLocation" þáttinn

Sýnir notkun á innfluttum hlutum í React forriti.

Til að nota síðuna skal opna hlekk síðunnar '' og LEYFA vafranum að fá aðgang að staðsetningu þinni, annars virkar þetta ekki.