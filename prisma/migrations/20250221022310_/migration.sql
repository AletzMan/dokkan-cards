-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "character_id" INTEGER NOT NULL,
    "character_size" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL,
    "hp_init" INTEGER NOT NULL,
    "hp_max" INTEGER NOT NULL,
    "atk_init" INTEGER NOT NULL,
    "atk_max" INTEGER NOT NULL,
    "def_init" INTEGER NOT NULL,
    "def_max" INTEGER NOT NULL,
    "element" INTEGER NOT NULL,
    "special_motion" INTEGER NOT NULL,
    "passive_skill_set_id" INTEGER NOT NULL,
    "potential_board_id" INTEGER NOT NULL,
    "leader_skill_set_id" INTEGER NOT NULL,
    "eball_mod_min" DOUBLE PRECISION NOT NULL,
    "eball_mod_num100" DOUBLE PRECISION NOT NULL,
    "eball_mod_mid" DOUBLE PRECISION NOT NULL,
    "eball_mod_mid_num" DOUBLE PRECISION NOT NULL,
    "eball_mod_max" DOUBLE PRECISION NOT NULL,
    "eball_mod_max_num" DOUBLE PRECISION NOT NULL,
    "bg_effect_id" INTEGER NOT NULL,
    "open_at" TEXT NOT NULL,
    "title" TEXT,
    "leader_skill" TEXT,
    "passive_skill_name" TEXT,
    "passive_skill_desc" TEXT,
    "skill_level_max" INTEGER NOT NULL,
    "optimal_awakening_grow_type" INTEGER NOT NULL,
    "is_f2p" BOOLEAN NOT NULL,
    "unique_info_id" INTEGER,
    "is_dokkan_fes" BOOLEAN NOT NULL,
    "is_carnival_only" BOOLEAN NOT NULL,
    "passive_skill_itemized_desc" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "open_at" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Potential" (
    "id" SERIAL NOT NULL,
    "atk" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "cardId" INTEGER,

    CONSTRAINT "Potential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Special" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "aim_target" INTEGER NOT NULL,
    "increase_rate" DOUBLE PRECISION,
    "lv_bonus" DOUBLE PRECISION,
    "style" TEXT,
    "lv_start" INTEGER,
    "eball_num_start" INTEGER,
    "card_costume_condition_id" INTEGER,
    "special_category_id" INTEGER,
    "special_category_name" TEXT,
    "special_view_id" INTEGER,
    "special_view_id_has_ko" BOOLEAN,
    "special_bonus_1" TEXT,
    "bonus_view_id_1" INTEGER,
    "bonus_view_id_2" INTEGER,
    "bonus_view_id_1_has_ko" BOOLEAN,
    "bonus_view_id_2_has_ko" BOOLEAN,
    "special_bonus_1_lv" DOUBLE PRECISION,
    "special_bonus_2_lv" DOUBLE PRECISION,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "Special_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AwakeningRoute" (
    "id" SERIAL NOT NULL,
    "awaked_card_id" INTEGER NOT NULL,
    "card_id" INTEGER,

    CONSTRAINT "AwakeningRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AwakedCard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "element" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL,
    "open_at" TEXT NOT NULL,
    "base_id" INTEGER NOT NULL,
    "awaken_cost" INTEGER NOT NULL,
    "type" TEXT,

    CONSTRAINT "AwakedCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AwakenItem" (
    "id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "zeni" INTEGER NOT NULL,
    "awaked_cardId" INTEGER NOT NULL,
    "optimalAwakeningGrowthId" INTEGER,

    CONSTRAINT "AwakenItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transformation" (
    "id" SERIAL NOT NULL,
    "next_card_id" INTEGER NOT NULL,
    "cardId" INTEGER NOT NULL,
    "optimalAwakeningGrowthId" INTEGER,

    CONSTRAINT "Transformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NextCard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" INTEGER NOT NULL,
    "element" INTEGER NOT NULL,
    "open_at" TEXT NOT NULL,
    "base_id" INTEGER NOT NULL,

    CONSTRAINT "NextCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptimalAwakeningGrowth" (
    "id" SERIAL NOT NULL,
    "step" INTEGER NOT NULL,
    "lv_max" INTEGER NOT NULL,
    "skill_lv_max" INTEGER NOT NULL,
    "passive_skill_id" INTEGER,
    "passive_skill_name" TEXT,
    "passive_skill_description" TEXT,
    "leader_skill_id" INTEGER,
    "leader_skill_name" TEXT,
    "leader_skill_description" TEXT,
    "hp_max" INTEGER NOT NULL,
    "atk_max" INTEGER NOT NULL,
    "def_max" INTEGER NOT NULL,
    "awaken_cost" INTEGER NOT NULL,
    "open_at" TEXT NOT NULL,
    "passive_skill_itemized_desc" TEXT,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "OptimalAwakeningGrowth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardLink" (
    "id" SERIAL NOT NULL,
    "idx" INTEGER NOT NULL,
    "link_skill_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "level1_description" TEXT,
    "level10_description" TEXT,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "CardLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "rarity" INTEGER NOT NULL,
    "element" INTEGER NOT NULL,
    "base_id" INTEGER NOT NULL,
    "common_link_count" INTEGER,
    "common_links" INTEGER[],
    "common_categories" INTEGER[],
    "is_same_element" BOOLEAN,
    "is_same_base_element" BOOLEAN,
    "is_same_element_group" BOOLEAN,
    "common_team_count" INTEGER,
    "has_eza" BOOLEAN,
    "has_sticker" BOOLEAN,
    "has_super_eza" BOOLEAN,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaLevelCard" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "rarity" INTEGER NOT NULL,
    "element" INTEGER NOT NULL,
    "base_id" INTEGER NOT NULL,
    "has_eza" BOOLEAN,
    "is_f2p" BOOLEAN,
    "level_up_chance" DOUBLE PRECISION,

    CONSTRAINT "SaLevelCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CardToCategory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CardToPartner" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CardToPartner_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CardToSaLevelCard" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CardToSaLevelCard_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Potential_cardId_key" ON "Potential"("cardId");

-- CreateIndex
CREATE INDEX "_CardToCategory_B_index" ON "_CardToCategory"("B");

-- CreateIndex
CREATE INDEX "_CardToPartner_B_index" ON "_CardToPartner"("B");

-- CreateIndex
CREATE INDEX "_CardToSaLevelCard_B_index" ON "_CardToSaLevelCard"("B");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_id_fkey" FOREIGN KEY ("id") REFERENCES "Potential"("cardId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Special" ADD CONSTRAINT "Special_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwakeningRoute" ADD CONSTRAINT "AwakeningRoute_awaked_card_id_fkey" FOREIGN KEY ("awaked_card_id") REFERENCES "AwakedCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwakeningRoute" ADD CONSTRAINT "AwakeningRoute_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwakenItem" ADD CONSTRAINT "AwakenItem_awaked_cardId_fkey" FOREIGN KEY ("awaked_cardId") REFERENCES "AwakedCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwakenItem" ADD CONSTRAINT "AwakenItem_optimalAwakeningGrowthId_fkey" FOREIGN KEY ("optimalAwakeningGrowthId") REFERENCES "OptimalAwakeningGrowth"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transformation" ADD CONSTRAINT "Transformation_next_card_id_fkey" FOREIGN KEY ("next_card_id") REFERENCES "NextCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transformation" ADD CONSTRAINT "Transformation_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transformation" ADD CONSTRAINT "Transformation_optimalAwakeningGrowthId_fkey" FOREIGN KEY ("optimalAwakeningGrowthId") REFERENCES "OptimalAwakeningGrowth"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptimalAwakeningGrowth" ADD CONSTRAINT "OptimalAwakeningGrowth_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardLink" ADD CONSTRAINT "CardLink_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCategory" ADD CONSTRAINT "_CardToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCategory" ADD CONSTRAINT "_CardToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToPartner" ADD CONSTRAINT "_CardToPartner_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToPartner" ADD CONSTRAINT "_CardToPartner_B_fkey" FOREIGN KEY ("B") REFERENCES "Partner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToSaLevelCard" ADD CONSTRAINT "_CardToSaLevelCard_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToSaLevelCard" ADD CONSTRAINT "_CardToSaLevelCard_B_fkey" FOREIGN KEY ("B") REFERENCES "SaLevelCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
