export const products = [
    {id: 1, name:"무선키보드", price:32000, category:"주변기기", desc:"조용한타건감의 저소음 무선 키보드, 입문용으로 좋아요"},
    {id: 2, name:"해피해킹키보드", price:360000, category:"주변기기", desc:"무접점 키보드 타건감 좋아요"},
    {id: 3, name:"리니아축텐키리스키보드", price:120000, category:"주변기기", desc:"텐키리스 키보드에요"},
    {id: 4, name:"키크론K8", price:152000, category:"주변기기", desc:"기계식 무선키보드 키크론 바데리 빨리달아요"},
    {id: 5, name:"독거미키보드", price:50000, category:"주변기기", desc:"저렴한 기계식 키보드 입문용 짱짱 "},
    {id: 6, name:"목새키보드", price:80000, category:"주변기기", desc:"타건감이 좋고 소리가 도각도각 좋아요"},    
];

export function findProductById(id) {
    return products.find((p)=> p.id === Number(id));
}

// 나중에 백앤드를 배우시면 여기는 백앤드의 REST API 대체 