import * as dat from 'dat.gui';

const ratios = {
	minorSecond: 16/15,
	majorSecond: 1.125,
	minorThird: 1.2,
	majorThird: 1.25,
	perfectFourth: 4/3,
	augFourth: 1.414,
	perfectFifth: 1.5,
	minorSixth: 1.6,
	goldenSection: 1.61803398875,
	majorSixth: 5/3,
	minorSeventh: 16/9,
	majorSeventh: 1.875,
	octave: 2,
	majorTenth: 2.5,
	majorEleventh: 8/3,
	majorTwelfth: 3,
	doubleOctave: 4
};

export default function gui(params) {
	global.params = params;
	const gui = new dat.GUI();
	//gui.add(params, 'waveAmplitude', 1, 30);
	//gui.add(params, 'noiseAmplitude', 1, 30);
	//gui.add(params, 'timeScale', 1, 10);
	gui.add(params, 'bars', 0, global.innerWidth/3);
	gui.add(params, 'progress', 0, 100);
	gui.add(params, 'scale', ratios)
	//dat.GUI.toggleHide();

}
