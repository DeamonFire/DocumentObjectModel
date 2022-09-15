const houses = [
    {   name: "Ланістери", 
        content:{
            house: "Дім: Ланістери",
            sigil: "Герб: Золотий лев, що стоїть на задніх лапах, на малиновому полі",
            words: "Клич: Почуй мій рев!",
            titles: "Титул: Хранителі Заходу",
            seat: "Фортеця: Скеля Кастерлі",
            region: "Регіон: Західні землі",
            head: "Лорд: Тайвін Ланістер",
            founded: "Засновник: Ланн Розумний",
            about: "Опис: Ланністери з Кручі Кастерлі — одна із Шляхетних родин Вестероса. Керують у Західних землях.",
            history: "Історія: Ланністери високі, красиві і светловолосы, вони ведуть свій родовід від андалов, які змогли знищити могутнє королівство Західні землі Західних землях, по чоловічій лінії і від Ланна Розумного, легендарного пройдисвіта і шахрая, який зміг заволодіти Кручею Кастерли, по жіночій лінії. Довгий час Ланністери правили Західними землями як Королі Скелі. Останнім з цієї королівської династії став Лоран Ланністер. Об'єднавшись з Королем Простір Мірному Гарднером, він виставив проти Эйгона Таргариена шістдесят тисяч воїнів, але зазнав поразки в битві, відомої як Поле вогню. З цього часу Ланністери служать королю на залізному троні в якості верховних лордів Західних земель та зберігачів заходу.Золоті копальні Скелі Кастерли і Золотого Зуба зробили Ланністерів найбагатшим з великих будинків. Тітос Ланністер, батько нинішнього глави дому Тайвіна Ланністеров, привів будинок в занепад, розгубивши значні кошти на неблагонадійних вкладеннях. В результаті вассальный будинок Рейнов підняв повстання. Тайвін Ланністер зумів не тільки придушити його, але і відновити колишню репутацію будинку. Влаштувавши шлюб своєї дочки Серсеї з Робертом Баратеоном в обмін на підтримку у війні проти Божевільного Короля, Тайвін в результаті поріднився з майбутнім королем. У Серсеи народилося троє дітей, батьком яких був не король, а її брат Джеймі."   
        },
    },
    {
        name: "Арени",
        content:{
            house: "Дім: Арени",
            sigil: "Герб: Білий сокіл, що летить, і місяць на синьому тлі",
            words: "Клич: Високий як честь",
            titles: "Титул: Хранителі Сходу",
            seat: "Фортеця: Орлине Гніздо",
            region: "Регіон: Долина Аррен",
            head: "Лорд: Джон Арен",
            founded: "Засновник: Артіс Аррен",
            about: "Опис: Аррени — один з великих будинків Вестероса. Вони правлять у Долині Арренів тисячу років. У даний момент лордом Орлиного Гнізда є Робін Аррен.",
            history: "Історія: Згідно з легендою, будинок був заснований сером Артісом Арреном, який прилетів верхи на соколі і приземлився на найвищій горі долини. Потім він переміг Короля Грифонів, останнього гірського короля перших людей, і став першим королем гір і долин. Його нащадки продовжили правити в долині до вторгнення Ейгона Таргарієна, після чого вони стали підкорятися Королю на Залізному троні. Замок Орлине Гніздо вважається неприступним і захищає його жителів від нападу диких племен. Лорд Джон Аррен був шанованим і благородним чоловіком. Він виховував Еддарда Старка і Роберта Баратеона. Коли була викрадена Ліанна Старк, а Божевільний король стратив Рікарда Старка, Джон Аррен підняв повстання. До нього приєдналися Старкі і Баратеони. Вони уклали союз з будинком Таллі шляхом одруження Еддарда Старка на Кейтілін Таллі. Після перемоги новий король Роберт Баратеон призначив Джона Аррена правицею. Протягом наступних сімнадцяти років Джон виконував свої обов'язки, поки не виявив, що діти Роберта і Серсеї зовсім не були схожі на нащадків короля. Незабаром після цього він тяжко захворів і раптово помер. У Джона залишилися дружина Ліза і син Робін."   
        }
    },
    {
        name: "Баратеони",
        content:{
            house: "Дім: Баратеони",
            sigil: "Герб: Чорний коронований олень, що стоїть на задніх ногах, на золотому полі",
            words: "Клич: Нам — лють",
            titles: "Титул: Верховні Володарі Штормових Земель",
            seat: "Фортеця: Штормова Межа",
            region: "Регіон: Штормові землі",
            head: "Лорд: Роберт Баратеон",
            founded: "Засновник: Томмен Баратеон",
            about: "Опис: Баратеони — один з великих домів Вестероса, і наймолодший з них.",
            history: "Історія: Родоначальником дому є Оріс Баратеон, який був воєначальником у Ейгона Завойовника. Ходили чутки, що Оріс є бастардом і зведеним братом Ейгона. Оріс вбив останнього короля Штормового Межі, Аргилака Гордовитого, і зайняв замок. Його доньку, Аргеллу, він взяв у дружини." 
        },
    },
    {
        name: "Старки",
        content:{
            house: "Дім: Старки",
            sigil: "Герб: Сірий лютововк на білому фоні",
            words: "Клич: Зима близько",
            titles: "Титул: Захисники Півночі",
            seat: "Фортеця: Вінтерфелл",
            region: "Регіон: Північ",
            head: "Лорд: Еддарт Старк",
            founded: "Засновник: Брандон Будівельник",
            about: "Опис: Дуже стародавній рід, вважається, що їх родовід не переривався з часів Брандона Будівельника, який жив десь вісім тисяч років тому. Як і багато інших будинків Півночі, вони зберегли віру в Старих Богів.",
            history: "Історія: Довгий час Старки правили своїми землями як Королі Півночі. Але після вторгнення на Вестерос Ейгона I Таргарієна король Торрхен Старк здався, побачивши драконів, яких старий Таргарієн привів з собою на битву. Так Старки отримали титул «верховних лордів Півночі» і стали служити королю на залізному троні як хранителі Півночі.Через триста років лорд Еддард Старк поріднився з будинком Таллі, одружившись на Кейтілін Таллі.Під час повстання Роберта Баратеона Еддард і його люди воювали на стороні Роберта та допомогли йому зійти на трон." 
        },
    },
    {
        name: "Таллі",
        content:{
            house: "Дім: Таллі",
            sigil: "Герб: Стрибаюча срібна форель серед червоно-синіх хвиль",
            words: "Клич: Сім'я, обов'язок, честь",
            titles: "Титул: Лорди Ріверрана",
            seat: "Фортеця: Ріверран",
            region: "Регіон: Річкові землі",
            head: "Лорд: Едмар Таллі",
            founded: "Засновник: Едмін Таллі",
            about: "Опис: Колишні правителі Річкових земель, правили з родового замку Ріверран, на чолі якого стоїть лорд Ріверрана. На даний момент це Едмур Таллі.",
            history: "Історія: Будинок Таллі завоював високе становище під час Завойовницької війни. Едмін Таллі, який у той час був головою цього благородного будинку, підтримав Таргарієнів і підняв повстання проти короля, який у той час правил Залізними островами і Річковими землями, Харрена Чорного. Лорди Річкових земель на чолі з Едміном взяли верх, і, коли Эйгон I Таргарієн завоював континент і зайняв престол, він дарував Едміну титул верховного лорда Річкових земель, і з тих пір нащадки Едміна успадковують цей титул. До недавнього часу главою будинку Таллі був Хостер Таллі. Його дочки Кейтілін і Ліза, дружини лордів Еддарда Старка і Джона Аррена, під час Повстання Роберта сформували великий альянс їх будинків. Історично склалося так, що Річкові землі часто ставали місцем військових дій. Щоб вижити, будинок Таллі постійно укладав шлюбні союзи з іншими благородними будинками." 
        },
    },
    {
        name: "Мартелли",
        content:{
            house: "Дім: Мартели",
            sigil: "Герб: Червоне сонце, простромлене золотим списом на помаранчевому тлі",
            words: "Клич: Непохитні, незламні, несдающиеся",
            titles: "Титул: Принци Дорна",
            seat: "Фортеця: Сонячний Спис",
            region: "Регіон: Дорн",
            head: "Лорд: Доран Мартел",
            founded: "Засновник: ",
            about: "Опис: Мартелли — одна із занепалих шляхетних родин Вестероса. Вони правили самим південним регіоном на континенті, Дорном, з замку Сонячний Спис.",
            history: "Історія: Тисячу років тому войовнича королева ройнар Німерія перетнула Вузьке море разом зі своїми людьми, рятуючись від драконів Валірії. Після висадки на берег вона спалила всі кораблі, щоб ні один боягуз не міг повернутися назад. Нимерия потрапила до Дорн і вийшла заміж за Морсу Мартелла, в результаті чого утворився дуже могутній будинок. Разом вони змогли згуртувати цей регіон, який у той час складався з безлічі розрізнених царств. У Дорні і раніше у жінок було більше прав і свободи, ніж у всьому іншому Вестеросі. Після весілля Морсу і Нимерии, Мартеллы стали слідувати традиціям ройнар, і взяли собі титул принців. Спадкоємцем або спадкоємицею ставав старший дитина, незалежно від статі, і дорнийцы слідували за своєю принцесою точно так само, як і за принцом. За часів вторгнення Ейгона дорнийцы вирішили не вступати у відкритий бій з драконами і сховалися. Рейніс, яка вирушила на підкорення Дорна, пішла ні з чим. Через кілька років її нащадок, Дейрон I вирішив спробувати знову. Йому вдалося завоювати Дорн і правити там протягом декількох місяців. Але одного разу вночі на його стюарда Ліонеля Тірелла напали червоні скорпіони, і він загинув від отрути. Незабаром після цього Таргариены були переможені. Мартеллы продовжили правити Дорном незалежно від Таргаріенов, поки, зрештою, Дорн не став частиною Семи Королівств. Це сталося після шлюбу Дейрона II і Miria Мартелл, а сестра Дейрона II Дейнерис вийшла заміж за Марона Мартелла. Багато років потому відбувся ще один шлюб Мартеллов і Таргаріенов. Елія Мартелл вийшла заміж за Рейгара Таргариена. Незабаром вибухнула повстання Роберта, і Елія разом з дітьми була вбита." 
        },
    },
    {
        name: "Грейджої",
        content:{
            house: "Дім: Грейджої",
            sigil: "Герб: Золотий кракен на чорному тлі",
            words: "Клич: Ми не сіємо",
            titles: "Титул: Лорди Залізних островів",
            seat: "Фортеця: Пайк",
            region: "Регіон: Залізні острови",
            head: "Лорд: Бейлон Грейджой",
            founded: "Засновник: Сірий Король",
            about: "Опис: Грейджої - один з великих будинків Вестероса . Управляють Залізними островами із замку Пайк . Символ цього будинку – золотий кракен на чорному тлі, а їхній девіз – «Ми не сіємо».",
            history: "Історія: Будинок Грейджоїв походить від Сірого Короля , легендарного Короля Залізних островів. Згідно з повір'ями, він правив тисячу років і взяв за дружину русалку. Як і більшість залізничних , вони вірять у Бога , що потонув .На момент початку Війни п'яти королів на чолі будинку був Бейлон Грейджой . За вісім років до подій Війни п'яти королів він підняв повстання проти влади Залізного трону . Повстання закінчилося для Бейлона поразкою, двоє його синів, Родрік і Марон , загинули. Третього сина, Теона , взяв у заручники Еддард Старк , його відвезли у замок Вінтерфелл , де виховувався і навчався разом із дітьми Старка. Поруч із Бейлоном залишилася лише дочка Яра ." 
        },
    },
    {
        name: "Тірели",
        content:{
            house: "Дім: Тірели",
            sigil: "Герб: Золота троянда на зеленому полі",
            words: "Клич: Виростаючи — міцніємо",
            titles: "Титул: Верховні Володарі Простору",
            seat: "Фортеця: Хайгарден",
            region: "Регіон: Простір",
            head: "Лорд: Мейс Тіррел",
            founded: "Засновник: ",
            about: "Опис: Вони правлять Простором — великими, родючими і густонаселеними землями на південному заході континенту. Родовий замок Тіреллів — Хайгарден.",
            history: "Історія: Будинок Тіреллов був гілкою будинку Гарднеров, давніх королів Простору. Століттями Тірелли служили як кастеляны Хайгардена. Поступово їх могутність зростав, вони ставали сильнішими і навіть скреплялили узи шлюбу з могутніми благородними будинками Простору. Під час Завойовницької війни король Мерн Гарднер був спалений живцем у битві, яка отримала назву Поле Вогню, його вбили дракони Таргаріенов. Померли також його спадкоємці. Після цього Харлен Тіреллі добровільно здав Хайгарден Эйгону Таргариену, той в нагороду зробив Тирелла лордом Хайгардена і верховним лордом Простору, хоча в Просторі були і інші благородні будинку з більш близькими родинними зв'язками з Гарднерами. Історію Тіреллов чудово характеризує їх герб — за красою троянди ховаються шипи. Тірелли здаються чесними і справедливими, на ділі вони не менш хитрі, ніж Ланністери, і їм не чужі палацові інтриги і політичні ігри. Протягом багатьох років у військових конфліктах Тірелли завжди приєднувалися до тих, хто з найбільшою ймовірністю повинен вийти з конфлікту переможцем. Це було і під час завоювання Таргаріенов, і під час повстання Роберта. Під час повстання Роберта Тірелли здобули переконливу перемогу у битві біля Эшфорда, а потім обложили Штормовий Межа. Але після смерті Божевільного короля вони відразу здалися і присягнули на вірність Роберту Баратеону." 
        },
    }
]

