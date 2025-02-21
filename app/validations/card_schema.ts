import { z } from 'zod';

const AwakenItemSchema = z.object({
    item_id: z.number(),
    quantity: z.number(),
    rarity: z.number(),
    name: z.string(),
    description: z.string().nullable(),
    zeni: z.number(),
});

const AwakedCardSchema = z.object({
    id: z.number(),
    name: z.string(),
    title: z.string().nullable(),
    element: z.number(),
    rarity: z.number(),
    open_at: z.string(),
    base_id: z.number(),
    awaken_items: z.array(AwakenItemSchema).nullable(),
    awaken_cost: z.number(),
    type: z.string().nullable(),
});

const NextCardSchema = z.object({
    id: z.number(),
    name: z.string(),
    rarity: z.number(),
    element: z.number(),
    open_at: z.string(),
    base_id: z.number(),
});

const TransformationSchema = z.object({
    id: z.number(),
    next_card_id: z.number(),
    next_card: NextCardSchema,
});

const OptimalAwakeningGrowthSchema = z.object({
    step: z.number(),
    lv_max: z.number(),
    skill_lv_max: z.number(),
    passive_skill_id: z.number().nullable(),
    passive_skill_name: z.string().nullable(),
    passive_skill_description: z.string().nullable(),
    leader_skill_id: z.number().nullable(),
    leader_skill_name: z.string().nullable(),
    leader_skill_description: z.string().nullable(),
    hp_max: z.number(),
    atk_max: z.number(),
    def_max: z.number(),
    awaken_items: z.array(AwakenItemSchema),
    awaken_cost: z.number(),
    open_at: z.string(),
    transformations: z.array(TransformationSchema),
    passive_skill_itemized_desc: z.string().nullable(),
});

const CardLinkSchema = z.object({
    id: z.number(),
    idx: z.number(),
    link_skill_id: z.number(),
    name: z.string(),
    level1_description: z.string().nullable(),
    level10_description: z.string().nullable(),
});

const PartnerSchema = z.object({
    id: z.number(),
    name: z.string(),
    title: z.string().nullable(),
    rarity: z.number(),
    element: z.number(),
    base_id: z.number(),
    common_link_count: z.number().nullable(),
    common_links: z.array(z.number()),
    common_categories: z.array(z.number()),
    is_same_element: z.boolean().nullable(),
    is_same_base_element: z.boolean().nullable(),
    is_same_element_group: z.boolean().nullable(),
    common_team_count: z.number().nullable(),
    has_eza: z.boolean().nullable(),
    has_sticker: z.boolean().nullable(),
    has_super_eza: z.boolean().nullable(),
});

const SaLevelCardSchema = z.object({
    id: z.number(),
    name: z.string(),
    title: z.string().nullable(),
    rarity: z.number(),
    element: z.number(),
    base_id: z.number(),
    has_eza: z.boolean().nullable(),
    is_f2p: z.boolean().nullable(),
    level_up_chance: z.number().nullable(),
});

const SpecialSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullable(),
    aim_target: z.number(),
    increase_rate: z.number().nullable(),
    lv_bonus: z.number().nullable(),
    style: z.string().nullable(),
    lv_start: z.number().nullable(),
    eball_num_start: z.number().nullable(),
    card_costume_condition_id: z.number().nullable(),
    special_category_id: z.number().nullable(),
    special_category_name: z.string().nullable(),
    special_view_id: z.number().nullable(),
    special_view_id_has_ko: z.boolean().nullable(),
    special_bonus_1: z.string().nullable(),
    bonus_view_id_1: z.number().nullable(),
    bonus_view_id_2: z.number().nullable(),
    bonus_view_id_1_has_ko: z.boolean().nullable(),
    bonus_view_id_2_has_ko: z.boolean().nullable(),
    special_bonus_1_lv: z.number().nullable(),
    special_bonus_2_lv: z.number().nullable(),
});

const PotentialSchema = z.object({
    id: z.number(),
    atk: z.number(),
    def: z.number(),
    hp: z.number(),
});

const CategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    priority: z.number(),
    open_at: z.string(),
});

const CardSchema = z.object({
    id: z.number(),
    name: z.string(),
    character_id: z.number(),
    character_size: z.number(),
    cost: z.number(),
    rarity: z.number(),
    hp_init: z.number(),
    hp_max: z.number(),
    atk_init: z.number(),
    atk_max: z.number(),
    def_init: z.number(),
    def_max: z.number(),
    element: z.number(),
    special_motion: z.number(),
    passive_skill_set_id: z.number(),
    potential_board_id: z.number(),
    leader_skill_set_id: z.number(),
    eball_mod_min: z.number(),
    eball_mod_num100: z.number(),
    eball_mod_mid: z.number(),
    eball_mod_mid_num: z.number(),
    eball_mod_max: z.number(),
    eball_mod_max_num: z.number(),
    bg_effect_id: z.number(),
    open_at: z.string(),
    title: z.string().nullable(),
    leader_skill: z.string().nullable(),
    passive_skill_name: z.string().nullable(),
    passive_skill_desc: z.string().nullable(),
    skill_level_max: z.number(),
    optimal_awakening_grow_type: z.number(),
    is_f2p: z.boolean(),
    unique_info_id: z.number().nullable(),
    is_dokkan_fes: z.boolean(),
    is_carnival_only: z.boolean(),
    passive_skill_itemized_desc: z.string().nullable(),
});


const AwakeningRouteSchema = z.object({
    id: z.number(),
    awaked_card_id: z.number(),
    awaked_card: AwakedCardSchema,
    card_id: z.number().nullable(),
});

const CardDetailsSchema = z.object({
    card: CardSchema,
    categories: z.array(CategorySchema),
    potential: z.array(PotentialSchema),
    specials: z.array(SpecialSchema),
    awakening_routes: z.array(AwakeningRouteSchema),
    transformations: z.array(TransformationSchema),
    costumes: z.array(z.unknown()), // Mantén unknown para costumes
    optimal_awakening_growths: z.array(OptimalAwakeningGrowthSchema),
    card_links: z.array(CardLinkSchema),
    partners: z.array(PartnerSchema),
    sa_level_cards: z.array(SaLevelCardSchema),
    finish_skills: z.array(z.unknown()), // Mantén unknown para finish_skills
    standby_skills: z.array(z.unknown()), // Mantén unknown para standby_skills
});


export default CardDetailsSchema;