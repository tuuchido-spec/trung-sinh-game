window.ENDINGS=[
{id:"true",title:"KIẾP NÀY TA CHỌN MÌNH",text:"Bạn không còn sống để sửa lại một quá khứ đã chết. Bạn sống để tự quyết định tương lai.",need:s=>s.memory>=10&&s.freedom>=60&&s.willpower>=55},
{id:"love",title:"NGƯỜI MÌNH CHỌN",text:"Lần này, tình yêu không phải một chiếc lồng. Nó là một lựa chọn mà cả hai cùng bước vào.",need:s=>s.affection>=70&&s.trust>=45},
{id:"power",title:"NỮ HOÀNG",text:"Bạn xây dựng vị trí của mình bằng chính năng lực, tiền bạc và quyết định của bản thân.",need:s=>s.career>=75&&s.reputation>=65},
{id:"freedom",title:"MỘT MÌNH CŨNG ĐƯỢC",text:"Bạn rời khỏi những kỳ vọng của người khác và chọn một cuộc sống thuộc về riêng mình.",need:s=>s.freedom>=80},
{id:"tragedy",title:"MỘT KIẾP KHÁC",text:"Có những cánh cửa đã mở nhưng bạn chưa kịp hiểu mình đang bước vào đâu.",need:s=>s.stress>=85},
{id:"ordinary",title:"MỘT TƯƠNG LAI KHÁC",text:"Bạn không có câu trả lời hoàn hảo. Nhưng lần đầu tiên, bạn thật sự sống cuộc đời của mình.",need:()=>true}
];