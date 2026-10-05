/* =========================================================
   TRÙNG SINH
   Prototype Game
========================================================= */


/* =========================================================
   DATA
========================================================= */

const identities = [
    "Thiên kim tập đoàn",
    "Sinh viên đại học",
    "Nhà thiết kế trẻ",
    "Nhân viên văn phòng",
    "Chủ cửa hàng nhỏ",
    "Ca sĩ mới debut",
    "Diễn viên vô danh",
    "Nhiếp ảnh gia",
    "Người sáng tạo nội dung",
    "Nhà báo trẻ",
    "Luật sư tập sự",
    "Con gái gia đình nghệ thuật",
    "Thiên kim thất lạc",
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


const maleLeads = [
    {
        name: "Lục Đình Khâm",
        job: "CEO tập đoàn",
        personality: "Lạnh lùng, quyết đoán"
    },

    {
        name: "Tần Mặc",
        job: "Bác sĩ",
        personality: "Điềm tĩnh, dịu dàng"
    },

    {
        name: "Cố Thừa Ngôn",
        job: "Luật sư",
        personality: "Lý trí, sắc bén"
    },

    {
        name: "Thẩm Dịch",
        job: "Kiến trúc sư",
        personality: "Trầm lặng, tinh tế"
    },

    {
        name: "Giang Hàn",
        job: "Cảnh sát",
        personality: "Chính trực, nghiêm túc"
    },

    {
        name: "Trình Dật",
        job: "Nhà sản xuất âm nhạc",
        personality: "Tự do, phóng khoáng"
    },

    {
        name: "Phó Cảnh Thâm",
        job: "Chủ tịch tập đoàn",
        personality: "Kiêu ngạo, quyền lực"
    },

    {
        name: "Tạ Minh Triết",
        job: "Giáo sư đại học",
        personality: "Thông minh, trưởng thành"
    },

    {
        name: "Hứa Ngôn",
        job: "Nhiếp ảnh gia",
        personality: "Dịu dàng, nghệ sĩ"
    },

    {
        name: "Kỷ Thần",
        job: "Nhà đầu tư",
        personality: "Thực tế, khó đoán"
    },

    {
        name: "Mộ Dung Trạch",
        job: "Chủ chuỗi nhà hàng",
        personality: "Hài hước, tinh tế"
    },

    {
        name: "Bạch Tử Khiêm",
        job: "Diễn viên nổi tiếng",
        personality: "Khó gần, nổi bật"
    },

    {
        name: "Đường Cảnh Nhiên",
        job: "Bác sĩ phẫu thuật",
        personality: "Lạnh ngoài, ấm trong"
    },

    {
        name: "Tống Duy",
        job: "Nhà báo",
        personality: "Chính trực, tò mò"
    },

    {
        name: "Lâm Mặc",
        job: "Lập trình viên / CEO startup",
        personality: "Ít nói, thông minh"
    },

    {
        name: "Chu Cảnh Thần",
        job: "Phi công",
        personality: "Tự tin, điềm đạm"
    },

    {
        name: "Hạ Thừa Vũ",
        job: "CEO công ty giải trí",
        personality: "Khôn ngoan, khó đoán"
    },

    {
        name: "Tô Dịch",
        job: "Nhà thiết kế thời trang",
        personality: "Thanh lịch, cầu toàn"
    },

    {
        name: "Thẩm Quân",
        job: "Doanh nhân",
        personality: "Bí ẩn, khó nắm bắt"
    },

    {
        name: "Lục Cảnh Hoài",
        job: "Người thừa kế tập đoàn",
        personality: "Kiêu ngạo nhưng tình cảm"
    }
];


/* =========================================================
   GAME STATE
========================================================= */

let game = {

    playerName: "",

    identity: "",

    personality: "",

    maleLead: null,

    day: 1,

    affection: 0,

    money: 1000,

    intelligence: 50,

    reputation: 50,

    storyStep: 0,

    ended: false

};


/* =========================================================
   UTILITY
========================================================= */

function randomItem(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


function clamp(value, min, max) {

    return Math.max(
        min,
        Math.min(max, value)
    );

}


/* =========================================================
   SCREEN
========================================================= */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });

    document
        .getElementById(id)
        .classList.add("active");

}


