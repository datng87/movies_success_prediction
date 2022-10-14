var url = "";
const popular_names = ["magalinoã«l", "nadjauhl", "johannawokalek", "sidsebabettknudsen", "katjariemann", "zendaya", "judithgodrã¨che", "celiajohnson", "miasara", "zuleikharobinson", "lynncollins", "maureeno'hara", "janewyman", "helenazengel", "rachelroberts", "norawaldstã¤tten", "sigridbouaziz", "misauehara", "danawynter", "jeannemoreau", "sandrahã¼ller", "emmacatherinerigby", "cherielunghi", "vanessakirby", "tatumo'neal", "catherinefrot", "alexandravandernoot", "mariaschneider", "sophialoren", "mernakennedy", "dakotajohnson", "agneskittelsen", "geneviã¨vepage", "clairetrevor", "lynnredgrave", "keishacastle-hughes", "joannakulig", "agatakulesza", "bã¡rbaragoenaga", "genetierney", "jovanfleet", "julieharris", "marybethhurt", "nimratkaur", "jung-ahyum", "lindazilliacus", "laiacosta", "tikasumpter", "sarahmiles", "capucine", "mercedesruehl", "mã©laniethierry", "elizabethmarvel", "gracevanpatten", "madeleinecarroll", "oksanaakinshina", "veerlebaetens", "valeriehobson", "maudadams", "melaniegriffith", "deborahkerr", "anneparillaud", "sibelkekilli", "margaretlockwood", "hayleyatwell", "geneviã¨vebujold", "adrianaugarte", "laetitiacasta", "marytylermoore", "juliadietze", "maryj.blige", "dominiquesanda", "nadiafarã¨s", "joannagoing", "agnieszkagrochowska", "rosalindrussell", "seung-yunlee", "lindakozlowski", "nataliemorales", "norahjones", "lisaeilbacher", "lisablount", "suzanneclã©ment", "annedorval", "clairebloom", "joancrawford", "yeong-hieseo", "lizaminnelli", "lorisinger", "annieross", "lilytomlin", "gugumbatha-raw", "kimstanley", "fayewong", "dorisday", "joanbennett", "jessicaharper", "lilycollins", "susangeorge", "kerryfox", "leticiabrã©dice", "mirasorvino", "pamelaanderson", "janetgaynor", "myrnaloy", "yã»kotakeuchi", "mikinakatani", "nanakomatsushima", "angiedickinson", "priscillalane", "nevecampbell", "lildagover", "bã©atricedalle", "jenniferhudson", "beyoncã©", "faywray", "goldiehawn", "aliciasilverstone", "ritatushingham", "carolebouquet", "solveigdommartin", "maeclarke", "brigittelin", "mariafalconetti", "kasiasmutniak", "albarohrwacher", "sallykellerman", "mirjanakaranovic", "mirjanajokovic", "ninahoss", "priyankachoprajonas", "auragarrido", "annearcher", "kirinkiki", "sakuraandã´", "anitaekberg", "bojananovakovic", "simonesignoret", "lilisimmons", "natasharichardson", "leegrant", "sandahlbergman", "jeanseberg", "caricevanhouten", "meganferguson", "selenagomez", "angelalansbury", "awkwafina", "shuzhenzhao", "miou-miou", "nastassjakinski", "sondralocke", "yolandemoreau", "jurneesmollett", "kimberlyelise", "joanchen", "barbarabach", "anniegirardot", "illeanadouglas", "kathrynerbe", "lilycole", "steffikã¼hnert", "niavardalos", "marie-lauredougnac", "karinviard", "alexandrashipp", "ornellamuti", "susankelechiwatson", "jennyagutter", "florencepugh", "sylvietestud", "olympiadukakis", "lesleyannwarren", "eileenbrennan", "margotkidder", "sandydennis", "noranavas", "gretascacchi", "claudettecolbert", "meloniediaz", "irenepapas", "alisonbrie", "amymadigan", "lorrainetoussaint", "kassiewesleydepaiva", "jacquelinebisset", "taranehalidoosti", "natalyabondarchuk", "andreasawatzki", "coleengray", "lilliangish", "cher", "melissamccarthy", "christianepaul", "maricelãlvarez", "kaitlyndever", "suelyon", "kajol", "elizabethpeã±a", "ingridthulin", "bjã¶rk", "loripetty", "jennifergrey", "carmenmaura", "adriennebarbeau", "lindsaylohan", "kimtae-ri", "kimmin-hee", "ludivinesagnier", "elizabethmitchell", "imogenpoots", "giuliettamasina", "joanfontaine", "ursulaandress", "jenniferlopez", "megfoster", "ednapurviance", "jeansimmons", "jeanarthur", "irã¨nejacob", "rileykeough", "jessiebuckley", "rosarioflores", "anatorrent", "jobethwilliams", "sandramilo", "markã©tairglovã¡", "marystuartmasterson", "celesteholm", "cã©ciledefrance", "jessicaalba", "ursinalardi", "juliekavner", "pamferris", "embethdavidtz", "marawilson", "rheaperlman", "harrietandersson", "julialouis-dreyfus", "elenaanaya", "svetlanakhodchenkova", "emiliederavin", "ashanti", "rebeccademornay", "amyirving", "caitrã­onabalfe", "ceciliaroth", "paprikasteen", "anne-marieduff", "reginataylor", "marisaberenson", "alexadavalos", "marielhemingway", "shuqi", "livullmann", "gemmajones", "isabellehuppert", "lilyjames", "daniellepanabaker", "marghelgenberger", "debrawinger", "leeremick", "maryastor", "elsalanchester", "barbarastanwyck", "nialong", "blakelively", "annasophiarobb", "roneeblakley", "heatherlangenkamp", "theklareuten", "joelyrichardson", "katrinsass", "dagmaradominczyk", "brookeadams", "nancyallen", "nataliewood", "deniserichards", "manuelavelasco", "jenniferbeals", "amiracasar", "rachelticotin", "sylviasidney", "annabellasciorra", "anneconsigny", "joanblondell", "evearden", "olivianewton-john", "rebeccaferguson", "izabellascorupco", "teresawright", "fannyardant", "elizabethtaylor", "annebaxter", "janefonda", "bettedavis", "bã¡rbaralennie", "anawagener", "marinahands", "shannynsossamon", "marymccormack", "gilliananderson", "laurasangiacomo", "valeriabrunitedeschi", "soledadvillamil", "juliehagerty", "anoukaimã©e", "amberheard", "catherinedeneuve", "courtneylove", "joannewoodward", "leonorwatling", "emmanuelleriva", "elisabethmoss", "elizabethhurley", "elizascanlen", "minniedriver", "jillclayburgh", "penelopeannmiller", "parkerposey", "lesleymanville", "stockardchanning", "virginieledoyen", "a.j.cook", "brigittehelm", "trinedyrholm", "janealexander", "saraforestier", "patricianeal", "rosebyrne", "gloriaswanson", "tippihedren", "gemmaarterton", "kathleenturner", "christinaricci", "shelleywinters", "sarahsnook", "katharinehepburn", "amandapeet", "alidavalli", "jessicabarden", "wendyhiller", "brittanymurphy", "gongli", "vickykrieps", "xunzhou", "baedoona", "virginiamadsen", "leilahatami", "piperlaurie", "nataliemartinez", "kimgreist", "dianeladd", "kellymcgillis", "kimhunter", "carmenejogo", "jeannetripplehorn", "elizabetholsen", "kimcattrall", "mayarudolph", "lauraharring", "idinamenzel", "juliafox", "candicebergen", "katrincartlidge", "martaetura", "katebosworth", "bibiandersson", "marilynmonroe", "lakebell", "carrollbaker", "zooeydeschanel", "lauraharrier", "marlenedietrich", "elizabethdebicki", "elizabethberridge", "ruthgordon", "golshiftehfarahani", "julieandrews", "debbiereynolds", "laurenbacall", "catherineo'hara", "sarahsilverman", "kellypreston", "madelinekahn", "alexandrarapaport", "lisabonet", "julianekã¶hler", "imeldastaunton", "maggiecheung", "melindadillon", "franceso'connor", "barbrastreisand", "sarahpolley", "zoekazan", "maryelizabethwinstead", "ellenbarkin", "lubnaazabal", "loladueã±as", "koasung", "michelledockery", "belã©nrueda", "elisabethshue", "hannahherzsprung", "jessicatandy", "samaraweaving", "gretagerwig", "juliewalters", "lindablair", "terigarr", "charlottelebon", "sarahjessicaparker", "tuesdayweld", "dianelane", "jessicalange", "maryelizabethmastrantonio", "salmahayek", "judydavis", "hopedavis", "felicityjones", "aitanasã¡nchez-gijã³n", "ladygaga", "haileesteinfeld", "allysheedy", "mollyringwald", "joancusack", "felicityhuffman", "claudiagerini", "rubyrose", "oliviadehavilland", "barbarabelgeddes", "kimnovak", "ingeborgadapkunaite", "emmanuellebã©art", "lucyboynton", "kerirussell", "barbarahershey", "olgakurylenko", "shailenewoodley", "juliettebinoche", "ayeletzurer", "ajmichalka", "drewbarrymore", "donnareed", "glennclose", "marie-josã©ecroze", "amysmart", "katecapshaw", "geraldinechaplin", "pamgrier", "agnesmoorehead", "oliviawilde", "cicelytyson", "vivienleigh", "elizabethmcgovern", "rubydee", "emmanuelleseigner", "lenaolin", "miafarrow", "jenniferaniston", "lindahamilton", "katehudson", "jessicabiel", "lindacardellini", "anneheche", "paulettegoddard", "rosemariedewitt", "annebancroft", "angelabassett", "clairedanes", "annafaris", "thelmaritter", "katharineross", "karolineherfurth", "susannelothar", "anyataylor-joy", "judygarland", "kanghye-jeong", "lisakudrow", "aliciavonrittberg", "sophieokonedo", "audreyhepburn", "evamariesaint", "bã©rã©nicebejo", "lilitaylor", "claudiacardinale", "whoopigoldberg", "joelyrichardson", "valeriagolino", "birgitminichmayr", "corinnaharfouch", "martinagedeck", "mirandaotto", "deborahkaraunger", "elisabethrã¶hm", "adriannepalicki", "geenadavis", "famkejanssen", "kateashfield", "daniellakertesz", "mireilleenos", "anamariamarinca", "michelleyeoh", "isabellarossellini", "annafriel", "katebeckinsale", "samanthamathis", "amandaseyfried", "charlotterampling", "brendablethyn", "charlottegainsbourg", "shirleymaclaine", "tabu", "siennamiller", "millajovovich", "noomirapace", "ariadnagil", "ivanabaquero", "lorrainegary", "rachelgriffiths", "gretchenmol", "bridgetfonda", "blythedanner", "teripolo", "sylviahoeks", "zoã«kravitz", "samanthamorton", "ziyizhang", "hollyhunter", "haleybennett", "saffronburrows", "nicolettabraschi", "andiemacdowell", "cybillshepherd", "fayedunaway", "sallirichardson-whitfield", "megryan", "parkso-dam", "choyeo-jeong", "ingridbergman", "melanielynskey", "brielarson", "halleberry", "lindafiorentino", "evanrachelwood", "genarowlands", "tarajip.henson", "maribelverdãº", "demimoore", "kellyreilly", "sharonstone", "emmathompson", "kristinscottthomas", "juliechristie", "hiamabbass", "juliedelpy", "evamendes", "gracekelly", "juliaormond", "januaryjones", "aliciavikander", "sallyhawkins", "annapaquin", "renã©ezellweger", "dianevenora", "emmyrossum", "reginaking", "veramiles", "janetleigh", "renerusso", "sophiemarceau", "nathaliebaye", "clã©mencepoã©sy", "freidapinto", "milakunis", "mary-louiseparker", "catherinemccormack", "patriciaarquette", "paulapatton", "helenmirren", "veronicacartwright", "evagreen", "susansarandon", "radhamitchell", "thandiwenewton", "ashleyjudd", "chloã«gracemoretz", "audreytautou", "sissyspacek", "zaziebeetz", "marisaparedes", "juliettelewis", "mirandarichardson", "madeleinestowe", "andreariseborough", "diannewiest", "kimdickens", "anjelicahuston", "shelleyduvall", "oliviacolman", "helenhunt", "nataschamcelhone", "rosariodawson", "lorrainebracco", "abigailbreslin", "bonniebedelia", "louisefletcher", "miawasikowska", "marymcdonnell", "alexandramarialara", "jamieleecurtis", "vanessaredgrave", "katemara", "monicabellucci", "heathergraham", "jennifermorrison", "dakotafanning", "chloã«sevigny", "anadearmas", "abbiecornish", "marysteenburgen", "beverlyd'angelo", "seanyoung", "brycedallashoward", "lauradern", "islafisher", "kristenstewart", "francesfisher", "karenallen", "frankapotente", "marisatomei", "annakendrick", "alisonpill", "marciagayharden", "kimbasinger", "emilywatson", "ellenburstyn", "mariabello", "michellepfeiffer", "rosamundpike", "amyryan", "hilaryswank", "catherinezeta-jones", "stephaniekurtzuba", "emilyblunt", "leathompson", "reesewitherspoon", "livtyler", "rachelweisz", "jenniferehle", "katieholmes", "vivicaa.fox", "piperperabo", "allisonjanney", "kellymacdonald", "bridgetmoynahan", "connienielsen", "lucyliu", "angelinajolie", "penã©lopecruz", "saoirseronan", "sarahpaulson", "kirstendunst", "rooneymara", "annettebening", "jenniferjasonleigh", "octaviaspencer", "elizabethbanks", "joanallen", "kristenwiig", "maggiesmith", "camerondiaz", "kerrywashington", "ellefanning", "elliotpage", "zoesaldana", "patriciaclarkson", "alicebraga", "catherinekeener", "oliviawilliams", "rosannaarquette", "charlizetheron", "emmawatson", "lauralinney", "violadavis", "margotrobbie", "juliastiles", "mã©lanielaurent", "kathybates", "dianekruger", "michellewilliams", "naomiwatts", "emilymortimer", "careymulligan", "jennifergarner", "nicolekidman", "michellemonaghan", "darylhannah", "rachelmcadams", "sallyfield", "junotemple", "emmastone", "rebeccahall", "juliaroberts", "naomieharris", "amandaplummer", "carriefisher", "melissaleo", "judidench", "jenniferconnelly", "tonicollette", "carrie-annemoss", "sigourneyweaver", "winonaryder", "francesmcdormand", "gwynethpaltrow", "tildaswinton", "sandrabullock", "maggiegyllenhaal", "jodiefoster", "merylstreep", "verafarmiga", "katewinslet", "helenabonhamcarter", "amyadams", "jessicachastain", "scarlettjohansson", "marioncotillard", "umathurman", "keiraknightley", "lã©aseydoux", "dianekeaton", "juliannemoore", "taliashire", "annehathaway", "cateblanchett", "robinwright", "jenniferlawrence", "natalieportman", "janjosefliefers", "rafvallone", "christophmariaherbst", "olivermasucci", "richiemerritt", "johnpayne", "edmundgwenn", "mattsmith", "asieretxeandia", "larseidinger", "petersimonischek", "oliviermartinez", "tompayne", "jean-marcbarr", "nigelterry", "jonfinch", "jacquesvilleret", "thierrylhermitte", "harrybelafonte", "paulmescal", "jamiedornan", "wotanwilkemã¶hring", "andersbaasmo", "pã¥lsverrehagen", "michelpiccoli", "matthewdavis", "dawidogrodnik", "mikkelboefã¸lsgaard", "cliffrobertson", "karraelejalde", "vincentprice", "cliftonwebb", "alaindelon", "kimkap-su", "claesbang", "basilrathbone", "errolflynn", "vincentgallo", "henriklundstrã¶m", "andreaswilson", "belalugosi", "franzrogowski", "maxirons", "dirkbogarde", "stuartwhitman", "tadanobuasano", "jonathanmajors", "robertdonat", "johanheldenbergh", "anthonyquayle", "louisjourdan", "davidduchovny", "kevinzegers", "birolãœnel", "yvesmontand", "michaelredgrave", "haydenchristensen", "johnlynch", "johnhannah", "ãlvaromorte", "javiergutiã©rrez", "chinodarã­n", "jasonmitchell", "samclaflin", "michaelrennie", "heejae", "jakobcedergren", "paulhogan", "themarxbrothers", "davidkeith", "chishã»ryã»", "davidwarner", "antoineolivierpilon", "hidetoshinishijima", "herbertlom", "kimyoon-seok", "jeanrochefort", "helmutgriem", "petergallagher", "chrispenn", "fredward", "brucedavison", "udokier", "jerzystuhr", "januszgajos", "zbigniewzamachowski", "gastã³npauls", "dennisweaver", "paulscofield", "jã©rã©mierenier", "samuellebihan", "georgeo'brien", "fredricmarch", "yutakamatsushige", "ulrichmã¼he", "deanmartin", "jonathanmajors", "jamesfrecheville", "arasbulutiynemli", "wernerkrauss", "nigelhawthorne", "williampetersen", "tomcourtenay", "klausmariabrandauer", "taylorkitsch", "stephanjames", "peterfalk", "williambaldwin", "lewayres", "marcogiallini", "giuseppebattiston", "lazarristovski", "luistosar", "federicoluppi", "michaelb.jordan", "rajkummarrao", "adarshgourav", "richardbasehart", "junkunimura", "robmorrow", "jimbrown", "hugosilva", "lilyfranky", "paulmeurisse", "matthewfox", "braddavis", "louisgarrel", "stevemartin", "jamesearljones", "rexharrison", "jean-paulbelmondo", "craigroberts", "paulrudd", "laurenceharvey", "guillaumecanet", "denzelwhitaker", "nateparker", "johnlone", "danielauteuil", "melvyndouglas", "larrydavid", "danstevens", "toniservillo", "johncorbett", "dennisdun", "dominiquepinon", "gaspardulliel", "robindejesus", "oskarwerner", "justinpierce", "leofitzpatrick", "michaelbeck", "matthewrhys", "burlives", "jamesnorton", "ruperteverett", "kodismit-mcphee", "charlieplummer", "manishdayal", "ompuri", "georgesegal", "michaelb.jordan", "christopherlambert", "kriskristofferson", "edwardarnold", "danhicks", "brucecampbell", "davidniven", "donatasbanionis", "juddhirsch", "marwankenzari", "maxschreck", "jean-pierrelã©aud", "sebastianurzendowsky", "kenforee", "kevinmccarthy", "warrenbeatty", "maxriemelt", "jã¼rgenvogel", "paddyconsidine", "johngallagherjr.", "jackcarson", "shahrukhkhan", "louisgossettjr.", "klauskinski", "fernandofernã¡ngã³mez", "garycooper", "kumailnanjiani", "danaandrews", "raymondmassey", "delroylindo", "topol", "richardwidmark", "samwaterston", "chadwickboseman", "fernandorey", "busterkeaton", "gregwise", "jonbernthal", "vincentd'onofrio", "boriskarloff", "maximilianschell", "predrag'miki'manojlovic", "tyronepower", "idriselba", "tellysavalas", "montgomeryclift", "burtlancaster", "walterhuston", "ralphrichardson", "jeffreyhunter", "roddypiper", "jackiecoogan", "franksinatra", "peterustinov", "curdjã¼rgens", "robertwalker", "tonyshalhoub", "romainduris", "jerrylewis", "billskarsgã¥rd", "timcurry", "tomhiddleston", "timothybottoms", "thomashadenchurch", "glenhansard", "jamesdean", "peterweller", "andylau", "tomschilling", "robertvaughn", "thomasturgoose", "lukeevans", "juanminujã­n", "antonyelchin", "roe-hakim", "kimsang-kyung", "ossiedavis", "leemarvin", "emorycohen", "lillobrancato", "chazzpalminteri", "fredericklau", "timblakenelson", "sachabaroncohen", "alexsharp", "robertcummings", "christopherreeve", "taharrahim", "spencertracy", "pedropascal", "taronegerton", "jasonflemyng", "ianrichardson", "robbiecoltrane", "johnbelushi", "darrenmcgavin", "danecook", "stevemartin", "seangullette", "peterfinch", "danielgimã©nezcacho", "jasonschwartzman", "joelgrey", "waltermatthau", "robertenglund", "johnsaxon", "mikaelpersbrandt", "michaelgwisdek", "hajung-woo", "felemartã­nez", "jean-pierrecassel", "jesseplemons", "yulbrynner", "simonhelberg", "fernandocayo", "eduardonoriega", "sidneypoitier", "georgepeppard", "simonrussellbeale", "jetli", "elyasm'barek", "patrickdempsey", "mariocasas", "gustafskarsgã¥rd", "paulbettany", "raymilland", "javiercã¡mara", "matthewbroderick", "jean-louistrintignant", "hardykrã¼ger", "leslienielsen", "roberthays", "robertryan", "marcellomastroianni", "adolphemenjou", "tatsuyanakadai", "juliansands", "maxthieriot", "mikemyers", "sã¶nkemã¶hring", "vittoriogassman", "tomholland", "charliehunnam", "richardburton", "mickeyrooney", "briangleeson", "gustavfrã¶hlich", "trevorhoward", "gertfrã¶be", "leonardosbaraglia", "zachbraff", "georgekennedy", "bobhoskins", "dominiccooper", "ryano'neal", "charleslaughton", "farleygranger", "aamirkhan", "georgesanders", "nickstahl", "augustdiehl", "danielolbrychski", "donaldo'connor", "genekelly", "richardfarnsworth", "josecoronado", "edgarramã­rez", "philippenoiret", "alexanderskarsgã¥rd", "chriso'donnell", "budcort", "terencestamp", "georgeraft", "tonycurtis", "johncassavetes", "beaubridges", "samriley", "edwardg.robinson", "henrycavill", "stipeerceg", "ryanphillippe", "tomhulce", "trevanterhodes", "ronlivingston", "kylemaclachlan", "ernestborgnine", "robertwagner", "dominicwest", "michaelyork", "rufussewell", "merabninidze", "ottosander", "ulrichnoethen", "ulrichmatthes", "burtreynolds", "willferrell", "chowyun-fat", "kirkdouglas", "kieranculkin", "michaelcera", "johndavidwashington", "sebastianstan", "charliehunnam", "ralphmacchio", "johnwayne", "nikolajcoster-waldau", "lesliehoward", "omarsharif", "fredmacmurray", "stevecoogan", "anatoliysolonitsyn", "heinoferch", "shahabhosseini", "johncandy", "nielsarestrup", "peterfonda", "petercoyote", "benfoster", "karlmalden", "jamescoburn", "taylorkitsch", "rogermoore", "chrissarandon", "caryelwes", "michaelealy", "jackpalance", "martinlandau", "robertmitchum", "emilioestevez", "macaulayculkin", "gianmariavolontã¨", "aldenehrenreich", "davidkross", "riccardoscamarcio", "pilouasbã¦k", "bengazzara", "laurenceolivier", "jamesspader", "genewilder", "thomasbolarsen", "martoncsokas", "eddiemurphy", "michaellonsdale", "michaelpitt", "aarontaylor-johnson", "riverphoenix", "ulrichmã¼he", "lionelbarrymore", "gunnarbjã¶rnstrand", "clarkgable", "matthiasschoenaerts", "billycrystal", "anthonyquinn", "ricardodarã­n", "tylerperry", "robmorgan", "jamesmason", "kevinkline", "songkang-ho", "stevemcqueen", "rupertfriend", "pruitttaylorvince", "ramimalek", "yooji-tae", "choimin-sik", "tonychiu-waileung", "ulrichtukur", "noahsegan", "loganlerman", "justintimberlake", "faresfares", "antoniobanderas", "jackthompson", "aidanquinn", "paulhenreid", "rodsteiger", "gerardbutler", "isaachdebankolã©", "himeshpatel", "donaldpleasence", "tã³maslemarquis", "ulrichthomsen", "mandypatinkin", "adamsandler", "timothydalton", "josephfiennes", "sachabaroncohen", "matthiashabich", "lucashedges", "demiã¡nbichir", "conradveidt", "kiefersutherland", "ryanreynolds", "barrykeoghan", "johnsavage", "surajsharma", "jonathanrhysmeyers", "charliesheen", "moritzbleibtreu", "tomhiddleston", "johngielgud", "christianslater", "timothyhutton", "irrfankhan", "alanalda", "dennishaysbert", "rhysifans", "charltonheston", "sergilã³pez", "georgemackay", "dermotmulroney", "lakeithstanfield", "arnoldschwarzenegger", "griffindunne", "toshirã´mifune", "jeremyirons", "josephcotten", "choiwoo-sik", "leesun-kyun", "songkang-ho", "georgec.scott", "antonyelchin", "brucegreenwood", "ericbana", "zacharyquinto", "chrispine", "ashtonkutcher", "jacklemmon", "treatwilliams", "charlesbronson", "mattdillon", "johncusack", "takashishimura", "anthonyperkins", "petero'toole", "adamdriver", "orsonwelles", "jackblack", "woodyallen", "joshhartnett", "horstbuchholz", "patrickwilson", "leonardnimoy", "gã©rarddepardieu", "williamholden", "petersellers", "omarsy", "samneill", "djimonhounsou", "madsmikkelsen", "armiehammer", "timothã©echalamet", "neilpatrickharris", "jã¼rgenprochnow", "dennishopper", "jamiebell", "burghartklauãÿner", "matthewmacfadyen", "nicholashoult", "franklangella", "jamesgandolfini", "carygrant", "milesteller", "dennisquaid", "franã§oiscluzet", "richardgere", "akselhennie", "davefranco", "dannyglover", "mickeyrourke", "royscheider", "gregorypeck", "diegoluna", "giancarlogiannini", "danaykroyd", "williamatherton", "thomasmitchell", "robertshaw", "jamesgarner", "billpullman", "arminmueller-stahl", "peterlorre", "malcolmmcdowell", "jamesd'arcy", "richarddreyfuss", "robertobenigni", "channingtatum", "jamesmcavoy", "charleschaplin", "jackwarden", "jimcaviezel", "jimsturgess", "michaelpeã±a", "tomskerritt", "florianlukas", "billycrudup", "oliverreed", "jasonrobards", "justintheroux", "brunoganz", "stephenbaldwin", "richardjenkins", "adambaldwin", "humphreybogart", "leevancleef", "karlmarkovics", "andrewgarfield", "gaelgarcã­abernal", "clauderains", "martinbalsam", "sylvesterstallone", "chrisevans", "kennethbranagh", "tobeymaguire", "robertredford", "justinbartha", "edhelms", "matthewgoode", "paulnewman", "eddieredmayne", "sharltocopley", "alfredmolina", "vindiesel", "gregkinnear", "patrickswayze", "jesseeisenberg", "devpatel", "nickfrost", "billybobthornton", "sebastiankoch", "cubagoodingjr.", "jameswoods", "shialabeouf", "davidthewlis", "petersarsgaard", "henryfonda", "alexanderfehling", "augustdiehl", "tilschweiger", "eliroth", "leej.cobb", "robertpattinson", "f.murrayabraham", "thomaskretschmann", "samworthington", "michaelbiehn", "jesperchristensen", "rupertgraves", "piercebrosnan", "lievschreiber", "davidhemmings", "mathieuamalric", "eliwallach", "jasonclarke", "michaeldouglas", "chrispratt", "jamesfranco", "chrishemsworth", "ianmckellen", "oscarisaac", "jeandujardin", "rodtaylor", "halholbrook", "benstiller", "markrylance", "sethrogen", "tophergrace", "bryancranston", "jeffbridges", "gabrielbyrne", "sheawhigham", "haleyjoelosment", "danielday-lewis", "jeffreywright", "ericbana", "christopherlee", "johnhawkes", "liamhemsworth", "rupertgrint", "danielradcliffe", "emilehirsch", "jasonstatham", "kevincostner", "davidcarradine", "joeledgerton", "michaelnyqvist", "jeffgoldblum", "jimbroadbent", "nicknolte", "hughgrant", "richardconte", "johnturturro", "dannyhuston", "joshhutcherson", "cliveowen", "alecguinness", "stevecarell", "johnlithgow", "williamhurt", "terrencehoward", "dannyaiello", "mahershalaali", "vincentcassel", "nicolascage", "simonpegg", "andygarcia", "jamesstewart", "johnmalkovich", "albertfinney", "melgibson", "billpaxton", "christianberkel", "valkilmer", "alanarkin", "jonvoight", "kurtrussell", "rutgerhauer", "j.k.simmons", "genehackman", "samshepard", "michaelsheen", "jamescaan", "michaelj.fox", "rayliotta", "jeffdaniels", "tomberenger", "tommyleejones", "kevinbacon", "christopherwalken", "domhnallgleeson", "donjohnson", "elijahwood", "michaelkeaton", "giovanniribisi", "johncleese", "davidstrathairn", "benwhishaw", "vingrhames", "davidoyelowo", "franconero", "timothyspall", "viggomortensen", "hughjackman", "sterlinghayden", "williamh.macy", "garysinise", "matthewmodine", "jeanreno", "colinfirth", "michaelstuhlbarg", "markhamill", "jonahhill", "seanpenn", "joshbrolin", "forestwhitaker", "johnc.reilly", "jonathanpryce", "ewanmcgregor", "javierbardem", "seanconnery", "dannydevito", "samrockwell", "elliottgould", "johntravolta", "jimcarrey", "colinfarrell", "robinwilliams", "donaldsutherland", "tomsizemore", "kylechandler", "zachgalifianakis", "richardharris", "brucedern", "aaroneckhart", "robertdowneyjr.", "harrydeanstanton", "stanleytucci", "jeremyrenner", "beniciodeltoro", "danielbrã¼hl", "owenwilson", "doncheadle", "stellanskarsgã¥rd", "pauldano", "adrienbrody", "marlonbrando", "mykeltiwilliamson", "michaelshannon", "benedictcumberbatch", "christopherplummer", "christopherlloyd", "maxvonsydow", "johngoodman", "willsmith", "ethanhawke", "paulgiamatti", "markwahlberg", "brendangleeson", "joepesci", "dustinhoffman", "geoffreyrush", "alanrickman", "chiwetelejiofor", "anthonyhopkins", "jamiefoxx", "guypearce", "martinsheen", "petepostlethwaite", "kenwatanabe", "michaelmadsen", "alecbaldwin", "orlandobloom", "heathledger", "michaelfassbender", "ianholm", "timroth", "christophwaltz", "billmurray", "danielcraig", "laurencefishburne", "jaredleto", "benaffleck", "barrypepper", "johncazale", "johnhurt", "willemdafoe", "keanureeves", "benkingsley", "tomwilkinson", "johncarrolllynch", "edharris", "timrobbins", "matthewmcconaughey", "caseyaffleck", "joaquinphoenix", "clinteastwood", "judelaw", "hugoweaving", "bradleycooper", "denzelwashington", "georgeclooney", "harveykeitel", "markruffalo", "josephgordon-levitt", "woodyharrelson", "jakegyllenhaal", "stevebuscemi", "liamneeson", "russellcrowe", "ryangosling", "robertduvall", "philipseymourhoffman", "tomcruise", "jacknicholson", "tomhardy", "kevinspacey", "ralphfiennes", "samuell.jackson", "cillianmurphy", "johnnydepp", "harrisonford", "edwardnorton", "brucewillis", "alpacino", "garyoldman", "tomhanks", "christianbale", "michaelcaine", "mattdamon", "robertdeniro", "leonardodicaprio", "morganfreeman", "bradpitt"];


