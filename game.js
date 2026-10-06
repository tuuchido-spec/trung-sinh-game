/* =========================================================
   TRÙNG SINH — KIẾP NÀY TA CHỌN AI?
   GAME.JS
   ========================================================= */

const SAVE_KEY = "trungSinhGameSave_v2";

/* =========================
   DỮ LIỆU NHÂN VẬT
========================= */

const identities = [
    "Thiên kim tập đoàn",
    "Con gái gia đình chính trị",
    "Con gái gia đình nghệ thuật",
    "Con gái nhà giàu sa sút",
    "Thiên kim thất lạc",
    "Sinh viên đại học",
    "Sinh viên ưu tú",
    "Nhân viên văn phòng",
    "Nhân viên mới vào nghề",
    "Chủ cửa hàng nhỏ",
    "Nhà thiết kế",
    "Nhiếp ảnh gia",
    "Ca sĩ mới debut",
    "Diễn viên vô danh",
    "Người sáng tạo nội dung",
    "Nhà báo",
    "Luật sư tập sự",
    "Bác sĩ tập sự",
    "Người thừa kế bí ẩn",
    "Người bình thường"
];

const personalities = [
    "Dịu dàng",
    "Lạnh lùng",
    "Hướng ngoại",
    "Hướng nội",
    "Thẳng thắn",
    "Khéo léo",
    "Thông minh",
    "Ngây thơ",
    "Tinh nghịch",
    "Kiêu ngạo",
    "Mạnh mẽ",
    "Nhạy cảm",
    "Điềm tĩnh",
    "Bốc đồng",
    "Tham vọng",
    "Lạc quan",
    "Đa nghi",
    "Tốt bụng",
    "Thực tế",
    "Bí ẩn"
];

const pastLives = [
    "bị người yêu phản bội",
    "bị bạn thân lợi dụng",
    "bị gia đình bỏ rơi",
    "sự nghiệp thất bại",
    "bị vu oan",
    "mất đi tài sản quan trọng",
    "bị ép bước vào một cuộc hôn nhân không mong muốn",
    "tin nhầm một người",
    "bỏ lỡ người mình thực sự trân trọng",
    "bị đồng nghiệp hãm hại",
    "bị đối thủ phá hỏng sự nghiệp",
    "một bí mật gia đình bị che giấu",
    "bị lợi dụng trong cuộc tranh giành quyền lực",
    "mất đi một người quan trọng",
    "vướng vào một scandal lớn",
    "bị phản bội bởi người mình tin tưởng nhất",
    "phát hiện thân phận thật của mình quá muộn",
    "phát hiện người mình yêu đang che giấu một bí mật",
    "đánh mất một cơ hội có thể thay đổi cuộc đời",
    "không nhớ rõ chuyện gì đã xảy ra trước khi qua đời"
];

const relationships = [
    "Chưa từng gặp",
    "Bạn cùng trường",
    "Đồng nghiệp",
    "Cấp trên — cấp dưới",
    "Đối tác",
    "Hàng xóm",
    "Bạn của bạn thân",
    "Từng gặp một lần",
    "Có ấn tượng không tốt",
    "Anh ấy từng giúp bạn",
    "Bạn từng giúp anh ấy",
    "Từng có một cuộc tranh luận",
    "Hai gia đình quen biết",
    "Đối thủ trong công việc",
    "Hợp tác theo thỏa thuận",
    "Bạn cũ",
    "Anh ấy không nhớ bạn",
    "Bạn không nhớ anh ấy",
    "Hai người từng có tình cảm ở kiếp trước",
    "Anh ấy từng âm thầm quan tâm bạn"
];

/* =========================
   20 NAM CHÍNH
========================= */

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
    ["Lâm Mặc", "Lập trình viên / chủ startup", "Ít nói, thông minh"],
    ["Chu Cảnh Thần", "Phi công", "Tự tin, điềm đạm"],
    ["Hạ Thừa Vũ", "CEO công ty giải trí", "Khôn ngoan, khó đoán"],
    ["Tô Dịch", "Nhà thiết kế thời trang", "Thanh lịch, cầu toàn"],
    ["Thẩm Quân", "Doanh nhân", "Bí ẩn, khó nắm bắt"],
    ["Lục Cảnh Hoài", "Người thừa kế tập đoàn", "Kiêu ngạo, trẻ con nhưng tình cảm"]
];

