// Pour créer 1 fichier par boucle de comptage
// Source : https://data.nantesmetropole.fr/explore/dataset/244400404_comptages-velo-nantes-metropole-boucles-comptage/information/

const fs = require('fs');
const path = require('path');

// Chemin vers le dossier de destination
const directoryPath = path.join(__dirname, '../content/compteurs/velo');

// simple copier-coller au 04/07/2025 de https://data.nantesmetropole.fr/explore/dataset/244400404_comptages-velo-nantes-metropole-boucles-comptage/information/
const data = {
  total_count: 66,
  results: [
    {
      boucle_num: '1041',
      libelle: 'Guy Mollet vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5532727474949712, lat: 47.252189065198046 }
    },
    {
      boucle_num: '960',
      libelle: 'Sorini\u00e8res Vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5420923531458324, lat: 47.16029353128087 }
    },
    {
      boucle_num: '725',
      libelle: 'Pont Tabarly vers Sud',
      observations: null,
      geolocalisation: { lon: -1.529578232830361, lat: 47.21342558905209 }
    },
    {
      boucle_num: '672',
      libelle: 'Pont de Pornic vers Nord',
      observations: null,
      geolocalisation: { lon: -1.548912422726574, lat: 47.20137134043221 }
    },
    {
      boucle_num: '986',
      libelle: 'Tremie vers Ouest',
      observations: null,
      geolocalisation: { lon: -1.54454760333977, lat: 47.217186960343 }
    },
    {
      boucle_num: '1031',
      libelle: 'VN751A Vers St Leger les Vignes',
      observations: 'Releve manuel',
      geolocalisation: { lon: -1.7136944399197964, lat: 47.14052901725844 }
    },
    {
      boucle_num: '994',
      libelle: 'Ceineray vers Est',
      observations: null,
      geolocalisation: { lon: -1.5520557476514105, lat: 47.2211808996175 }
    },
    {
      boucle_num: '943',
      libelle: 'Magellan vers Ouest',
      observations: null,
      geolocalisation: { lon: -1.543937689328201, lat: 47.21039712998508 }
    },
    {
      boucle_num: '747',
      libelle: 'Chemin de halage Torti\u00e8re vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5495223616419478, lat: 47.235601216475615 }
    },
    {
      boucle_num: '699',
      libelle: 'Coteaux vers Est (Pellerin)',
      observations: 'Releve manuel',
      geolocalisation: { lon: -1.767425435319685, lat: 47.20495618318359 }
    },
    {
      boucle_num: '682',
      libelle: 'pont Anne de Bretagne vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5665279543131492, lat: 47.208842556632646 }
    },
    {
      boucle_num: '673',
      libelle: 'Pont de Pornic vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5489384585186128, lat: 47.201374017938825 }
    },
    {
      boucle_num: '989',
      libelle: 'Kennedy vers Ouest',
      observations: null,
      geolocalisation: { lon: -1.54529606512988, lat: 47.2168261858339 }
    },
    {
      boucle_num: '979',
      libelle: 'pont des 3 Continents vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5614005632982, lat: 47.1991586337787 }
    },
    {
      boucle_num: '981',
      libelle: 'Pont Tabarly vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5292929993766662, lat: 47.21342537681631 }
    },
    {
      boucle_num: '980',
      libelle: 'Pont Tabarly vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5295999063801857, lat: 47.213386158515206 }
    },
    {
      boucle_num: '944',
      libelle: 'Magellan vers Est',
      observations: null,
      geolocalisation: { lon: -1.5439240750859649, lat: 47.21038195207655 }
    },
    {
      boucle_num: '701',
      libelle: 'Promenade de Bellevue vers Est',
      observations: 'Releve manuel',
      geolocalisation: { lon: -1.4815791173986774, lat: 47.22870715868075 }
    },
    {
      boucle_num: '681',
      libelle: 'Stalingrad vers est',
      observations: null,
      geolocalisation: { lon: -1.5370432491894714, lat: 47.21890748612357 }
    },
    {
      boucle_num: '679',
      libelle: 'Bd Malakoff vers Gare Sud',
      observations: null,
      geolocalisation: { lon: -1.5359421578632508, lat: 47.21316284797035 }
    },
    {
      boucle_num: '676',
      libelle: 'Pont Willy Brandt vers Beaulieu',
      observations: null,
      geolocalisation: { lon: -1.5365033968187525, lat: 47.21266213415891 }
    },
    {
      boucle_num: '675',
      libelle: 'Pont Haudaudine vers Nord',
      observations: null,
      geolocalisation: { lon: -1.555389444114489, lat: 47.20907608646761 }
    },
    {
      boucle_num: '669',
      libelle: 'De Gaulle sortie Cl\u00e9menceau vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5366316681743837, lat: 47.20359482806785 }
    },
    {
      boucle_num: '666',
      libelle: 'Pont Audibert vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5497189172153978, lat: 47.2083580489973 }
    },
    {
      boucle_num: '995',
      libelle: 'Ceineray vers Ouest',
      observations: null,
      geolocalisation: { lon: -1.552038516262151, lat: 47.22119386459339 }
    },
    {
      boucle_num: '945',
      libelle: 'Magellan vers Ouest',
      observations: null,
      geolocalisation: { lon: -1.5492954525811475, lat: 47.208824293961634 }
    },
    {
      boucle_num: '907',
      libelle: 'Stade vers Est (Bouaye)',
      observations: 'Releve manuel',
      geolocalisation: { lon: -1.6939094454872934, lat: 47.148193005013226 }
    },
    {
      boucle_num: '889',
      libelle: 'Stade vers Ouest (Bouaye)',
      observations: 'Releve manuel',
      geolocalisation: { lon: -1.6937682584273452, lat: 47.14832694239598 }
    },
    {
      boucle_num: '785',
      libelle: '50 Otages Vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5554083448896405, lat: 47.214213965316084 }
    },
    {
      boucle_num: '670',
      libelle: 'Pont de Pirmil vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5440620253453048, lat: 47.200030446852566 }
    },
    {
      boucle_num: '89',
      libelle: 'Coteaux vers Ouest (Pellerin)',
      observations: 'Releve manuel',
      geolocalisation: { lon: -1.767388719318866, lat: 47.205089590298826 }
    },
    {
      boucle_num: '947',
      libelle: 'Bd Malakoff vers Ouest',
      observations: null,
      geolocalisation: { lon: -1.53608563362513, lat: 47.2129329547825 }
    },
    {
      boucle_num: '1042',
      libelle: 'Guy Mollet vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5535174650101056, lat: 47.25219657049761 }
    },
    {
      boucle_num: '997',
      libelle: 'Van Iseghem vers Sud',
      observations: null,
      geolocalisation: { lon: -1.548811760897268, lat: 47.23268018192289 }
    },
    {
      boucle_num: '881',
      libelle: 'Madeleine vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5528042782185094, lat: 47.21153640429157 }
    },
    {
      boucle_num: '880',
      libelle: 'Madeleine vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5527808502938574, lat: 47.211547513955786 }
    },
    {
      boucle_num: '788',
      libelle: '50 Otages Vers Nord',
      observations: null,
      geolocalisation: { lon: -1.555035376121632, lat: 47.219956631104175 }
    },
    {
      boucle_num: '742',
      libelle: 'Philippot vers Est',
      observations: null,
      geolocalisation: { lon: -1.5563430663233755, lat: 47.21165736518504 }
    },
    {
      boucle_num: '680',
      libelle: 'Stalingrad vers ouest',
      observations: null,
      geolocalisation: { lon: -1.5367893510327209, lat: 47.219061513458314 }
    },
    {
      boucle_num: '977',
      libelle: 'pont des 3 Continents vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5614005632982, lat: 47.1991586337787 }
    },
    {
      boucle_num: '987',
      libelle: 'Tremie vers Est',
      observations: null,
      geolocalisation: { lon: -1.54457176311539, lat: 47.2170861332701 }
    },
    {
      boucle_num: '950',
      libelle: 'avenue de la Lib\u00e9ration vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5468218693151887, lat: 47.19261758551086 }
    },
    {
      boucle_num: '744',
      libelle: 'Calvaire vers Est',
      observations: null,
      geolocalisation: { lon: -1.5606018691288568, lat: 47.215489324621586 }
    },
    {
      boucle_num: '700',
      libelle: 'Promenade de Bellevue vers Ouest',
      observations: 'Releve manuel',
      geolocalisation: { lon: -1.4817352181344963, lat: 47.22881445755474 }
    },
    {
      boucle_num: '677',
      libelle: 'Pont Willy Brandt vers Malakoff',
      observations: null,
      geolocalisation: { lon: -1.5363321300724169, lat: 47.212684909912554 }
    },
    {
      boucle_num: '674',
      libelle: 'Pont Haudaudine vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5555717063397219, lat: 47.209096588583456 }
    },
    {
      boucle_num: '665',
      libelle: 'Bonduelle vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5432599939033043, lat: 47.21160939094489 }
    },
    {
      boucle_num: '664',
      libelle: 'Bonduelle vers sud',
      observations: null,
      geolocalisation: { lon: -1.5434019650772974, lat: 47.21156230858751 }
    },
    {
      boucle_num: '948',
      libelle: 'Bd Malakoff vers Est',
      observations: null,
      geolocalisation: { lon: -1.53608563362513, lat: 47.2129329547824 }
    },
    {
      boucle_num: '996',
      libelle: 'Van Iseghem vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5487986994027731, lat: 47.23266720647105 }
    },
    {
      boucle_num: '946',
      libelle: 'Magellan vers Est',
      observations: null,
      geolocalisation: { lon: -1.5493314999763097, lat: 47.208799340994744 }
    },
    {
      boucle_num: '847',
      libelle: 'Entr\u00e9e pont Audibert vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5486490203822572, lat: 47.20717855593781 }
    },
    {
      boucle_num: '787',
      libelle: '50 Otages Vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5550472960683386, lat: 47.219974801673004 }
    },
    {
      boucle_num: '746',
      libelle: 'Chemin de halage Torti\u00e8re vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5495736836872527, lat: 47.23557781772152 }
    },
    {
      boucle_num: '745',
      libelle: 'Calvaire vers Ouest',
      observations: null,
      geolocalisation: { lon: -1.5606340872538647, lat: 47.215557371093816 }
    },
    {
      boucle_num: '743',
      libelle: 'Philippot vers ouest',
      observations: null,
      geolocalisation: { lon: -1.5563937019759015, lat: 47.2117289187902 }
    },
    {
      boucle_num: '1032',
      libelle: 'VN vers Suc\u00e9 sur Erdre',
      observations: 'Releve manuel',
      geolocalisation: { lon: -1.5433372850662073, lat: 47.31479810819578 }
    },
    {
      boucle_num: '959',
      libelle: 'Sorini\u00e8res Vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5421206875803153, lat: 47.160292575285 }
    },
    {
      boucle_num: '949',
      libelle: 'avenue de la Lib\u00e9ration vers Sud',
      observations: null,
      geolocalisation: { lon: -1.546842567007259, lat: 47.192618952694644 }
    },
    {
      boucle_num: '890',
      libelle: 'Pont de Pirmil vers Sud',
      observations: null,
      geolocalisation: { lon: -1.5422919798047263, lat: 47.19812739474562 }
    },
    {
      boucle_num: '786',
      libelle: '50 Otages Vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5553816693267555, lat: 47.214222086752066 }
    },
    {
      boucle_num: '727',
      libelle: 'Pont Tabarly vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5293317342742991, lat: 47.21345667065047 }
    },
    {
      boucle_num: '683',
      libelle: 'pont Anne de Bretagne vers Nord',
      observations: null,
      geolocalisation: { lon: -1.5663860901495563, lat: 47.20889069766999 }
    },
    {
      boucle_num: '668',
      libelle: 'De Gaulle vers sud',
      observations: null,
      geolocalisation: { lon: -1.5369205412444689, lat: 47.20350669597018 }
    },
    {
      boucle_num: '667',
      libelle: 'Entr\u00e9e pont Audibert vers Nord',
      observations: null,
      geolocalisation: { lon: -1.548628245726742, lat: 47.207184415056695 }
    },
    {
      boucle_num: '988',
      libelle: 'Kennedy vers Est',
      observations: null,
      geolocalisation: { lon: -1.54504032024001, lat: 47.2167676867801 }
    }
  ]
};

// Fonction pour transformer le numéro de boucle en un format à 4 chiffres
function createFileName(boucle_num) {
  return String(boucle_num).padStart(4, '0') + ".json";
}

// Parcourir chaque enregistrement et créer un fichier JSON
data.results.forEach(boucle => {
  const boucleInfo = {
    name: boucle.libelle,
    description: '',
    idPdc: parseInt(boucle.boucle_num, 10),
    coordinates: [boucle.geolocalisation.lon, boucle.geolocalisation.lat],
    counts: []
  };

  const jsonString = JSON.stringify(boucleInfo, null, 2);
  const fileName = createFileName(boucle.boucle_num);
  const filePath = path.join(directoryPath, fileName);

  fs.writeFile(filePath, jsonString, err => {
    if (err) throw err;
    console.log(`Le fichier ${fileName} a été enregistré avec succès dans ${directoryPath}!`);
  });
});