document.getElementById("predict").onclick = predict_function;

function predict_function() {

    var startYear = d3.select("#startYear").property("value");
    var runtimeMinutes = d3.select("#runtimeMinutes").property("value");
    var number_of_languages = d3.select("#number_of_languages").property("value");
    var budget = d3.select("#budget").property("value");
    var is_in_collection = d3.select("#is_in_collection").property("value");
    var release_month = d3.select("#release_month").property("value");
    var Actors = d3.select("#Actors").property("value");
    var Rated = d3.select("#Rated").property("value");


    if (startYear == "") {
        startYear = 2022;
    };
    if (runtimeMinutes == "") {
        runtimeMinutes = 0;
    };
    if (number_of_languages == "") {
        number_of_languages = 1;
    };
    if (budget == "") {
        budget = 0;
    };
    if (is_in_collection == "") {
        is_in_collection = 0;
    };
    if (release_month == "") {
        release_month = 0;
    };

    //convert to lower case, remove space
    var popular_actors_count = 0;
    Actors = Actors.toLowerCase();
    Actors = Actors.replace(/\s+/g, '');
    actor_names = Actors.split(",");
    //calculate number of popular actors
    if (actor_names.length <= 3) {
        for (i = 0; i < actor_names.length; i++) {
            if (popular_names.includes(actor_names[i])) {
                popular_actors_count += 1;
            }
        }
    }
    else {
        for (i = 0; i < 3; i++) {
            if (popular_names.includes(actor_names[i])) {
                popular_actors_count += 1;
            }
        }
    };

    //convert to lower case, remove space

    var rated_unknown = 0;
    var rated_R = 0;
    var rated_MA = 0;
    var rated_Unrated = 0;
    var rated_PG = 0;
    var rated_TV_14 = 0;
    var rated_PG_13 = 0;
    var rated_G = 0;


    switch (Rated) {
        case 'Unknown':
            rated_unknown = 1;
            break;
        case 'R':
            rated_R = 1;
            break;
        case 'MA':
            rated_MA = 1
            break;
        case 'Unrated':
            rated_Unrated = 1
            break;
        case 'PG':
            rated_PG = 1
            break;
        case 'TV_14':
            rated_TV_14 = 1
            break;
        case 'PG_13':
            rated_PG_13 = 1;
            break;
        case 'G':
            rated_G = 1;
            break;
    }

    console.log(Rated, rated_unknown, rated_R, rated_MA, rated_Unrated, rated_PG, rated_TV_14, rated_PG_13, rated_G);

    var genre_Mystery = 0;
    var genre_Adventure = 0;
    var genre_Documentary = 0;
    var genre_Drama = 0;
    var genre_Thriller = 0;
    var genre_Comedy =0;
    var genre_Action = 0;
    var genre_unknown =0;
    var genre_Crime =0;
    var genre_Horror=0;
    var genre_Romance = 0;

    Mystery = document.getElementById("Mystery");
    if (Mystery.checked) {
        genre_Mystery=1;
    }
    Adventure = document.getElementById("Adventure");
    if (Adventure.checked) {
        genre_Adventure=1;
    }
    Documentary = document.getElementById("Documentary");
    if (Documentary.checked) {
        genre_Documentary=1;
    }
    Drama = document.getElementById("Drama");
    if (Drama.checked) {
        genre_Drama=1;
    }
    Thriller = document.getElementById("Thriller");
    if (Thriller.checked) {
        genre_Thriller=1;
    }
    Comedy = document.getElementById("Comedy");
    if (Comedy.checked) {
        genre_Comedy=1;
    }
    Action = document.getElementById("Action");
    if (Action.checked) {
        genre_Action=1;
    }
    unknown = document.getElementById("unknown");
    if (unknown.checked) {
        genre_unknown=1;
    }
    Crime = document.getElementById("Crime");
    if (Crime.checked) {
        genre_Crime=1;
    }
    Horror = document.getElementById("Horror");
    if (Horror.checked) {
        genre_Horror=1;
    }
    Romance = document.getElementById("Romance");
    if (Romance.checked) {
        genre_Romance=1;
    }

    var data = [startYear,runtimeMinutes,number_of_languages,budget,is_in_collection,
        release_month,popular_actors_count,rated_unknown,rated_R,rated_MA,rated_Unrated,rated_PG,rated_TV_14,rated_PG_13,rated_G,
        genre_Mystery,genre_Adventure,genre_Documentary,genre_Drama,genre_Thriller,genre_Comedy,genre_Action,genre_unknown,genre_Crime,
        genre_Horror,genre_Romance];
    
    var predict_data = '';
    for (i=0;i<data.length;i++){
        if (i<(data.length-1)){
            predict_data += data[i] +',';
        }
        else{
            predict_data += data[i];
        }
    }
    


    url = 'prediction/' + predict_data;

    d3.json(url).then(function (movie_result) {
        var result = document.getElementById("Result");
        result = result;
        result.setAttribute("value", movie_result);
    });
};
