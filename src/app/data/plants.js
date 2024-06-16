const plants = [
	{
		name: "Acer-rufinerve-buds",
		description: "Buds of Acer-rufinerve",
		image: "https://commons.wikimedia.org/wiki/File:Acer_rufinerve_buds.jpg"
	},
	{
		name: "Arisaemum-flavum-fruits",
		description: "Fruits of Arisaemum flavum",
		image: "https://commons.wikimedia.org/wiki/File:Arisaemum_flavum_fruits.jpg"
	},
	{
		name: "Aristolochia macrophylla on tree",
		description: "Aristolochia macrophylla on a tree",
		image: "https://commons.wikimedia.org/wiki/File:Aristolochia_macrophylla_on_tree.jpg"
	},
	{
		name: "Aster-amellus-flower",
		description: "Flower of Aster amellus",
		image: "https://commons.wikimedia.org/wiki/File:Aster_amellus_flower.jpg"
	},
	{
		name: "Aster-amellus-habitus",
		description: "Habitus of Aster amellus",
		image: "https://commons.wikimedia.org/wiki/File:Aster_amellus_habitus.jpg"
	},
	{
		name: "Aster-tripolium-flowers",
		description: "Flowers of Aster tripolium",
		image: "https://commons.wikimedia.org/wiki/File:Aster_tripolium_flowres.jpg"
	},
	{
		name: "Berberis-darwinii-flower-bud",
		description: "Flower bud of Berberis darwinii",
		image: "https://commons.wikimedia.org/wiki/File:Berberis_darwinii_flower_bud.jpg"
	},
	{
		name: "Berchemia-racemosa-flowers",
		description: "Flowers of Berchemia racemosa",
		image: "https://commons.wikimedia.org/wiki/File:Berchemia_racemosa_flowres.jpg"
	},
	{
		name: "Berchemia-racemosa-foliage",
		description: "Foliage of Berchemia racemosa",
		image: "https://commons.wikimedia.org/wiki/File:Berchemia_racemosa_foliage.jpg"
	},
	{
		name: "Blue Bell (Macro)",
		description: "Macro image of Blue Bell",
		image: "https://commons.wikimedia.org/wiki/File:Blue_Bell_Macro.jpg"
	},
	{
		name: "Bromus-erectus-habitus",
		description: "Habitus of Bromus erectus",
		image: "https://commons.wikimedia.org/wiki/File:Bromus_erectus_habitus.jpg"
	},
	{
		name: "Bupleurum-spinosum-habitus",
		description: "Habitus of Bupleurum spinosum",
		image: "https://commons.wikimedia.org/wiki/File:Bupleurum_spinum_habitus.jpg"
	},
	{
		name: "Calceolaria bilatata flowers",
		description: "Flowers of Calceolaria bilatata",
		image: "https://commons.wikimedia.org/wiki/File:Calceolaria_bilatata_flowres.jpg"
	},
	{
		name: "Calceolaria bilatata form",
		description: "Form of Calceolaria bilatata",
		image: "https://commons.wikimedia.org/wiki/File:Calceolaria_bilatata_form.jpg"
	},
	{
		name: "Carex-strigosa-habitus",
		description: "Habitus of Carex strigosa",
		image: "https://commons.wikimedia.org/wiki/File:Carex_strigosa_habitus.jpg"
	},
	{
		name: "Celtis-occidentalis-fruits",
		description: "Fruits of Celtis occidentalis",
		image: "https://commons.wikimedia.org/wiki/File:Celtis_occidentalis_fruits.jpg"
	},
	{
		name: "Clematis-heracleifolia-flower",
		description: "Flower of Clematis heracleifolia",
		image: "https://commons.wikimedia.org/wiki/File:Clematis_heracleifolia_flower.jpg"
	},
	{
		name: "Comptonia-peregrina-foliage",
		description: "Foliage of Comptonia peregrina",
		image: "https://commons.wikimedia.org/wiki/File:Comptonia_peregrina_foliage.jpg"
	},
	{
		name: "Comptonia-peregrina-habitus",
		description: "Habitus of Comptonia peregrina",
		image: "https://commons.wikimedia.org/wiki/File:Comptonia_peregrina_habitus.jpg"
	},
	{
		name: "Cydonia oblonga 1",
		description: "Image of Cydonia oblonga",
		image: "https://commons.wikimedia.org/wiki/File:Cydonia_oblonga_1.jpg"
	},
	{
		name: "Cydonia oblonga 2",
		description: "Image of Cydonia oblonga",
		image: "https://commons.wikimedia.org/wiki/File:Cydonia_oblonga_2.jpg"
	},
	{
		name: "Cytisus-multiflorus-flowers2",
		description: "Flowers of Cytisus multiflorus",
		image: "https://commons.wikimedia.org/wiki/File:Cytisus_multiflorus_flowres2.jpg"
	},
	{
		name: "Diospyros kaki fruit",
		description: "Fruit of Diospyros kaki",
		image: "https://commons.wikimedia.org/wiki/File:Diospyros_kaki_fruit.jpg"
	},
	{
		name: "Eschscholzia californica (Shallow DOF)",
		description: "Shallow DOF image of Eschscholzia californica",
		image: "https://commons.wikimedia.org/wiki/File:Eschscholzia_californica_Shallow_DOF.jpg"
	},
	{
		name: "Forsythia-girardiana-flower",
		description: "Flower of Forsythia girardiana",
		image: "https://commons.wikimedia.org/wiki/File:Forsythia_girardiana_flower.jpg"
	},
	{
		name: "Genista-hispanica, Aarhus Botanisk Have 1",
		description: "Image of Genista hispanica at Aarhus Botanical Gardens",
		image: "https://commons.wikimedia.org/wiki/File:Genista_hispanica_Aarhus_Botanisk_Have_1.jpg"
	},
	{
		name: "Gunnera-magellanica-habit",
		description: "Habit of Gunnera magellanica",
		image: "https://commons.wikimedia.org/wiki/File:Gunnera_magellanica_habit.jpg"
	},
	{
		name: "Hosta plantaginea cv Royal Standard 1",
		description: "Image of Hosta plantaginea cv Royal Standard",
		image: "https://commons.wikimedia.org/wiki/File:Hosta_plantaginea_cv_Royal_Standard_1.jpg"
	},
	{
		name: "Hosta plantaginea cv Royal Standard 2",
		description: "Image of Hosta plantaginea cv Royal Standard",
		image: "https://commons.wikimedia.org/wiki/File:Hosta_plantaginea_cv_Royal_Standard_2.jpg"
	},
	{
		name: "Hoverfly Feeding (Macro)",
		description: "Macro image of hoverfly feeding",
		image: "https://commons.wikimedia.org/wiki/File:Hoverfly_Feeding_Macro.jpg"
	},
	{
		name: "Koeleria-macrantha-habitus",
		description: "Habitus of Koeleria macrantha",
		image: "https://commons.wikimedia.org/wiki/File:Koeleria_macrantha_habitus.jpg"
	},
	{
		name: "Lathyrus-japonicus-flowers",
		description: "Flowers of Lathyrus japonicus",
		image: "https://commons.wikimedia.org/wiki/File:Lathyrus_japonicus_flowres.jpg"
	},
	{
		name: "Lespedeza-thunbergii-flowers",
		description: "Flowers of Lespedeza thunbergii",
		image: "https://commons.wikimedia.org/wiki/File:Lespedeza_thunbergii_flowres.jpg"
	},
	{
		name: "Lespedeza-thunbergii-foliage",
		description: "Foliage of Lespedeza thunbergii",
		image: "https://commons.wikimedia.org/wiki/File:Lespedeza_thunbergii_foliage.jpg"
	},
	{
		name: "Lespedeza-thunbergii-habitus",
		description: "Habitus of Lespedeza thunbergii",
		image: "https://commons.wikimedia.org/wiki/File:Lespedeza_thunbergii_habitus.jpg"
	},
	{
		name: "Leycesteria-formosa-flowers",
		description: "Flowers of Leycesteria formosa",
		image: "https://commons.wikimedia.org/wiki/File:Leycesteria_formosa_flowres.jpg"
	},
	{
		name: "Leycesteria-formosa-habit",
		description: "Habit of Leycesteria formosa",
		image: "https://commons.wikimedia.org/wiki/File:Leycesteria_formosa_habit.jpg"
	},
	{
		name: "Limonium-gmelinii-flowers",
		description: "Flowers of Limonium gmelinii",
		image: "https://commons.wikimedia.org/wiki/File:Limonium_gmelinii_flowres.jpg"
	},
	{
		name: "Limonium-gmelinii-habitus",
		description: "Habitus of Limonium gmelinii",
		image: "https://commons.wikimedia.org/wiki/File:Limonium_gmelinii_habitus.jpg"
	},
	{
		name: "Limonium-humile-flowers",
		description: "Flowers of Limonium humile",
		image: "https://commons.wikimedia.org/wiki/File:Limonium_humile_flowres.jpg"
	},
	{
		name: "Limonium-humile-habitus",
		description: "Habitus of Limonium humile",
		image: "https://commons.wikimedia.org/wiki/File:Limonium_humile_habitus.jpg"
	},
	{
		name: "Linum-perenne-habit",
		description: "Habit of Linum perenne",
		image: "https://commons.wikimedia.org/wiki/File:Linum_perenne_habit.jpg"
	},
	{
		name: "Lysimachia-thyrsiflora-habitat",
		description: "Habitat of Lysimachia thyrsiflora",
		image: "https://commons.wikimedia.org/wiki/File:Lysimachia_thyrsiflora_habitat.jpg"
	},
	{
		name: "Menispermum-dauricum-foliage",
		description: "Foliage of Menispermum dauricum",
		image: "https://commons.wikimedia.org/wiki/File:Menispermum_dauricum_foliage.jpg"
	},
	{
		name: "Menispermum-dauricum-fruits",
		description: "Fruits of Menispermum dauricum",
		image: "https://commons.wikimedia.org/wiki/File:Menispermum_dauricum_fruits.jpg"
	},
	{
		name: "Overgangsrigkær-Botanisk-have",
		description: "Image of Overgangsrigkær Botanical Gardens",
		image: "https://commons.wikimedia.org/wiki/File:Overgangsrigkær_Botanisk_Have.jpg"
	},
	{
		name: "Parthenocissus quinquefolia 1",
		description: "Image of Parthenocissus quinquefolia",
		image: "https://commons.wikimedia.org/wiki/File:Parthenocissus_quinquefolia_1.jpg"
	},
	{
		name: "Parthenocissus quinquefolia 2",
		description: "Image of Parthenocissus quinquefolia",
		image: "https://commons.wikimedia.org/wiki/File:Parthenocissus_quinquefolia_2.jpg"
	},
	{
		name: "Periploca-sepium-flowers",
		description: "Flowers of Periploca sepium",
		image: "https://commons.wikimedia.org/wiki/File:Periploca_sepium_flowres.jpg"
	},
	{
		name: "Periploca-sepium-foliage",
		description: "Foliage of Periploca sepium",
		image: "https://commons.wikimedia.org/wiki/File:Periploca_sepium_foliage.jpg"
	},
	{
		name: "Periploca-sepium-fruits",
		description: "Fruits of Periploca sepium",
		image: "https://commons.wikimedia.org/wiki/File:Periploca_sepium_fruits.jpg"
	},
	{
		name: "Pulicaria-dysenterica-flower",
		description: "Flower of Pulicaria dysenterica",
		image: "https://commons.wikimedia.org/wiki/File:Pulicaria_dysenterica_flower.jpg"
	},
	{
		name: "Pulicaria-dysenterica-habitus",
		description: "Habitus of Pulicaria dysenterica",
		image: "https://commons.wikimedia.org/wiki/File:Pulicaria_dysenterica_habitus.jpg"
	},
	{
		name: "Rhododendron Closeup (Cross-processed)",
		description: "Cross-processed image of Rhododendron",
		image: "https://commons.wikimedia.org/wiki/File:Rhododendron_Closeup_Cross-processed.jpg"
	},
	{
		name: "Rhus-trilobata-flowers",
		description: "Flowers of Rhus trilobata",
		image: "https://commons.wikimedia.org/wiki/File:Rhus_trilobata_flowres.jpg"
	},
	{
		name: "Romneya-coulteri-flower",
		description: "Flower of Romneya coulteri",
		image: "https://commons.wikimedia.org/wiki/File:Romneya_coulteri_flower.jpg"
	},
	{
		name: "Romneya-coulteri-habitus",
		description: "Habitus of Romneya coulteri",
		image: "https://commons.wikimedia.org/wiki/File:Romneya_coulteri_habitus.jpg"
	},
	{
		name: "Rubus-henryi-flowers",
		description: "Flowers of Rubus henryi",
		image: "https://commons.wikimedia.org/wiki/File:Rubus_henryi_flowres.jpg"
	},
	{
		name: "Rubus-henryi-leaf",
		description: "Leaf of Rubus henryi",
		image: "https://commons.wikimedia.org/wiki/File:Rubus_henryi_leaf.jpg"
	},
	{
		name: "Scabiosa-canescens-habitus",
		description: "Habitus of Scabiosa canescens",
		image: "https://commons.wikimedia.org/wiki/File:Scabiosa_canescens_habitus.jpg"
	},
	{
		name: "Seed pod (Macro)",
		description: "Macro image of seed pod",
		image: "https://commons.wikimedia.org/wiki/File:Seed_pod_Macro.jpg"
	},
	{
		name: "Starlets (Macro)",
		description: "Macro image of starlets",
		image: "https://commons.wikimedia.org/wiki/File:Starlets_Macro.jpg"
	},
	{
		name: "Symplocos-paniculata-habitus",
		description: "Habitus of Symplocos paniculata",
		image: "https://commons.wikimedia.org/wiki/File:Symplocos_paniculata_habitus.jpg"
	},
	{
		name: "Syringa-afghanica-habitus",
		description: "Habitus of Syringa afghanica",
		image: "https://commons.wikimedia.org/wiki/File:Syringa_afghanica_habitus.jpg"
	},
	{
		name: "The Botanical Garden, Århus C, Denmark (Unsplash)",
		description: "Image of The Botanical Garden, Århus C, Denmark",
		image: "https://commons.wikimedia.org/wiki/File:The_Botanical_Garden,_Århus_C,_Denmark_(Unsplash).jpg"
	},
	{
		name: "Tibouchina semidecandra 1",
		description: "Image of Tibouchina semidecandra",
		image: "https://commons.wikimedia.org/wiki/File:Tibouchina_semidecandra_1.jpg"
	},
	{
		name: "Tigrida-pavonia-flower",
		description: "Flower of Tigrida pavonia",
		image: "https://commons.wikimedia.org/wiki/File:Tigrida_pavonia_flower.jpg"
	},
	{
		name: "Tigrida-pavonia-habitus",
		description: "Habitus of Tigrida pavonia",
		image: "https://commons.wikimedia.org/wiki/File:Tigrida_pavonia_habitus.jpg"
	},
	{
		name: "Tiny Flower (Close-up)",
		description: "Close-up image of tiny flower",
		image: "https://commons.wikimedia.org/wiki/File:Tiny_Flower_Close-up.jpg"
	},
	{
		name: "Triticum turgidum 1",
		description: "Image of Triticum turgidum",
		image: "https://commons.wikimedia.org/wiki/File:Triticum_turgidum_1.jpg"
	},
]

export default plants;