/* =========================================================
   START
========================================================= */

function startGame() {

    showScreen("createScreen");

}


/* =========================================================
   CREATE CHARACTER
========================================================= */

function createCharacter() {

    const input =
        document.getElementById("playerName");

    let name =
        input.value.trim();

    if (!name) {

        alert("Hãy nhập tên nhân vật.");

        return;

    }


    game = {

        playerName: name,

        identity: randomItem(identities),

        personality: randomItem(personalities),

        maleLead: randomItem(maleLeads),

        day: 1,

        affection: Math.floor(Math.random() * 11),

        money: 1000 + Math.floor(Math.random() * 4001),

        intelligence: 40 + Math.floor(Math.random() * 31),

        reputation: 40 + Math.floor(Math.random() * 31),

        storyStep: 0,

        ended: false

    };


    updateCharacterScreen();

    showScreen("characterScreen");

}


/* =========================================================
   CHARACTER SCREEN
========================================================= */

function updateCharacterScreen() {

    document.getElementById(
        "characterName"
    ).textContent =
        game.playerName;


    document.getElementById(
        "identityText"
    ).textContent =
        game.identity;


    document.getElementById(
        "personalityText"
    ).textContent =
        game.personality;


    document.getElementById(
        "maleLeadText"
    ).textContent =
        game.maleLead.name;


    document.getElementById(
        "affectionStat"
    ).textContent =
        game.affection;


    document.getElementById(
        "moneyStat"
    ).textContent =
        game.money;


    document.getElementById(
        "intelligenceStat"
    ).textContent =
        game.intelligence;


    document.getElementById(
        "reputationStat"
    ).textContent =
        game.reputation;

}


/* =========================================================
   BEGIN STORY
========================================================= */

function beginStory() {

    showScreen("gameScreen");

    renderScene();

}


/* =========================================================
   UPDATE STATS
========================================================= */

function updateStats() {

    game.affection =
        clamp(game.affection, 0, 100);

    game.money =
        Math.max(0, game.money);

    game.intelligence =
        clamp(game.intelligence, 0, 100);

    game.reputation =
        clamp(game.reputation, 0, 100);


    document.getElementById(
        "dayText"
    ).textContent =
        "Ngày " + game.day;


    document.getElementById(
        "gameAffection"
    ).textContent =
        game.affection;


    document.getElementById(
        "gameMoney"
    ).textContent =
        game.money;


    document.getElementById(
        "gameIntelligence"
    ).textContent =
        game.intelligence;


    document.getElementById(
        "gameReputation"
    ).textContent =
        game.reputation;

}


/* =========================================================
   STORY SCENES
========================================================= */