const image = [
    {
        name: "Ланістери",
        images:{
            icon: 'images/images/сasterly.png',
        }
    },
    {
        name: "Арени",
        images:{
            src: 'images/images/The_Eyrie.png'
            }
    },
    {
        name: "Баратеони",
        images:{
            src: 'images/images/barateon.png'
            }
    },
    {
        name: "Старки",
        images:{
            src: 'images/images/stark.png'
            }
    },
    {
        name: "Таллі",
        images:{
            src: 'images/images/riveran.png'
            }
    },
    {
        name: "Мартелли",
        images:{
            src: 'images/images/martel.png'
            }
    },
    {
        name: "Грейджої",
        images:{
            src: 'images/images/iron.png'
            }
    },
    {
        name: "Тірели",
        images:{
            src: 'images/images/tirell.png'
            }
    },

]



const itemMenu = document.querySelector('.container__block-menu');

function item(event) {

// ------------------------------------------------Variant 2 ----------------------------

    const targetHouse = event.target.textContent;
    let targetHouseContent = houses.find(item => item.name == targetHouse).content
    let houseDB = Object.values(targetHouseContent)
                        .map(text => {
                            let classItem = text.split(":")[0];
                            switch (classItem) {
                                case 'Дім':
                                    className = 'house';
                                    elem = 'h1';
                                    break;
                                case 'Герб':
                                    className = 'sigil';
                                    elem = 'div';
                                    break;
                                case 'Клич':
                                    className = 'words';
                                    elem = 'div';
                                    break;
                                case 'Титул':
                                    className = 'titles';
                                    elem = 'div';
                                    break;
                                case 'Фортеця':
                                    className = 'seat';
                                    elem = 'div';
                                    break;
                                case 'Регіон':
                                    className = 'region';
                                    elem = 'div';
                                    break;
                                case 'Лорд':
                                    className = 'head';
                                    elem = 'div';
                                    break;
                                case 'Засновник':
                                    className = 'founded';
                                    elem = 'div';
                                    break;
                                case 'Опис':
                                    className = 'about';
                                    elem = 'p';
                                    break;
                                case 'Історія':
                                    className = 'history';
                                    elem = 'p';
                                    break;
                            }
                        
                            let createElem = document.createElement(elem);
                                                createElem.textContent = text;
                                                createElem.setAttribute('class', className)
                            return createElem.outerHTML
                        })
                        .join("");

let targetHouseImage = image.find(item => item.name == targetHouse).images;
let cotentImage = Object.values(targetHouseImage)
                        .map(img => {
                            let createElem = document.createElement('img');
                                                createElem.setAttribute('src', img);
                                                createElem.setAttribute('class', 'content__img');
                                                createElem.setAttribute('alt', 'Замок');
                            return createElem.outerHTML
                        })
                        .join('')


document.getElementById("content").innerHTML = houseDB + cotentImage;
};

itemMenu.addEventListener('click', item);



const ironTron = document.querySelector('.header__title');

function tron() {
    let createElem = document.createElement('img');
                            createElem.setAttribute('src', 'images/images/iron_tron.jpg');
                            createElem.setAttribute('class', 'tron__img');
                            createElem.setAttribute('alt', 'Залізний Трон');
    document.getElementById("content").innerHTML = createElem.outerHTML;
}

ironTron.addEventListener('click', tron);



function ready() {
    let createElem = document.createElement('img');
                        createElem.setAttribute('src', 'images/images/title.jpeg');
                        createElem.setAttribute('class', 'title__img');
                        createElem.setAttribute('alt', 'Залізний Трон');
    document.getElementById("content").innerHTML = createElem.outerHTML;
}

document.addEventListener("DOMContentLoaded", ready);