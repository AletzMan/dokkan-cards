export interface CardDetails {
    card: Card
    categories: Category[]
    potential: Potential[]
    specials: Special[]
    awakening_routes: AwakeningRoute[]
    transformations: Transformation[]
    costumes: unknown[]
    optimal_awakening_growths: OptimalAwakeningGrowth[]
    card_links: CardLink[]
    partners: Partner[]
    sa_level_cards: SaLevelCard[]
    finish_skills: unknown[]
    standby_skills: unknown[]
}

export interface Card {
    id: number
    name: string
    character_id: number
    character_size: number
    cost: number
    rarity: number
    hp_init: number
    hp_max: number
    atk_init: number
    atk_max: number
    def_init: number
    def_max: number
    element: number
    special_motion: number
    passive_skill_set_id: number
    potential_board_id: number
    leader_skill_set_id: number
    eball_mod_min: number
    eball_mod_num100: number
    eball_mod_mid: number
    eball_mod_mid_num: number
    eball_mod_max: number
    eball_mod_max_num: number
    bg_effect_id: number
    open_at: string
    title: string
    leader_skill: string
    passive_skill_name: string
    passive_skill_desc: string
    skill_level_max: number
    optimal_awakening_grow_type: number
    is_f2p: boolean
    unique_info_id: number
    is_dokkan_fes: boolean
    is_carnival_only: boolean
    passive_skill_itemized_desc: string
}

export interface Category {
    id: number
    name: string
    priority: number
    open_at: string
}

export interface Potential {
    id: number
    atk: number
    def: number
    hp: number
}

export interface Special {
    id: number
    name: string
    description: string
    aim_target: number
    increase_rate: number
    lv_bonus: number
    style: string
    lv_start: number
    eball_num_start: number
    card_costume_condition_id: number
    special_category_id: number
    special_category_name: string
    special_view_id: number
    special_view_id_has_ko: boolean
    special_bonus_1: string
    bonus_view_id_1: number
    bonus_view_id_2: number
    bonus_view_id_1_has_ko: boolean
    bonus_view_id_2_has_ko: boolean
    special_bonus_1_lv: number
    special_bonus_2_lv: number
}

export interface AwakeningRoute {
    id: number
    awaked_card_id: number
    awaked_card: AwakedCard
    card_id?: number
}

export interface AwakedCard {
    id: number
    name: string
    title: string
    element: number
    rarity: number
    open_at: string
    base_id: number
    awaken_items?: AwakenItem[]
    awaken_cost: number
    type?: string
}




export interface AwakenItem {
    item_id: number
    quantity: number
    rarity: number
    name: string
    description: string
    zeni: number
}

export interface Transformation {
    id: number
    next_card_id: number
    next_card: NextCard
}

export interface NextCard {
    id: number
    name: string
    rarity: number
    element: number
    open_at: string
    base_id: number
}


export interface OptimalAwakeningGrowth {
    step: number
    lv_max: number
    skill_lv_max: number
    passive_skill_id: number
    passive_skill_name: string
    passive_skill_description: string
    leader_skill_id: number
    leader_skill_name: string
    leader_skill_description: string
    hp_max: number
    atk_max: number
    def_max: number
    awaken_items: AwakenItem[]
    awaken_cost: number
    open_at: string
    transformations: Transformation[]
    passive_skill_itemized_desc: string
}

export interface CardLink {
    idx: number
    link_skill_id: number
    name: string
    level1_description: string
    level10_description: string
}

export interface Partner {
    id: number
    name: string
    title: string
    rarity: number
    element: number
    base_id: number
    common_link_count: number
    common_links: number[]
    common_categories: number[]
    is_same_element: boolean
    is_same_base_element: boolean
    is_same_element_group: boolean
    common_team_count: number
    has_eza: boolean
    has_sticker: boolean
    has_super_eza: boolean
}

export interface SaLevelCard {
    id: number
    name: string
    title: string
    rarity: number
    element: number
    base_id: number
    has_eza: boolean
    is_f2p: boolean
    level_up_chance: number
}
