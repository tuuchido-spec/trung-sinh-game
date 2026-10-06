/* =========================================================
   TRÙNG SINH — KIẾP NÀY TA CHỌN AI?
   GAME ENGINE
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

let game = {
    name: "",
    identity: "",
    personality: "",
    pastLife: "",
    maleLead: null,

    day: 1,
    affection: 20,
    money: 5000,
    intelligence: 50,
    reputation: 50,
    willpower: 50,

    chapter: 1,
    scene: 0
};

let currentScene = null;


/* =========================================================
   TIỆN ÍCH
========================================================= */

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get(id) {
    return document.getElementById(id);
}

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
            element.style.display = id === screenId ? "block" : "none";
        }
    });

    window.scrollTo(0, 0);
}


/* =========================================================
   BẮT ĐẦU GAME
========================================================= */

function startGame() {
    showScreen("createScreen");

    const nameInput = get("playerName");

    if (nameInput) {
        setTimeout(() => nameInput.focus(), 200);
    }
}


/* =========================================================
   TẠO NHÂN VẬT
========================================================= */

function createCharacter() {

    const nameInput = get("playerName");

    let name = nameInput ? nameInput.value.trim() : "";

    if (!name) {
        name = "Nguyệt";
    }

    game.name = name;

    game.identity = randomItem(identities);
    game.personality = randomItem(personalities);
    game.pastLife = randomItem(pastLives);
    game.maleLead = randomItem(maleLeads);

    game.day = 1;
    game.chapter = 1;
    game.scene = 0;

    game.affection = randomNumber(10, 25);
    game.money = randomNumber(3000, 10000);
    game.intelligence = randomNumber(40, 65);
    game.reputation = randomNumber(35, 60);
    game.willpower = randomNumber(40, 70);

    updateCharacterScreen();

    showScreen("characterScreen");
}


/* =========================================================
   HIỂN THỊ NHÂN VẬT
========================================================= */

function updateCharacterScreen() {

    if (get("characterName")) {
        get("characterName").textContent = game.name;
    }

    if (get("identityText")) {
        get("identityText").textContent = game.identity;
    }

    if (get("personalityText")) {
        get("personalityText").textContent = game.personality;
    }

    if (get("maleLeadText")) {
        get("maleLeadText").textContent =
            `${game.maleLead[0]} — ${game.maleLead[1]}`;
    }

    if (get("affectionStat")) {
        get("affectionStat").textContent = game.affection;
    }

    if (get("moneyStat")) {
        get("moneyStat").textContent = game.money;
    }

    if (get("intelligenceStat")) {
        get("intelligenceStat").textContent = game.intelligence;
    }

    if (get("reputationStat")) {
        get("reputationStat").textContent = game.reputation;
    }
}


/* =========================================================
   BẮT ĐẦU CÂU CHUYỆN
========================================================= */

function beginStory() {

    game.day = 1;
    game.chapter = 1;
    game.scene = 0;

    showScreen("gameScreen");

    updateStats();

    loadScene();
}


/* =========================================================
   CÁC PHÂN CẢNH
========================================================= */

