/* =========================================================
   TRÙNG SINH — KIẾP NÀY TA CHỌN AI?
   STORY ENGINE v2
   CỐT TRUYỆN + TÌNH HUỐNG TÁCH RIÊNG
========================================================= */


/* =========================================================
   20 NAM CHÍNH
========================================================= */

const maleLeads = [

    ["Lục Đình Khâm", "CEO tập đoàn", "Lạnh lùng, quyết đoán"],

    ["Tần Mặc", "Bác sĩ", "Điềm tĩnh, dịu dàng"],

    ["Cố Thừa Ngôn", "Luật sư", "Lý trí, sắc bén"],

    ["Thẩm Dịch", "Kiến trúc sư", "Trầm lặng, tinh tế"],

    ["Giang Hàn", "Cảnh sát", "Chính trực, nghiêm túc"],

    ["Trình Dật", "Nhà sản xuất âm nhạc", "Tự do, phóng khoáng"],

    ["Phó Cảnh Thâm", "Chủ tịch tập đoàn", "Kiêu ngạo, quyền lực"],

    ["Tạ Minh Triết", "Giảng viên đại học", "Thông minh, trưởng thành"],

    ["Hứa Ngôn", "Nhiếp ảnh gia", "Dịu dàng, nghệ sĩ"],

    ["Kỷ Thần", "Nhà đầu tư", "Thực tế, khó đoán"],

    ["Mộ Dung Trạch", "Chủ chuỗi nhà hàng", "Hài hước, tinh tế"],

    ["Bạch Tử Khiêm", "Diễn viên nổi tiếng", "Khó gần, chuyên nghiệp"],

    ["Đường Cảnh Nhiên", "Bác sĩ phẫu thuật", "Lạnh ngoài, ấm trong"],

    ["Tống Duy", "Nhà báo", "Chính trực, tò mò"],

    ["Lâm Mặc", "Lập trình viên / Founder", "Ít nói, thông minh"],

    ["Chu Cảnh Thần", "Phi công", "Tự tin, điềm đạm"],

    ["Hạ Thừa Vũ", "CEO công ty giải trí", "Khôn ngoan, khó đoán"],

    ["Tô Dịch", "Nhà thiết kế thời trang", "Thanh lịch, cầu toàn"],

    ["Thẩm Quân", "Doanh nhân", "Bí ẩn, khó nắm bắt"],

    ["Lục Cảnh Hoài", "Người thừa kế tập đoàn", "Kiêu ngạo, trẻ con nhưng tình cảm"]

];


/* =========================================================
   THÂN PHẬN NỮ CHÍNH
========================================================= */

const identities = [

    "Con gái một gia đình danh giá",

    "Sinh viên đại học bình thường",

    "Tiểu thư nhà giàu bị thất sủng",

    "Nữ diễn viên đang lên",

    "Nhà thiết kế trẻ",

    "Con gái của một doanh nhân",

    "Nhân viên văn phòng bình thường",

    "Người thừa kế một thương hiệu thời trang",

    "Họa sĩ tự do",

    "Chủ một cửa hàng nhỏ",

    "Nữ sinh xuất thân từ gia đình bình dân",

    "Con gái của một gia đình quyền thế",

    "Nhà sáng tạo nội dung",

    "Trợ lý trong một tập đoàn lớn",

    "Nữ doanh nhân trẻ",

    "Kiến trúc sư mới vào nghề",

    "Ca sĩ mới debut",

    "Nhà báo trẻ",

    "Chủ một studio nghệ thuật",

    "Người từng bị gia đình ruồng bỏ"

];


/* =========================================================
   TÍNH CÁCH
========================================================= */

const personalities = [

    "Dịu dàng nhưng không yếu đuối",

    "Mạnh mẽ và quyết đoán",

    "Thông minh, sắc sảo",

    "Hài hước và lạc quan",

    "Trầm tĩnh, khó đoán",

    "Thẳng thắn và chính trực",

    "Tinh tế và nhạy cảm",

    "Tự tin, có tham vọng",

    "Độc lập và lý trí",

    "Bướng bỉnh nhưng chân thành",

    "Khéo léo và biết quan sát",

    "Lạnh lùng với người ngoài",

    "Ấm áp với người mình tin tưởng",

    "Táo bạo và thích thử thách",

    "Kiên nhẫn và điềm tĩnh",

    "Có phần tinh nghịch",

    "Cầu toàn và nghiêm túc",

    "Sống tình cảm",

    "Không dễ dàng tin người",

    "Luôn muốn tự quyết định số phận"

];


/* =========================================================
   KIẾP TRƯỚC
========================================================= */

const pastLives = [

    "Kiếp trước bạn từng tin nhầm một người.",

    "Kiếp trước bạn đã đánh mất cơ hội quan trọng nhất đời mình.",

    "Kiếp trước bạn từng bị chính người thân phản bội.",

    "Kiếp trước bạn lựa chọn tình yêu thay vì sự nghiệp.",

    "Kiếp trước bạn đã sống một cuộc đời quá phụ thuộc vào người khác.",

    "Kiếp trước bạn từng bỏ lỡ một người thật lòng với mình.",

    "Kiếp trước bạn đã quá yếu đuối trước những lời phán xét.",

    "Kiếp trước bạn từng có tất cả nhưng cuối cùng mất hết.",

    "Kiếp trước bạn chưa từng được sống theo điều mình muốn.",

    "Kiếp trước bạn đã đưa ra một quyết định khiến cả cuộc đời thay đổi."

];


/* =========================================================
   ROUTE RIÊNG CHO 20 NAM CHÍNH
========================================================= */

