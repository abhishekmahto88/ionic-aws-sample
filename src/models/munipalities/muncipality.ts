
export interface Muncipality {

    name:string;
    logo:string;
    description:string;

}

const MUNCIPAL_LIST_TAX_COLLECTOR =[
    {name:'Excise',logo:'assets/img/ezip-icon (7).png'},
    {name:'Personal Property',logo:'assets/img/ezip-icon (8).png'},
    {name:'Real Estate',logo:'assets/img/ezip-icon (9).png'},
    {name:'Water',logo:'assets/img/ezip-icon (10).png'}];

const  MUNCIPAL_LIST_SCHOOL_DEPT = [
    {name:'Fall Cheerleading',logo:'assets/img/ezip-icon (11).png'},
    {name:'Fall-Cross Country-Boys',logo:'assets/img/ezip-icon (12).png'},
    {name:'Winter Sports',logo:'assets/img/ezip-icon (1).png'},
    {name:'Fall-Cross Country-Boys',logo:'assets/img/ezip-icon (12).png'},
];

const  MUNCIPAL_LIST_STICKERS = [
    {name:'Beach Stickers',logo:'assets/img/ezip-icon (3).png'},
    {name:'4*4 Beach Stickers',logo:'assets/img/ezip-icon (4).png'},
    {name:'Transfer Station Sticker',logo:'assets/img/ezip-icon (5).png'},
    {name:'Additional Transfer Sticker',logo:'assets/img/ezip-icon (6).png'},
];

export interface Collections {

    muncipalities:Muncipality[];
    collectionName:string;
}

const COLLECTION_LIST = [
    {collectionName:'Tax Collector',muncipalities:MUNCIPAL_LIST_TAX_COLLECTOR},
    {collectionName:'School Department',muncipalities:MUNCIPAL_LIST_SCHOOL_DEPT},
    {collectionName:'Stickers',muncipalities:MUNCIPAL_LIST_STICKERS}
];

export const CollectionList =  COLLECTION_LIST;

