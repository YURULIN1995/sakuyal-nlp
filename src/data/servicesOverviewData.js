// src/data/servicesOverviewData.js

export const servicesOverviewData = {
  leftTitle: "服務",
  leftParagraph: "無論你是想透過靜心茶道找回平靜，在手作和菓子中發揮創意，或是探索極致的抹茶風味，我們都能提供專業細緻的體驗。",
  leftButtonText: "填寫服務預約表單",
  leftButtonLink: "#",
  imageUrl: "/images/wagashi.jpg",
  imageAlt: "服務總覽示意圖",
  rightColumnItems: [
    { 
      id: 'svc1',
      iconId: 'seedling',
      title: "裏千家茶道教學",
      paragraph: "在快速變化的日子裡，你是否渴望一隅寧靜，專注當下？透過裏千家茶道的點茶、奉茶與品茶，學習的不只是日式禮儀，更是與自己溫柔對話、找回內在平靜的過程。無需任何經驗，老師將細心引導，歡迎來體驗一期一會的美好。"
    },
    { 
      id: 'svc2',
      iconId: 'leaf', // <-- 主要修改處：從 'flower' 改為 'leaf'
      title: "和菓子製作體驗",
      paragraph: "看著精緻和菓子總讓你心動，卻擔心太難學不會？別擔心！從親手熬煮香甜綿密的紅豆餡開始，到學習優雅的練切 (Nerikiri) 造型技巧，一步步帶你體驗將食材化為藝術品的療癒魔法。親手做的和菓子，無論款待自己或送給朋友，都充滿溫度。"
    },
    {
      id: 'svc3',
      iconId: 'shoppingCart',
      title: "抹茶品鑑與選購",
      paragraph: "宇治、靜岡、西尾... 不同風土孕育獨特茶韻，想探索卻不知從何選起？我們為你精選日本十大知名產區的純淨抹茶粉，一次品遍細緻風味。不再選擇困難，輕鬆找到最觸動你味蕾的那抹綠。送禮或獨享，都是講究的極致品味。"
    }
  ]
};