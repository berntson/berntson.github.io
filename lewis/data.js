/* Content for the Uppsala guide. Add a "thing" by dropping it into the right list. */
window.DATA = {
  welcome: {
    title: "Welcome to Uppsala",
    lead: "We're glad you're coming. Summer here is good, and it's better with friends. This is a list of ideas, not a schedule. Look around, see what sounds fun, and we'll plan the days together once you're here.",
    body: "Uppsala is small and easy. The river runs through the middle, with the cathedral and old town on one side and our place a short walk from the other. You can cross the whole center on foot in twenty minutes. Stockholm is an hour south by train, and the coast and islands are close too."
  },

  sections: [
    /* ---------------- PLAN ---------------- */
    { id:"plan", label:"Plan", type:"content", title:"The plan",
      intro:"Who's around when, and a rough sketch of the days. Nothing's fixed.",
      html:`
        <div class="grid two">
          <div class="card"><span class="phase p1">Everyone</span><h3>Tue Jun 23 → Sat Jun 27</h3>
            <p>Both families in town. The big group things (a Stockholm day, croquet, a cookout) fit best now.</p></div>
          <div class="card"><span class="phase p2">Andy's family</span><h3>Sat Jun 27 → Thu Jul 2</h3>
            <p>After Danny's family flies on, there's room for something slower: an overnight ferry, or a couple of nights away.</p></div>
        </div>
        <p class="intro" style="margin:22px 0 4px">A rough day-by-day (tap to open):</p>
        <div class="tl">
          <details><summary><span class="d">Tue Jun 23</span> Arrivals <span class="arr">›</span></summary><div class="body">Everyone lands and trains into Uppsala. Easy first evening: a fika by the river, dinner at home.</div></details>
          <details><summary><span class="d">Wed Jun 24</span> Easy Uppsala day <span class="arr">›</span></summary><div class="body">Cathedral, the old town, the gardens. Maybe the pool if it's warm.</div></details>
          <details><summary><span class="d">Thu Jun 25</span> Stockholm <span class="arr">›</span></summary><div class="body">The natural everyone-day on Djurgården. Could swap with Friday.</div></details>
          <details><summary><span class="d">Fri Jun 26</span> Uppsala + croquet <span class="arr">›</span></summary><div class="body">The royal mounds or the steam train, then croquet and a cookout.</div></details>
          <details><summary><span class="d">Sat Jun 27</span> Danny's family flies on <span class="arr">›</span></summary><div class="body">Early send-off. Andy's family stays.</div></details>
          <details><summary><span class="d">Jun 28 – Jul 1</span> The bigger window <span class="arr">›</span></summary><div class="body">A ferry, Visby, or the archipelago fits here, plus slower Uppsala days.</div></details>
          <details><summary><span class="d">Thu Jul 2</span> Andy's family departs <span class="arr">›</span></summary><div class="body">Onward to the UK.</div></details>
        </div>` },

    /* ---------------- UPPSALA ---------------- */
    { id:"uppsala", label:"Uppsala", type:"sub", title:"Uppsala",
      intro:"Our town, and the everyday things we want to show you.",
      subs:[
        { id:"see", label:"Things to See", things:[
          { id:"cathedral", title:"Uppsala Cathedral", img:"cathedral.jpg",
            blurb:"The largest church in the Nordics.",
            detail:"Begun around 1270 and finished in 1435. Gustav Vasa, the founder of modern Sweden, is buried inside, and so is the botanist Carl Linnaeus. The relics of Sweden's patron saint rest here too. Free to walk through; there's a small treasury upstairs.",
            places:[{name:"Uppsala domkyrka", addr:"Domkyrkoplan, Uppsala", maps:"Uppsala domkyrka", hours:"Daily 08:00–18:00 · free entry"}] },
          { id:"gamla-uppsala", title:"Gamla Uppsala", img:"gamla-uppsala.jpg",
            blurb:"Giant royal grave mounds, the old seat of the Viking-age kings.",
            detail:"Three mounds, each about ten meters high, raised in the 500s. This was the seat of the early kings and a famous pagan temple site. Open fields to roam, a medieval church, and a small museum. A short bus ride out (city bus 2).",
            places:[{name:"Gamla Uppsala Museum", addr:"Disavägen 15, Uppsala", maps:"Gamla Uppsala Museum", hours:"Daily 11:00–17:00. Adults 150 kr, under 20 free."}] },
          { id:"gustavianum", title:"Gustavianum", img:"gustavianum.jpg",
            blurb:"The university's old domed building, with a 1660s anatomical theatre.",
            detail:"The university museum, under the copper dome across from the cathedral. The anatomical theatre on top was built in the 1660s for public dissections. Also holds antiquities and the Augsburg art cabinet. (Worth checking ahead in case of renovation.)",
            places:[{name:"Gustavianum", addr:"Akademigatan 3, Uppsala", maps:"Gustavianum Uppsala", hours:"Check Google Maps for current hours"}] },
          { id:"silver-bible", title:"The Silver Bible", img:"silver-bible.jpg",
            blurb:"A 6th-century gospel written in silver and gold ink.",
            detail:"In the university library, Carolina Rediviva. The Codex Argenteus is a 1,500-year-old copy of the gospels in the Gothic language, written in silver and gold on purple vellum. On display, and free to see.",
            places:[{name:"Carolina Rediviva", addr:"Dag Hammarskjölds väg 1, Uppsala", maps:"Carolina Rediviva Uppsala", hours:"Check Google Maps for current hours · free"}] },
          { id:"castle", title:"Uppsala Castle", img:"castle.jpg",
            blurb:"A pink Vasa-era fortress on the hill, with the best views in town.",
            detail:"Gustav Vasa started building it in 1549. It has seen its share of Swedish history, including Queen Christina's abdication in 1654. Good views over the city and cathedral, and an art museum inside.",
            places:[{name:"Uppsala slott", addr:"Slottet, Uppsala", maps:"Uppsala slott castle", hours:"Grounds open daily; museum hours on Google Maps"}] },
          { id:"linnaeus-garden", title:"Linnaeus Garden", img:"linnaeus-garden.jpg",
            blurb:"The home and garden of the man who named every living thing.",
            detail:"Carl Linnaeus gave us the way we name species (Homo sapiens and the rest). This was Sweden's first botanical garden, replanted by him in 1741, with his house next door. A nice place to let kids run.",
            places:[{name:"Linnéträdgården", addr:"Svartbäcksgatan 27, Uppsala", maps:"Linnéträdgården Uppsala", hours:"Summer Tue–Sun 11:00–16:00 · 0–17 free, adults 120 kr"}] },
          { id:"biotopia", title:"Biotopia", img:"biotopia.jpg",
            blurb:"A free, hands-on nature museum.",
            detail:"Swedish wildlife and interactive displays, free entry. One of the two best museum stops for the little ones.",
            places:[{name:"Biotopia", addr:"Vasagatan 4, Uppsala", maps:"Biotopia Uppsala", hours:"Check Google Maps for current hours · free"}] },
          { id:"evolution", title:"The Evolution Museum", img:"evolution.jpg",
            blurb:"Dinosaur skeletons, fossils, and minerals.",
            detail:"The university's evolution museum, with real dinosaur skeletons. A hit for the 4–8 crowd.",
            places:[{name:"Evolutionsmuseet", addr:"Norbyvägen 16, Uppsala", maps:"Evolutionsmuseet Uppsala", hours:"Check Google Maps for current hours"}] },
          { id:"botanical", title:"Botanical Garden & greenhouse", img:"botanical.jpg",
            blurb:"A big garden below the castle, with a tropical greenhouse.",
            detail:"Free outdoor garden to roam, plus a warm greenhouse full of bananas, coffee, and a giant water lily. The greenhouse is a favorite.",
            places:[{name:"Botaniska trädgården", addr:"Villavägen 8, Uppsala", maps:"Botaniska trädgården Uppsala", hours:"Garden free, daily. Greenhouse summer Tue–Fri 9–15, Sat–Sun 11–16"}] },
          { id:"upplandsmuseet", title:"Upplandsmuseet", img:"upplandsmuseet.jpg",
            blurb:"The county museum, by the river falls. Free.",
            detail:"Uppsala's regional museum, in the old mill right at the Fyris falls in the middle of town. Free, central, and an easy stop on a walk.",
            places:[{name:"Upplandsmuseet", addr:"S:t Eriks gränd 6, Uppsala", maps:"Upplandsmuseet Uppsala", hours:"Open daily; hours on Google Maps · free"}] },
        ]},
        { id:"do", label:"Things to Do", things:[
          { id:"fika", title:"Swedish fika", img:"fika.jpg",
            blurb:"The daily coffee-and-a-bun pause.",
            detail:"Fika isn't really \"getting coffee.\" It's a pause built into the day: coffee, something sweet (a cinnamon bun is the classic), and unhurried company. People do it every day, often twice. We will too. Here are our two favorites near the house.",
            places:[
              {name:"Centralkonditoriet", addr:"Vretgränd 16, Uppsala", maps:"Centralkonditoriet Uppsala", hours:"Mon–Fri 06:30–18:00 · Sat 09:00–15:30 · Sun closed"},
              {name:"Konditori Fågelsången", addr:"Munkgatan 3, Uppsala", maps:"Konditori Fågelsången Uppsala", hours:"Mon–Fri 07:30–19:00 · Sat–Sun 09:00–18:00"} ] },
          { id:"summer-zone", title:"Uppsala Summer Zone", img:"summer-zone.jpg",
            blurb:"A free summer play-and-sport zone, right by the stadium.",
            detail:"Each summer the city sets up a big free activity area on the bandy pitch at Studenternas, a few minutes' walk from us along the river. A pump track for bikes and scooters, a sports wall, giant games, and free gear to borrow (balls, rackets, skates), plus a café. It leans a bit older, so for the littlest ones the playground in Stadsträdgården next door is perfect.",
            places:[{name:"Uppsala Summer Zone", addr:"Studenternas, Ulleråkersvägen 6, Uppsala", maps:"Uppsala Summer Zone", hours:"Summer: weekdays 09:00–21:00 · weekends 10:00–19:00 · free"}] },
          { id:"fyrishov", title:"Fyrishov", img:"fyrishov.jpg",
            blurb:"A big adventure pool: a warm shallow end and slides for the bigger kids.",
            detail:"Indoor adventure pool with a warm shallow end for little ones and water slides for the bigger kids, plus outdoor pools in summer. The best hot-day or rainy-day plan.",
            places:[{name:"Fyrishov", addr:"Idrottsgatan 2, Uppsala", maps:"Fyrishov Uppsala", hours:"Summer daily 09:00–19:00 · adult 135 kr, child 4–15 115 kr, under 4 free"}] },
          { id:"steam-train", title:"The steam train", img:"steam-train.jpg",
            blurb:"A real narrow-gauge steam train out into the countryside.",
            detail:"Lennakatten runs a vintage steam train from the station out toward the countryside. An easy half-day round trip, and catnip for kids. It runs only on select days (Fri–Sun, plus Wed–Thu from July 1), and departure times change by date, so we'll pick a day and check the timetable.",
            places:[{name:"Lennakatten (Uppsala Östra)", addr:"Uppsala Östra station", maps:"Uppsala Östra station Lennakatten", hours:"Select days; see lennakatten.se for the day's timetable"}],
            links:[{label:"Timetable", url:"https://lennakatten.se/tidtabeller/"}] },
          { id:"lordagsgodis", title:"Lördagsgodis", img:"lordagsgodis.jpg",
            blurb:"Walls of pick-and-mix candy you scoop by weight.",
            detail:"\"Saturday candy.\" The tradition is sweets once a week, on Saturday, and Swedish shops have whole walls of loose candy you scoop into a bag. A whole childhood ritual here. We may cheat on the day.",
            places:[{name:"Hemmakväll", addr:"Drottninggatan 10, Uppsala", maps:"Hemmakväll Uppsala Drottninggatan", hours:"Check Google Maps for current hours"}] },
          { id:"croquet", title:"Croquet & games",
            blurb:"The croquet run continues. We'll have a set and a lawn.",
            detail:"We're keeping the croquet tradition going, with a set and a garden lawn. We can also catch World Cup games together; the evening matches are easy to watch here." },
          { id:"board-games", title:"Board games at home",
            blurb:"A games night in.",
            detail:"We've got a shelf of board games. An easy night in, good for a jet-lagged first evening or after a big day out." },
          { id:"beer-tasting", title:"A beer tasting at home",
            blurb:"Pub experience in your own home — our deck overlooks a pub.",
            detail:"Our deck looks right out over a pub, so we can do a beer tasting at home with the same view and none of the bar prices. We'll grab a spread of Swedish and Baltic brews (and a mead, for the Viking theme) from Systembolaget, the state liquor store, and pair it with a World Cup game. Systembolaget keeps short hours and is closed Sundays, so we'd buy ahead." },
          { id:"carolinaparken", title:"The \"mini Uppsala\" playground",
            blurb:"A storybook playground built as a tiny model of Uppsala.",
            detail:"Carolinaparken's playground recreates Uppsala in miniature, themed on the Pelle Svanslös (Peter-No-Tail) children's books that are set right here: a little cathedral tower to climb, Pelle's house, the bakery, a bus to nowhere. Best for the younger kids. Behind Carolina Rediviva, central.",
            places:[{name:"Carolinaparkens lekplats", addr:"Carolinaparken, Uppsala", maps:"Carolinaparkens lekplats Uppsala", hours:"Open · free"}] },
          { id:"klosterparken", title:"Klosterparken playground",
            blurb:"A medieval-village playground in the center.",
            detail:"A destination playground themed as a tiny medieval village — a smithy, market stalls, a prison tower, a wishing well — on the site of a real Franciscan friary. Central, just off Klostergatan.",
            places:[{name:"Klosterparkens lekplats", addr:"Klostergatan, Uppsala", maps:"Klosterparkens lekplats Uppsala", hours:"Open · free"}] },
          { id:"stadstradgarden", title:"Stadsträdgården playground",
            blurb:"A big playground in the riverside park, by the stadium.",
            detail:"Uppsala's main park (Stadsträdgården, sometimes called Stadsparken) runs along the river by the stadium. Its playground has a South-Seas theme: a giant tortoise and lizard, slides, swings, carousels, and a big sandbox. Right next to the Summer Zone, so easy to combine.",
            places:[{name:"Stadsträdgårdens lekplats", addr:"Stadsträdgården, Uppsala", maps:"Stadsträdgårdens lekplats Uppsala", hours:"Open · free"}] },
        ]},
        { id:"eat-out", label:"Eating Out", things:[
          { id:"cathedral-cafe", title:"Cathedral Café",
            blurb:"A good-value lunch right by the cathedral. A Rick Steves pick.",
            detail:"Katedralkaféet, next to the cathedral: reasonable lunch specials, and the proceeds help the homeless. Central, unpretentious, exactly our kind of spot.",
            places:[{name:"Katedralkaféet", addr:"by Uppsala Cathedral", maps:"Katedralkaféet Uppsala", hours:"Check Google Maps for current hours"}] },
          { id:"odinsborg", title:"Odinsborg",
            blurb:"The café at Gamla Uppsala — sandwiches, daily specials, and mead.",
            detail:"Right by the royal mounds, so it pairs with a Gamla Uppsala visit. Sandwiches and lunch plates, and they serve mead, which fits the Viking theme. Also a Rick Steves pick.",
            places:[{name:"Odinsborg", addr:"Gamla Uppsala", maps:"Odinsborg Gamla Uppsala", hours:"Check Google Maps for current hours"}] },
          { id:"pong", title:"Pong",
            blurb:"Asian / wok — noodles and stir-fry, fast and casual.",
            detail:"An easy, cheap, kid-friendly wok place. Quick noodles and stir-fry when we want something fast and good.",
            places:[{name:"Pong", addr:"central Uppsala", maps:"Pong restaurant Uppsala", hours:"Check Google Maps for current hours"}] },
          { id:"kebab-hus", title:"Kebab Hus (pizza)",
            blurb:"Our neighborhood pizza place. Simple and kid-proof.",
            detail:"The easy local pizza go-to. No fuss, kids are happy.",
            places:[{name:"Kebab House", addr:"Kungsängsgatan 1, Uppsala", maps:"Kebab House Kungsängsgatan Uppsala", hours:"Mon–Thu 10:00–20:00 · Fri 10:00–04:00 · Sat 11:00–04:00 · Sun 11:00–20:00"}] },
          { id:"max", title:"MAX burgers",
            blurb:"The Swedish burger chain. Better than the American ones.",
            detail:"A fun \"fast food, but Swedish\" stop. The burgers are genuinely good. Note: the central spot on Stora Torget is weekend late-night only now, so for a daytime burger the MAX out on Kvarnängsgatan is the everyday option.",
            places:[{name:"MAX, Stora Torget", addr:"Stora Torget 6–8, Uppsala", maps:"MAX Stora Torget Uppsala", hours:"Fri–Sat 10:00–05:00 only (central) · daytime: MAX Kvarnängsgatan"}] },
          { id:"domtrappkallaren", title:"Domtrappkällaren",
            blurb:"The nice dinner out, in a cellar by the cathedral.",
            detail:"Uppsala's classic fine-dining cellar, right by the cathedral. The spot if we want one proper grown-up night. Worth booking ahead.",
            places:[{name:"Domtrappkällaren", addr:"Sankt Eriks gränd 15, Uppsala", maps:"Domtrappkällaren Uppsala", hours:"Mon–Fri 11:00–22:00 (lunch 11–15) · Sat 12:00–22:00 · Sun closed · reserve ahead"}] },
        ]},
        { id:"eat-home", label:"Eating at Home", things:[
          { id:"iowa", title:"Iowa favorites",
            blurb:"A little taste of home: Maid-Rites and Cincinnati chili.",
            detail:"We'll cook you some American favorites. Maid-Rite loose-meat sandwiches and Cincinnati chili are on the list. Comfort food, the way it should be." },
          { id:"swedish-home", title:"Swedish staples",
            blurb:"Meatballs and potatoes, and Swedish mac and cheese.",
            detail:"And a few Swedish things while you're here: meatballs with boiled potatoes, and Swedish mac and cheese." },
          { id:"crowd", title:"Easy crowd-pleasers",
            blurb:"Tacos, hotdogs, waffles, pancakes, eggs.",
            detail:"Plus the easy stuff the kids will eat: tacos, hotdogs, and a breakfast-for-dinner night of waffles, pancakes, and eggs." },
        ]},
        { id:"shopping", label:"Shopping", things:[
          { id:"lindex", title:"Lindex",
            blurb:"Swedish kids' clothes, nice and reasonably cheap.",
            detail:"A Swedish chain with good, affordable children's clothes (and women's). One of our go-tos for the kids. The central store is in S:t Per Gallerian.",
            places:[{name:"Lindex", addr:"Svartbäcksgatan 3, Uppsala (S:t Per Gallerian)", maps:"Lindex Svartbäcksgatan Uppsala", hours:"Mon–Fri 10–19 · Sat 10–17 · Sun 12–16"}] },
          { id:"ahlens", title:"Åhléns",
            blurb:"The central department store — kids' clothes and everything else.",
            detail:"Uppsala's department store, right on the main square. Good, affordable Swedish kids' clothes, plus toys and household things under one roof.",
            places:[{name:"Åhléns", addr:"Stora Torget 5, Uppsala", maps:"Åhléns Uppsala Stora Torget", hours:"Mon–Fri 10–19 · Sat 10–18 · Sun 11–18"}] },
          { id:"clas-ohlson", title:"Clas Ohlson",
            blurb:"Household goods, gadgets, and useful odds and ends.",
            detail:"A very Swedish shop for hardware, kitchen things, gadgets, and travel bits. Handy if you need anything for the trip. Central store in S:t Per Gallerian, a block north of the square.",
            places:[{name:"Clas Ohlson", addr:"S:t Persgatan 10, Uppsala (S:t Per Gallerian)", maps:"Clas Ohlson S:t Per Gallerian Uppsala", hours:"Mon–Fri 09–19 · Sat 10–18 · Sun 11–17"}] },
          { id:"myrorna", title:"Myrorna",
            blurb:"Sweden's big charity second-hand shop, central.",
            detail:"Second-hand is a Swedish institution. Myrorna is the largest charity chain, and the central Uppsala store is a short walk from the square — good for kids' clothes, toys, and finds.",
            places:[{name:"Myrorna", addr:"Vaksalagatan 7, Uppsala", maps:"Myrorna Vaksalagatan Uppsala", hours:"Mon–Fri 10–19 · Sat 10–17 · Sun 12–16"}] },
          { id:"erikshjalpen", title:"Erikshjälpen",
            blurb:"A bigger second-hand store, out at Boländerna.",
            detail:"Another charity second-hand, larger and with a café, but out at Boländerna about 3 km east (bus 11, not walkable). Worth it for a proper browse. Summer hours are limited, so check before going.",
            places:[{name:"Erikshjälpen Second Hand", addr:"Bolandsgatan 8A, Uppsala (Boländerna)", maps:"Erikshjälpen Second Hand Uppsala", hours:"Limited summer hours — check Google Maps"}] },
        ]},
      ]},

    /* ---------------- STOCKHOLM ---------------- */
    { id:"stockholm", label:"Stockholm", type:"sub", title:"Stockholm",
      intro:"An hour away by train, easy to do in a day. Most of the good stuff for a family sits together on one green island, Djurgården, and getting there by little ferry is half the fun. We'd pick one main thing per half-day.",
      subs:[
        { id:"see", label:"Things to See", things:[
          { id:"skansen", title:"Skansen", img:"skansen.jpg",
            blurb:"An open-air museum and a Nordic-animals zoo. Room to run.",
            detail:"The world's first open-air museum: old houses and farms from across Sweden, plus a zoo with bears, wolves, and a petting area. Rick Steves gives it his top rating, and it's easily half a day on its own.",
            places:[{name:"Skansen", addr:"Djurgårdsslätten 49–51, Stockholm", maps:"Skansen Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"vasa", title:"The Vasa", img:"vasa-ship.jpg",
            blurb:"A giant 1600s warship raised whole from the seabed.",
            detail:"A warship that sank on its maiden voyage in 1628 and was raised, almost intact, 333 years later. Rick Steves' other top-rated Stockholm sight. Short and a real wow.",
            places:[{name:"Vasamuseet", addr:"Galärvarvsvägen 14, Stockholm", maps:"Vasa Museum Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"junibacken", title:"Junibacken", img:"junibacken.jpg",
            blurb:"The Pippi Longstocking story museum, for the little ones.",
            detail:"The Astrid Lindgren children's museum, with the story train and Pippi's house. Right next to the Vasa, so easy to pair.",
            places:[{name:"Junibacken", addr:"Galärvarvsvägen 8, Stockholm", maps:"Junibacken Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"city-hall", title:"City Hall", img:"city-hall.jpg",
            blurb:"The Nobel banquet hall, and a tower view.",
            detail:"Stadshuset, where the Nobel Prize banquet is held each December. You go in on a guided tour, and the tower gives a fine view over the water. One of Rick Steves' higher-rated sights.",
            places:[{name:"Stockholms stadshus", addr:"Hantverkargatan 1, Stockholm", maps:"Stockholm City Hall Stadshuset", hours:"Tours daily; times on Google Maps"}] },
          { id:"royal-palace", title:"The Royal Palace", img:"royal-palace.jpg",
            blurb:"The king's official residence, in the old town.",
            detail:"One of the biggest palaces in Europe, in Gamla Stan. State rooms, the treasury, and the armory are inside, and the guard changes out front.",
            places:[{name:"Kungliga slottet", addr:"Slottsbacken 1, Stockholm", maps:"Royal Palace Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"royal-armory", title:"The Royal Armory",
            blurb:"Royal armor, swords, and coronation coaches. Free.",
            detail:"Livrustkammaren, in the palace cellars: kings' armor and swords, gilded coaches, the works. Free, and a hit for the knights-and-horses crowd.",
            places:[{name:"Livrustkammaren", addr:"Slottsbacken 3, Stockholm", maps:"Livrustkammaren Stockholm", hours:"Open daily; free; hours on Google Maps"}] },
          { id:"history-museum", title:"Swedish History Museum", img:"history-museum.jpg",
            blurb:"Viking gold and the Middle Ages.",
            detail:"Historiska museet, with a famous Viking-age collection and a gold room. Good for older kids who like the Viking angle.",
            places:[{name:"Historiska museet", addr:"Narvavägen 13–17, Stockholm", maps:"Swedish History Museum Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"nordic-museum", title:"Nordic Museum", img:"nordic-museum.jpg",
            blurb:"Swedish life and culture, in a palace-like hall.",
            detail:"Nordiska museet tells the story of Swedish everyday life over the last 500 years, in a grand building on Djurgården next to the Vasa.",
            places:[{name:"Nordiska museet", addr:"Djurgårdsvägen 6–16, Stockholm", maps:"Nordiska museet Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"nationalmuseum", title:"Nationalmuseum", img:"nationalmuseum.jpg",
            blurb:"Sweden's main art museum, on the waterfront.",
            detail:"The national art and design collection, recently renovated, a short walk from the palace.",
            places:[{name:"Nationalmuseum", addr:"Södra Blasieholmshamnen 2, Stockholm", maps:"Nationalmuseum Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"fotografiska", title:"Fotografiska", img:"fotografiska.jpg",
            blurb:"A big, modern photography museum.",
            detail:"A well-loved photography museum in a converted harbor building, with a top-floor café and a view. More for the grown-ups.",
            places:[{name:"Fotografiska", addr:"Stadsgårdshamnen 22, Stockholm", maps:"Fotografiska Stockholm", hours:"Open daily, late; hours on Google Maps"}] },
          { id:"abba", title:"ABBA The Museum", img:"abba.jpg",
            blurb:"Dancing Queen, costumes, and karaoke.",
            detail:"An interactive museum on Djurgården for the ABBA fans: costumes, the studio, and sing-along booths. Surprisingly fun with kids.",
            places:[{name:"ABBA The Museum", addr:"Djurgårdsvägen 68, Stockholm", maps:"ABBA Museum Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"nobel", title:"Nobel Prize Museum", img:"nobel.jpg",
            blurb:"The story of the prize, on the old town square.",
            detail:"A small museum on Stortorget in Gamla Stan about the Nobel Prize and its winners. Easy to fold into an old-town wander.",
            places:[{name:"Nobel Prize Museum", addr:"Stortorget 2, Stockholm", maps:"Nobel Prize Museum Stockholm", hours:"Open daily; hours on Google Maps"}] },
          { id:"drottningholm", title:"Drottningholm Palace", img:"drottningholm.jpg",
            blurb:"The royal summer palace, by boat from the city.",
            detail:"The royal family's UNESCO-listed summer home, with baroque gardens and an 18th-century theatre. The nicest way there is the hour-long boat from near City Hall.",
            places:[{name:"Drottningholm", addr:"Drottningholm, Stockholm", maps:"Drottningholm Palace", hours:"Open daily in summer; hours on Google Maps"}] },
        ]},
        { id:"do", label:"Things to Do", things:[
          { id:"gamla-stan", title:"Gamla Stan", img:"gamla-stan.jpg",
            blurb:"Wander the medieval old town.",
            detail:"Stockholm's old town is a maze of cobbled lanes, ochre houses, and little squares on its own island. Free to wander, with cafés, the palace, and the Nobel museum all right here.",
            places:[{name:"Gamla Stan", addr:"Gamla Stan, Stockholm", maps:"Gamla Stan Stockholm", hours:""}] },
          { id:"changing-guard", title:"Changing of the Guard", img:"changing-guard.jpg",
            blurb:"A summer military parade to the palace, around midday.",
            detail:"In summer the guard marches to the Royal Palace with a band, around the middle of the day. Free, fun, and good scampering-kid energy. Check the day's time.",
            places:[{name:"Royal Palace (outer courtyard)", addr:"Slottsbacken, Stockholm", maps:"Royal Palace Stockholm changing of the guard", hours:"Summer, around midday; check the day's schedule"}] },
          { id:"grona-lund", title:"Gröna Lund", img:"grona-lund.jpg",
            blurb:"The waterfront amusement park, for the bigger kids.",
            detail:"A classic amusement park on Djurgården, right by the water. Best for the older kids and the rides.",
            places:[{name:"Gröna Lund", addr:"Lilla Allmänna Gränd 9, Stockholm", maps:"Gröna Lund Stockholm", hours:"Seasonal; hours on Google Maps"}] },
          { id:"djurgarden-ferry", title:"The Djurgården ferry",
            blurb:"Ride the little ferry to the museum island.",
            detail:"The ferry from Slussen, in the old town, over to Djurgården is a cheap, short boat ride and a small adventure in itself. The kids will rate it as highly as the museums.",
            places:[{name:"Djurgården ferry", addr:"Slussen → Djurgården", maps:"Djurgården ferry Slussen Stockholm", hours:"Runs frequently in summer"}] },
        ]},
        { id:"eat-out", label:"Eating Out", things:[
          { id:"grillska", title:"Grillska Huset",
            blurb:"A cheap, good cafeteria right on the old-town square. A Rick Steves pick.",
            detail:"On Stortorget in Gamla Stan, run by a charity: a cheap, unpretentious lunch with seating indoors and out on the square. Central and exactly our kind of place.",
            places:[{name:"Grillska Huset", addr:"Stortorget 3, Gamla Stan, Stockholm", maps:"Grillska Huset Stockholm", hours:"Daily; hours on Google Maps"}] },
          { id:"ostermalms", title:"Östermalms Saluhall",
            blurb:"A grand old food hall — counters, seafood, lunch.",
            detail:"Stockholm's beautiful 1880s food hall, freshly restored. Lots of counters under one roof, so it's an easy lunch where everyone picks their own.",
            places:[{name:"Östermalms Saluhall", addr:"Östermalmstorg 1, Stockholm", maps:"Östermalms Saluhall Stockholm", hours:"Mon–Sat; hours on Google Maps"}] },
          { id:"kvarnen", title:"Kvarnen",
            blurb:"A 1908 beer hall in Södermalm — and the Hammarby supporters' pub.",
            detail:"A characterful old beer hall with a sports soul (it's the Hammarby football pub). A fun night out for the sports fans, maybe around a World Cup match.",
            places:[{name:"Kvarnen", addr:"Tjärhovsgatan 4, Södermalm, Stockholm", maps:"Kvarnen Stockholm", hours:"Daily; hours on Google Maps"}] },
          { id:"pelikan", title:"Pelikan",
            blurb:"Old-school beer hall — meatballs the size of golf balls.",
            detail:"A hearty, unfussy beer hall in Södermalm, good for a fun group dinner and a splurge. Another solid beer-hall option for the crew.",
            places:[{name:"Pelikan", addr:"Blekingegatan 40, Södermalm, Stockholm", maps:"Pelikan Stockholm", hours:"Daily; hours on Google Maps"}] },
          { id:"djurgarden-eats", title:"On Djurgården & in Gamla Stan",
            blurb:"Plenty of easy options — and hot-dog stands everywhere.",
            detail:"You won't go hungry. Skansen and the museums have cafés, hot-dog stands are everywhere (Rick Steves calls them the culturally appropriate fast food), there's ice cream all over Djurgården, and Gamla Stan is full of casual places between the sights." },
        ]},
      ]},

    /* ---------------- FARTHER OUT ---------------- */
    { id:"farther", label:"Farther Out", type:"things", title:"Farther out",
      intro:"Ideas for going a bit further. Most fit best with Andy's family, in the longer stretch.",
      things:[
        { id:"ferry", title:"An overnight ferry", img:"tallinn.jpg",
          blurb:"Sail overnight to Tallinn or Helsinki and wake up in another country.",
          detail:"The classic Baltic mini-cruise, and the boat is half the point. You sleep in a cabin and wake up in another country. Book a family cabin with proper bunks so everyone has a bed — kids under six travel free, and the buffet is free for the little ones too. The ships are built for families: play areas, a small pool, and on the Silja Line boats a big play hall and the Moomins. We'd lean Tallinn, for the medieval old town. One thing from pricing it out: summer cabins sell out, and a weekday sailing has noticeably more room (and a better price) than a weekend, so we'd want to book fairly soon once we pick dates.",
          places:[{name:"Departs Stockholm", addr:"Stockholm ferry terminals (Tallink Silja / Viking Line)", maps:"Tallink Silja terminal Stockholm", hours:""}] },
        { id:"visby", title:"Visby", img:"visby.jpg",
          blurb:"A walled medieval town on the island of Gotland.",
          detail:"Gotland was a powerhouse of the medieval Baltic. In the Viking age it was a trading hub, and by the 1200s Visby was a leading town of the Hanseatic League, grown rich on trade between Russia, the Baltic, and western Europe. Its ring wall, from the 1200s and 1300s, runs 3.4 km and is one of the best-preserved medieval town walls in Europe. After the town's decline you're left with merchant houses and the dramatic ruins of its old churches. The whole place is a UNESCO World Heritage site: cobbled lanes, a ruined-church skyline, sea on all sides, and a Pippi Longstocking park nearby. You get there by ferry and stay a night or two. With both families it's tight, since Danny's stretch is short, so our hunch is to save it for Andy's family. Open to either.",
          places:[{name:"Visby, Gotland", addr:"Visby", maps:"Visby Gotland", hours:""}] },
        { id:"archipelago", title:"The Stockholm archipelago", img:"archipelago.jpg",
          blurb:"Thousands of islands off Stockholm, made for summer.",
          detail:"The skärgård is where people here go in summer: swimming off warm rocks, ice cream on a jetty, the boat ride itself. The easy version is a short boat to Fjäderholmarna for a half-day, or a night on Grinda with shallow swimming and a little farm.",
          places:[{name:"Stockholm archipelago", addr:"Strömkajen, Stockholm", maps:"Strömkajen Stockholm archipelago boats", hours:""}] },
      ]},

    /* ---------------- GOOD TO KNOW ---------------- */
    { id:"good", label:"Good to Know", type:"content", title:"Good to know",
      intro:"A few practical things before you come.",
      html:`
        <div class="grid two">
          <div class="card"><h3>Where you're staying</h3>
            <p><b>Danny &amp; Ellie:</b> a family room at Elite Hotel Academia, a minute from the station and a short walk from us.</p>
            <p><b>Andy's family:</b> we'll sort this out together.</p></div>
          <div class="card"><h3>Getting here</h3>
            <p>Fly into Stockholm Arlanda, then take the regional train straight to Uppsala &mdash; about 20 minutes, every 15 or so. We're a few minutes' walk from the station; text us and we'll meet you there, or come get you at the airport.</p>
            <p><b>One quirk:</b> the airport's train platform has ticket gates, so buy before you head down. In the <b>UL app</b>, get an Arlanda &rarr; Uppsala ticket <i>and</i> add the "Arlanda Passage Fee." Kids under 18 skip the fee. (Ticket machines are by the platform too.) There's an escalator and an elevator down.</p></div>
          <div class="card"><h3>Getting around</h3>
            <p>In town we use <b>UL</b> &mdash; the same app and ticket work on city buses and trains. Buses are cashless (card or app). A single ride is 40 kr, good for 75 minutes, and kids 7&ndash;11 ride free with you. Grab the UL app before you come.</p></div>
          <div class="card"><h3>Groceries</h3>
            <p>All central: a <b>Coop</b> by the train station, a <b>Hemk&ouml;p</b> right by us, and an <b>ICA</b> on the big square. (Each has a wall of pick-and-mix candy for the kids.)</p></div>
          <div class="card"><h3>Pharmacies</h3>
            <p>Two <i>apotek</i> are a few minutes across the river: <b>Apoteket Forumkvarteret</b> (Kungs&auml;ngsgatan 6&ndash;8) and <b>Apoteket</b> on Kungsgatan 95. Open daily, shorter hours on weekends.</p></div>
          <div class="card"><h3>Strollers &mdash; we've got you</h3>
            <p>No need to bring one. We have a double <a href="https://www.thule.com/en-us/bike-trailers/bike-trailers-for-kids/thule-chariot-sport-2-double-_-10201031" target="_blank" rel="noopener">Thule Chariot Sport 2</a> (carries two kids, with a jogging wheel for runs) and a single <a href="https://www.thule.com/en-us/strollers/jogging-strollers/thule-urban-glide-2-_-10101949" target="_blank" rel="noopener">Thule Urban Glide 2</a> running stroller. Bring a carrier if you love yours, but the wheels are covered.</p></div>
          <div class="card"><h3>What to pack</h3>
            <p>Layers. Warm afternoons, cool evenings (highs around 20&deg;C / 70&deg;F), the odd shower &mdash; a packable rain jacket beats an umbrella. Comfy shoes and swimwear for the pool.</p></div>
          <div class="card"><h3>The light</h3>
            <p>It barely gets dark in June, light until past ten with a long glowing dusk. Bring eye masks for the kids' room if they sleep better in the dark.</p></div>
          <div class="card"><h3>If you need help</h3>
            <p>Emergencies: <b>112</b> (English spoken). For non-urgent health questions, <b>1177</b> points you to the nearest open clinic or pharmacy.</p></div>
          <div class="card"><h3>Money</h3>
            <p>Sweden is nearly cashless. Cards and Apple Pay work everywhere, so you won't need kronor in your pocket.</p></div>
          <div class="card"><h3>Language</h3>
            <p>Everyone speaks English. The tap water is excellent. You'll be fine.</p></div>
        </div>` },
  ]
};