/* =========================
   CÁC CHƯƠNG
========================= */

const scenes = [

    {
        chapter: "CHƯƠNG 1 — NGÀY THỨ NHẤT",
        title: "MỞ MẮT",

        text: function(g) {
            return `Một cảm giác quen thuộc kéo bạn trở về với hiện tại.

Bạn tên là ${g.name}.

Kiếp này, bạn mang thân phận ${g.identity.toLowerCase()} và có tính cách ${g.personality.toLowerCase()}.

Điều duy nhất bạn nhớ rõ là:

Kiếp trước, bạn ${g.pastLife}.

Lần này...

Mọi thứ vẫn còn kịp để thay đổi.

Người có thể trở thành nhân vật quan trọng nhất trong kiếp này là ${g.maleLead[0]} — ${g.maleLead[1]}.`;
        },

        choices: [
            {
                text: "Bình tĩnh quan sát mọi thứ trước.",
                effect: {
                    intelligence: 3,
                    reputation: 1
                }
            },

            {
                text: "Lập tức tìm cách thay đổi những chuyện mình nhớ được.",
                effect: {
                    willpower: 3,
                    money: 1
                }
            },

            {
                text: "Tập trung xây dựng lại cuộc sống của mình.",
                effect: {
                    money: 2,
                    reputation: 2
                }
            }
        ]
    },


    {
        chapter: "CHƯƠNG 1",
        title: "MỘT CƠ HỘI KHÁC",

        text: function(g) {
            return `Ngày đầu tiên của kiếp mới trôi qua trong sự bình lặng.

Bạn nhận ra mình không cần lặp lại từng lựa chọn cũ.

Trong điện thoại xuất hiện một lời mời liên quan đến công việc.

Cùng lúc đó, một cuộc hẹn có liên quan đến ${g.maleLead[0]} cũng xuất hiện.

Quan hệ ban đầu giữa hai người:

${g.relationship}.`;
        },

        choices: [
            {
                text: "Ưu tiên công việc.",
                effect: {
                    money: 3,
                    intelligence: 2,
                    reputation: 1
                }
            },

            {
                text: "Đồng ý gặp ${g.maleLead[0]} để tìm hiểu tình hình.",
                effect: {
                    affection: 5,
                    reputation: 1
                }
            },

            {
                text: "Không vội lựa chọn. Thu thập thêm thông tin.",
                effect: {
                    intelligence: 4,
                    affection: 2
                }
            }
        ]
    },


    {
        chapter: "CHƯƠNG 2",
        title: "LỰA CHỌN ĐẦU TIÊN",

        text: function(g) {
            return `${g.maleLead[0]} xuất hiện trong một tình huống hoàn toàn khác với ký ức của bạn.

Anh ấy không biết rằng bạn đã từng sống qua một cuộc đời khác.

Bạn có thể lựa chọn cách mình muốn bước vào mối quan hệ này.

Nhưng không có lựa chọn nào đảm bảo kết quả.`;
        },

        choices: [
            {
                text: "Giữ khoảng cách và quan sát.",
                effect: {
                    intelligence: 3,
                    affection: 2
                }
            },

            {
                text: "Chủ động nói chuyện một cách thẳng thắn.",
                effect: {
                    affection: 7,
                    reputation: 1
                }
            },

            {
                text: "Tập trung vào mục tiêu riêng.",
                effect: {
                    money: 2,
                    intelligence: 3,
                    reputation: 2
                }
            }
        ]
    },


    {
        chapter: "CHƯƠNG 2",
        title: "BƯỚC NGOẶT",

        text: function(g) {
            return `Một chuyện bất ngờ xảy ra.

Nếu là bạn của kiếp trước, có lẽ bạn sẽ lựa chọn theo thói quen.

Nhưng đây là kiếp mới.

${g.maleLead[0]} đang chờ câu trả lời của bạn.

Trong khi đó, một cơ hội nghề nghiệp quan trọng cũng xuất hiện cùng lúc.`;
        },

        choices: [
            {
                text: "Chọn cơ hội nghề nghiệp.",
                effect: {
                    money: 5,
                    reputation: 4,
                    intelligence: 1
                }
            },

            {
                text: "Giải quyết chuyện đang xảy ra với ${g.maleLead[0]}.",
                effect: {
                    affection: 9,
                    reputation: 1
                }
            },

            {
                text: "Tìm cách cân bằng cả hai.",
                effect: {
                    intelligence: 4,
                    affection: 4,
                    money: 2
                }
            }
        ]
    },


    {
        chapter: "CHƯƠNG 3",
        title: "KÝ ỨC KHÔNG CÒN GIỐNG NHAU",

        text: function() {
            return `Bạn bắt đầu nhận ra một điều đáng sợ nhưng cũng đầy hy vọng:

Những gì từng xảy ra ở kiếp trước không còn hoàn toàn đúng nữa.

Chỉ một quyết định nhỏ cũng có thể tạo ra một tương lai khác.

Và lần đầu tiên...

Bạn không còn muốn sống theo một kết thúc đã được viết sẵn.`;
        },

        choices: [
            {
                text: "Tin vào chính mình.",
                effect: {
                    intelligence: 4,
                    reputation: 3,
                    willpower: 3
                }
            },

            {
                text: "Tin vào người đã đồng hành cùng mình.",
                effect: {
                    affection: 10,
                    reputation: 1
                }
            },

            {
                text: "Tự mình mở ra một con đường hoàn toàn mới.",
                effect: {
                    money: 4,
                    intelligence: 4,
                    reputation: 4
                }
            }
        ]
    },


    {
        chapter: "CHƯƠNG 4",
        title: "KIẾP NÀY",

        text: function(g) {
            return `Thời gian đã đủ để chứng minh rằng bạn thật sự đang sống một cuộc đời khác.

${g.name} không còn là người của kiếp trước.

Những lựa chọn bạn đưa ra đã thay đổi công việc, các mối quan hệ và tương lai.

Đây chưa phải kết thúc...

Nhưng là thời điểm số phận bắt đầu trả lời.`;
        },

        choices: [
            {
                text: "Khép lại một kiếp sống mới.",
                effect: {
                    reputation: 2,
                    intelligence: 2
                },
                ending: true
            },

            {
                text: "Đặt niềm tin vào người đã trở nên quan trọng.",
                effect: {
                    affection: 12
                },
                ending: true
            },

            {
                text: "Chọn con đường độc lập của riêng mình.",
                effect: {
                    money: 5,
                    intelligence: 5,
                    reputation: 5
                },
                ending: true
            }
        ]
    }

];