const routeProfiles = [

    [
        "Hợp đồng và quyền lực",
        "Một thương vụ của tập đoàn có liên quan đến bí mật kiếp trước.",
        "Anh phải lựa chọn giữa lợi ích của mình và bảo vệ bạn."
    ],

    [
        "Nhịp tim và lựa chọn",
        "Một ca bệnh khiến anh nhớ đến lời hứa cũ mà bạn chưa từng nghe.",
        "Anh bắt đầu nhận ra có những thứ không thể chữa bằng lý trí."
    ],

    [
        "Vụ án chưa khép lại",
        "Một hồ sơ cũ bất ngờ nối bạn với biến cố kiếp trước.",
        "Anh phải tin vào bạn hay tin vào bằng chứng trước mắt."
    ],

    [
        "Thành phố của những giấc mơ",
        "Một dự án kiến trúc trở thành nơi hai người cùng viết lại quá khứ.",
        "Anh muốn xây một tương lai mà bạn có thể tự do lựa chọn."
    ],

    [
        "Ranh giới công lý",
        "Một cuộc điều tra kéo bạn vào một bí mật nguy hiểm.",
        "Anh phải bảo vệ bạn mà không đánh mất nguyên tắc của mình."
    ],

    [
        "Bản nhạc chưa hoàn thành",
        "Một giai điệu khiến bạn nhớ đến một đêm đã bị xóa khỏi ký ức.",
        "Anh muốn bạn chọn anh vì chính mình, không vì quá khứ."
    ],

    [
        "Đế chế và chiếc lồng vàng",
        "Gia đình anh muốn biến bạn thành một quân cờ.",
        "Anh phải chống lại chính thế giới đã tạo nên mình."
    ],

    [
        "Khoảng cách giữa hai người",
        "Một lớp học và một dự án khiến hai người liên tục chạm mặt.",
        "Anh giúp bạn phân biệt điều mình muốn với điều người khác muốn."
    ],

    [
        "Bức ảnh không tồn tại",
        "Một tấm ảnh cũ có bóng dáng bạn dù nó được chụp trước khi bạn sinh ra.",
        "Anh quyết định đi cùng bạn đến tận cùng bí mật."
    ],

    [
        "Canh bạc tương lai",
        "Một khoản đầu tư vô tình làm thay đổi con đường sự nghiệp của bạn.",
        "Anh đặt cược vào bạn trước khi chính bạn tin vào mình."
    ],

    [
        "Bàn ăn lúc nửa đêm",
        "Một nhà hàng trở thành nơi hai người nghe được bí mật của giới thượng lưu.",
        "Anh dùng sự hài hước để che giấu một nỗi sợ rất thật."
    ],

    [
        "Ánh đèn và mặt nạ",
        "Một scandal truyền thông khiến bạn trở thành tâm điểm.",
        "Anh phải lựa chọn công khai bảo vệ bạn hay giữ sự nghiệp."
    ],

    [
        "Ca trực cuối cùng",
        "Một bệnh án cũ dẫn đến câu hỏi về cái chết của một người quan trọng.",
        "Anh muốn bạn biết sự thật dù nó có thể làm cả hai đau."
    ],

    [
        "Tin nóng lúc 2 giờ sáng",
        "Bạn phát hiện một bài báo về chính mình trước khi nó được đăng.",
        "Anh phải chọn sự thật hay sự an toàn của bạn."
    ],

    [
        "Mật mã của hai người",
        "Một dữ liệu bị khóa chứa thông tin về cuộc đời kiếp trước.",
        "Anh mở nó chỉ khi bạn đồng ý đối mặt với sự thật."
    ],

    [
        "Chuyến bay không có trong lịch trình",
        "Một sự cố khiến hai người mắc kẹt ở một thành phố xa lạ.",
        "Anh nhận ra điều mình sợ nhất không phải là mất kiểm soát mà là mất bạn."
    ],

    [
        "Sân khấu sau ánh đèn",
        "Một hợp đồng nghệ sĩ che giấu cuộc đấu quyền lực.",
        "Anh muốn bạn nhìn thấy con người thật phía sau nụ cười."
    ],

    [
        "Chiếc váy chưa hoàn thiện",
        "Một bộ sưu tập lấy cảm hứng từ ký ức của bạn.",
        "Anh biến điều bạn từng ghét thành thứ khiến bạn tự tin."
    ],

    [
        "Người không để lại dấu vết",
        "Một doanh nhân bí ẩn biết quá nhiều về kiếp trước của bạn.",
        "Anh kéo bạn ra khỏi trò chơi quyền lực trước khi quá muộn."
    ],

    [
        "Người thừa kế không muốn kế vị",
        "Anh bị ép trở thành người kế nhiệm dù chỉ muốn sống bình thường.",
        "Bạn trở thành người đầu tiên khiến anh dám chống lại gia đình."
    ]

];


/* =========================================================
   HÌNH ẢNH NHÂN VẬT
========================================================= */

const characterImages = {

    "Lục Đình Khâm": "assets/luc-dinh-kham.png",

    "Tần Mặc": "assets/tan-mac.png",

    "Cố Thừa Ngôn": "assets/co-thua-ngon.png",

    "Thẩm Dịch": "assets/tham-dich.png",

    "Giang Hàn": "assets/giang-han.png",

    "Trình Dật": "assets/trinh-dat.png",

    "Phó Cảnh Thâm": "assets/pho-canh-tham.png",

    "Tạ Minh Triết": "assets/ta-minh-triet.png",

    "Hứa Ngôn": "assets/hua-ngon.png",

    "Kỷ Thần": "assets/ky-than.png",

    "Mộ Dung Trạch": "assets/mo-dung-trach.png",

    "Bạch Tử Khiêm": "assets/bach-tu-khiem.png",

    "Đường Cảnh Nhiên": "assets/duong-canh-nhien.png",

    "Tống Duy": "assets/tong-duy.png",

    "Lâm Mặc": "assets/lam-mac.png",

    "Chu Cảnh Thần": "assets/chu-canh-than.png",

    "Hạ Thừa Vũ": "assets/ha-thanh-vu.png",

    "Tô Dịch": "assets/to-dich.png",

    "Thẩm Quân": "assets/tham-quan.png",

    "Lục Cảnh Hoài": "assets/luc-canh-hoai.png"

};


/* =========================================================
   GAME STATE
========================================================= */

let game = {

    version: 2,

    name: "",
    identity: "",
    personality: "",
    pastLife: "",

    maleLead: null,

    day: 1,
    chapter: 1,

    storyIndex: 0,
    situationCount: 0,

    affection: 20,
    money: 5000,
    intelligence: 50,
    reputation: 50,
    willpower: 50,

    career: 0,
    trust: 0,
    freedom: 0,
    stress: 0,

    flags: {},

    history: [],

    lastContentType: "story"

};


let currentScene = null;


/* =========================================================
   HELPER
========================================================= */

function randomItem(array) {

    return array[
        Math.floor(Math.random() * array.length)
    ];

}