const scenes = [

    {
        title: "TỈNH LẠI",
        text: () =>
            `Một cơn đau đầu dữ dội kéo bạn tỉnh lại.

Căn phòng xa lạ nhưng kỳ lạ thay, từng món đồ trước mắt đều khiến bạn có cảm giác quen thuộc.

Bạn nhìn vào gương.

Đây là gương mặt của chính mình...

Nhưng trẻ hơn rất nhiều.

Một ký ức vụt qua.

${game.pastLife}

Bạn đã trở về thời điểm mọi thứ vẫn còn có thể thay đổi.`,

        choices: [
            {
                text: "Bình tĩnh quan sát mọi thứ",
                effect: {
                    intelligence: 10,
                    willpower: 5
                }
            },
            {
                text: "Hoảng loạn và tìm người giúp đỡ",
                effect: {
                    reputation: -5,
                    willpower: -5
                }
            }
        ]
    },

    {
        title: "LỰA CHỌN ĐẦU TIÊN",
        text: () =>
            `Bạn nhận ra mình đang đứng trước một ngã rẽ.

Một bên là cuộc sống an toàn mà gia đình đã sắp xếp.

Một bên là con đường hoàn toàn do bạn lựa chọn.

Kiếp trước, bạn đã từng hối hận vì không dám lựa chọn cho chính mình.`,

        choices: [
            {
                text: "Tự mình quyết định tương lai",
                effect: {
                    willpower: 15,
                    intelligence: 5
                }
            },
            {
                text: "Nghe theo gia đình",
                effect: {
                    reputation: 10,
                    money: 3000
                }
            },
            {
                text: "Chưa quyết định vội",
                effect: {
                    intelligence: 10
                }
            }
        ]
    },

    {
        title: "CUỘC GẶP ĐẦU TIÊN",
        text: () =>
            `Chiều hôm đó, bạn tình cờ gặp ${game.maleLead[0]}.

${game.maleLead[0]} là ${game.maleLead[1]}, nổi tiếng với tính cách ${game.maleLead[2].toLowerCase()}.

Hai người chỉ lướt qua nhau.

Nhưng bạn lại có cảm giác...

Cuộc gặp này từng xảy ra trong kiếp trước.`,

        choices: [
            {
                text: "Chủ động bắt chuyện",
                effect: {
                    affection: 10,
                    reputation: 5
                }
            },
            {
                text: "Giữ khoảng cách",
                effect: {
                    willpower: 10,
                    intelligence: 5
                }
            },
            {
                text: "Quan sát anh ấy trước",
                effect: {
                    intelligence: 10,
                    affection: 3
                }
            }
        ]
    },

    {
        title: "KÝ ỨC CŨ",
        text: () =>
            `Đêm xuống.

Bạn nằm trên giường nhưng không thể ngủ.

Một ký ức khác xuất hiện.

Bạn nhớ đến một quyết định từng khiến mình hối hận.

Nhưng lần này...

Bạn có cơ hội sửa lại nó.`,

        choices: [
            {
                text: "Thay đổi ngay lập tức",
                effect: {
                    willpower: 10,
                    intelligence: 5
                }
            },
            {
                text: "Chờ thời cơ thích hợp",
                effect: {
                    intelligence: 15
                }
            },
            {
                text: "Không để quá khứ chi phối",
                effect: {
                    willpower: 15,
                    affection: 5
                }
            }
        ]
    },

    {
        title: "NGÃ RẼ",
        text: () =>
            `Một cơ hội bất ngờ xuất hiện.

Nếu nắm lấy, cuộc sống của bạn có thể thay đổi hoàn toàn.

Nhưng nó cũng đồng nghĩa với việc bước vào một thế giới mà bạn chưa từng thuộc về.

Lần này, bạn sẽ chọn gì?`,

        choices: [
            {
                text: "Nắm lấy cơ hội",
                effect: {
                    money: 5000,
                    reputation: 10,
                    willpower: 10
                }
            },
            {
                text: "Từ chối và chọn cuộc sống bình thường",
                effect: {
                    intelligence: 10,
                    willpower: 10
                }
            },
            {
                text: "Tìm cách biến cơ hội thành lợi thế",
                effect: {
                    intelligence: 20,
                    money: 2000
                }
            }
        ]
    },

    {
        title: "ĐỐI DIỆN SỐ PHẬN",
        text: () =>
            `Bạn bắt đầu nhận ra một điều.

Số phận không hoàn toàn cố định.

Mỗi lựa chọn của bạn đều đang tạo ra một tương lai khác.

${game.maleLead[0]} cũng bắt đầu xuất hiện thường xuyên hơn trong cuộc sống của bạn.

Nhưng lần này...

Bạn không muốn sống cuộc đời của người khác nữa.`,

        choices: [
            {
                text: "Theo đuổi điều mình thật sự muốn",
                effect: {
                    willpower: 20,
                    reputation: 5
                }
            },
            {
                text: "Tập trung xây dựng sự nghiệp",
                effect: {
                    intelligence: 10,
                    money: 5000,
                    reputation: 15
                }
            },
            {
                text: "Cho bản thân một cơ hội với người ấy",
                effect: {
                    affection: 20,
                    willpower: 5
                }
            }
        ]
    }

];


/* =========================================================
   LOAD SCENE
========================================================= */

function loadScene() {

    if (game.scene >= scenes.length) {
        finishGame();
        return;
    }

    currentScene = scenes[game.scene];

    if (get("chapterText")) {
        get("chapterText").textContent =
            `CHƯƠNG ${game.chapter}`;
    }

    if (get("dayText")) {
        get("dayText").textContent =
            `Ngày ${game.day}`;
    }

    if (get("sceneTitle")) {
        get("sceneTitle").textContent =
            currentScene.title;
    }

    if (get("storyText")) {
        get("storyText").textContent =
            currentScene.text();
    }

    const container = get("choicesContainer");

    if (!container) return;

    container.innerHTML = "";

    currentScene.choices.forEach((choice, index) => {

        const button = document.createElement("button");

        button.className = "choice-button";

        button.textContent =
            `${index + 1}. ${choice.text}`;

        button.onclick = () => {
            chooseOption(choice);
        };

        container.appendChild(button);
    });

    updateStats();
}


/* =========================================================
   CHỌN LỰA CHỌN
========================================================= */

function chooseOption(choice) {

    if (!choice || !choice.effect) return;

    Object.keys(choice.effect).forEach(stat => {

        if (typeof game[stat] === "number") {
            game[stat] += choice.effect[stat];
        }
    });

    clampStats();

    game.day++;
    game.scene++;

    if (game.scene % 3 === 0) {
        game.chapter++;
    }

    randomEvent();

    updateStats();

    loadScene();
}


