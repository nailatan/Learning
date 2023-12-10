db = connect("mongodb://admin:1234@localhost:27017/Learning?authSource=admin");

mongodb: db.irregularverbs.insertMany([
  { present: "be", past: "was/were", meaning: "ser/estar" },
  { present: "become", past: "became", meaning: "convertir" },
  { present: "begin", past: "began", meaning: "comenzar" },
  { present: "bend", past: "bent", meaning: "doblar" },
  { present: "bet", past: "bet", meaning: "apostar" },
  { present: "bite", past: "bit", meaning: "morder" },
  { present: "bleed", past: "bled", meaning: "sangrar" },
  { present: "blow", past: "blew", meaning: "soplar" },
  { present: "break", past: "broke", meaning: "romper" },
  { present: "bring", past: "brought", meaning: "traer" },
  { present: "build", past: "built", meaning: "construir" },
  { present: "catch", past: "caught", meaning: "coger/atrapar" },
  { present: "choose", past: "chose", meaning: "elegir" },
  { present: "come", past: "came", meaning: "venir" },
  { present: "cost", past: "cost", meaning: "valer" },
  { present: "cut", past: "cut", meaning: "cortar" },
  { present: "deal", past: "dealt", meaning: "tratar" },
  { present: "dig", past: "dug", meaning: "escavar" },
  { present: "do", past: "did", meaning: "hacer" },
  { present: "draw", past: "drew", meaning: "dibujar" },
  { present: "drink", past: "drank", meaning: "beber" },
  { present: "drive", past: "drove", meaning: "conducir" },
  { present: "eat", past: "ate", meaning: "comer" },
  { present: "fall", past: "fell", meaning: "caerse" },
  { present: "feed", past: "fed", meaning: "alimentar" },
  { present: "feel", past: "felt", meaning: "sentir" },
  { present: "fight", past: "fought", meaning: "luchar" },
  { present: "find", past: "found", meaning: "encontrar" },
  { present: "fly", past: "flew", meaning: "volar" },
  { present: "forget", past: "forgot", meaning: "olvidar" },
  { present: "forgive", past: "forgave", meaning: "perdonar" },
  { present: "freeze", past: "froze", meaning: "congelar" },
  { present: "get", past: "got", meaning: "conseguir" },
  { present: "give", past: "gave", meaning: "dar" },
  { present: "go", past: "went", meaning: "ir" },
  { present: "grow", past: "grew", meaning: "crecer" },
  { present: "hang", past: "hung", meaning: "colgar" },
  { present: "have", past: "had", meaning: "tener" },
  { present: "hear", past: "heard", meaning: "sentir" },
  { present: "hide", past: "hid", meaning: "esconder" },
  { present: "hit", past: "hit", meaning: "golpear" },
  { present: "hold", past: "held", meaning: "aguantar" },
  { present: "hurt", past: "hurt", meaning: "herir" },
  { present: "keep", past: "kept", meaning: "mantener/guardar" },
  { present: "know", past: "knew", meaning: "saber" },
  { present: "lead", past: "led", meaning: "guiar" },
  { present: "leave", past: "left", meaning: "irse" },
  { present: "lend", past: "lent", meaning: "prestar" },
  { present: "let", past: "let", meaning: "permitir" },
  { present: "light", past: "lit", meaning: "encender" },
  { present: "lose", past: "lost", meaning: "perder" },
  { present: "make", past: "made", meaning: "hacer/crear" },
  { present: "mean", past: "meant", meaning: "significar" },
  { present: "meet", past: "met", meaning: "quedar/conocer" },
  { present: "pay", past: "paid", meaning: "pagar" },
  { present: "put", past: "put", meaning: "poner" },
  { present: "quit", past: "quit", meaning: "abandonar" },
  { present: "read", past: "read", meaning: "leer" },
  { present: "ride", past: "rode", meaning: "montar" },
  { present: "ring", past: "rang", meaning: "sonar" },
  { present: "rise", past: "rose", meaning: "aumentar" },
  { present: "say", past: "said", meaning: "decir" },
  { present: "see", past: "saw", meaning: "ver" },
  { present: "sell", past: "sold", meaning: "vender" },
  { present: "set", past: "set", meaning: "programar" },
  { present: "shake", past: "shook", meaning: "agitar" },
  { present: "shine", past: "shone", meaning: "brillar" },
  { present: "shoot", past: "shot", meaning: "disparar" },
  { present: "shut", past: "shut", meaning: "cerrar" },
  { present: "sing", past: "sang", meaning: "cantar" },
  { present: "sink", past: "sank", meaning: "hundirse" },
  { present: "sit", past: "sat", meaning: "sentar" },
  { present: "sleep", past: "slept", meaning: "dormir" },
  { present: "slide", past: "slid", meaning: "resbalar" },
  { present: "speak", past: "spoke", meaning: "hablar" },
  { present: "speed", past: "sped", meaning: "acelerar" },
  { present: "spend", past: "spent", meaning: "gastar/pasar tiempo" },
  { present: "spin", past: "spun", meaning: "girar" },
  { present: "spread", past: "spread", meaning: "desplegar" },
  { present: "stand", past: "stood", meaning: "estar de pie" },
  { present: "steal", past: "stole", meaning: "robar" },
  { present: "stick", past: "stuck", meaning: "enganxar" },
  { present: "sting", past: "stung", meaning: "picar" },
  { present: "strike", past: "struck", meaning: "golpear" },
  { present: "sweep", past: "swept", meaning: "barrer" },
  { present: "swim", past: "swam", meaning: "nadar" },
  { present: "take", past: "took", meaning: "coger" },
  { present: "teach", past: "taught", meaning: "enseñar" },
  { present: "tear", past: "tore", meaning: "desgarrar" },
  { present: "tell", past: "told", meaning: "decir/explicar" },
  { present: "think", past: "thought", meaning: "pensar" },
  { present: "throw", past: "threw", meaning: "lanzar" },
  { present: "understand", past: "understood", meaning: "entender" },
  { present: "wake", past: "woke", meaning: "despertar" },
  { present: "wear", past: "wore", meaning: "llevar puesto" },
  { present: "win", past: "won", meaning: "ganar" },
  { present: "write", past: "wrote", meaning: "escribir" },
]);
