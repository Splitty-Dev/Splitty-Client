import sampleImg from "@/assets/imgs/sampleProduct.jpg";

import samplePrf from "@/assets/icons/samplePrf.svg";

export const sampleProduct = {
  id: 1,
  sellerInfo: {
    userId: 1,
    userName: "User1",
    location: "미아동",
    rating: 4.3,
    userPrf: samplePrf,
  },

  title: "에코 생수 500ml",
  description: "위치 협의 가능합니다. 빠른 연락 부탁드려요!",
  imageUrl: [sampleImg, sampleImg, sampleImg],

  //
  people: 2,
  category: "식품", //
  tradePlace: "미아역 6번 출구",
  //

  //
  price: "1,600",
  currNums: 3,
  totalNums: 5,
  //
  likes: 5,
};

export const sellingProducts = [
  {
    id: 1,
    title: "에코 생수 500ml",
    price: "1,600",
    thumbImg: sampleImg,
  },
  {
    id: 2,
    title: "맑은 생수 500ml",
    price: "1,200",
    thumbImg: sampleImg,
  },
  {
    id: 3,
    title: "맛있는 생수 500ml",
    price: "1,300",
    thumbImg: sampleImg,
  },
];
