import IconCakeRoll from '@assets/icons/cake-roll.svg?react';
import IconTeapot from '@assets/icons/teapot.svg?react';
import IconShoppingCart from '@assets/icons/shopping-cart.svg?react';

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
      iconId: 'teapot',
      icon : IconTeapot,
      title: "裏千家茶道教學",
      paragraph: "透過裏千家茶道，學習點茶、奉茶與品茶的日式禮儀，找回內在平靜。無需任何經驗，歡迎來體驗一期一會的美好。"
    },
    { 
      id: 'svc2',
      iconId: 'wagashi',
      icon : IconCakeRoll,
      title: "和菓子製作體驗",
      paragraph: "體驗手作和菓子的療癒魔法！從熬煮紅豆餡到學習練切造型技巧，親手製作充滿溫度的精緻點心。"
    },
    {
      id: 'svc3',
      iconId: 'shoppingCart',
      icon : IconShoppingCart,
      title: "抹茶品鑑與選購",
      paragraph: "精選日本十大產區的純淨抹茶粉，讓你一次品遍細緻風味。不再選擇困難，輕鬆找到最觸動你味蕾的極致品味。"
    }
  ]
};