export interface ICharacterCard {
    id: number
    background: string | null;
    character: string | null;
    rarity: string | null;
    element: string | null;
    eza: boolean;
    date: string | null;
    type: string;
    ezaType: string | null;
};

export interface IBannerData {
    id: number,
    image: string,
    title: string,
    description: string,
    startDate: string,
    endDate: string,
}