/* =========================
   GAME STATE
========================= */

let game = null;


/* =========================
   HELPER
========================= */

function $(id) {
    return document.getElementById(id);
}


function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}


function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* =========================
   CHUYỂN SCREEN
========================= */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = $(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   BẮT ĐẦU GAME
========================= */

function startGame() {

    showScreen("createScreen");

    setTimeout(function() {

        const input = $("playerName");

        if (input) {
            input.focus();
        }

    }, 250);
}


/* =========================
   TẠO NHÂN VẬT
========================= */

function createCharacter() {

    const input = $("playerName");

    const name =
        input && input.value.trim()
            ? input.value.trim()
            : "Nhân vật vô danh";


    const lead = randomItem(maleLeads);


    game = {

        name: name,

        identity: randomItem(identities),

        personality: randomItem(personalities),

        pastLife: randomItem(pastLives),

        relationship: randomItem(relationships),

        maleLead: lead,

        day: 1,

        sceneIndex: 0,

        affection: randomInt(8, 25),

        money: randomInt(20, 80),

        intelligence: randomInt(35, 65),

        reputation: randomInt(20, 55),

        willpower: randomInt(35, 70),

        history: [],

        startedAt: Date.now()

    };


    renderCharacter();

    showScreen("characterScreen");
}


/* =========================
   HIỂN THỊ NHÂN VẬT
========================= */

function renderCharacter() {

    if (!game) return;


    $("characterName").textContent =
        game.name;


    $("identityText").textContent =
        game.identity;


    $("personalityText").textContent =
        game.personality;


    $("maleLeadText").textContent =
        game.maleLead[0] +
        " — " +
        game.maleLead[1];


    $("affectionStat").textContent =
        game.affection;


    $("moneyStat").textContent =
        game.money;


    $("intelligenceStat").textContent =
        game.intelligence;


    $("reputationStat").textContent =
        game.reputation;
}


/* =========================
   BẮT ĐẦU CỐT TRUYỆN
========================= */

function beginStory() {

    if (!game) {

        startGame();

        return;
    }


    game.day = 1;

    game.sceneIndex = 0;


    showScreen("gameScreen");

    renderScene();
}


/* =========================
   HIỂN THỊ SCENE
========================= */

function renderScene() {

    if (!game) return;


    const scene =
        scenes[game.sceneIndex];


    if (!scene) {

        endGame();

        return;
    }


    $("dayText").textContent =
        "Ngày " + game.day;


    $("chapterText").textContent =
        scene.chapter;


    $("sceneTitle").textContent =
        scene.title;


    $("storyText").textContent =
        scene.text(game);


    updateGameStats();


    const container =
        $("choicesContainer");


    container.innerHTML = "";


    scene.choices.forEach(function(choice, index) {

        const button =
            document.createElement("button");


        button.className =
            "choice-button";


        button.textContent =
            (index + 1) +
            ". " +
            replaceVars(choice.text);


        button.addEventListener(
            "click",
            function() {
                choose(choice);
            }
        );


        container.appendChild(button);

    });
}


/* =========================
   THAY BIẾN TRONG CHOICE
========================= */

function replaceVars(text) {

    if (!game) return text;


    return text
        .replaceAll(
            "${g.maleLead[0]}",
            game.maleLead[0]
        )
        .replaceAll(
            "${g.name}",
            game.name
        );
}


/* =========================
   CHỌN ĐÁP ÁN
========================= */

function choose(choice) {

    if (!game) return;


    applyEffect(
        choice.effect || {}
    );


    game.history.push({

        day: game.day,

        scene: game.sceneIndex,

        choice: replaceVars(
            choice.text
        ),

        time: Date.now()

    });


    if (choice.ending) {

        endGame();

        return;
    }


    game.day++;


    randomEvent();


    game.sceneIndex++;


    renderScene();
}


/* =========================
   CỘNG / TRỪ CHỈ SỐ
========================= */

function applyEffect(effect) {

    Object.keys(effect).forEach(function(key) {

        if (
            typeof game[key] !== "number"
        ) {
            return;
        }


        game[key] += effect[key];


        if (key === "money") {

            game[key] =
                Math.max(
                    0,
                    game[key]
                );

        } else {

            game[key] =
                clamp(
                    game[key],
                    0,
                    100
                );
        }

    });
}


/* =========================
   RANDOM EVENT
========================= */

function randomEvent() {

    const roll =
        Math.random();


    if (roll < 0.20) {

        game.money +=
            randomInt(2, 8);


        game.history.push({

            day: game.day,

            event:
                "Một cơ hội nhỏ giúp tài chính được cải thiện."

        });

    }


    else if (roll < 0.38) {

        game.reputation =
            clamp(
                game.reputation +
                randomInt(2, 6),
                0,
                100
            );


        game.history.push({

            day: game.day,

            event:
                "Một việc tốt khiến danh tiếng tăng lên."

        });

    }


    else if (roll < 0.54) {

        game.intelligence =
            clamp(
                game.intelligence +
                randomInt(1, 5),
                0,
                100
            );


        game.history.push({

            day: game.day,

            event:
                "Một trải nghiệm mới giúp bạn trưởng thành hơn."

        });

    }


    else if (roll < 0.67) {

        game.affection =
            clamp(
                game.affection +
                randomInt(1, 5),
                0,
                100
            );


        game.history.push({

            day: game.day,

            event:
                "Một cuộc trò chuyện khiến khoảng cách giữa hai người thay đổi."

        });

    }

}


/* =========================
   UPDATE STATS
========================= */

function updateGameStats() {

    if (!game) return;


    $("gameAffection").textContent =
        game.affection;


    $("gameMoney").textContent =
        game.money;


    $("gameIntelligence").textContent =
        game.intelligence;


    $("gameReputation").textContent =
        game.reputation;
}


/* =========================
   CHARACTER POPUP
========================= */

function showCharacterInfo() {

    if (!game) return;


    $("popupName").textContent =
        game.name;


    $("popupIdentity").textContent =
        "Thân phận: " +
        game.identity;


    $("popupPersonality").textContent =
        "Tính cách: " +
        game.personality;


    $("popupMaleLead").textContent =
        "Nhân vật quan trọng: " +
        game.maleLead[0] +
        " — " +
        game.maleLead[1];


    $("popupAffection").textContent =
        game.affection;


    $("popupMoney").textContent =
        game.money;


    $("popupIntelligence").textContent =
        game.intelligence;


    $("popupReputation").textContent =
        game.reputation;


    $("characterPopup")
        .classList
        .add("show");
}


function closeCharacterInfo() {

    const popup =
        $("characterPopup");


    if (popup) {

        popup.classList.remove(
            "show"
        );

    }
}


/* =========================
   SAVE GAME
========================= */

function saveGame(showMessage = true) {

    if (!game) return;


    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(game)
    );


    if (showMessage) {

        showToast(
            "Đã lưu kiếp này."
        );

    }
}


