// api 연동 전 테스트 요소

interface TestBoxListProps {
    id:number;
    thumbnail:string;
    profile:string;
    title : string;
    company : string;
    service_name : string;
    business_type:string;
    business_type_display:string;
    onClick:()=>void;
    type: "investor" | "founder"; 
}

export const boxList:Array<TestBoxListProps>=[
    {
        id:1,
        thumbnail:'https://i.pinimg.com/736x/72/02/9d/72029d03eaada490526826d57eb54f4c.jpg',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트01',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'SERVICE',
        business_type_display:'서비스업',
        onClick:() => console.log(`클릭됨`),
        type:"investor",  
    },
    {
        id:2,
        thumbnail:'/thumbnailTest.png',
        profile:'https://i.pinimg.com/736x/44/1c/ee/441cee07e1b69b82bdc827377fd206ce.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'FINANCE',
        business_type_display:'금융/은행업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    {
        id:3,
        thumbnail:'https://i.pinimg.com/736x/cc/ef/7b/ccef7b5c2e7e765bc6a3f7f5bd908eb3.jpg',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'IT',
        business_type_display:'"IT/정보통신업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    {
        id:4,
        thumbnail:'https://i.pinimg.com/736x/94/ab/91/94ab9154dfae0fd22a7c7fbc5c734061.jpg',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'RETAIL',
        business_type_display:'판매/유통업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    {
        id:5,
        thumbnail:'https://i.pinimg.com/736x/79/2d/78/792d78d28f663eabf607eaf17ded8f5d.jpg',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트04',
        company : '플링',
        service_name : '테',
        business_type:'MANUFACTURING',
        business_type_display:'제조/생산/화학업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    {
        id:6,
        thumbnail:'/thumbnailTest.png',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'EDUCATION',
        business_type_display:'교육업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    {
        id:7,
        thumbnail:'/thumbnailTest.png',
        profile:'https://i.pinimg.com/736x/ff/a7/64/ffa7643635f3f0eec14efa51bee09b69.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'CONSTRUCTION',
        business_type_display:'건설업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    {
        id:8,
        thumbnail:'/thumbnailTest.png',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'MEDICAL',
        business_type_display:'의료/제약업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    {
        id:9,
        thumbnail:'/thumbnailTest.png',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'MEDIA',
        business_type_display:'미디어/광고업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    {
        id:10,
        thumbnail:'/thumbnailTest.png',
        profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
        title : '테스트02',
        company : '플링크크크',
        service_name : '테스트입니다',
        business_type:'CULTURE',
        business_type_display:'문화/예술/디자인업',
        onClick:() => console.log("클릭됨"),
        type:"investor",
    },
    // {
    //     id:11,
    //     thumbnail:'/thumbnailTest.png',
    //     profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
    //     title : '테스트02',
    //     company : '플링크크크',
    //     service_name : '테스트입니다',
    //     business_type:'IT',
    //     business_type_display:'IT',
    //     onClick:() => console.log("클릭됨"),
    //     type:"investor",
    // },
    // {
    //     id:12,
    //     thumbnail:'/thumbnailTest.png',
    //     profile:'https://i.pinimg.com/736x/45/2c/03/452c039a7efa5fc2dfc7b8447d25e575.jpg',
    //     title : '테스트02',
    //     company : '플링크크크-이이',
    //     service_name : '테스트입니다',
    //     business_type:'MEDICAL',
    //     business_type_display:'의료/제약업',
    //     onClick:() => console.log("클릭됨"),
    //     type:"investor",
    // },

];

interface testBoxContentsProps{
    id: string;
    thumbnail: string;
    profile: string;
    title: string;
    company: string;
    service_name: string;
    business_type: string;
    business_progress: string;
    is_approve: boolean;
    created_at: string;

    link:string;
    summary: string;
    summary_business_plan: string;
}

export const testBoxContent = {
    id: "01JM4T929W1HC4JMMQ0XC1WA0E",
    thumbnail:'/testThumbnail.png',
    profile: '/SmallLogo.svg',
    title: '플링크 시연',
    company: '플러스(plers)',
    service_name: '플링크(plink)',
    business_type: 'IT/정보통신업',
    business_progress: '사업 진행중',
    is_approve: true,
    created_at: '2025-02-16T02:00:57.758176',

    link: "https://youtu.be/D88yEibsrgQ?si=uh-7eydSYmtxPSan",
    summary: '플링크 시연 영상입니다.',
    summary_business_plan: '/ptPdf.pdf',
}