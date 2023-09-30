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
			return `A/C: ${p.accountno}, S/N: ${p.serialno}, ${p.category}`;
		},
		place_type: ['meter'],
		placeholder: 'Account No or S/N',
		zoom: 16,
		limit: 50
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
	},
	attributeTable: {
		rowsPerPage: 50,
		minZoom: 14
	},
	tour: {
		tourGuideOptions: {
			steps: [
				{
					title: 'Welcome to sveltekit watergis template!',
					content: `This tutorial is going to take you around the main features of the application. <br> Let's begin!`,
					order: 1
				},
				{
					title: 'Geospatial analytics tools',
					content: `
							<div style="max-height: 300px; overflow-y: auto">
							Click this button to start analysing the datasets.
							<br><br>
							In the <b>Layers</b> tab, 
							<br>
							<img src="/assets/tutorial/style-switcher.png" height="32px"/>
							firstly you can switch base maps either OSM or aerial from the below select box.
							<br>
							<img src="/assets/tutorial/eye-solid.svg" width="24px"/>
							<br>
							You can also switch layer visibility by clicking this button.
							<br>
							<img src="/assets/tutorial/palette-solid.svg" width="24px"/>
							<br>
							From the above palette button, you can edit layer style as you want.
							<br><br>
							In <b>Advanced</b> tab, there are three main features:
							<br>
							<b>1) measuring tool</b>: 
							<br>
							<img src="/assets/tutorial/measure-tool.png" width="100%"/>
							<br>
							Click "Start measure" button, then click locations on the map to query the distance and altitude.
							<br>
							<br>
							<b>2) routing tool</b>;
							<br>
							<img src="/assets/tutorial/routing-tool.png" width="100%"/>
							<br>
							Click "Start routing" button, then you can calculate the shortest route by clicking on the route on the map with your prefered means of transport.
							<br>
							<br>
							<b>3)isochrone analysis tool</b>.
							<br>
							<img src="/assets/tutorial/isochrone-tool.png" width="100%"/>
							<br>Isochrone is a very powerful tool to estimate contours by certain time or distance by selected transport option. It can be used for some SDG indicator such as "Water access within 30 minute round trip".
							<br>
							<img src="/assets/tutorial/isochrone-example.png" width="100%"/>
							</div>
							`,
					target: '.maplibregl-ctrl-menu',
					order: 2
				},
				{
					title: 'Attribute table tool',
					content: `<div style="max-height: 300px; overflow-y: auto">
							Click this button to start exploring attributes data of selected layer. 
							You can also filter the data by keyword, and sort them, zoom to the select feature.
							<br>
							<img src="/assets/tutorial/attr-table-selectbox.png" width="100%"/>
							<br>
							Firstly, select a layer to show attribute table. The table will show all records within current map extent. Please refresh table if you move map.
							<br>
							<img src="/assets/tutorial/magnifying-glass-plus-solid.svg" width="24px"/>
							<br>
							You can zoom to selected feature by clicking the above button.
							<br>
							<img src="/assets/tutorial/up-down-left-right-solid.svg" width="24px"/>
							<br>
							You can pan to selected feature by clicking the above button.
							</div>`,
					target: '.maplibregl-ctrl-attribute-table',
					order: 3
				},
				{
					title: 'Sharing tool',
					content:
						'This button enables you to copy and share URL of current map with your colleagues.',
					target: '.maplibregl-ctrl-share',
					order: 4
				},
				{
					title: 'Query tool',
					content: `This button enables you to query details information of selected features on the map. If the tool is enabled, you can click the feature on the map to enquiry details information.`,
					target: '.maplibregl-ctrl-identify',
					order: 5
				},
				{
					title: 'Export tool',
					content: `This button enables you to export images with your preferences.<br>You can choose file size, image format (png, jpeg, pdf and svg), and DPI resolution, orientation of the exported image`,
					target: '.maplibregl-ctrl-export',
					order: 6
				},
				{
					title: 'Search features',
					content: `You can search features by typing keywords from the searching box.`,
					target: '.maplibregl-ctrl-geocoder',
					order: 7
				},
				{
					title: 'Area switching tool',
					content: `You can switch the map to the selected area instantly.`,
					target: '.maplibregl-area-switcher',
					order: 8
				},
				{
					title: 'Terrain tool',
					content: `If this is enabled, 3D terrain landscape will be shown. In order to use this, you can tilt the map by holding right-click (mouse) or two fingers (smartphone or tablet)`,
					target: '.maplibregl-ctrl-terrain',
					order: 9
				},
				{
					title: 'GNSS positioning tool',
					content: `GNSS positioning your current location is available by clicking this button.`,
					target: '.maplibregl-ctrl-geolocate',
					order: 10
				}
			],
			rememberStep: true
		},
		tourControlOptions: {
			localStorageKey: `watergis-{url}`
		}
	}
};