/* =========================================================
   RANDOM EVENT
========================================================= */

function randomEvent() {

    const chance = Math.random();

    if (chance > 0.75) {

        const event = randomNumber(1, 4);

        if (event === 1) {
            game.money += 1500;
        }

        if (event === 2) {
            game.reputation += 5;
        }

        if (event === 3) {
            game.intelligence += 5;
        }

        if (event === 4) {
            game.affection += 5;
        }
    }

    clampStats();
}


/* =========================================================
   GIỚI HẠN CHỈ SỐ
========================================================= */

function clampStats() {

    game.affection =
        Math.max(0, Math.min(100, game.affection));

    game.intelligence =
        Math.max(0, Math.min(100, game.intelligence));

    game.reputation =
        Math.max(0, Math.min(100, game.reputation));

    game.willpower =
        Math.max(0, Math.min(100, game.willpower));

    game.money =
        Math.max(0, game.money);
}


/* =========================================================
   UPDATE STATS
========================================================= */

function updateStats() {

    const values = {
        gameAffection: game.affection,
        gameMoney: game.money,
        gameIntelligence: game.intelligence,
        gameReputation: game.reputation
    };

    Object.keys(values).forEach(id => {

        const element = get(id);

        if (element) {
            element.textContent = values[id];
        }
    });

    if (get("dayText")) {
        get("dayText").textContent =
            `Ngày ${game.day}`;
    }
}


/* =========================================================
   CHARACTER POPUP
========================================================= */

function showCharacterInfo() {

    if (get("characterPopup")) {
        get("characterPopup").style.display = "flex";
    }

    if (get("popupName")) {
        get("popupName").textContent = game.name;
    }

    if (get("popupIdentity")) {
        get("popupIdentity").textContent = game.identity;
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

    if (get("characterPopup")) {
        get("characterPopup").style.display = "none";
    }
}


/* =========================================================
   KẾT THÚC
========================================================= */

function finishGame() {

    let title = "";
    let text = "";

    if (
        game.affection >= 70 &&
        game.willpower >= 70
    ) {

        title = "KẾT CỤC: DUYÊN ĐỊNH LẠI";

        text =
            `Bạn đã thay đổi hoàn toàn những gì từng xảy ra.

Bạn không còn là người bị số phận dẫn dắt.

Lần này, bạn tự mình lựa chọn tương lai.

Và bên cạnh bạn là ${game.maleLead[0]}.

Có lẽ...

Đây mới là cuộc đời mà bạn thực sự muốn sống.`;
    }

    else if (
        game.money >= 15000 &&
        game.reputation >= 70 &&
        game.intelligence >= 65
    ) {

        title = "KẾT CỤC: NỮ CHÍNH TỰ LẬP";

        text =
            `Bạn đã xây dựng được vị trí của riêng mình.

Không cần dựa vào gia đình.

Không cần dựa vào bất kỳ ai.

Bạn đã trở thành người có thể tự quyết định số phận của chính mình.`;
    }

    else if (game.willpower >= 75) {

        title = "KẾT CỤC: PHÁN QUYẾT SỐ PHẬN";

        text =
            `Bạn không thể thay đổi tất cả.

Nhưng bạn đã thay đổi chính mình.

Và đôi khi...

đó chính là cách mạnh mẽ nhất để thay đổi số phận.`;
    }

    else {

        title = "KẾT CỤC: MỘT KIẾP SỐNG KHÁC";

        text =
            `Cuộc đời này không giống kiếp trước.

Dù chưa thể đạt được tất cả những gì mong muốn,
bạn đã có một cơ hội để sống lại và lựa chọn.

Có lẽ câu chuyện của bạn...

vẫn còn tiếp tục.`;
    }

    if (get("endingTitle")) {
        get("endingTitle").textContent = title;
    }

    if (get("endingText")) {
        get("endingText").textContent = text;
    }

    if (get("finalAffection")) {
        get("finalAffection").textContent =
            game.affection;
    }

    if (get("finalMoney")) {
        get("finalMoney").textContent =
            game.money;
    }

    if (get("finalIntelligence")) {
        get("finalIntelligence").textContent =
            game.intelligence;
    }

    if (get("finalReputation")) {
        get("finalReputation").textContent =
            game.reputation;
    }

    saveGame();

    showScreen("endingScreen");
}


/* =========================================================
   LƯU GAME
========================================================= */

function saveGame() {

    try {
        localStorage.setItem(
            "trungSinhGame",
            JSON.stringify(game)
        );
    } catch (error) {
        console.warn("Không thể lưu game:", error);
    }
}


/* =========================================================
   LOAD GAME
========================================================= */

function loadGame() {

    tr
