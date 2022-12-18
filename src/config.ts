import type { Config } from './lib/types';

// const basePath = process.env.NODE_ENV === 'production' ? '/watergis' : '';
const basePath = '';

export const config: Config = {
	title: 'Water Supply Map for Nanyuki Water',
	url: 'https://nawasco.co.ke',
	logo: `${basePath}/favicon.png`,
	basePath: basePath,
	// basePath: '',
	// change attribution to yours
	attribution: '©Nanyuki Water and Serwerage Co., Ltd.',
	// change stylefiles URLs to yours
	styles: [
		{
			title: 'Satellite(water)',
			uri: `https://nawasco.github.io/mapbox-stylefiles/unvt/style-aerial-water.json`
		},
		{
			title: 'UNVT Buildings(water)',
			uri: `https://nawasco.github.io/mapbox-stylefiles/unvt/style-buildings-water.json`
		},
		{
			title: 'Satellite(sewer)',
			uri: `https://nawasco.github.io/mapbox-stylefiles/unvt/style-aerial-sewer.json`
		},
		{
			title: 'UNVT Buildings(sewer)',
			uri: `https://nawasco.github.io/mapbox-stylefiles/unvt/style-buildings-sewer.json`
		},
		{
			title: 'UN Vector Tile',
			uri: `https://nawasco.github.io/mapbox-stylefiles/unvt/style.json`
		},
		{
			title: 'UNVT Buildings',
			uri: `https://nawasco.github.io/mapbox-stylefiles/unvt/style-buildings.json`
		}
	],
	// change initial location and zoom level to yours
	center: [37.119039, -0.024493],
	zoom: 13,
	// you can put your geojson file for searching functions
	search: {
		url: 'https://nawasco.github.io/vt/meter.geojson',
		target: ['accountno', 'serialno'],
		format: (p) => {
			const label: string[] = [];
			const targets = ['accountno', 'serialno', 'category'];
			targets.forEach((target) => {
				if (p[target]) {
					let text = p[target];
					switch (target) {
						case 'accountno':
							text = `A/C: ${text}`;
							break;
						case 'serialno':
							text = `S/N: ${text}`;
							break;
						default:
							break;
					}
					label.push(text);
				}
			});
			return label.length > 0 ? label.join(', ') : '';
		},
		place_type: ['meter'],
		placeholder: 'Account No or S/N',
		zoom: 16,
		maxItems: 50,
		sortItems: (a, b) => {
			return a.accountno - b.accountno;
		},
		matchAllKeywords: false,
		sortByMatchedKeywords: true
	},
	// please specify layers' name for showing popup with attributes table.
	popup: {
		target: [
			'pipeline',
			'sewerline',
			'meter',
			'kiosks',
			'borehole',
			'tank',
			'booster-pump',
			'chambers',
			'manholes',
			'pg-building'
		]
	},
	// please specify layer name for showing in legend panel.
	legend: {
		targets: {
			cadastral: 'Cadastral',
			'cadastral-annotation': 'Cadastral Label',
			blocks: 'Blocks',
			'blocks-annotation': 'Blocks Label',
			waterworks: 'Waterworks',
			pipeline: 'Pipeline',
			pipeline_annotation: 'Pipeline Label',
			sewerline: 'Sewer Pipeline',
			sewerline_annotation: 'Sewer Pipeline Label',
			meter: 'Consumer Meter',
			kiosks: 'Water Kiosk',
			borehole: 'Borehole',
			tank: 'Tank',
			'booster-pump': 'Booster Pump',
			chambers: 'Chamber',
			manholes: 'Manhole'
		}
	},
	elevation: {
		url: 'https://nawasco.github.io/ke-central-terrain/tiles/{z}/{x}/{y}.png',
		options: {
			tileSize: 512,
			font: ['Roboto Medium'],
			fontSize: 12,
			fontHalo: 1,
			mainColor: '#263238',
			haloColor: '#fff',
			units: 'kilometers'
		}
	},
	valhalla: {
		url: 'https://valhalla.water-gis.com',
		isoChroneOptions: {
			Contours: [
				{
					time: 3,
					distance: 1,
					color: 'ff0000'
				},
				{
					time: 5,
					distance: 2,
					color: 'ffff00'
				},
				{
					time: 10,
					distance: 3,
					color: '0000ff'
				},
				{
					time: 15,
					distance: 4,
					color: 'ff00ff'
				}
			],
			isochrone: {
				font: ['Roboto Medium'],
				fontSize: 14,
				fontHalo: 3,
				fontColor: '#263238',
				fontHaloColor: '#fff'
			}
		},
		routingOptions: {
			font: ['Roboto Medium'],
			fontSize: 14,
			fontHalo: 3,
			fontColor: '#263238',
			fontHaloColor: '#fff',
			iconImage: 'marker',
			iconSize: 1
		}
	},
	terrain: {
		source: 'nanyuki-dem',
		exaggeration: 1
	}
};