function randomNumber(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


function get(id) {

    return document.getElementById(id);

}


/* =========================================================
   SCREEN
========================================================= */

function showScreen(screenId) {

    const screens = [

        "startScreen",
        "createScreen",
        "characterScreen",
        "gameScreen",
        "endingScreen"

    ];

    screens.forEach(id => {

        const element = get(id);

        if (element) {

            element.classList.toggle(
                "active",
                id === screenId
            );

        }

    });

    window.scrollTo(0, 0);

}


/* =========================================================
   RESET
========================================================= */

function resetGameState() {

    game = {

        version: 2,

        name: "",
        identity: "",
        personality: "",
        pastLife: "",

        maleLead: null,

        day: 1,
        chapter: 1,

        storyIndex: 0,
        situationCount: 0,

        affection: 20,
        money: 5000,
        intelligence: 50,
        reputation: 50,
        willpower: 50,

        career: 0,
        trust: 0,
        freedom: 0,
        stress: 0,

        flags: {},

        history: [],

        lastContentType: "story"

    };

}


/* =========================================================
   START
========================================================= */

function startGame() {

    showScreen("createScreen");

    const input = get("playerName");

    if (input) {

        setTimeout(() => {

            input.focus();

        }, 200);

    }

}


/* =========================================================
   TẠO NHÂN VẬT
========================================================= */

function createCharacter() {

    const input = get("playerName");

    game.name =
        (input?.value || "").trim()
        || "Nguyệt";


    game.identity =
        randomItem(identities);


    game.personality =
        randomItem(personalities);


    game.pastLife =
        randomItem(pastLives);


    game.maleLead =
        randomItem(maleLeads);


    game.day = 1;

    game.chapter = 1;

    game.storyIndex = 0;

    game.situationCount = 0;


    game.affection =
        randomNumber(10, 25);


    game.money =
        randomNumber(3000, 10000);


    game.intelligence =
        randomNumber(40, 65);


    game.reputation =
        randomNumber(35, 60);


    game.willpower =
        randomNumber(40, 70);


    game.career = 0;

    game.trust = 0;

    game.freedom = 0;

    game.stress = 0;


    game.flags = {};

    game.history = [];


    updateCharacterScreen();

    showScreen("characterScreen");

}


/* =========================================================
   CHARACTER SCREEN
========================================================= */

function updateCharacterScreen() {

    if (get("characterName")) {

        get("characterName").textContent =
            game.name;

    }


    if (get("identityText")) {

        get("identityText").textContent =
            game.identity;

    }


    if (get("personalityText")) {

        get("personalityText").textContent =
            game.personality;

    }


    if (get("maleLeadText")) {

        get("maleLeadText").textContent =
            `${game.maleLead[0]} — ${game.maleLead[1]}`;

    }


    if (get("affectionStat")) {

        get("affectionStat").textContent =
            game.affection;

    }


    if (get("moneyStat")) {

        get("moneyStat").textContent =
            game.money;

    }


    if (get("intelligenceStat")) {

        get("intelligenceStat").textContent =
            game.intelligence;

    }


    if (get("reputationStat")) {

        get("reputationStat").textContent =
            game.reputation;

    }

}


/* =========================================================
   BẮT ĐẦU CỐT TRUYỆN
========================================================= */

function beginStory() {

    game.day = 1;

    game.chapter = 1;

    game.storyIndex = 0;

    game.situationCount = 0;

    showScreen("gameScreen");

    updateStats();

    loadNextContent();

}


/* =========================================================
   CỐT TRUYỆN CHÍNH
========================================================= */

function buildMainStory() {

    const lead =
        game.maleLead[0];


    const job =
        game.maleLead[1];


    const trait =
        game.maleLead[2].toLowerCase();


    const index =
        maleLeads.findIndex(
            item => item[0] === lead
        );


    const route =
        routeProfiles[index] ||
        routeProfiles[0];


    return [

        {

            id: "story_1",

            chapter: 1,

            title: "TỈNH LẠI",

            text: () => `

Một cơn đau đầu dữ dội kéo bạn tỉnh lại.

Căn phòng hiện đại xa lạ nhưng mọi thứ đều quen đến đáng sợ.

Điện thoại hiển thị đúng ngày mà bạn từng ước có thể quay lại.

${game.pastLife}

Lần này, bạn không còn muốn sống theo kịch bản cũ.

`,

            choices: [

                {

                    text: "Bình tĩnh kiểm tra mọi thứ",

                    effect: {

                        intelligence: 10,

                        willpower: 5

                    },

                    flag: "observed"

                },

                {

                    text: "Gọi ngay cho người mình tin",

                    effect: {

                        reputation: 5,

                        stress: -5

                    },

                    flag: "sought_help"

                },

                {

                    text: "Tự nhủ đây là cơ hội thứ hai",

                    effect: {

                        willpower: 12,

                        freedom: 5

                    },

                    flag: "reborn"

                }

            ]

        },


        {

            id: "story_2",

            chapter: 1,

            title: "NGƯỜI LẠ QUEN THUỘC",

            text: () => `

Buổi chiều, bạn gặp ${lead}.

Anh là ${job}, nổi tiếng với vẻ ${trait}.

Chỉ một ánh mắt thoáng qua cũng khiến ký ức kiếp trước rung lên.

Nhưng có một điểm khác:

Lần này anh chưa hề biết bạn.

Bạn sẽ để cuộc gặp này trôi qua, hay chủ động viết lại nó?

`,

            choices: [

                {

                    text: "Chủ động bắt chuyện",

                    effect: {

                        affection: 10,

                        trust: 5

                    },

                    flag: "first_move"

                },

                {

                    text: "Giữ khoảng cách và quan sát",

                    effect: {

                        intelligence: 8,

                        willpower: 5

                    },

                    flag: "observe_lead"

                },

                {

                    text: "Coi như chưa từng gặp",

                    effect: {

                        freedom: 8,

                        willpower: 8

                    },

                    flag: "avoid_lead"

                }

            ]

        },


        {

            id: "story_3",

            chapter: 2,

            title: "CƠ HỘI THỨ HAI",

            text: () => `

Một cơ hội công việc bất ngờ xuất hiện.

Nó có liên quan đến ${route[0].toLowerCase()}.

Bạn nhớ rằng ở kiếp trước, chính lựa chọn này từng khiến cuộc đời mình rẽ sang hướng khác.

Lần này bạn đã biết hậu quả.

Nhưng biết trước tương lai không có nghĩa là lựa chọn trở nên dễ dàng hơn.

`,

            choices: [

                {

                    text: "Nắm lấy cơ hội",

                    effect: {

                        career: 15,

                        money: 3000,

                        reputation: 8

                    },

                    flag: "career_path"

                },

                {

                    text: "Từ chối để giữ sự tự do",

                    effect: {

                        freedom: 15,

                        willpower: 8

                    },

                    flag: "freedom_path"

                },

                {

                    text: "Đàm phán điều kiện của riêng mình",

                    effect: {

                        intelligence: 12,

                        career: 8,

                        willpower: 5

                    },

                    flag: "negotiated"

                }

            ]

        },


        {

            id: "story_4",

            chapter: 3,

            title: "BÍ MẬT CỦA KIẾP TRƯỚC",

            text: () => `

Một thông tin xuất hiện khiến bạn lạnh người.

${route[1]}

Điều đáng sợ nhất là người duy nhất có thể giải thích chuyện này lại chính là ${lead}.

Bạn bắt đầu hiểu rằng cuộc gặp giữa hai người có thể không hoàn toàn là tình cờ.

`,

            choices: [

                {

                    text: "Hỏi thẳng anh ấy",

                    effect: {

                        trust: 12,

                        affection: 8,

                        stress: 5

                    },

                    flag: "confronted_truth"

                },

                {

                    text: "Tự mình điều tra trước",

                    effect: {

                        intelligence: 15,

                        willpower: 5

                    },

                    flag: "investigate"

                },

                {

                    text: "Tạm thời giữ bí mật",

                    effect: {

                        intelligence: 8,

                        freedom: 8

                    },

                    flag: "keep_secret"

                }

            ]

        },


        {

            id: "story_5",

            chapter: 4,

            title: "NGÃ RẼ",

            text: () => `

Mọi thứ bắt đầu thay đổi.

${lead} không còn chỉ là một người xa lạ.

${route[2]}

Bạn có thể chọn tình yêu, sự nghiệp, sự thật hoặc tự do.

Không có lựa chọn nào hoàn toàn đúng.

Chỉ có lựa chọn mà bạn sẵn sàng chịu trách nhiệm.

`,

            choices: [

                {

                    text: "Tin anh ấy",

                    effect: {

                        affection: 15,

                        trust: 15,

                        stress: -5

                    },

                    flag: "trust_route"

                },

                {

                    text: "Chọn sự nghiệp trước",

                    effect: {

                        career: 18,

                        money: 5000,

                        reputation: 10

                    },

                    flag: "career_route"

                },

                {

                    text: "Chọn tự do của chính mình",

                    effect: {

                        freedom: 20,

                        willpower: 12,

                        stress: -8

                    },

                    flag: "freedom_route"

                },

                {

                    text: "Đòi hỏi cả sự thật lẫn tình yêu",

                    effect: {

                        intelligence: 10,

                        trust: 10,

                        affection: 10,

                        willpower: 8

                    },

                    flag: "all_in"

                }

            ]

        },


        {

            id: "story_6",

            chapter: 5,

            title: "KIẾP NÀY TA CHỌN AI?",

            text: () => `

Ngày cuối cùng của câu chuyện chính đã đến.

Bạn nhìn lại những gì mình đã làm:

Những người đã gặp.

Những lựa chọn đã đưa ra.

Những điều từng không thể thay đổi nay đã có một đáp án khác.

${lead} đứng trước mặt bạn.

Lần này, số phận không hỏi bạn phải yêu ai.

Nó hỏi:

Bạn muốn trở thành ai?

`,

            choices: [

                {

                    text: "Chọn người mình yêu",

                    effect: {

                        affection: 18,

                        trust: 10

                    },

                    flag: "ending_love"

                },

                {

                    text: "Chọn con đường của mình",

                    effect: {

                        freedom: 18,

                        willpower: 15

                    },

                    flag: "ending_self"

                },

                {

                    text: "Chọn sự nghiệp và tương lai",

                    effect: {

                        career: 20,

                        money: 7000,

                        reputation: 12

                    },

                    flag: "ending_career"

                },

                {

                    text: "Chọn sự thật",

                    effect: {

                        intelligence: 18,

                        trust: 12,

                        willpower: 10

                    },

                    flag: "ending_truth"

                }

            ]

        }

    ];

}


/* =========================================================
   TÌNH HUỐNG ĐỘC LẬP
========================================================= */

const situations = [

    {

        id: "coffee",

        title: "23:47 — CUỘC GỌI",

        category: "Tình cảm",

        text: () => `

${game.maleLead[0]} gọi cho bạn vào lúc 23:47.

Anh chỉ nói:

“Em còn thức không?”

`,

        choices: [

            {

                text: "Nghe máy",

                effect: {

                    affection: 8,

                    trust: 4

                }

            },

            {

                text: "Hỏi có chuyện gì trước",

                effect: {

                    intelligence: 5,

                    trust: 6

                }

            },

            {

                text: "Không nghe",

                effect: {

                    willpower: 6,

                    freedom: 4

                }

            }

        ]

    },


    {

        id: "ex",

        title: "NGƯỜI CŨ",

        category: "Quan hệ",

        text: () => `

Bạn bắt gặp một người từng khiến bạn tổn thương ở kiếp trước.

Người ấy vẫn nói những lời quen thuộc như chưa từng có chuyện gì xảy ra.

`,

        choices: [

            {

                text: "Đối diện bình tĩnh",

                effect: {

                    willpower: 8,

                    reputation: 3

                }

            },

            {

                text: "Rời đi",

                effect: {

                    freedom: 8,

                    stress: -5

                }

            },

            {

                text: "Hỏi cho rõ sự thật",

                effect: {

                    intelligence: 8,

                    stress: 4

                }

            }

        ]

    },


    {

        id: "project",

        title: "DỰ ÁN KHẨN",

        category: "Sự nghiệp",

        text: () => `

Một dự án lớn bất ngờ được giao cho bạn.

Nếu thành công, tên tuổi của bạn sẽ thay đổi.

Nếu thất bại, bạn có thể mất rất nhiều.

`,

        choices: [

            {

                text: "Nhận ngay",

                effect: {

                    career: 12,

                    reputation: 8,

                    stress: 6

                }

            },

            {

                text: "Đề nghị thêm thời gian",

                effect: {

                    intelligence: 8,

                    career: 6

                }

            },

            {

                text: "Từ chối",

                effect: {

                    freedom: 10,

                    willpower: 5

                }

            }

        ]

    },


    {

        id: "rain",

        title: "CƠN MƯA",

        category: "Đời thường",

        text: () => `

Trời bất ngờ đổ mưa khi bạn rời khỏi tòa nhà.

Một chiếc ô xuất hiện phía trên đầu bạn.

Người cầm nó là ${game.maleLead[0]}.

`,

        choices: [

            {

                text: "Cảm ơn và đi cùng",

                effect: {

                    affection: 7,

                    trust: 5

                }

            },

            {

                text: "Tự mình về",

                effect: {

                    willpower: 5,

                    freedom: 3

                }

            },

            {

                text: "Trêu anh ấy",

                effect: {

                    affection: 10,

                    reputation: 2

                }

            }

        ]

    },


    {

        id: "message",

        title: "TIN NHẮN LẠ",

        category: "Bí ẩn",

        text: () => `

Điện thoại của bạn nhận được một tin nhắn từ số không lưu.

“Đừng tin người bên cạnh cô.”

Không có tên người gửi.

`,

        choices: [

            {

                text: "Chụp lại và điều tra",

                effect: {

                    intelligence: 10,

                    stress: 4

                },

                flag: "mystery"

            },

            {

                text: "Xóa tin nhắn",

                effect: {

                    willpower: 6,

                    stress: -3

                }

            },

            {

                text: `Hỏi ${game.maleLead[0]}`,

                effect: {

                    trust: 8,

                    affection: 5

                }

            }

        ]

    },


    {

        id: "family",

        title: "BỮA TỐI GIA ĐÌNH",

        category: "Gia đình",

        text: () => `

Một bữa tối tưởng bình thường lại trở thành cuộc nói chuyện về tương lai của bạn.

Gia đình muốn bạn đi theo con đường họ đã chọn.

`,

        choices: [

            {

                text: "Nói rõ mong muốn",

                effect: {

                    willpower: 10,

                    freedom: 8

                }

            },

            {

                text: "Tạm thời đồng ý",

                effect: {

                    reputation: 8,

                    money: 2000,

                    stress: 5

                }

            },

            {

                text: "Rời bàn ăn",

                effect: {

                    freedom: 12,

                    reputation: -4

                }

            }

        ]

    },


    {

        id: "friend",

        title: "NGƯỜI BẠN CŨ",

        category: "Tình bạn",

        text: () => `

Một người bạn cũ tìm đến và hỏi tại sao gần đây bạn thay đổi quá nhiều.

Bạn có kể cho họ về chuyện trùng sinh không?

`,

        choices: [

            {

                text: "Chỉ kể một phần",

                effect: {

                    reputation: 5,

                    trust: 5

                }

            },

            {

                text: "Không nói gì",

                effect: {

                    willpower: 5,

                    freedom: 5

                }

            },

            {

                text: "Tin tưởng họ",

                effect: {

                    trust: 10,

                    stress: -5

                }

            }

        ]

    },


    {

        id: "gift",

        title: "MÓN QUÀ KHÔNG GHI TÊN",

        category: "Tình cảm",

        text: () => `

Một món quà được gửi đến nơi bạn làm việc.

Không có thiệp.

Chỉ có một dòng chữ:

“Cho lần này.”

`,

        choices: [

            {

                text: "Nhận",

                effect: {

                    affection: 10,

                    trust: 4

                }

            },

            {

                text: "Tìm người gửi",

                effect: {

                    intelligence: 7,

                    trust: 6

                }

            },

            {

                text: "Trả lại",

                effect: {

                    willpower: 7,

                    freedom: 5

                }

            }

        ]

    },


    {

        id: "interview",

        title: "CUỘC PHỎNG VẤN",

        category: "Sự nghiệp",

        text: () => `

Một cuộc phỏng vấn bất ngờ có thể mở ra con đường mới.

Người phỏng vấn hỏi:

“Điều gì khiến cô không muốn sống như trước nữa?”

`,

        choices: [

            {

                text: "Nói về tham vọng",

                effect: {

                    career: 10,

                    reputation: 10

                }

            },

            {

                text: "Nói về tự do",

                effect: {

                    freedom: 10,

                    willpower: 8

                }

            },

            {

                text: "Nói về quá khứ",

                effect: {

                    intelligence: 8,

                    trust: 3

                }

            }

        ]

    },


    {

        id: "jealousy",

        title: "MỘT ÁNH MẮT KHÁC",

        category: "Tình cảm",

        text: () => `

Bạn nhìn thấy ${game.maleLead[0]} đang nói chuyện thân thiết với một người khác.

Kiếp trước bạn từng để cảm xúc này kiểm soát mình.

Kiếp này thì sao?

`,

        choices: [

            {

                text: "Hỏi thẳng",

                effect: {

                    affection: 6,

                    trust: 8,

                    willpower: 3

                }

            },

            {

                text: "Không để tâm",

                effect: {

                    willpower: 8,

                    freedom: 5

                }

            },

            {

                text: "Trêu anh ấy",

                effect: {

                    affection: 10

                }

            }

        ]

    },


    {

        id: "career_fail",

        title: "MỘT NGÀY TỆ",

        category: "Sự nghiệp",

        text: () => `

Một sai sót nhỏ khiến cả ngày của bạn đảo lộn.

Bạn có thể coi nó là thất bại.

Hoặc coi nó là dữ liệu cho lần sau.

`,

        choices: [

            {

                text: "Sửa ngay",

                effect: {

                    intelligence: 10,

                    career: 5,

                    stress: 5

                }

            },

            {

                text: "Xin giúp đỡ",

                effect: {

                    trust: 7,

                    stress: -3

                }

            },

            {

                text: "Bỏ cuộc hôm nay",

                effect: {

                    stress: -10,

                    willpower: -3

                }

            }

        ]

    },


    {

        id: "secret_room",

        title: "CĂN PHÒNG KHÓA",

        category: "Bí ẩn",

        text: () => `

Bạn phát hiện một căn phòng cũ trong tòa nhà.

Bên trong có một chiếc hộp ghi ngày tháng trùng với ngày bạn trùng sinh.

`,

        choices: [

            {

                text: "Mở hộp",

                effect: {

                    intelligence: 12,

                    stress: 6

                },

                flag: "opened_box"

            },

            {

                text: "Gọi người tin tưởng",

                effect: {

                    trust: 8

                }

            },

            {

                text: "Đóng lại",

                effect: {

                    willpower: 7,

                    freedom: 4

                }

            }

        ]

    },


    {

        id: "festival",

        title: "ĐÊM THÀNH PHỐ",

        category: "Đời thường",

        text: () => `

Đêm thành phố sáng rực.

Không công việc.

Không gia đình.

Không quá khứ.

Chỉ có vài giờ thuộc về chính bạn.

`,

        choices: [

            {

                text: "Đi một mình",

                effect: {

                    freedom: 10,

                    willpower: 5,

                    stress: -8

                }

            },

            {

                text: `Rủ ${game.maleLead[0]}`,

                effect: {

                    affection: 12,

                    trust: 6,

                    stress: -5

                }

            },

            {

                text: "Làm thêm",

                effect: {

                    money: 2500,

                    career: 5

                }

            }

        ]

    },


    {

        id: "health",

        title: "CƠ THỂ LÊN TIẾNG",

        category: "Đời thường",

        text: () => `

Bạn nhận ra mình đang quá mệt vì cố thay đổi tất cả cùng lúc.

Có những cuộc chiến không cần phải thắng trong một ngày.

`,

        choices: [

            {

                text: "Nghỉ ngơi",

                effect: {

                    stress: -15,

                    willpower: 3

                }

            },

            {

                text: "Cố tiếp",

                effect: {

                    career: 8,

                    stress: 10

                }

            },

            {

                text: `Nhờ ${game.maleLead[0]} nhắc mình nghỉ`,

                effect: {

                    affection: 8,

                    trust: 7,

                    stress: -10

                }

            }

        ]

    },


    {

        id: "rumor",

        title: "TIN ĐỒN",

        category: "Xã hội",

        text: () => `

Một tin đồn vô căn cứ bắt đầu lan ra về bạn.

Nếu im lặng, nó có thể biến mất.

Nếu phản bác, bạn có thể thu hút thêm chú ý.

`,

        choices: [

            {

                text: "Lên tiếng",

                effect: {

                    reputation: 8,

                    willpower: 7,

                    stress: 5

                }

            },

            {

                text: "Thu thập bằng chứng",

                effect: {

                    intelligence: 10,

                    reputation: 5

                }

            },

            {

                text: "Mặc kệ",

                effect: {

                    freedom: 8,

                    stress: -5

                }

            }

        ]

    },


    {

        id: "choice",

        title: "HAI CON ĐƯỜNG",

        category: "Tự do",

        text: () => `

Bạn nhận được hai lời mời cùng lúc.

Một lời hứa hẹn tiền bạc.

Một lời hứa hẹn tự do.

Không thể nhận cả hai.

`,

        choices: [

            {

                text: "Chọn tiền",

                effect: {

                    money: 6000,

                    career: 8

                }

            },

            {

                text: "Chọn tự do",

                effect: {

                    freedom: 15,

                    willpower: 8

                }

            },

            {

                text: "Tìm lựa chọn thứ ba",

                effect: {

                    intelligence: 12,

                    career: 5,

                    freedom: 5

                }

            }

        ]

    },


    {

        id: "truth",

        title: "MỘT CÂU HỎI",

        category: "Bí ẩn",

        text: () => `

${game.maleLead[0]} nhìn bạn rất lâu rồi hỏi:

“Nếu em có thể quay lại một ngày trong quá khứ, em sẽ sửa điều gì?”

`,

        choices: [

            {

                text: "Sửa một người đã chọn",

                effect: {

                    affection: 10,

                    trust: 8

                }

            },

            {

                text: "Sửa chính mình",

                effect: {

                    willpower: 12,

                    freedom: 8

                }

            },

            {

                text: "Không sửa gì cả",

                effect: {

                    intelligence: 10,

                    stress: -5

                }

            }

        ]

    },


    {

        id: "date",

        title: "CUỘC HẸN KHÔNG GỌI LÀ HẸN",

        category: "Tình cảm",

        text: () => `

${game.maleLead[0]} rủ bạn đi ăn.

Anh nói đây chỉ là “một bữa tối bình thường”.

Nhưng cách anh nhìn bạn lại không bình thường chút nào.

`,

        choices: [

            {

                text: "Đồng ý",

                effect: {

                    affection: 12,

                    trust: 5

                }

            },

            {

                text: "Đề nghị chia đôi",

                effect: {

                    willpower: 5,

                    affection: 5

                }

            },

            {

                text: "Hỏi thẳng mục đích",

                effect: {

                    intelligence: 6,

                    trust: 8

                }

            }

        ]

    },


    {

        id: "future",

        title: "LÁ THƯ CHO TƯƠNG LAI",

        category: "Tự do",

        text: () => `

Bạn viết một lá thư cho chính mình của một năm sau.

Không ai đọc nó.

Không ai chấm điểm.

Bạn chỉ cần thành thật.

`,

        choices: [

            {

                text: "Viết về tình yêu",

                effect: {

                    affection: 8,

                    willpower: 5

                }

            },

            {

                text: "Viết về sự nghiệp",

                effect: {

                    career: 10,

                    intelligence: 5

                }

            },

            {

                text: "Viết về tự do",

                effect: {

                    freedom: 12,

                    willpower: 8

                }

            }

        ]

    },


    {

        id: "chance",

        title: "CƠ HỘI TỪ NGƯỜI LẠ",

        category: "Ngẫu nhiên",

        text: () => `

Một người bạn chưa từng gặp đề nghị hợp tác với bạn.

Không có lý do rõ ràng vì sao họ chọn bạn.

`,

        choices: [

            {

                text: "Nhận lời",

                effect: {

                    career: 10,

                    money: 2500,

                    reputation: 4

                }

            },

            {

                text: "Điều tra trước",

                effect: {

                    intelligence: 10

                }

            },

            {

                text: "Từ chối",

                effect: {

                    freedom: 8,

                    willpower: 5

                }

            }

        ]

    }

];


/* =========================================================
   ROUTE
========================================================= */

function routeFlavor() {

    const index =
        maleLeads.findIndex(
            item =>
                item[0] === game.maleLead?.[0]
        );


    return (
        routeProfiles[index]
        || routeProfiles[0]
    );

}


/* =========================================================
   KIỂM TRA TÌNH HUỐNG
========================================================= */

function eligibleSituation(situation) {

    if (
        situation.id === "date" ||
        situation.id === "jealousy" ||
        situation.id === "coffee" ||
        situation.id === "gift"
    ) {

        return (
            game.affection >= 15 ||
            game.trust >= 5
        );

    }


    return true;

}


/* =========================================================
   CHỌN TÌNH HUỐNG
========================================================= */

function pickSituation() {

    const used =
        new Set(

            game.history

                .filter(
                    item =>
                        item.type === "situation"
                )

                .map(
                    item =>
                        item.id
                )

        );


    let pool =
        situations

            .filter(
                eligibleSituation
            )

            .filter(
                situation =>
                    !used.has(situation.id)
            );


    if (!pool.length) {

        pool =
            situations.filter(
                eligibleSituation
            );

    }


    return randomItem(pool);

}


/* =========================================================
   QUYẾT ĐỊNH KHI NÀO CHẠY CỐT TRUYỆN
========================================================= */

function shouldPlayStory() {

    return (
        game.day === 1 ||
        (
            game.day > 1 &&
            game.day % 3 === 1
        )
    );

}


/* =========================================================
   LOAD NỘI DUNG
========================================================= */

function loadNextContent() {

    const main =
        buildMainStory();


    if (
        game.storyIndex >=
        main.length
    ) {

        finishGame();

        return;

    }


    let content;


    if (
        shouldPlayStory()
    ) {

        content =
            main[game.storyIndex];

        game.lastContentType =
            "story";

    }

    else {

        content =
            pickSituation();

        game.lastContentType =
            "situation";

    }


    currentScene =
        content;


    renderContent(
        content
    );

}


/* =========================================================
   RENDER
========================================================= */

function renderContent(content) {

    updateCharacterVisual();


    if (get("chapterText")) {

        get("chapterText").textContent =
            content.chapter

                ? `CỐT TRUYỆN • CHƯƠNG ${content.chapter}`

                : `TÌNH HUỐNG • ${
                    content.category ||
                    "NGẪU NHIÊN"
                }`;

    }


    if (get("dayText")) {

        get("dayText").textContent =
            `Ngày ${game.day}`;

    }


    if (get("sceneTitle")) {

        get("sceneTitle").textContent =
            content.title;

    }


    if (get("storyText")) {

        get("storyText").textContent =
            content.text();

    }


    const container =
        get("choicesContainer");


    if (!container) {

        return;

    }


    container.innerHTML = "";


    content.choices.forEach(
        (choice, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice-button";


            button.textContent =
                `${index + 1}. ${choice.text}`;


            button.onclick =
                () => chooseOption(choice);


            container.appendChild(
                button
            );

        }
    );


    updateStats();

}


/* =========================================================
   CHỌN ĐÁP ÁN
========================================================= */

function chooseOption(choice) {

    if (!choice) {

        return;

    }


    Object.entries(
        choice.effect || {}
    ).forEach(
        ([stat, value]) => {

            if (
                typeof game[stat] ===
                "number"
            ) {

                game[stat] += value;

            }

        }
    );


    if (choice.flag) {

        game.flags[
            choice.flag
        ] = true;

    }


    clampStats();


    game.history.push({

        type:
            game.lastContentType,

        id:
            currentScene?.id ||
            currentScene?.title ||
            "scene",

        day:
            game.day,

        choice:
            choice.text

    });


    if (
        game.lastContentType ===
        "story"
    ) {

        game.storyIndex++;

        game.chapter =
            Math.min(
                5,
                (
                    currentScene.chapter ||
                    game.chapter
                ) + 1
            );

    }

    else {

        game.situationCount++;

    }


    game.day++;


    /* FLAGS */

    if (
        game.affection >= 70
    ) {

        game.flags.highAffection =
            true;

    }


    if (
        game.career >= 40
    ) {

        game.flags.careerFocused =
            true;

    }


    if (
        game.freedom >= 40
    ) {

        game.flags.freeSpirit =
            true;

    }


    if (
        game.trust >= 35
    ) {

        game.flags.deepTrust =
            true;

    }


    saveGame();


    loadNextContent();

}


/* =========================================================
   TƯƠNG THÍCH VỚI HỆ THỐNG CŨ
========================================================= */

function loadScene() {

    loadNextContent();

}


/* =========================================================
   GIỚI HẠN CHỈ SỐ
========================================================= */

function clampStats() {

    [

        "affection",
        "intelligence",
        "reputation",
        "willpower",
        "career",
        "trust",
        "freedom",
        "stress"

    ].forEach(
        key => {

            game[key] =
                Math.max(
                    0,
                    Math.min(
                        100,
                        game[key]
                    )
                );

        }
    );


    game.money =
        Math.max(
            0,
            Math.round(
                game.money
            )
        );

}


/* =========================================================
   UPDATE STATS
========================================================= */

function updateStats() {

    const values = {

        gameAffection:
            game.affection,

        gameMoney:
            game.money,

        gameIntelligence:
            game.intelligence,

        gameReputation:
            game.reputation

    };


    Object.entries(
        values
    ).forEach(
        ([id, value]) => {

            if (get(id)) {

                get(id).textContent =
                    value;

            }

        }
    );


    if (get("dayText")) {

        get("dayText").textContent =
            `Ngày ${game.day}`;

    }

}


/* =========================================================
   HÌNH NHÂN VẬT
========================================================= */

function updateCharacterVisual() {

    const visual =
        get("characterVisual");


    const image =
        get("characterImage");


    const tag =
        get("characterNameTag");


    if (
        !visual ||
        !image ||
        !game.maleLead
    ) {

        return;

    }


    if (
        game.lastContentType ===
            "story" &&
        game.storyIndex === 0
    ) {

        visual.classList.add(
            "hidden"
        );

        return;

    }


    const lead =
        game.maleLead[0];


    const source =
        characterImages[lead];


    if (!source) {

        visual.classList.add(
            "hidden"
        );

        return;

    }


    image.src =
        source;


    image.alt =
        lead;


    if (tag) {

        tag.textContent =
            lead;

    }


    visual.classList.remove(
        "hidden"
    );


    visual.classList.remove(
        "character-enter"
    );


    void visual.offsetWidth;


    visual.classList.add(
        "character-enter"
    );

}


/* =========================================================
   POPUP NHÂN VẬT
========================================================= */

function showCharacterInfo() {

    if (
        get("characterPopup")
    ) {

        get(
            "characterPopup"
        ).style.display =
            "flex";

    }


    if (get("popupName")) {

        get("popupName").textContent =
            game.name;

    }


    if (get("popupIdentity")) {

        get("popupIdentity").textContent =
            game.identity;

    }


    if (get("popupPersonality")) {

        get("popupPersonality").textContent =
            game.personality;

    }


    if (get("popupMaleLead")) {

        get("popupMaleLead").textContent =
            `${game.maleLead[0]} — ${game.maleLead[1]}`;

    }


    if (get("popupAffection")) {

        get("popupAffection").textContent =
            game.affection;

    }


    if (get("popupMoney")) {

        get("popupMoney").textContent =
            game.money;

    }


    if (get("popupIntelligence")) {

        get("popupIntelligence").textContent =
            game.intelligence;

    }


    if (get("popupReputation")) {

        get("popupReputation").textContent =
            game.reputation;

    }

}


function closeCharacterInfo() {

    if (
        get("characterPopup")
    ) {

        get(
            "characterPopup"
        ).style.display =
            "none";

    }

}


/* =========================================================
   KẾT THÚC
========================================================= */

function finishGame() {

    clampStats();


    let title;

    let text;


    const lead =
        game.maleLead?.[0]
        || "người ấy";


    /* LOVE ENDING */

    if (
        game.affection >= 75 &&
        game.trust >= 45
    ) {

        title =
            "KẾT CỤC: TÌNH YÊU ĐƯỢC CHỌN";


        text =
            `Bạn không còn yêu vì một món nợ của kiếp trước.

Bạn yêu vì chính con người của hiện tại.

${lead} đứng bên cạnh bạn.

Và lần đầu tiên, cả hai cùng bước về phía tương lai.`;

    }


    /* CAREER ENDING */

    else if (
        game.career >= 55 &&
        game.reputation >= 70
    ) {

        title =
            "KẾT CỤC: NỮ CHÍNH TỰ LẬP";


        text =
            `Bạn xây dựng được sự nghiệp của riêng mình.

${lead} có thể ở bên, nhưng không còn là điều kiện để bạn hạnh phúc.

Bạn đã trở thành người tự quyết định cuộc đời.`;

    }


    /* FREEDOM ENDING */

    else if (
        game.freedom >= 60 &&
        game.willpower >= 70
    ) {

        title =
            "KẾT CỤC: TỰ DO";


        text =
            `Bạn không chọn chiếc lồng vàng.

Cũng không chọn sống lại quá khứ.

Bạn chọn một cuộc đời do chính mình viết.

Lần này, không ai có thể quyết định thay bạn.`;

    }


    /* TRUTH ENDING */

    else if (
        game.intelligence >= 75 &&
        game.trust >= 30
    ) {

        title =
            "KẾT CỤC: SỰ THẬT CUỐI CÙNG";


        text =
            `Bạn đã lần ra bí mật đứng sau cuộc trùng sinh.

Sự thật không đẹp.

Nhưng nó giải phóng bạn khỏi câu hỏi đã ám ảnh cả hai kiếp.`;

    }


    /* BAD ENDING */

    else if (
        game.stress >= 70
    ) {

        title =
            "KẾT CỤC: KIẾP NÀY QUÁ MỆT MỎI";


        text =
            `Bạn đã cố thay đổi mọi thứ cùng lúc và quên mất mình cũng cần được sống.

Đây chưa phải một kết thúc đẹp.

Nhưng nó là lời nhắc rằng lần thứ hai cũng cần được sống thật chậm.`;

    }


    /* NORMAL ENDING */

    else {

        title =
            "KẾT CỤC: MỘT TƯƠNG LAI KHÁC";


        text =
            `Bạn chưa có tất cả đáp án.

Nhưng cuộc đời này đã khác kiếp trước.

Và đôi khi, một tương lai chưa hoàn thiện lại chính là tương lai đáng để tiếp tục.`;

    }


    if (
        get("endingTitle")
    ) {

        get(
            "endingTitle"
        ).textContent =
            title;

    }


    if (
        get("endingText")
    ) {

        get(
            "endingText"
        ).textContent =
            text;

    }


    if (
        get("finalAffection")
    ) {

        get(
            "finalAffection"
        ).textContent =
            game.affection;

    }


    if (
        get("finalMoney")
    ) {

        get(
            "finalMoney"
        ).textContent =
            game.money;

    }


    if (
        get("finalIntelligence")
    ) {

        get(
            "finalIntelligence"
        ).textContent =
            game.intelligence;

    }


    if (
        get("finalReputation")
    ) {

        get(
            "finalReputation"
        ).textContent =
            game.reputation;

    }


    saveGame();


    showScreen(
        "endingScreen"
    );

}


/* =========================================================
   CHƠI LẠI
========================================================= */

function restartGame() {

    resetGameState();

    showScreen(
        "createScreen"
    );

}


/* =========================================================
   SAVE GAME
========================================================= */

function saveGame() {

    try {

        localStorage.setItem(
            "trungSinhGame",
            JSON.stringify(game)
        );

    }

    catch (error) {

        console.warn(
            "Không thể lưu game",
            error
        );

    }

}


/* =========================================================
   LOAD GAME
========================================================= */

function loadGame() {

    try {

        const saved =
            localStorage.getItem(
                "trungSinhGame"
            );


        if (!saved) {

            alert(
                "Chưa có dữ liệu game được lưu."
            );

            return;

        }


        const loaded =
            JSON.parse(saved);


        game = {
            ...game,
            ...loaded
        };


        if (
            !Array.isArray(
                game.history
            )
        ) {

            game.history = [];

        }


        if (!game.maleLead) {

            game.maleLead =
                randomItem(
                    maleLeads
                );

        }


        clampStats();


        updateCharacterScreen();


        showScreen(
            "gameScreen"
        );


        loadNextContent();

    }

    catch (error) {

        console.error(
            error
        );


        alert(
            "Dữ liệu game không hợp lệ."
        );

    }

}


/* =========================================================
   KHỞI ĐỘNG
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showScreen(
            "startScreen"
        );

    }
);