/* =========================
   LOAD GAME
========================= */

function loadGame() {

    const saved =
        localStorage.getItem(
            SAVE_KEY
        );


    if (!saved) {

        showToast(
            "Chưa có kiếp nào được lưu."
        );

        return;
    }


    try {

        game =
            JSON.parse(saved);


        if (
            !game ||
            !game.name ||
            !game.maleLead
        ) {

            throw new Error(
                "Save khô               text: "Khép lại một kiếp sống mới.",
                effect: {
                    reputation: 2,
                    intelligence: 2
                },
                ending: true
            },

            {
                text: "Đặt niềm tin vào người đã trở nên quan trọng.",
                effect: {
                    affection: 12
                },
                ending: true
            },

            {
                text: "Chọn con đường độc lập của riêng mình.",
                effect: {
                    money: 5,
                    intelligence: 5,
                    reputation: 5
                },
                ending: true
            }
        ]
    }

];


/* =========================
   GAME STATE
========================= */

let game = null;


/* =========================
   HELPER
========================= */

function $(id) {
    return document.getElementById(id);
}


function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}


function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* =========================
   CHUYỂN SCREEN
========================= */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = $(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   BẮT ĐẦU GAME
========================= */

function startGame() {

    showScreen("createScreen");

      "Tự do sống cuộc đời mình.",
            () => {

                game.intelligence += 15;

                game.reputation += 15;

                endGame();

            }
        );


        return;
    }

}