function renderScene() {

    updateStats();


    const storyText =
        document.getElementById("storyText");

    const sceneTitle =
        document.getElementById("sceneTitle");

    const chapterText =
        document.getElementById("chapterText");

    const choices =
        document.getElementById("choicesContainer");


    choices.innerHTML = "";


    /* ---------------------------------
       SCENE 0
    ---------------------------------- */

    if (game.storyStep === 0) {

        chapterText.textContent =
            "CHƯƠNG 1";

        sceneTitle.textContent =
            "MỞ MẮT";


        storyText.textContent =

`Một cảm giác kỳ lạ kéo bạn ra khỏi giấc ngủ.

Bạn mở mắt.

Căn phòng quen thuộc đến mức khiến tim bạn khựng lại.

Đây là...

nhiều năm trước.

Một thời điểm mà bạn từng nghĩ mình sẽ không bao giờ được quay lại.

Trong ký ức của kiếp trước, có quá nhiều điều bạn đã làm sai.

Nhưng lần này...

bạn có cơ hội lựa chọn lại.`;


        addChoice(
            "Bình tĩnh quan sát mọi thứ.",
            () => {

                game.intelligence += 5;

                nextScene();

            }
        );


        addChoice(
            "Kiểm tra điện thoại ngay lập tức.",
            () => {

                game.reputation += 3;

                nextScene();

            }
        );


        addChoice(
            "Tự nhủ rằng tất cả chỉ là một giấc mơ.",
            () => {

                game.affection += 3;

                nextScene();

            }
        );


        return;
    }


    /* ---------------------------------
       SCENE 1
    ---------------------------------- */

    if (game.storyStep === 1) {

        chapterText.textContent =
            "CHƯƠNG 1";

        sceneTitle.textContent =
            "CÁI TÊN QUEN THUỘC";


        storyText.textContent =

`Điện thoại trên bàn sáng lên.

Một cái tên xuất hiện trên màn hình.

${game.maleLead.name}.

Ở kiếp trước, cái tên này từng xuất hiện trong cuộc đời bạn theo một cách mà bạn không thể quên.

Nhưng ở hiện tại...

mọi thứ vẫn chưa bắt đầu.

Bạn vẫn còn thời gian để thay đổi.`;


        addChoice(
            "Chủ động nhắn tin.",
            () => {

                game.affection += 10;

                nextScene();

            }
        );


        addChoice(
            "Không liên lạc. Tập trung vào bản thân.",
            () => {

                game.intelligence += 5;

                game.reputation += 5;

                nextScene();

            }
        );


        addChoice(
            "Tìm hiểu thông tin về anh ấy trước.",
            () => {

                game.intelligence += 8;

                nextScene();

            }
        );


        return;
    }


    /* ---------------------------------
       SCENE 2
    ---------------------------------- */

    if (game.storyStep === 2) {

        chapterText.textContent =
            "CHƯƠNG 1";

        sceneTitle.textContent =
            "LỰA CHỌN ĐẦU TIÊN";


        storyText.textContent =

`Buổi sáng trôi qua.

Bạn nhận ra một điều:

Kiếp này, bạn không còn muốn sống theo những lựa chọn của người khác.

Bạn có thể theo đuổi sự nghiệp.

Bạn có thể xây dựng các mối quan hệ.

Bạn có thể tìm lại người từng bỏ lỡ.

Hoặc...

bạn có thể tự viết một cuộc đời hoàn toàn khác.`;


        addChoice(
            "Tập trung xây dựng sự nghiệp.",
            () => {

                game.intelligence += 10;

                game.reputation += 5;

                nextScene();

            }
        );


        addChoice(
            "Tìm cách gặp nam chính.",
            () => {

                game.affection += 15;

                nextScene();

            }
        );


        addChoice(
            "Kết bạn và mở rộng quan hệ.",
            () => {

                game.reputation += 10;

                game.money += 500;

                nextScene();

            }
        );


        addChoice(
            "Ở nhà nghỉ ngơi và suy nghĩ.",
            () => {

                game.intelligence += 3;

                nextScene();

            }
        );


        return;
    }


    /* ---------------------------------
       SCENE 3
    ---------------------------------- */

    if (game.storyStep === 3) {

        chapterText.textContent =
            "CHƯƠNG 2";

        sceneTitle.textContent =
            "CUỘC GẶP ĐẦU TIÊN";


        storyText.textContent =

`Chiều hôm đó.

Bạn bước vào một nơi hoàn toàn khác với ký ức của kiếp trước.

Và rồi...

bạn nhìn thấy ${game.maleLead.name}.

Anh ấy đang đứng cách bạn không xa.

Ánh mắt hai người chạm nhau.

Chỉ vài giây.

Nhưng lần này, bạn biết mình có thể lựa chọn cách cuộc gặp này sẽ diễn ra.`;


        addChoice(
            "Chủ động chào hỏi.",
            () => {

                game.affection += 12;

                nextScene();

            }
        );


        addChoice(
            "Mỉm cười rồi bước qua.",
            () => {

                game.reputation += 5;

                nextScene();

            }
        );


        addChoice(
            "Quan sát anh ấy từ xa.",
            () => {

                game.intelligence += 5;

                nextScene();

            }
        );


        return;
    }


    /* ---------------------------------
       SCENE 4
    ---------------------------------- */

    if (game.storyStep === 4) {

        chapterText.textContent =
            "CHƯƠNG 2";

        sceneTitle.textContent =
            "MỘT CƠ HỘI";


        storyText.textContent =

`Một cơ hội bất ngờ xuất hiện.

Nếu nắm lấy, bạn có thể thay đổi vị trí của mình trong xã hội.

Nhưng cơ hội nào cũng có cái giá của nó.

Bạn muốn lựa chọn điều gì?`;


        addChoice(
            "Nhận cơ hội.",
            () => {

                game.money += 1500;

                game.reputation += 8;

                nextScene();

            }
        );


        addChoice(
            "Từ chối và chọn con đường riêng.",
            () => {

                game.intelligence += 10;

                nextScene();

            }
        );


        addChoice(
            "Hỏi ý kiến ${game.maleLead.name}.",
            () => {

                game.affection += 10;

                nextScene();

            }
        );


        return;
    }


    /* ---------------------------------
       SCENE 5
    ---------------------------------- */

    if (game.storyStep === 5) {

        chapterText.textContent =
            "CHƯƠNG 3";

        sceneTitle.textContent =
            "ĐÊM ĐẦU TIÊN";


        storyText.textContent =

`Đêm xuống.

Bạn ngồi trước cửa sổ và nhìn thành phố.

Kiếp trước đã kết thúc.

Kiếp này vừa mới bắt đầu.

Bạn chợt nhận ra rằng tương lai không còn là một con đường cố định.

Mỗi lựa chọn của bạn đều đang tạo ra một phiên bản khác của cuộc đời.`;


        addChoice(
            "Theo đuổi tình cảm.",
            () => {

                game.affection += 15;

                nextScene();

            }
        );


        addChoice(
            "Theo đuổi sự nghiệp.",
            () => {

                game.money += 1000;

                game.intelligence += 8;

                nextScene();

            }
        );


        addChoice(
            "Không phụ thuộc vào bất kỳ ai.",
            () => {

                game.reputation += 10;

                game.intelligence += 10;

                nextScene();

            }
        );


        return;
    }


    /* ---------------------------------
       SCENE 6
    ---------------------------------- */

    if (game.storyStep === 6) {

        chapterText.textContent =
            "CHƯƠNG 4";

        sceneTitle.textContent =
            "BƯỚC NGOẶT";


        storyText.textContent =

`Một sự kiện bất ngờ xảy ra.

Thông tin về bạn bắt đầu xuất hiện trên mạng xã hội.

Có người ủng hộ.

Có người nghi ngờ.

Và có người muốn lợi dụng điều đó.`;


        addChoice(
            "Lên tiếng bảo vệ bản thân.",
            () => {

                game.reputation += 15;

                nextScene();

            }
        );


        addChoice(
            "Im lặng và quan sát.",
            () => {

                game.intelligence += 12;

                nextScene();

            }
        );


        addChoice(
            "Nhờ ${game.maleLead.name} giúp đỡ.",
            () => {

                game.affection += 15;

                nextScene();

            }
        );


        return;
    }


    /* ---------------------------------
       SCENE 7
    ---------------------------------- */

    if (game.storyStep === 7) {

        chapterText.textContent =
            "CHƯƠNG 5";

        sceneTitle.textContent =
            "LỰA CHỌN CUỐI CÙNG";


        storyText.textContent =

`Bạn đứng trước một quyết định quan trọng.

Bạn đã đi được một đoạn đường rất xa.

Con người của bạn đã khác.

Cuộc đời của bạn cũng đã khác.

Nếu ngày mai là ngày cuối cùng của câu chuyện này...

bạn muốn mình trở thành ai?`;


        addChoice(
            "Ở bên người mình yêu.",
            () => {

                game.affection += 20;

                endGame();

            }
        );


        addChoice(
            "Trở thành người thành công.",
            () => {

                game.money += 3000;

                game.reputation += 20;

                endGame();

            }
        );


        addChoice(
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
      