/* =========================================================
   ADD CHOICE
========================================================= */

function addChoice(text, action) {

    const button =
        document.createElement("button");

    button.className =
        "choice-button";

    button.textContent =
        text;

    button.onclick = () => {

        action();

        updateStats();

    };


    document
        .getElementById("choicesContainer")
        .appendChild(button);

}


/* =========================================================
   NEXT SCENE
========================================================= */

function nextScene() {

    game.storyStep++;

    game.day++;

    randomEvent();

    saveGame(false);

    renderScene();

}


/* =========================================================
   RANDOM EVENT
========================================================= */

function randomEvent() {

    const chance =
        Math.random();

    if (chance < 0.20) {

        const event =
            Math.floor(Math.random() * 3);


        if (event === 0) {

            game.money += 300;

        }


        if (event === 1) {

            game.reputation += 5;

        }


        if (event === 2) {

            game.intelligence += 3;

        }

    }

}


/* =========================================================
   ENDING
========================================================= */

function endGame() {

    game.ended = true;

    saveGame(false);


    let title = "";

    let text = "";


    if (
        game.affection >= 70 &&
        game.affection >= game.reputation &&
        game.affection >= game.intelligence
    ) {

        title =
            "ENDING — TÌNH YÊU ĐỊNH MỆNH";

        text =

`Bạn đã thay đổi rất nhiều thứ trong cuộc đời này.

Nhưng điều quan trọng nhất...

là lần này bạn không bỏ lỡ người mà mình muốn giữ lại.

Có những cuộc gặp gỡ giống như đã được định sẵn từ rất lâu.

Có lẽ...

đây mới là câu chuyện mà bạn thực sự muốn sống.`;

    }

    else if (
        game.money >= 5000 &&
        game.reputation >= 60
    ) {

        title =
            "ENDING — NỮ HOÀNG CỦA ĐỜI MÌNH";

        text =

`Bạn không còn là người chờ đợi số phận quyết định tương lai.

Bạn đã tự mình xây dựng vị trí của mình.

Tiền bạc, danh tiếng và năng lực...

tất cả đều thuộc về bạn.

Kiếp này, bạn không cần ai cứu mình.`;

    }

    else if (
        game.intelligence >= 75
    ) {

        title =
      
